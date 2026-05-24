# Roha Website — Session Context

Proyek: website Roha Studio, dibangun dengan Astro v6 (static site generator).
Repo: `palti28/roha` — branch kerja: `dev`, production: `main`.

---

## Stack

- **Framework**: Astro v6, output static
- **Styling**: vanilla CSS dengan custom properties (design token system)
- **Content**: Astro Content Collections (`.md` files di `src/content/`)
- **Images**: ImageKit CDN
- **Deployment**: static build via `npm run build`

---

## Struktur Proyek

```
src/
├── content/
│   ├── portfolio/      # produk dijual (template, kit)
│   └── work/           # case study klien
├── pages/
│   ├── index.astro     # home
│   ├── work.astro      # listing semua work
│   ├── work/[slug].astro   # detail work
│   ├── portfolio.astro # listing semua portfolio
│   ├── portfolio/[slug].astro  # detail portfolio
│   ├── about.astro
│   ├── services.astro
│   ├── product-detail.astro  # orphan demo page
│   └── work-detail.astro     # orphan demo page
└── styles/
    ├── global.css
    ├── tokens.css       # design token (CSS variables)
    ├── cards.css
    └── pages/
        ├── home.css
        ├── portfolio.css
        ├── work.css
        └── ...
```

---

## Design System (Roha v1.1.0)

Palette minimal, mostly-white. Satu-satunya warna kromatis adalah terracotta.

**Token utama:**
```css
--ink: #1a1611         /* text utama */
--paper: #faf8f4       /* background utama */
--paper-tint: #f5f2ec  /* background card/section */
--cream: #f6efe0
--terracotta: #c1440e  /* satu-satunya accent */
--terracotta-soft: #e8845a
--rule: #e8e2d9        /* border / divider */
```

**Typography:**
- Display/heading: `Bricolage Grotesque`
- Body/UI: `Geist`
- Mono/metadata: `Geist Mono`

---

## Aturan Penulisan Konten

- **Hindari karakter em dash `—`** di semua prose/paragraf/deskripsi
- Ganti dengan koma, titik dua, tanda kurung, atau kalimat baru sesuai konteks
- Pengecualian yang TIDAK diubah:
  - Label section angka: `### 01 — Context`, eyebrow `01 — Featured Work`
  - Template title separator di kode: `${d.title} — Case Study`
  - Code comments (`//`, `{/* */}`, `<!-- -->`)
  - Accessibility label: `aria-label="Roha — Home"`

---

## Pekerjaan yang Sudah Selesai

### Sesi 1 — Design System Overhaul
- Terapkan Roha Design System v1.1.0 ke seluruh site
- Update token warna, tipografi, spacing ke versi terbaru
- PR #14 (merged)

### Sesi 2 — Portfolio Detail Layout
- Rework layout halaman detail portfolio: agency-style
- Sticky product bar (muncul saat hero scroll keluar viewport)
- Fix bug: sticky bar overlap nav (z-index conflict diperbaiki dengan JS measure nav height + `top` dinamis)
- Image gallery 2-col, overview + highlights 2-col, related products grid
- PR #14 (merged)

### Sesi 3 — Grid + Em Dash Cleanup
- `/work` dan `/portfolio` listing: grid dari 2-col ke **4 kolom** (responsive: 3col ≤1100px, 2col ≤768px, 1col ≤480px)
- Work cards dibuat lebih compact untuk 4-col layout
- Replace **semua em dash** di prose seluruh site:
  - `src/content/portfolio/` — 4 file md
  - `src/content/work/` — 3 file md
  - `src/pages/` — index, work, about, services, portfolio, [slug] pages
- PR #14 (merged)

### Sesi 4 — How We Work Illustrations
- Section "How We Work" di home page dirombak
- Dari: icon kecil + h3 + paragraf panjang (2×2 grid)
- Ke: **ilustrasi SVG custom + 1 baris caption** (4-col grid)
- 4 ilustrasi inline SVG, masing-masing bercerita visual:
  1. Layer surface/depth → *"Considered at every scale."*
  2. Compass geometris presisi → *"Warmth by design, not default."*
  3. Komponen terkoneksi ke hub → *"Systems outlast single pages."*
  4. Arc launch trajectory → *"Ship first, refine after."*
- PR #15 (open)

---

## File Konten yang Perlu Diperbarui Sebelum Launch

File-file ini masih pakai placeholder — konfirmasi nilai real sebelum publish:

| File | Yang perlu diisi |
|------|-----------------|
| `src/pages/about.astro` | `[INSTAGRAM_URL]`, `[DRIBBBLE_URL]`, `[BEHANCE_URL]`, `[LINKEDIN_URL]`, `[TIKTOK_URL]` |
| Semua page yang ada WA link | Ganti `[NO_WA]` dengan nomor WhatsApp aktif |
| `src/content/portfolio/*.md` | `buyUrl`, harga, deskripsi real tiap produk |
| `src/content/work/*.md` | `coverImage` real untuk setiap project |

---

## Git Workflow

- Branch kerja: `dev`
- Commit ke `dev`, buat PR ke `main` setelah selesai satu fitur/task
- Selalu `npm run build` sebelum commit untuk verifikasi tidak ada error
- Jangan commit file `.env` atau credential apapun

---

## Konvensi Kode

- Tidak ada komentar kecuali WHY yang tidak obvious
- Tidak ada em dash di prose user-facing
- CSS: pakai custom properties dari `tokens.css`, jangan hardcode warna/size
- Astro: filter `!data.draft` di semua collection query untuk production
