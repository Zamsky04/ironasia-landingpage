# 🌐 IronAsia Landing Page

Landing page resmi **IronAsia** yang dibangun dengan **React.js** + **Vite** + **TailwindCSS**.  
Dirancang untuk memberikan pengalaman modern, cepat, dan responsif dalam menampilkan informasi produk & layanan IronAsia.

---

## ✨ Fitur Utama

- **Hero & CTA**: Tombol *Buka Marketplace* & *Download Aplikasi* dengan branding biru yang kuat.
- **Kenapa IronAsia?**: Kartu manfaat (RFQ cepat, supplier tervalidasi, katalog kaya, dll).
- **Alur RFQ B2B**: 4 langkah ringkas untuk buyer & supplier.
- **Supplier CTA**: Blok konversi *Daftar Supplier*.
- **FAQ**: Pertanyaan umum dalam bentuk accordion.
- **i18n**: Dukungan multi-bahasa (ID/EN/VI) via *Language Switcher*.
- **SEO**: Meta tags, OpenGraph, robots.txt, dan hook SEO siap pakai.
- **Responsif**: Desain mobile-first dengan Tailwind.
- **Akses Cepat**: Tombol WhatsApp / kontak langsung di layar.

---

## 🛠️ Tech Stack

- ⚛️ **React 18** + **Vite**
- 🎨 **TailwindCSS** (utility-first)
- 🌍 **i18next** untuk internasionalisasi
- 🔍 **Custom SEO Hook** (`src/seo/useSEO.js`)
- 🧹 **ESLint** (opsional/terpasang)

---

## 📁 Struktur Folder

ironasia-landingpage/
├── public/
│ ├── favicon.ico
│ ├── logo.png
│ ├── robots.txt
│ └── og-image.png # Untuk SEO/OG preview
│
├── src/
│ ├── assets/
│ │ └── react.svg
│ │
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Hero.jsx
│ │ ├── Features.jsx
│ │ ├── Showcase.jsx
│ │ ├── SupplierCTA.jsx
│ │ ├── RFQFlow.jsx
│ │ ├── FAQ.jsx
│ │ ├── DownloadSection.jsx
│ │ ├── CustomerSupport.jsx
│ │ ├── Footer.jsx
│ │ └── LanguageSwitcher.jsx
│ │
│ ├── i18n/
│ │ ├── i18nProvider.jsx
│ │ ├── i18nContext.js
│ │ ├── translations.js
│ │ └── useI18n.js
│ │
│ ├── seo/
│ │ └── useSEO.js
│ │
│ ├── styles/
│ │ └── index.css
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

