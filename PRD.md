# PRD — Sakata Innovation Center Landing Page

## 1. Overview

| Item | Detail |
|---|---|
| **Produk** | Landing Page Website |
| **Brand** | Sakata Innovation Center |
| **Tipe Organisasi** | Yayasan Teknologi (Non-profit) |
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS v3 |
| **Target Launch** | MVP dalam 3 hari |

---

## 2. Tujuan Produk

Membangun **landing page** yang merepresentasikan identitas, misi, dan program Sakata Innovation Center secara profesional — sehingga pengunjung (donatur, mitra, talenta muda, dan masyarakat umum) dapat memahami visi yayasan dan mengambil tindakan (join, kolaborasi, atau donasi).

---

## 3. Target Pengguna

| Segmen | Kebutuhan |
|---|---|
| **Institusi / Mitra** | Melihat kredibilitas & program kolaborasi |
| **Talenta Muda** | Mengetahui peluang bergabung / belajar |
| **Donatur / Investor Sosial** | Memahami dampak dan transparansi program |
| **Media / Publik** | Mendapatkan informasi resmi tentang yayasan |

---

## 4. Struktur Halaman (Single Page)

### 4.1 Navbar (Sticky)
- **Logo** — Teks "Sakata" + ikon/monogram
- **Nav Links** — `Program`, `Tentang`, `Dampak`, `Komunitas`, `Kontak`
- **CTA Button** — `Bergabung` (dark, rounded pill)
- Behavior: sticky saat scroll, background berubah menjadi semi-transparan/blur

---

### 4.2 Hero Section
- **Headline besar** (2–3 baris):
  > *"Mendorong Inovasi Teknologi*
  > *untuk Indonesia yang*
  > *Lebih Baik."*
- Kata kunci terakhir berwarna aksen (biru / hijau teal)
- **Subheadline**: Deskripsi singkat misi yayasan (1–2 kalimat)
- **CTA Buttons**: `Lihat Program` (primary) + `Tentang Kami` (outline/secondary)
- **Visual**: Elemen ilustrasi/3D floating (ikon teknologi: sirkuit, node, bintang, dll.) — bisa pakai Lottie atau ilustrasi SVG
- Background: putih bersih atau subtle gradient

---

### 4.3 Stats / Dampak Section
- 3–4 angka dampak dalam satu baris:
  - `500+` Peserta Program
  - `30+` Mitra Institusi
  - `5` Kota Jangkauan
  - `3 Tahun` Beroperasi
- Animasi angka counter saat masuk viewport

---

### 4.4 Program / Inisiatif Section
- Label pill: `PROGRAM`
- Headline: *"Inisiatif Kami untuk Ekosistem Teknologi"*
- 3 kartu program (rounded card, light gray bg):

| Program | Deskripsi Singkat | Ikon |
|---|---|---|
| **Sakata Academy** | Pelatihan teknologi & coding untuk generasi muda | 🎓 |
| **Innovation Lab** | Ruang kolaborasi dan inkubasi ide startup sosial | 🔬 |
| **Tech for Impact** | Pengembangan solusi digital untuk masalah lokal | 🌱 |

---

### 4.5 Tentang Kami Section
- Background: light blue-gray atau putih
- Label pill: `TENTANG`
- Headline besar center: *"Dibangun untuk Masa Depan Teknologi Indonesia"*
- Paragraf deskripsi yayasan (2–3 kalimat)
- Layout: teks center atau split (teks kiri + visual kanan)

---

### 4.6 Komunitas / Testimoni Section
- Desain: avatar foto anggota/alumni tersebar melingkar (seperti referensi)
- Center: kutipan testimoni besar + nama
- Carousel atau rotasi otomatis antar testimoni

---

### 4.7 Mitra / Partner Section
- Label pill: `MITRA`
- Logo mitra dalam satu baris (grayscale, hover jadi berwarna)
- Infinite horizontal scroll (marquee effect)

---

### 4.8 CTA / Join Section
- Background: gradien gelap atau biru navy
- Headline: *"Siap Berkontribusi untuk Ekosistem Teknologi?"*
- Sub-teks ajakan singkat
- Dua tombol: `Bergabung Sekarang` + `Hubungi Kami`

---

### 4.9 Footer
- Logo + tagline singkat
- Link navigasi utama (kolom)
- Sosial media (X/Twitter, Instagram, LinkedIn, GitHub)
- Copyright: `© 2025 Sakata Innovation Center`

---

## 5. Design System

### Warna
```
Primary (Dark Navy) : #1A1F36
Accent (Blue)       : #2563EB  ← atau Teal #0D9488
Background          : #FFFFFF
Surface (Card)      : #F4F6FA
Text Primary        : #111827
Text Secondary      : #6B7280
```

### Tipografi
```
Display Font  : "Sora" atau "DM Sans" (Google Fonts) — untuk headline
Body Font     : "Inter" atau "Plus Jakarta Sans" — untuk body text
```

### Komponen Utama
- Pill badge (label section)
- Rounded card (program card)
- Sticky navbar dengan blur backdrop
- CTA button (solid + outline variant)

---

## 6. Animasi & Interaksi

| Elemen | Animasi |
|---|---|
| Hero headline | Fade-in + slide-up saat load |
| Stats counter | Count-up saat masuk viewport |
| Program cards | Staggered fade-in dari bawah |
| Testimoni | Auto-rotate setiap 5 detik |
| Partner logos | Infinite marquee scroll horizontal |
| Navbar | Backdrop blur muncul saat scroll > 50px |

Gunakan **Framer Motion** untuk animasi React/Next.js.

---

## 7. Tech Stack

```
Framework     : Next.js 14 (App Router)
Styling       : Tailwind CSS v3
Animasi       : Framer Motion
Font          : Google Fonts (next/font)
Icons         : Lucide React atau Heroicons
Linting       : ESLint + Prettier
Deploy target : Vercel
```

---

## 8. Struktur Folder

```
sakata-landing/
├── app/
│   ├── layout.tsx          # Root layout + font setup
│   ├── page.tsx            # Halaman utama (semua section)
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── ProgramSection.tsx
│   ├── AboutSection.tsx
│   ├── TestimonialSection.tsx
│   ├── PartnerSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── public/
│   ├── logo.svg
│   └── images/
├── tailwind.config.ts
└── package.json
```

---

## 9. Acceptance Criteria

- [ ] Responsive di mobile (375px), tablet (768px), dan desktop (1280px+)
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- [ ] Semua animasi smooth (60fps), tidak mengganggu UX
- [ ] Navbar sticky berfungsi dengan benar
- [ ] CTA button mengarah ke section atau halaman yang relevan
- [ ] Tidak ada broken link atau layout shift

---

## 10. Out of Scope (MVP)

- Halaman detail program (hanya landing page satu halaman)
- CMS / dashboard admin
- Formulir pendaftaran dengan backend (cukup redirect ke email/WhatsApp)
- Multi-bahasa (Inggris/Indonesia) — fase 2



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------