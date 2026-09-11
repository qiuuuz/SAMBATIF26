# SAMBATIF26 — Gacha Twibbon

> Web gacha twibbon eksklusif untuk mahasiswa Teknik Informatika Universitas Muhammadiyah Riau angkatan 2026.

🔗 **Live:** [qiuuuz.github.io/SAMBATIF26](https://qiuuuz.github.io/SAMBATIF26)

---

## Deskripsi

SAMBATIF26 Gacha Twibbon adalah web interaktif yang memungkinkan mahasiswa TIF UMRI 2026 untuk mendapatkan twibbon eksklusif secara acak melalui mekanisme gacha. Setiap karakter memiliki makna dan identitas yang merepresentasikan jiwa seorang engineer.

---

## Fitur

- 🎰 **Slot Machine Gacha** — 3 kolom slot bergulir dengan animasi smooth
- 🎨 **Dynamic Theme** — warna web berubah mengikuti karakter yang didapat
- 🔊 **Sound Effect** — suara slot machine yang sinkron dengan animasi
- 📥 **Download Twibbon** — download langsung atau via Twibbonize
- 👁️ **Preview Kartu** — lihat semua 6 karakter sebelum spin
- ✨ **Confetti & Efek Cahaya** — animasi perayaan saat hasil muncul
- 📱 **Fully Responsive** — optimal di semua ukuran perangkat

---

## 6 Karakter

| Karakter | Warna | Bidang |
|----------|-------|--------|
| GAGAK | `#1D4D7B` | Networking & IoT |
| GARUDA | `#866127` | System Architecture & Cybersecurity |
| PEGASUS | `#3E0088` | AI & Innovation |
| RUBAH | `#B35C1A` | Algorithm & Problem Solving |
| SINGA | `#B30000` | Leadership & Product Development |
| ULAR | `#006E00` | Cybersecurity & Ethical Hacking |

---

## Tech Stack

- **HTML5** — struktur markup
- **Tailwind CSS** (CDN) — utility-first styling
- **Custom CSS** — animasi, tema dinamis, layout
- **Anime.js** — animasi slot, confetti, reveal
- **Web Audio API** — sound effect sinkron
- **Canvas API** — particle background
- **Vanilla JS** — logika gacha, theme engine

---

## Struktur Folder

```
SAMBATIF26/
├── index.html          # Markup utama
├── style.css           # Semua styling & animasi CSS
├── main.js             # Logika gacha, audio, tema
├── CARD/               # Gambar kartu 6 karakter
├── ENNAMEL PIN/        # Gambar enamel pin 6 karakter
├── TWIBBON/            # File twibbon untuk download
├── SAMBATIF26/         # Logo UMRI, TIF, HM-TIF, SAMBATIF26
├── FONT/               # Font Coolvetica
└── sound/              # Sound effect slot machine
```

---

GitHub Pages otomatis update dalam ~1-2 menit setelah push.

---

## Cara Pasang Link Twibbonize

Buka `main.js`, cari field `twibbonize` di setiap item:

```js
twibbonize: 'https://twibbonize.com/LINK-KAMU-DI-SINI',
```

Ganti untuk masing-masing 6 karakter.

---

## Credits

- **Developer:** H4Qy — [@fkryalhq_](https://instagram.com/fkryalhq_)
- **Organisasi:** HM-TIF Fasilkom UMRI
- **Universitas:** Universitas Muhammadiyah Riau
- **Angkatan:** TIF 2026
