# AL NAJAFI TRADING — Website

한국 → 중동 자동차/부품 수출 회사 소개 사이트입니다. 빌드 도구 없이 정적 파일로만 동작하므로,
어떤 정적 호스팅(예: GitHub Pages, Netlify, Vercel, 일반 웹호스팅)에든 폴더째 올리면 바로 배포됩니다.

## 폴더 구조
```
al-najafi/
├── index.html        구조(마크업)만 담당
├── css/styles.css    디자인 — 화이트 + 블루 테마
├── js/data.js        ★ 번역 텍스트 + 갤러리 사진 목록 (여기만 고치면 됨)
├── js/main.js        동작 — 언어 전환, 갤러리, 라이트박스
├── images/           사진 파일 (현재는 임시 플레이스홀더)
└── README.md
```

현재 갤러리는 전달해주신 실제 사진(차량/부품/사업장)으로 채워져 있습니다.
- **차량(vehicles)**: 보유 차량 `veh-yard-*.jpg`, 수출 적재 `veh-export-*.jpg`
- **부품(parts)**: `part-1.jpg` ~ `part-30.jpg` (1:1 썸네일, 흰 배경 위 전체 표시)
- **사업장(facility)**: `fac-1.jpg` ~ `fac-8.jpg`
- 히어로 `hero.jpg`, 소개 `about.jpg`

## 1) 사진 추가/교체하는 법
1. 새 사진을 `images/` 폴더에 넣습니다. (jpg, png, webp 모두 가능)
2. `js/data.js`의 `GALLERY` 안에서 해당 항목의 `src`를 새 파일명으로 바꾸거나, 줄을 추가합니다.

예) 보유 차량 사진을 추가하려면:
```js
yard: {
    label: { en: "At Our Yard", ko: "보유 차량", ar: "في ساحتنا" },
    items: [
        { src: "images/veh-yard-1.jpg", alt: "..." },
        { src: "images/veh-yard-5.jpg", alt: "신규 차량" },  // ← 줄만 추가하면 갤러리에 자동 표시
    ]
}
```
> HTML을 건드릴 필요 없이 `data.js` 한 곳만 수정하면 갤러리 그리드·라이트박스에 모두 반영됩니다.

히어로/소개/제품 카드의 대표 이미지는 `index.html`에서 `images/hero.jpg`, `images/about.jpg`,
`images/veh-yard-3.jpg`, `images/part-16.jpg`, `images/fac-1.jpg` 경로를 바꾸면 됩니다.

## 2) 텍스트 / 연락처 수정
- 모든 문구는 `js/data.js`의 `I18N` 객체에 영어(en)·한국어(ko)·아랍어(ar)로 들어 있습니다.
- 연락처는 명함 기준으로 반영되어 있습니다:
  - 주소: 경기도 김포시 대곶면 율생중앙로 52번길 172-15
  - 전화: +82-10-8099-0673
- **확인 필요**: 세 번째 연락 항목을 **WhatsApp**(`wa.me/821080990673`)으로 넣어두었습니다.
  WhatsApp을 쓰지 않으시면 `index.html`의 해당 항목과 footer 링크를 이메일/카카오 등으로 바꿔주세요.
- 통계 수치(1,200대 / 15개국 / 10년 / 98%)와 같은 마케팅 문구는 예시값이니 실제 수치로 교체 권장.

> ⚠️ **사업자등록증(`사업자등록증 260409.pdf`)은 개인정보(등록번호·대표자명)가 있어 웹사이트에 넣지 않았습니다.**

## 3) 로컬에서 미리보기
브라우저 보안 정책상 `index.html`을 더블클릭하면 일부 기능이 막힐 수 있어, 간단한 로컬 서버 실행을 권장합니다:
```bash
cd al-najafi
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 4) 기존 사이트와 다른 점
- **테마**: 다크 블랙+골드 → 화이트+블루 (모던/신뢰)
- **구조**: 1개 파일에 전부 인라인 → HTML/CSS/JS/데이터 분리
- **갤러리**: HTML과 JS에 사진목록 중복 → `data.js` 한 곳에서 관리 (중복 제거)
