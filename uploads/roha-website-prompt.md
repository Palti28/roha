# 🎨 Prompt: Generate Website Roha Design

> **Cara pakai:** Copy seluruh isi file ini, paste ke Claude (Claude Code direkomendasikan untuk hasil terbaik karena bisa generate banyak file sekaligus). Sesuaikan bagian `[BRACKETS]` dengan informasi kamu sebelum di-submit.

---

## ROLE & CONTEXT

Kamu adalah senior frontend designer & developer yang akan membangun website portfolio untuk **Roha Design**, sebuah studio desain digital kecil yang fokus pada UI/UX, web development, dan jualan produk digital (template, UI kit).

Bangun website lengkap dengan **HTML, CSS, dan JavaScript murni** (vanilla, tanpa framework seperti React, Vue, atau Next.js) supaya pemilik website mudah modifikasi sendiri tanpa setup tool tambahan. Setiap halaman jadi file HTML terpisah, CSS dipisah jadi file global + per-page kalau perlu, dan JS minimal hanya untuk interaktivitas yang dibutuhkan.

---

## BRAND IDENTITY (WAJIB DIIKUTI PERSIS)

### Filosofi & Voice
- **Nama "Roha"** = Bahasa Batak Toba untuk *hati* — perpaduan rasa, pikir, dan niat.
- **Positioning brand**: *"a quiet kind of warm"* — tenang di permukaan, terpikirkan di dalam.
- **Personality**: Hangat, terpikirkan, confident, dry humor. Bukan loud, bukan corporate, bukan childish.
- **Audience**: Founder, indie maker, dan startup di Indonesia/SEA.

### Tone of Voice Copywriting
- Bahasa **Indonesia** natural (bukan formal kaku).
- Istilah teknis tetap English (UX, UI, landing page, sprint, retainer, design system).
- Boleh dry humor di CTA, error message, 404 page — tapi jangan lebay.
- **HINDARI kata generic ini**: "solusi terbaik", "profesional", "premium", "terpercaya", "kami siap membantu".
- **PAKAI kata seperti**: "kami kerjakan", "kami kirim", "yang sudah kami buat", "yang kami percaya".

### Color Palette (CSS Variables — pakai persis ini)
```css
:root {
  --terracotta: #C9583B;        /* Primary */
  --terracotta-soft: #E07B5C;   /* Hover */
  --clay: #7A2E1B;              /* Deep accent */
  --sand: #E8D9BE;              /* Surface */
  --cream: #F6EFE0;             /* Surface */
  --paper: #FBF6EA;             /* Main background */
  --ink: #221512;               /* Type color */
  --mustard: #D8A23F;           /* Small accent */
  --sage: #6B7A5A;              /* Small accent */
  --rule: rgba(34,21,18,.12);
  --rule-strong: rgba(34,21,18,.22);
}
```

**Aturan rasio pemakaian warna (penting!):**
- Paper 55% (background utama) · Cream 18% · Terracotta 14% · Ink 8% · Mustard 3% · Sage 2%
- Terracotta = aksen, BUKAN dominan. Jangan dipakai sebagai background besar kecuali di section CTA.
- Mustard & sage = bumbu kecil, jangan jadi makanan utama.

### Typography (pakai Google Fonts)
Import di setiap HTML:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Geist:wght@300..700&family=Geist+Mono:wght@400..600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

**Stack:**
- **Bricolage Grotesque** → Display, hero headlines, section titles. Weight 500-600. Letter-spacing tight (-2% s/d -4%).
- **Geist** → Body, UI labels, paragraph. Weight 400/500/600. Open by default.
- **Instrument Serif (italic only)** → Untuk tonal break atau emphasis tertentu (jangan dipakai banyak). Color terracotta.
- **Geist Mono** → Eyebrow labels, captions, metadata, ALL-CAPS small text. Letter-spacing +12% s/d +14%.

**Type scale:**
| Role | Font | Size | Line-height | Tracking |
|------|------|------|-------------|----------|
| Hero | Bricolage | clamp(80px, 14vw, 200px) | 0.86 | -4% |
| H1 | Bricolage | 64px | 60px | -3% |
| H2 | Bricolage | clamp(40px, 6vw, 72px) | 1.1 | -2% |
| H3 | Geist | 24px | 32px | 0 |
| Body L | Geist | 18px | 28px | +1% |
| Body M | Geist | 15px | 24px | +1% |
| Mono | Geist Mono | 11-13px | 18px | +12-14% UPPERCASE |

### Logo
- **Wordmark utama**: `roha.` (lowercase Bricolage Grotesque, weight 600). Dot (`.`) berwarna **terracotta** — ini constant di SEMUA varian.
- Bisa direpresentasikan dalam SVG atau text dengan styling:
  ```html
  <span class="logo">roha<span style="color:var(--terracotta)">.</span></span>
  ```
- Minimum padding sekitar wordmark = tinggi huruf `o`.

### Visual Patterns (gunakan sebagai background dekorasi)
Brand punya 6 pattern: Arcs, Grid, Stripe, Confetti, Block, Grain. Implementasikan minimal **3 pattern** sebagai CSS background (gunakan SVG inline atau CSS gradient/repeating). Pakai di:
- Hero section background subtle
- Product cover di Shop
- Section divider
- 404 page

**JANGAN pakai pattern di belakang wordmark logo.**

### Visual Do's
- Pakai cream/paper sebagai background dominan
- Rounded corners (12-22px) untuk card
- Border 1px solid `--rule` untuk separator subtle
- Generous white space — jangan padat
- Mono labels (UPPERCASE + letter-spaced) sebagai eyebrow di tiap section

### Visual Don'ts
- ❌ Drop shadow berlebihan (max 1px subtle shadow)
- ❌ Gradient berwarna-warni (boleh terracotta→clay sebagai aksen "Heat")
- ❌ Emoji (kecuali sangat fungsional)
- ❌ Stretch atau rotate logo
- ❌ Warna di luar palette

---

## SITEMAP & FILE STRUCTURE

Bikin struktur folder seperti ini:

```
roha-website/
├── index.html              # Home
├── about.html              # About + Contact
├── services.html           # Services
├── work.html               # Work list (case studies)
├── work-detail.html        # Template case study detail (1 file dulu, sample data)
├── shop.html               # Shop / Products
├── product-detail.html     # Template product detail (1 file dulu, sample data)
├── 404.html                # Error page
├── assets/
│   ├── css/
│   │   ├── global.css      # Reset, variables, typography, common components
│   │   ├── components.css  # Navbar, footer, buttons, cards
│   │   └── pages/
│   │       ├── home.css
│   │       ├── about.css
│   │       ├── services.css
│   │       ├── work.css
│   │       ├── work-detail.css
│   │       ├── shop.css
│   │       └── product-detail.css
│   ├── js/
│   │   ├── main.js         # Navbar, form handler, smooth scroll
│   │   └── patterns.js     # (optional) untuk pattern animations
│   └── img/                # Placeholder folder, isi pakai placeholder image
└── README.md               # Cara modifikasi & deploy
```

---

## NAVIGASI GLOBAL

### Navbar (semua halaman)
- **Kiri**: Logo `roha.` (clickable, ke home)
- **Tengah/Kanan**: Home · Work · Services · Shop · About
- **Paling kanan**: Tombol CTA "Hubungi" (terracotta background, cream text, rounded full)
- Sticky top, blur background ketika scroll
- Mobile: hamburger menu (slide dari kanan, full-screen overlay paper)

### Footer (semua halaman)
- Kolom 1: Logo `roha.` + tagline 1 kalimat + paragraf singkat (2-3 kalimat)
- Kolom 2: Navigasi (Pages: Home, Work, Services, Shop, About)
- Kolom 3: Layanan (link ke section di /services)
- Kolom 4: Connect (Email `halo@roha.design`, WhatsApp, Sosmed: Instagram · Dribbble · Behance · LinkedIn · TikTok)
- Bottom strip: 
  - Kiri: "© 2026 Roha. Made with · in Sumatra, Indonesia."
  - Kanan: "v1.0" dalam mono style
- Border-top `--rule`, padding 96px atas/bawah

---

## DETAIL KONTEN PER HALAMAN

### 📄 1. HOME (`index.html`)

**Section 1: Hero**
- Eyebrow mono: "STUDIO DESAIN · EST. 2026"
- Headline besar (Bricolage 14vw): **"Desain digital yang dibuat hangat, dikirim rapi."**
- Sub-headline (Geist 19px, opacity 0.7): "Roha adalah studio kecil yang bantu founder dan indie maker bikin website, UI/UX, dan brand yang kerasa — bukan yang asal jadi."
- 2 CTA: 
  - Primary "Lihat Karya →" (terracotta bg, ke `work.html`)
  - Secondary "Hubungi Kami" (outline, ke `about.html#contact`)
- Hero stripe di bawah: 7 strip warna horizontal (terracotta, terracotta-soft, mustard, sand, cream, clay, ink) tinggi 10px, rounded full

**Section 2: Featured Work (Karya Pilihan)**
- Eyebrow: "01 — KARYA PILIHAN"
- Section title: "Apa yang sudah kami kirim."
- Grid 1 atau 2 kolom (karena baru 2 project, pilih 2 kolom besar)
- 2 card placeholder:
  - Project 1: "Sora Landing Kit" — Web Design & Development — 2025
  - Project 2: "Nimbus Dashboard" — UX & UI Design — 2026
- Tiap card: thumbnail aspect 4:3 (placeholder color cream/sand), tag kategori (mono uppercase), nama project (Bricolage 32px), 1-sentence summary
- Link "Semua Karya →" di akhir

**Section 3: Services Preview**
- Eyebrow: "02 — LAYANAN"
- Section title: "Apa yang bisa kami kerjakan."
- List mono-style numbered (bukan grid card), 5 items:
  - 01 — UX Design
  - 02 — UI Design
  - 03 — Website Development
  - 04 — Landing Page Development
  - 05 — Brand & Logo Guideline
- Hover state: row geser sedikit ke kanan, panah muncul
- Link "Detail Layanan →"

**Section 4: Shop Preview**
- Eyebrow: "03 — PRODUK DIGITAL"
- Section title: "Template untuk yang lagi sprint."
- Description singkat
- Grid 3 produk placeholder pakai pattern brand sebagai cover (Arcs, Confetti, Block)
- Tiap card: cover pattern + nama + kategori + harga (format `IDR 240k`)
- Link "Belanja Produk →"

**Section 5: Tentang Roha (mini)**
- Layout 2 kolom
- Kiri: pull quote besar (Bricolage 34px): *"Roha adalah kata Batak Toba untuk hati — perpaduan rasa, pikir, dan niat."*
- Kanan: 2 paragraf body soal Roha + tombol "Cerita selengkapnya →"

**Section 6: CTA Section**
- Full-width section, background pattern "Heat" (terracotta → clay gradient) atau pakai pattern Block
- Headline besar (cream color, Bricolage): "Punya project? Mari ngobrol."
- Sub-text: "Kirim brief atau cerita ide kamu. Kami balas dalam 1×24 jam (jam kerja)."
- 2 button: "Email Kami" (cream bg, ink text) + "Chat WhatsApp" (outline cream)

---

### 📄 2. ABOUT + CONTACT (`about.html`)

**Section 1: Hero About**
- Eyebrow: "TENTANG"
- Headline (Bricolage hero): "Roha. Sebuah kata berempat huruf yang artinya banyak."
- Tagline kedua di kanan (mirip brand book layout): *"Studio kecil yang bantu founder dan indie maker bikin produk digital yang kerasa."*

**Section 2: Tentang Nama**
- Eyebrow: "01 — ASAL NAMA"
- Section title: "Bukan akronim, bukan random."
- Layout 2 kolom: kiri pull quote, kanan paragraf
- Pull quote: *"Roha adalah Batak untuk hati — perpaduan rasa, pikir, dan niat. Karya kami mencoba melakukan hal yang sama: tenang di permukaan, terpikirkan di dalam."*
- Paragraf jelasin filosofi nama
- **Card detail** (3 kolom, background cream):
  - Pronounced: `/ˈro.ha/`
  - Origin: Batak Toba
  - Translates to: Heart · Mind · Soul

**Section 3: Cara Kami Bekerja**
- Eyebrow: "02 — PRINSIP"
- Section title: "Empat hal yang kami pegang."
- Grid 2x2, 4 prinsip:
  1. **Tenang di permukaan, terpikirkan di dalam** — Desain yang gak berisik, tapi setiap pilihan ada alasannya.
  2. **Hangat itu disiplin** — Warmth bukan kebetulan. Dipilih, diukur, disengaja.
  3. **Sistem, bukan dekorasi** — Kami bikin design system, bukan satu halaman cantik yang hancur di update kedua.
  4. **Kirim, jangan sempurnakan terus** — Shipped > perfect. Lebih baik versi 1.0 live daripada 0.9 tertunda.

**Section 4: Proses Kerja**
- Eyebrow: "03 — PROSES"
- Section title: "Lima langkah dari brief ke handoff."
- Timeline horizontal (atau vertical di mobile):
  1. **Briefing** — 1-2 hari · Discovery call, alignment scope.
  2. **Eksplorasi** — 3-5 hari · Mood board, wireframe, direction.
  3. **Desain** — 1-3 minggu · Visual design, prototype.
  4. **Iterasi** — 1 minggu · Revisi, refinement, polish.
  5. **Handoff** — 1-2 hari · File delivery, dokumentasi, support.

**Section 5: Tools & Disiplin**
- 2 kolom: kiri "Yang Kami Kerjakan" (list 5 service, link ke /services), kanan "Tools yang Dipakai" (Figma, Webflow, Framer, Notion, dll)

**Section 6: Kontak (CONTACT — gabung di sini)**
- Eyebrow: "04 — HUBUNGI KAMI"
- Section title: "Mari ngobrol."
- 2 kolom:
  - **Kiri (Form)**:
    - Field: Nama, Email, Tipe Project (dropdown: UX, UI, Website, Landing Page, Branding, Lainnya), Budget (dropdown: <10jt, 10-30jt, 30-50jt, 50jt+), Pesan
    - Tombol: "Kirim Pesan" (terracotta)
    - Form action: gunakan `mailto:halo@roha.design` sebagai fallback, atau tambahkan placeholder `action="[FORMSPREE_ENDPOINT]"` dengan komentar HTML jelas yang menunjukkan cara ganti ke endpoint real (Formspree/Web3Forms)
  - **Kanan (Info Kontak)**:
    - Email: `halo@roha.design` (clickable, pakai `mailto:`)
    - WhatsApp: tombol "Chat WhatsApp" yang link ke `https://wa.me/[NO_WA]?text=Halo%20Roha%2C%20saya%20mau%20diskusi%20project`
    - Lokasi: **Indonesia · Based in Sumatra**
    - Jam kerja: Sen-Jum, 09:00-17:00 WIB
    - Response time: "Kami balas dalam 1×24 jam (jam kerja)"
    - Sosmed icons row: **Instagram · Dribbble · Behance · LinkedIn · TikTok** (semua pakai ikon SVG inline, hover state warna terracotta)

---

### 📄 3. SERVICES (`services.html`)

**Section 1: Hero Services**
- Eyebrow: "LAYANAN"
- Headline: "Apa yang bisa kami bantu kerjakan."
- Sub: "Lima disiplin yang kami fokuskan. Setiap project kami treat dengan proses yang sama: pelan-pelan di depan, cepat di belakang."

**Section 2: Service Cards (5 services)**
Untuk tiap service, struktur card:
- Nomor mono (besar): "01"
- Nama service (Bricolage 40px): "UX Design"
- Deskripsi 2-3 kalimat
- "Termasuk:" list 4-5 deliverable (bullet)
- **Harga**: Tampilkan "Mulai dari Rp X" dengan format placeholder yang konsisten. Default harga awal (user bisa ubah nanti):
  - 01 UX Design: *Mulai dari Rp 8jt*
  - 02 UI Design: *Mulai dari Rp 6jt*
  - 03 Website Development: *Mulai dari Rp 15jt*
  - 04 Landing Page Development: *Mulai dari Rp 5jt*
  - 05 Brand & Logo Guideline: *Mulai dari Rp 4jt*
- Format display harga konsisten dengan style mono uppercase di eyebrow card, contoh: `MULAI DARI · RP 8JT`
- Tombol "Diskusikan Project" (link ke about.html#contact)

**Konten copywriting per service:**

**01 — UX Design**
> Research, wireframing, user flow, dan prototyping. Untuk produk yang masih cari product-market fit, atau yang udah ada tapi perlu redesign dari nol karena UX-nya udah gak nyambung sama user.
> 
> Termasuk: User research · Information architecture · Wireframe · User flow · Interactive prototype · Usability testing notes

**02 — UI Design**
> Visual design, design system, dan component library. Untuk produk yang konsepnya udah jelas tapi butuh tampilan yang konsisten, punya karakter, dan gampang di-maintain tim development.
> 
> Termasuk: Visual design · Design tokens · Component library · Responsive layouts · Design system documentation

**03 — Website Development**
> Pengembangan website end-to-end. Cocok untuk company profile, dashboard sederhana, atau aplikasi web yang butuh interaktivitas. Kami pakai stack modern yang gampang di-maintain.
> 
> Termasuk: Frontend development · CMS integration (kalau perlu) · Responsive · SEO basic · Performance optimization · Deployment

**04 — Landing Page Development**
> Landing page satu halaman yang convert — dari desain sampai live dalam 1-2 minggu. Buat campaign, product launch, atau brand baru yang butuh online cepat.
> 
> Termasuk: Wireframe · UI design · Development · Form integration · Analytics setup · Domain & hosting setup

**05 — Brand & Logo Guideline**
> Logo, brand book, dan sistem visual yang siap diserahkan ke tim atau vendor lain. Bukan cuma logo cantik, tapi sistem yang membuat brand kamu konsisten di mana pun dipakai.
> 
> Termasuk: Logo design (3 alternatif) · Color & typography system · Logo usage rules · Pattern/illustration system · Brand book PDF · Working files (Figma)

**Section 3: Proses Kerja Visual**
- Sama seperti di About, tapi lebih detail
- Pakai pattern Block atau Stripe sebagai background subtle

**Section 4: FAQ Services**
Accordion style, pertanyaan:
- Berapa lama project rata-rata?
- Berapa kali revisi yang bisa di-request?
- Apakah ada DP atau bisa termin?
- Bisa retainer atau monthly?
- Kalau service yang dibutuhkan tidak ada di list, bagaimana?
- Apakah Roha kerja dengan klien internasional?
- Bagaimana komunikasi selama project berlangsung?

**Section 5: CTA**
- "Punya project? Diskusikan dengan kami." + tombol Email + WhatsApp

---

### 📄 4. WORK / Case Studies (`work.html`)

**Section 1: Hero Work**
- Eyebrow: "KARYA"
- Headline: "Yang sudah kami kirim."
- Sub: "Sedikit, tapi setiap project punya cerita. Pilih satu untuk baca lebih detail."

**Section 2: Filter (skip untuk sekarang, tapi siapkan markup)**
- Pills: All · UX · UI · Web Dev · Branding
- Untuk sekarang inactive, tapi siapkan struktur HTML & class biar mudah aktifkan nanti

**Section 3: Grid Case Studies**
- **2 kolom besar** (jangan 3 kolom — karena baru 2 project, biar gak kelihatan kosong)
- Generous white space
- Tiap card:
  - Thumbnail aspect 4:5 (placeholder pakai pattern brand)
  - Mono tag kategori (uppercase, terracotta)
  - Project name (Bricolage 40px)
  - 1-sentence summary
  - Meta: Year · Industry
  - Hover: scale subtle 1.02, pattern overlay
- Link tiap card ke `work-detail.html`

**Project placeholder:**
1. **Sora Landing Kit** · Web Development · 2025 · *A landing kit for founders in a hurry.*
2. **Nimbus Dashboard** · UX & UI Design · 2026 · *Internal tool yang akhirnya menyenangkan dipakai.*

**Section 4: CTA**
- "Mau jadi proyek berikutnya? Mari ngobrol." + tombol kontak

---

### 📄 5. WORK DETAIL (`work-detail.html`)

Template untuk 1 case study (pakai data Sora Landing Kit sebagai contoh).

**Section 1: Cover**
- Visual besar full-width (placeholder)
- Eyebrow mono: "CASE STUDY · 2025"
- Project name (Bricolage hero): "Sora Landing Kit"
- Meta grid 4 kolom: Year, Client, Duration, Service

**Section 2: Konteks / Brief**
- Eyebrow: "01 — KONTEKS"
- Section title: "Apa yang dihadapi."
- 2-3 paragraf placeholder
- Pull quote dari klien (optional)

**Section 3: Pendekatan**
- Eyebrow: "02 — PENDEKATAN"
- Section title: "Bagaimana kami memulai."
- Paragraf + bullet list pendekatan

**Section 4: Proses & Eksekusi**
- Eyebrow: "03 — EKSEKUSI"
- Galeri: 3-4 image placeholder besar
- Detail visual decisions (typography, color choice, dll)

**Section 5: Hasil**
- Eyebrow: "04 — HASIL"
- Metric card (3 metric: misal +120% conversion, -40% bounce rate, 4.8/5 client satisfaction)
- Atau testimoni klien dalam pull quote besar

**Section 6: Credits**
- Tim, klien, durasi, year, tools used

**Section 7: Next Project**
- Card besar ke project berikutnya: "Nimbus Dashboard →"

---

### 📄 6. SHOP (`shop.html`)

**Section 1: Hero Shop**
- Eyebrow: "PRODUK"
- Headline: "Template & sistem desain yang siap pakai."
- Sub: "Untuk founder yang lagi sprint, designer yang lagi cari shortcut, atau siapapun yang gak mau mulai dari nol."

**Section 2: Filter Kategori**
- Pills: All · UI Kit · Website Template · Figma Template · Brand Template
- Aktif (clickable, walaupun filter logic-nya bisa minimal pakai JS)

**Section 3: Grid Produk**
- 2 atau 3 kolom (3 lebih cocok untuk shop)
- 6 produk placeholder dengan cover pattern brand:
  1. **Sora Landing Kit** · Website Template · `IDR 240k` · cover pattern Arcs
  2. **Nimbus UI Kit** · UI Kit · `IDR 380k` · cover pattern Confetti
  3. **Terra Brand Pack** · Brand Template · `IDR 320k` · cover pattern Block
  4. **Paper Portfolio Kit** · Figma Template · `IDR 180k` · cover pattern Grid
  5. **Hangat Icon Set** · Icon Set · `IDR 120k` · cover pattern Stripe
  6. **Roha Notion Hub** · Notion Template · `IDR 95k` · cover pattern Grain
- Tiap card: cover (aspect 1:1, pattern bg), nama, kategori (mono), harga
- Hover: subtle scale + cursor pointer
- Tombol "Lihat Detail" di hover (atau full card clickable)

**Section 4: Why Buy from Roha**
- 4 poin trust:
  - Design system yang rapi
  - File terorganisir
  - Dokumentasi lengkap
  - Update gratis seumur produk

**Section 5: FAQ Shop**
Accordion:
- Lisensi: bisa untuk klien gak?
- Format file apa aja?
- Bisa minta custom modifikasi?
- Refund policy?
- Update gratis seumur hidup atau gimana?
- Cara beli? (Mayar)
- Bagaimana cara download setelah beli?

---

### 📄 7. PRODUCT DETAIL (`product-detail.html`)

Template untuk 1 produk (pakai data Sora Landing Kit).

**Section 1: Hero Product**
- Layout 2 kolom (kiri visual besar pakai pattern, kanan info)
- Kanan: 
  - Eyebrow kategori: "WEBSITE TEMPLATE"
  - Nama produk (Bricolage): "Sora Landing Kit"
  - Tagline 1 kalimat: "A landing kit for founders in a hurry."
  - Harga (besar bold): `IDR 240k`
  - 2 CTA: "Beli di Mayar →" (primary terracotta) · "Preview di Figma →" (outline)
  - Trust micro: "✓ Instant download · ✓ Lifetime update · ✓ Personal & commercial license"

**Section 2: What's Inside**
- Eyebrow: "01 — DI DALAMNYA"
- Bullet list besar:
  - 5 halaman desain (Home, About, Pricing, Blog, Contact)
  - 120+ komponen modular
  - Auto layout untuk semua section
  - Dark & light mode
  - Mobile responsive ready
  - Design tokens lengkap
  - Free Google Fonts integration

**Section 3: Preview Visual**
- Gallery 4-6 image (placeholder)
- Carousel atau grid

**Section 4: Spec & Detail**
- 4 kolom: Format · Software · File Size · License
  - Format: Figma file (.fig)
  - Software: Figma (free version OK)
  - File Size: 12 MB
  - License: Personal & Commercial

**Section 5: Custom Request CTA**
- Section terracotta: "Mau ini di-custom?"
- Sub: "Kirim WhatsApp dengan kebutuhan kamu, kami quote dalam 1 hari kerja."
- Tombol: "Order Custom via WhatsApp →"

**Section 6: Produk Lain**
- Grid 3 produk related

---

### 📄 8. 404 PAGE (`404.html`)

- Background pattern Confetti
- Headline besar: "Halaman ini hilang."
- Sub: "Mungkin lagi diedit. Mungkin gak pernah ada. Mari kembali ke jalan yang benar."
- Tombol "Ke Beranda →"
- Footer minimal

---

## INTERAKTIVITAS (JavaScript)

Pakai vanilla JS, simpan di `assets/js/main.js`. Yang perlu diimplementasi:

1. **Mobile menu toggle** — hamburger button buka/tutup overlay menu di mobile.
2. **Navbar scroll behavior** — tambahkan class `scrolled` saat scroll > 20px (untuk styling background blur).
3. **Smooth scroll** — untuk anchor links (`#contact`, dll).
4. **FAQ accordion** — di Services & Shop, expand/collapse jawaban.
5. **Form validation client-side** — di contact form, validate email format, required fields. Show inline error.
6. **Filter Shop** — toggle filter pills, show/hide cards berdasarkan kategori (`data-category` attribute).
7. **Lazy hover state untuk card** — bisa pakai CSS, tapi kalau perlu enhance pakai JS.

**Catatan:** JANGAN pakai jQuery atau library lain. Vanilla ES6+ saja.

---

## RESPONSIVE BREAKPOINTS

```css
/* Mobile first */
/* Default: < 640px */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1240px) { /* xl - max content width */ }
```

- Hero headline harus auto-scale pakai `clamp()`
- Grid layout: 1 kolom di mobile, 2 di tablet, 2-3 di desktop
- Navbar: hamburger di < 768px
- Card padding minimum 24px di mobile, 32-48px di desktop

---

## ACCESSIBILITY CHECKLIST

- Semua image punya `alt` attribute
- Tombol pakai `<button>` atau `<a>` dengan role yang benar
- Form input punya `<label>`
- Color contrast minimum AA (terracotta on cream OK, terracotta on white WAJIB di-test)
- Focus state visible (jangan `outline: none` tanpa pengganti)
- Skip-to-content link di awal navbar (untuk keyboard user)
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## DELIVERABLES

Generate **semua file lengkap dan ready to deploy**:

1. Semua file HTML (8 halaman)
2. Semua file CSS (global + per-page)
3. File JavaScript
4. README.md dengan:
   - Cara buka & develop local
   - Struktur folder
   - Cara modifikasi konten (mana yang harus diubah untuk ganti project, produk, dll)
   - Cara deploy ke GitHub Pages / Netlify / Vercel
   - Catatan untuk integrasi:
     - Mayar (untuk link beli produk)
     - Formspree / Web3Forms (untuk form contact bekerja real)
     - WhatsApp link format: `https://wa.me/[NOMOR]?text=Halo...`

---

## PLACEHOLDER YANG MASIH HARUS USER ISI SENDIRI

Tandai dengan `[BRACKETS]` di komentar HTML supaya gampang search-and-replace setelah generate:

- `[NO_WA]` → nomor WhatsApp aktif (format internasional tanpa `+`, contoh: `628123456789`)
- `[INSTAGRAM_URL]` → link Instagram (contoh: `https://instagram.com/roha.design`)
- `[DRIBBBLE_URL]` → link Dribbble
- `[BEHANCE_URL]` → link Behance
- `[LINKEDIN_URL]` → link LinkedIn
- `[TIKTOK_URL]` → link TikTok
- `[MAYAR_LINK_PRODUCT_X]` → link mayar per produk (X = nomor produk 1-6)
- `[FIGMA_PREVIEW_LINK_X]` → link figma preview per produk
- `[FORMSPREE_ENDPOINT]` → endpoint Formspree atau Web3Forms untuk form contact (kalau mau live form). Default: pakai `mailto:halo@roha.design` sebagai fallback.

**Data yang sudah final (jangan diubah):**
- Brand name: Roha
- Email: `halo@roha.design`
- Tagline hero: "Desain digital yang dibuat hangat, dikirim rapi."
- Lokasi: Indonesia · Based in Sumatra
- Harga services (lihat section Services di atas)
- Jam kerja: Sen-Jum, 09:00-17:00 WIB

---

## CHECKLIST FINAL SEBELUM "DONE"

- [ ] Semua halaman pakai Google Fonts (Bricolage, Geist, Geist Mono, Instrument Serif)
- [ ] Color palette sesuai rasio (paper dominan, terracotta aksen)
- [ ] Navbar konsisten di semua halaman
- [ ] Footer konsisten di semua halaman
- [ ] Form di About punya validation & action placeholder
- [ ] Mobile responsive di semua halaman
- [ ] Pattern brand muncul di minimal 3 tempat berbeda
- [ ] Logo `roha.` dengan dot terracotta konsisten
- [ ] Copywriting bahasa Indonesia natural, dry humor tipis
- [ ] Tidak ada inline CSS berlebihan (max untuk yang super spesifik)
- [ ] README.md jelas dan actionable

---

## CATATAN AKHIR UNTUK CLAUDE

- **Prioritaskan kualitas visual** — ini website seorang designer, jadi setiap pixel berbicara. Banyak white space, typography breathing, hierarchy tegas.
- **Jangan tambahkan dependency** — vanilla HTML/CSS/JS only.
- **Jangan pakai placeholder image dari internet** — pakai `<div>` dengan background pattern brand atau solid color sebagai placeholder. Lebih konsisten dan offline-friendly.
- **Komentar HTML/CSS dalam bahasa Indonesia** untuk bagian yang user akan modify (misal: `<!-- Ganti link Mayar di sini -->`).
- Jika ada konflik atau ambiguitas, **pilih opsi yang lebih warm dan considered**, sesuai brand book Roha.

Mulai generate sekarang. Setelah selesai, recap struktur file yang sudah dibuat.
