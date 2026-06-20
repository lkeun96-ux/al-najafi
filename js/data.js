/* ============================================================
   AL NAJAFI TRADING — Site data (single source of truth)
   - GALLERY : edit these arrays to add/remove photos.
                Just drop the image in /images and add a line.
   - I18N    : UI text for English / 한국어 / العربية
   ============================================================ */

/* ---------- Gallery data ----------
   type "tabs"  -> grouped into tabs (Vehicles)
   type "flat"  -> single grid (Parts, Facility)
   Each item: { src, alt }
*/
const GALLERY = {
    vehicles: {
        type: "tabs",
        title: { en: "Vehicle", ko: "차량", ar: "السيارات" },
        groups: {
            yard: {
                label: { en: "At Our Yard", ko: "보유 차량", ar: "في ساحتنا" },
                items: [
                    { src: "images/veh-yard-1.jpg", alt: "Korean used vehicles at the yard" },
                    { src: "images/veh-yard-2.jpg", alt: "Used vehicles ready for export" },
                    { src: "images/veh-yard-3.jpg", alt: "Sedans and SUVs in stock" },
                    { src: "images/veh-yard-4.jpg", alt: "Vehicle inventory" }
                ]
            },
            export: {
                label: { en: "Loaded for Export", ko: "수출 적재", ar: "جاهزة للتصدير" },
                items: [
                    { src: "images/veh-export-1.jpg", alt: "Vehicles loaded in export container" },
                    { src: "images/veh-export-2.jpg", alt: "SUV loaded in container" },
                    { src: "images/veh-export-3.jpg", alt: "Vehicle secured for shipping" },
                    { src: "images/veh-export-4.jpg", alt: "Vans on transport carrier" },
                    { src: "images/veh-export-5.jpg", alt: "Car carrier trucks" }
                ]
            }
        }
    },
    parts: {
        type: "flat",
        title: { en: "Auto Parts", ko: "자동차 부품", ar: "قطع الغيار" },
        items: [
            { src: "images/part-1.jpg", alt: "Used engines on warehouse shelves" },
            { src: "images/part-2.jpg", alt: "Engines and parts loaded in container" },
            { src: "images/part-3.jpg", alt: "Engines and drivetrain parts" },
            { src: "images/part-4.jpg", alt: "Warehouse stock of engines" },
            { src: "images/part-5.jpg", alt: "Auto parts in warehouse" },
            { src: "images/part-6.jpg", alt: "Bumpers and body parts" },
            { src: "images/part-7.jpg", alt: "Bumpers loaded for shipping" },
            { src: "images/part-8.jpg", alt: "Body panels at the yard" },
            { src: "images/part-9.jpg", alt: "Boxed parts on pallet" },
            { src: "images/part-10.jpg", alt: "Container packed with parts" },
            { src: "images/part-11.jpg", alt: "Packed auto parts boxes" },
            { src: "images/part-12.jpg", alt: "Palletized parts ready to ship" },
            { src: "images/part-13.jpg", alt: "Boxed parts loaded in container" },
            { src: "images/part-14.jpg", alt: "Auto parts at the yard" },
            { src: "images/part-15.jpg", alt: "Parts warehouse" }
        ]
    },
    facility: {
        type: "flat",
        title: { en: "Our Facility", ko: "사업장", ar: "منشأتنا" },
        items: [
            { src: "images/fac-1.jpg", alt: "AL NAJAFI Trading signboard" },
            { src: "images/fac-2.jpg", alt: "Facility entrance gate" },
            { src: "images/fac-3.jpg", alt: "Warehouse with forklift" },
            { src: "images/fac-4.jpg", alt: "Export containers at the yard" },
            { src: "images/fac-5.jpg", alt: "Truck and containers" },
            { src: "images/fac-6.jpg", alt: "Company building" },
            { src: "images/fac-7.jpg", alt: "Office — Korea & Iraq" },
            { src: "images/fac-8.jpg", alt: "Meeting room" }
        ]
    }
};

/* ---------- Translations ---------- */
const I18N = {
    en: {
        dir: "ltr",
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_products: "Inventory", nav_contact: "Contact",
        hero_badge: "Korea → Middle East Vehicle & Parts Export",
        hero_title: "Reliable Korean Vehicles & Parts, <strong>Delivered Worldwide</strong>",
        hero_desc: "AL NAJAFI TRADING exports carefully inspected Korean used vehicles and genuine auto parts from Gimpo, Korea to clients across the Middle East — transparent, on time, every time.",
        hero_cta_primary: "Request a Quote",
        hero_cta_ghost: "View Inventory",
        hero_float_label: "On-time delivery",
        stat1_num: "1,200", stat1_plus: "+", stat1_label: "Vehicles shipped",
        stat2_num: "15", stat2_plus: "+", stat2_label: "Destination countries",
        stat3_num: "10", stat3_plus: "+", stat3_label: "Years of experience",
        stat4_num: "98", stat4_plus: "%", stat4_label: "Repeat customers",
        about_eyebrow: "About Us",
        about_title: "A Trusted Export Partner Built on <strong>Transparency</strong>",
        about_p1: "AL NAJAFI TRADING is a Korea-based export company in Gimpo, specializing in quality-inspected used vehicles and genuine automotive parts for the Middle East market.",
        about_p2: "From sourcing and inspection to packing, container loading, shipping and customs, we manage the full journey — so our clients receive exactly what they expect, with no surprises.",
        about_f1: "Quality inspected", about_f2: "Genuine parts", about_f3: "Container loading & shipping", about_f4: "Fair, clear pricing",
        about_badge_t: "Years",
        services_eyebrow: "What We Do",
        services_title: "End-to-End <strong>Export Services</strong>",
        services_desc: "Everything you need to import Korean vehicles and parts with confidence.",
        s1_title: "Used Vehicles", s1_desc: "Hand-picked Korean sedans, SUVs, vans and trucks, each inspected before export.",
        s2_title: "Genuine Auto Parts", s2_desc: "Engines, bumpers, body panels and OEM parts for all major Korean brands.",
        s3_title: "Shipping & Customs", s3_desc: "Full logistics — container loading, documentation, customs clearance and tracking to your port.",
        banner_small: "Beyond simply shipping cars,",
        banner_big: "We build lasting trust between Korea and the Middle East.",
        banner_text: "Every vehicle and every part is inspected, documented and shipped with the same promise — exactly what you ordered, delivered on time.",
        products_eyebrow: "Our Inventory",
        products_title: "Browse Our <strong>Collection</strong>",
        products_desc: "Click a category to open the full photo gallery.",
        p1_tag: "Vehicles", p1_title: "Used Vehicles", p1_desc: "Korean sedans, SUVs, vans and trucks ready for export.",
        p1_f1: "Sedans", p1_f2: "SUVs", p1_f3: "Vans & Trucks", p1_view: "Open gallery",
        p2_tag: "Parts", p2_title: "Auto Parts", p2_desc: "Engines, bumpers, body panels and genuine components.",
        p2_f1: "Engines", p2_f2: "Body", p2_f3: "Bumpers", p2_view: "Open gallery",
        p3_tag: "Operations", p3_title: "Our Facility", p3_desc: "Our Gimpo warehouse, yard and container loading in action.",
        p3_f1: "Warehouse", p3_f2: "Yard", p3_f3: "Loading", p3_view: "Open gallery",
        contact_eyebrow: "Get in Touch",
        contact_title: "Let's Talk About Your <strong>Next Shipment</strong>",
        contact_desc: "Tell us what you're looking for and we'll get back to you quickly.",
        contact_loc: "Location", contact_loc_text: "172-15, Yulsaeng-jungang-ro 52beon-gil<br>Daegot-myeon, Gimpo-si, Gyeonggi-do, Korea",
        contact_phone: "Phone", contact_whatsapp: "WhatsApp",
        gallery_suffix: "Gallery",
        footer_desc: "Your trusted partner for Korean used vehicle and auto parts export to the Middle East.",
        footer_nav: "Navigation", footer_services: "Services", footer_contact: "Contact",
        footer_l_vehicles: "Vehicles", footer_l_parts: "Parts", footer_l_logistics: "Logistics",
        footer_rights: "AL NAJAFI TRADING. All rights reserved."
    },
    ko: {
        dir: "ltr",
        nav_home: "홈", nav_about: "회사소개", nav_services: "서비스", nav_products: "재고", nav_contact: "문의",
        hero_badge: "한국 → 중동 자동차·부품 수출",
        hero_title: "중동 전역으로 수출하는,<br><strong>믿을 수 있는 한국 차량과 부품</strong>",
        hero_desc: "알나자피트레이딩은 김포에서 꼼꼼히 검수한 한국 중고차와 정품 부품을 중동 전역의 고객에게 수출합니다.",
        hero_cta_primary: "견적 요청",
        hero_cta_ghost: "재고 보기",
        hero_float_label: "정시 배송",
        stat1_num: "1,200", stat1_plus: "+", stat1_label: "수출 차량",
        stat2_num: "15", stat2_plus: "+", stat2_label: "수출 국가",
        stat3_num: "10", stat3_plus: "+", stat3_label: "년 경력",
        stat4_num: "98", stat4_plus: "%", stat4_label: "재구매 고객",
        about_eyebrow: "회사소개",
        about_title: "<strong>투명함</strong>을 바탕으로 한 신뢰받는 수출 파트너",
        about_p1: "알나자피트레이딩은 경기도 김포에 위치한 수출 전문 기업으로, 품질 검수를 마친 중고차와 정품 자동차 부품을 중동 시장에 공급합니다.",
        about_p2: "차량·부품 소싱과 검수부터 포장, 컨테이너 적재, 선적, 통관까지 전 과정을 직접 관리하여 고객이 기대한 그대로 — 예상치 못한 변수 없이 — 받아보실 수 있도록 합니다.",
        about_f1: "품질 검수", about_f2: "정품 부품", about_f3: "컨테이너 적재·선적", about_f4: "투명한 가격",
        about_badge_t: "년 경력",
        services_eyebrow: "주요 서비스",
        services_title: "원스톱 <strong>수출 서비스</strong>",
        services_desc: "한국 차량과 부품을 안심하고 수입하는 데 필요한 모든 것.",
        s1_title: "중고차", s1_desc: "엄선한 한국산 세단·SUV·승합·트럭. 수출 전 검수를 거칩니다.",
        s2_title: "정품 자동차 부품", s2_desc: "엔진, 범퍼, 바디 패널 및 주요 한국 브랜드 OEM 부품.",
        s3_title: "선적 & 통관", s3_desc: "컨테이너 적재, 서류, 통관, 추적까지 — 항구 도착 전 과정 물류를 처리합니다.",
        banner_small: "단순히 차를 파는 것을 넘어,",
        banner_big: "한국과 중동을 잇는 신뢰의 다리가 되겠습니다.",
        banner_text: "모든 차량과 부품을 직접 검수하고 서류화하여, 주문하신 그대로 약속한 날짜에 보내드립니다.",
        products_eyebrow: "보유 재고",
        products_title: "<strong>컬렉션</strong> 둘러보기",
        products_desc: "카테고리를 클릭하면 전체 사진 갤러리가 열립니다.",
        p1_tag: "차량", p1_title: "중고차", p1_desc: "수출 준비를 마친 한국산 세단·SUV·승합·트럭.",
        p1_f1: "세단", p1_f2: "SUV", p1_f3: "승합·트럭", p1_view: "갤러리 열기",
        p2_tag: "부품", p2_title: "자동차 부품", p2_desc: "엔진, 범퍼, 바디 패널 등 정품 부품.",
        p2_f1: "엔진", p2_f2: "외장", p2_f3: "범퍼", p2_view: "갤러리 열기",
        p3_tag: "운영", p3_title: "사업장", p3_desc: "김포 창고와 야적장, 컨테이너 적재 현장.",
        p3_f1: "창고", p3_f2: "야적장", p3_f3: "적재", p3_view: "갤러리 열기",
        contact_eyebrow: "문의하기",
        contact_title: "다음 <strong>선적</strong>을 함께 논의하세요",
        contact_desc: "찾으시는 차량이나 부품을 알려주시면 빠르게 회신드립니다.",
        contact_loc: "주소", contact_loc_text: "경기도 김포시 대곶면<br>율생중앙로 52번길 172-15",
        contact_phone: "전화", contact_whatsapp: "왓츠앱",
        gallery_suffix: "갤러리",
        footer_desc: "중동으로의 한국 중고차·자동차 부품 수출, 믿을 수 있는 파트너.",
        footer_nav: "바로가기", footer_services: "서비스", footer_contact: "문의",
        footer_l_vehicles: "차량", footer_l_parts: "부품", footer_l_logistics: "물류",
        footer_rights: "알나자피트레이딩. All rights reserved."
    },
    ar: {
        dir: "rtl",
        nav_home: "الرئيسية", nav_about: "من نحن", nav_services: "الخدمات", nav_products: "المخزون", nav_contact: "اتصل بنا",
        hero_badge: "تصدير السيارات وقطع الغيار من كوريا إلى الشرق الأوسط",
        hero_title: "سيارات وقطع غيار كورية موثوقة، <strong>تُشحن إلى كل مكان</strong>",
        hero_desc: "تُصدّر شركة النجفي للتجارة، ومقرّها مدينة جيمبو الكورية، سيارات مستعملة وقطع غيار أصلية مفحوصة بعناية إلى عملائها في جميع أنحاء الشرق الأوسط، بكل شفافية وفي الوقت المحدّد دائمًا.",
        hero_cta_primary: "اطلب عرض سعر",
        hero_cta_ghost: "تصفح المخزون",
        hero_float_label: "تسليم في الوقت المحدد",
        stat1_num: "1,200", stat1_plus: "+", stat1_label: "سيارة مشحونة",
        stat2_num: "15", stat2_plus: "+", stat2_label: "دولة وجهة",
        stat3_num: "10", stat3_plus: "+", stat3_label: "سنوات خبرة",
        stat4_num: "98", stat4_plus: "%", stat4_label: "عملاء متكررون",
        about_eyebrow: "من نحن",
        about_title: "شريك تصدير موثوق قائم على <strong>الشفافية</strong>",
        about_p1: "شركة النجفي للتجارة شركة تصدير مقرها مدينة جيمبو في كوريا، متخصصة في السيارات المستعملة المفحوصة وقطع الغيار الأصلية لسوق الشرق الأوسط.",
        about_p2: "من التوريد والفحص إلى التغليف وتحميل الحاويات والشحن والتخليص الجمركي، نتولى الرحلة الكاملة ليحصل عملاؤنا على ما يتوقعونه تمامًا دون أي مفاجآت.",
        about_f1: "فحص الجودة", about_f2: "قطع أصلية", about_f3: "تحميل الحاويات والشحن", about_f4: "أسعار واضحة",
        about_badge_t: "سنوات",
        services_eyebrow: "ماذا نقدم",
        services_title: "خدمات تصدير <strong>متكاملة</strong>",
        services_desc: "كل ما تحتاجه لاستيراد السيارات والقطع الكورية بثقة.",
        s1_title: "سيارات مستعملة", s1_desc: "سيارات سيدان ودفع رباعي وحافلات صغيرة وشاحنات كورية مختارة، مفحوصة قبل التصدير.",
        s2_title: "قطع غيار أصلية", s2_desc: "محركات ومصدّات وألواح هيكل وقطع OEM لجميع الماركات الكورية الرئيسية.",
        s3_title: "الشحن والجمارك", s3_desc: "لوجستيات كاملة — تحميل الحاويات والمستندات والتخليص والتتبع حتى مينائك.",
        banner_small: "أبعد من مجرد شحن السيارات،",
        banner_big: "نبني جسرًا من الثقة بين كوريا والشرق الأوسط.",
        banner_text: "نفحص كل سيارة وكل قطعة ونوثّقها ونشحنها بالوعد نفسه — تمامًا كما طلبت، وفي الوقت المحدّد.",
        products_eyebrow: "مخزوننا",
        products_title: "تصفح <strong>مجموعتنا</strong>",
        products_desc: "انقر على فئة لفتح معرض الصور الكامل.",
        p1_tag: "سيارات", p1_title: "سيارات مستعملة", p1_desc: "سيارات سيدان ودفع رباعي وحافلات وشاحنات كورية جاهزة للتصدير.",
        p1_f1: "سيدان", p1_f2: "دفع رباعي", p1_f3: "حافلات وشاحنات", p1_view: "افتح المعرض",
        p2_tag: "قطع غيار", p2_title: "قطع الغيار", p2_desc: "محركات ومصدّات وألواح هيكل وقطع أصلية.",
        p2_f1: "محركات", p2_f2: "الهيكل", p2_f3: "مصدّات", p2_view: "افتح المعرض",
        p3_tag: "العمليات", p3_title: "منشأتنا", p3_desc: "مستودعنا وساحتنا في جيمبو وتحميل الحاويات.",
        p3_f1: "المستودع", p3_f2: "الساحة", p3_f3: "التحميل", p3_view: "افتح المعرض",
        contact_eyebrow: "تواصل معنا",
        contact_title: "لنتحدث عن <strong>شحنتك القادمة</strong>",
        contact_desc: "أخبرنا بما تبحث عنه وسنعاود التواصل معك بسرعة.",
        contact_loc: "الموقع", contact_loc_text: "172-15, Yulsaeng-jungang-ro 52beon-gil<br>Daegot-myeon, Gimpo-si, Gyeonggi-do, Korea",
        contact_phone: "الهاتف", contact_whatsapp: "واتساب",
        gallery_suffix: "معرض",
        footer_desc: "شريكك الموثوق لتصدير السيارات الكورية المستعملة وقطع الغيار إلى الشرق الأوسط.",
        footer_nav: "التنقل", footer_services: "الخدمات", footer_contact: "اتصل بنا",
        footer_l_vehicles: "سيارات", footer_l_parts: "قطع غيار", footer_l_logistics: "الخدمات اللوجستية",
        footer_rights: "النجفي للتجارة. جميع الحقوق محفوظة."
    }
};
