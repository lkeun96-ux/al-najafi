/* ============================================================
   AL NAJAFI TRADING — interactions & rendering
   ============================================================ */
(function () {
    "use strict";

    /* ---------- Language ---------- */
    const DEFAULT_LANG = "en";
    let currentLang = DEFAULT_LANG;

    function applyLang(lang) {
        const dict = I18N[lang];
        if (!dict) return;
        currentLang = lang;

        document.documentElement.lang = lang;
        document.documentElement.dir = dict.dir;
        document.body.setAttribute("dir", dict.dir);

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        document.querySelectorAll(".lang-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
        });

        // Re-render gallery labels/titles that depend on language
        renderGalleryTabsLabels();
    }

    /* ---------- Gallery rendering ---------- */
    // Flat lookup of every image list, keyed for the lightbox:
    //   "parts"        -> [src, src, ...]
    //   "vehicles:sedan" -> [src, ...]
    const lightboxSets = {};

    function srcList(items) { return items.map((it) => it.src); }

    function galleryItemHTML(item, index) {
        const n = String(index + 1).padStart(2, "0");
        return (
            '<div class="gallery-item" data-index="' + index + '">' +
                '<img src="' + item.src + '" alt="' + item.alt + '" loading="lazy">' +
                '<span class="gallery-item-number">' + n + "</span>" +
            "</div>"
        );
    }

    function buildModals() {
        const root = document.getElementById("gallery-modals");
        let html = "";

        Object.keys(GALLERY).forEach((key) => {
            const g = GALLERY[key];
            html += '<div class="gallery-modal" id="modal-' + key + '">';
            html +=   '<div class="gallery-panel">';
            html +=     '<div class="gallery-header">';
            html +=       '<h2 class="gallery-title" data-gtitle="' + key + '"></h2>';
            html +=       '<button class="gallery-close" data-close="' + key + '" aria-label="Close">&times;</button>';
            html +=     "</div>";

            if (g.type === "tabs") {
                const groupKeys = Object.keys(g.groups);
                html += '<div class="gallery-tabs">';
                groupKeys.forEach((gk, i) => {
                    html += '<button class="gallery-tab' + (i === 0 ? " active" : "") +
                            '" data-tab="' + key + ":" + gk + '" data-glabel="' + key + ":" + gk + '"></button>';
                });
                html += "</div>";

                groupKeys.forEach((gk, i) => {
                    const setKey = key + ":" + gk;
                    lightboxSets[setKey] = srcList(g.groups[gk].items);
                    html += '<div class="gallery-grid tab-grid' + (i === 0 ? " active" : "") +
                            '" data-grid="' + setKey + '" ' + (i === 0 ? "" : 'style="display:none"') + ">";
                    g.groups[gk].items.forEach((it, idx) => { html += galleryItemHTML(it, idx); });
                    html += "</div>";
                });
            } else {
                lightboxSets[key] = srcList(g.items);
                html += '<div class="gallery-grid' + (g.square ? " square" : "") + '" data-grid="' + key + '">';
                g.items.forEach((it, idx) => { html += galleryItemHTML(it, idx); });
                html += "</div>";
            }

            html +=   "</div>"; // panel
            html += "</div>";   // modal
        });

        root.innerHTML = html;
        renderGalleryTabsLabels();
    }

    function renderGalleryTabsLabels() {
        const dict = I18N[currentLang];
        // Modal titles
        document.querySelectorAll("[data-gtitle]").forEach((el) => {
            const key = el.getAttribute("data-gtitle");
            const name = GALLERY[key].title[currentLang] || GALLERY[key].title.en;
            el.innerHTML = "<strong>" + name + "</strong> " + (dict.gallery_suffix || "");
        });
        // Tab labels
        document.querySelectorAll("[data-glabel]").forEach((el) => {
            const [key, gk] = el.getAttribute("data-glabel").split(":");
            const lab = GALLERY[key].groups[gk].label;
            el.textContent = lab[currentLang] || lab.en;
        });
    }

    /* ---------- Modal open/close ---------- */
    function openModal(key) {
        const m = document.getElementById("modal-" + key);
        if (!m) return;
        m.classList.add("active");
        document.body.style.overflow = "hidden";
    }
    function closeModal(key) {
        const m = document.getElementById("modal-" + key);
        if (!m) return;
        m.classList.remove("active");
        document.body.style.overflow = "";
    }
    function closeAllModals() {
        document.querySelectorAll(".gallery-modal").forEach((m) => m.classList.remove("active"));
        document.body.style.overflow = "";
    }

    /* ---------- Lightbox ---------- */
    let lbSet = [];
    let lbIndex = 0;
    const lightbox = () => document.getElementById("lightbox");

    function openLightbox(setKey, index) {
        lbSet = lightboxSets[setKey] || [];
        lbIndex = index;
        document.getElementById("lightbox-img").src = lbSet[lbIndex];
        lightbox().classList.add("active");
    }
    function closeLightbox() { lightbox().classList.remove("active"); }
    function navLightbox(dir) {
        if (!lbSet.length) return;
        lbIndex = (lbIndex + dir + lbSet.length) % lbSet.length;
        document.getElementById("lightbox-img").src = lbSet[lbIndex];
    }

    /* ---------- Wire up everything ---------- */
    document.addEventListener("DOMContentLoaded", function () {
        buildModals();
        applyLang(DEFAULT_LANG);

        // Language buttons
        document.querySelectorAll(".lang-btn").forEach((btn) => {
            btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
        });

        // Mobile menu
        const menuBtn = document.querySelector(".mobile-menu-btn");
        const navLinks = document.querySelector(".nav-links");
        if (menuBtn) menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));

        // Nav shadow on scroll
        const nav = document.querySelector(".nav");
        window.addEventListener("scroll", () => {
            nav.classList.toggle("scrolled", window.scrollY > 10);
        });

        // Smooth-scroll for in-page anchors + close mobile menu
        document.querySelectorAll('a[href^="#"]').forEach((a) => {
            a.addEventListener("click", (e) => {
                const target = document.querySelector(a.getAttribute("href"));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth" });
                    navLinks.classList.remove("active");
                }
            });
        });

        // Open gallery from product cards
        document.querySelectorAll("[data-open-gallery]").forEach((el) => {
            el.addEventListener("click", () => openModal(el.getAttribute("data-open-gallery")));
        });

        // Delegated clicks inside the modal container
        document.getElementById("gallery-modals").addEventListener("click", (e) => {
            const closeBtn = e.target.closest("[data-close]");
            if (closeBtn) { closeModal(closeBtn.getAttribute("data-close")); return; }

            const tab = e.target.closest("[data-tab]");
            if (tab) {
                const setKey = tab.getAttribute("data-tab");
                const modal = tab.closest(".gallery-panel");
                modal.querySelectorAll(".gallery-tab").forEach((t) => t.classList.remove("active"));
                tab.classList.add("active");
                modal.querySelectorAll(".tab-grid").forEach((grid) => {
                    const on = grid.getAttribute("data-grid") === setKey;
                    grid.classList.toggle("active", on);
                    grid.style.display = on ? "grid" : "none";
                });
                return;
            }

            const item = e.target.closest(".gallery-item");
            if (item) {
                const grid = item.closest(".gallery-grid");
                openLightbox(grid.getAttribute("data-grid"), parseInt(item.getAttribute("data-index"), 10));
                return;
            }

            // click outside the panel closes the modal
            if (e.target.classList.contains("gallery-modal")) {
                e.target.classList.remove("active");
                document.body.style.overflow = "";
            }
        });

        // Lightbox controls
        document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
        document.getElementById("lightbox-prev").addEventListener("click", () => navLightbox(-1));
        document.getElementById("lightbox-next").addEventListener("click", () => navLightbox(1));
        lightbox().addEventListener("click", (e) => { if (e.target === lightbox()) closeLightbox(); });

        // Keyboard
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                if (lightbox().classList.contains("active")) closeLightbox();
                else closeAllModals();
            }
            if (lightbox().classList.contains("active")) {
                if (e.key === "ArrowLeft") navLightbox(currentLang === "ar" ? 1 : -1);
                if (e.key === "ArrowRight") navLightbox(currentLang === "ar" ? -1 : 1);
            }
        });

        // Scroll reveal
        const io = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    });
})();
