# Roha Design — Website

Website portfolio untuk **Roha Design** — studio desain digital kecil di Sumatra. Dibuat dengan **HTML, CSS, dan JavaScript murni** tanpa framework, supaya gampang dimodifikasi langsung dari editor manapun.

> "Roha" adalah Batak untuk *hati* — perpaduan rasa, pikir, dan niat.

---

## 📂 Struktur Folder

```
roha-website/
├── index.html              # Home
├── about.html              # About + Contact (form ada di sini)
├── services.html           # Detail layanan + FAQ
├── work.html               # Daftar case study
├── work-detail.html        # Template case study (sample: Sora)
├── shop.html               # Daftar produk digital
├── product-detail.html     # Template produk detail (sample: Sora)
├── 404.html                # Error page
├── README.md               # File ini
└── assets/
    ├── css/
    │   ├── global.css      # Reset, variables, type, pattern utilities
    │   ├── components.css  # Navbar, footer, button, card, form, accordion
    │   └── pages/
    │       ├── home.css
    │       ├── about.css   # Dipakai juga di services.html (process timeline)
    │       ├── services.css
    │       ├── work.css    # Dipakai di work.html + work-detail.html
    │       └── shop.css    # Dipakai di shop.html + product-detail.html
    └── js/
        └── main.js         # Navbar scroll, mobile menu, smooth scroll,
                             # accordion, form validation, shop filter
```

---

## 🚀 Cara Buka Lokal

Karena ini static HTML, ada beberapa cara:

**Cara 1 — buka langsung di browser** (paling cepat):
```
Double-click index.html
```

**Cara 2 — pakai live server** (recommended, biar reload otomatis):
```bash
# Pakai Python (sudah ada di Mac/Linux)
cd roha-website
python3 -m http.server 8000

# Atau pakai Node (kalau sudah install)
npx serve

# Atau VS Code: install extension "Live Server", klik kanan index.html → Open with Live Server
```
Buka `http://localhost:8000` di browser.

---

## ✏️ Cara Modifikasi Konten

### Ganti teks
Semua teks langsung di file HTML. Cari pakai search-in-file editor kamu, edit, save. Selesai.

### Ganti harga produk / layanan
- **Services**: edit `services.html` — cari class `price-tag` (5 tempat).
- **Shop**: edit `shop.html` dan `product-detail.html` — cari class `price`.
- **Home preview**: edit `index.html` — section `services-preview` dan `shop-preview`.

### Tambah project baru di Work
1. Buka `work.html` → duplicate satu blok `<a class="work-card">` → ganti konten + class pattern di `.thumb`.
2. Buat halaman case study baru, copy `work-detail.html` jadi `work-sora.html` atau apapun, edit isinya.
3. Update link `href` di card baru ke file detail tadi.

### Tambah produk baru di Shop
1. Buka `shop.html` → duplicate satu blok `<a class="product-card">`.
2. Ganti nama, kategori, harga, pattern di `.cover`, dan `data-category`.
3. Untuk halaman detail produk, copy `product-detail.html`.

### Pattern brand (background dekorasi)
Class yang bisa dipakai di `<div>` cover/thumb:
- `pat-arcs` — kurva radial terracotta
- `pat-grid` — titik-titik grid
- `pat-stripe` — diagonal stripe
- `pat-confetti` — titik warna-warni di ink
- `pat-block` — half-half terracotta + clay
- `pat-grain` — terracotta + noise texture
- `pat-heat` — gradient terracotta → clay (untuk CTA)

Selalu pasangkan dengan class `pattern-wrap` di parent supaya noise overlay nge-clip dengan benar.

### Ganti warna brand
Edit `assets/css/global.css` bagian `:root` — semua warna pakai CSS variables, jadi sekali edit langsung apply ke seluruh site.

```css
:root {
  --terracotta: #C9583B;   /* primary */
  --paper: #FDFAF1;        /* background utama */
  --ink: #221512;          /* warna teks */
  /* ... */
}
```

---

## 🔌 Integrasi Eksternal

Cari placeholder `[BRACKETS]` di semua file HTML — ini yang harus diganti:

### WhatsApp
Cari `[NO_WA]` (di semua HTML). Ganti dengan nomor internasional tanpa `+`, contoh:
```
628123456789
```
Format link: `https://wa.me/628123456789?text=...`

### Sosmed
Cari placeholder:
- `[INSTAGRAM_URL]` → contoh: `https://instagram.com/roha.design`
- `[DRIBBBLE_URL]` → `https://dribbble.com/roha`
- `[BEHANCE_URL]` → `https://behance.net/roha`
- `[LINKEDIN_URL]` → `https://linkedin.com/company/roha`
- `[TIKTOK_URL]` → `https://tiktok.com/@roha.design`

### Mayar (untuk produk di Shop)
Cari `[MAYAR_LINK_PRODUCT_1]` di `product-detail.html`. Saat ada lebih banyak produk, gunakan placeholder `[MAYAR_LINK_PRODUCT_2]`, `[MAYAR_LINK_PRODUCT_3]`, dst di duplikat halaman tiap produk.

### Figma Preview Link
Cari `[FIGMA_PREVIEW_LINK_1]` di `product-detail.html`. Ganti dengan link Figma share (view-only).

### Form Kontak
Default fallback: `mailto:halo@roha.design` — buka mail client user. Untuk form real yang masuk ke email otomatis, ganti `action="mailto:halo@roha.design"` di `about.html` dengan endpoint Formspree atau Web3Forms:

**Formspree** (https://formspree.io):
1. Sign up → buat form → dapat endpoint `https://formspree.io/f/xxxxxx`
2. Ganti `action="..."` di `about.html`:
```html
<form class="contact-form" data-contact-form
      action="https://formspree.io/f/xxxxxx"
      method="POST">
```

**Web3Forms** (https://web3forms.com):
```html
<form class="contact-form" data-contact-form
      action="https://api.web3forms.com/submit"
      method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
  <!-- field lainnya -->
</form>
```

JavaScript di `main.js` sudah handle validasi client-side — tinggal validasi server-side dari provider yang dipakai.

---

## 🌐 Deploy

### GitHub Pages (gratis)
1. Push folder ini ke repo GitHub.
2. Settings → Pages → Source: `main` branch, folder `/ (root)`.
3. Tunggu 1–2 menit, site live di `https://username.github.io/repo-name/`.

### Netlify (gratis, paling gampang)
1. Drag folder `roha-website/` ke https://app.netlify.com/drop.
2. Selesai. Dapat URL `https://xxxx.netlify.app`.
3. (Optional) Connect ke domain custom: Domain settings → Add custom domain.

### Vercel (gratis)
1. Push ke GitHub → import di vercel.com.
2. Framework Preset: Other. Output Directory: kosongkan.
3. Deploy.

### Custom domain
- Beli domain di Niagahoster/Domainesia/Cloudflare.
- Di Netlify/Vercel: tambahkan custom domain, ikuti instruksi DNS (biasanya CNAME ke `xxx.netlify.app` atau A record ke IP).

---

## ♿ Accessibility

Website ini sudah include:
- Skip-to-content link di setiap halaman
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels di interactive elements
- Focus states yang visible
- Color contrast AA-compliant untuk text utama
- Responsive 320px → 1440px+

Yang masih bisa ditingkatkan:
- Replace pattern placeholder dengan screenshot/foto real (jangan lupa `alt` attribute)
- Test dengan screen reader (VoiceOver di Mac, NVDA di Windows)

---

## 🎨 Brand Notes (jangan diubah tanpa pertimbangan)

- Wordmark `roha.` selalu lowercase, dot terracotta — di semua varian.
- Bahasa Indonesia natural, istilah teknis tetap English.
- Hindari kata: "solusi terbaik", "profesional", "premium", "terpercaya".
- Pakai: "kami kerjakan", "kami kirim", "yang sudah kami buat".
- Paper sebagai background utama (~55%), terracotta sebagai aksen (~14%).

Detail lengkap brand di file Brand Guidelines terpisah.

---

## 📬 Kontak Roha

- Email: `halo@roha.design`
- Lokasi: Indonesia · Based in Sumatra
- Jam kerja: Sen–Jum, 09:00–17:00 WIB

---

*v1.0 · 2026 · Made with · in Sumatra, Indonesia.*
