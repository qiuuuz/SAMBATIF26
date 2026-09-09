/* ═══════════════════════════════════════════════════════
   SAMBATIF26 — Gacha Twibbon
   main.js
   ═══════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════
//  DATA — 6 Twibbons
// ═══════════════════════════════════════════════════════
const items = [
  {
    id: 'GAGAK',
    name: 'GAGAK',
    enamel: 'ENNAMEL PIN/ENNAMEL GAGAK.png',
    twibbon: 'TWIBBON/TWIBBON GAGAK.png',
    card: 'CARD/GAGAK CARD.png',
    twibbonize: 'https://twb.nz/ravenkingssambatif26',
    meaning: 'Gagak menggambarkan kebebasan, koneksi, dan kemampuan menjangkau berbagai tempat. Dalam Teknik Informatika, gagak merepresentasikan para engineer yang membangun koneksi antar perangkat dan manusia melalui teknologi — bergerak di bidang networking, IoT, dan komunikasi digital. Because technology means nothing without connection.'
  },
  {
    id: 'GARUDA',
    name: 'GARUDA',
    enamel: 'ENNAMEL PIN/ENNAMEL GARUDA.png',
    twibbon: 'TWIBBON/TWIBBON GARUDA.png',
    card: 'CARD/GARUDA CARD.png',
    twibbonize: 'https://twb.nz/garudaindonesia26samba',
    meaning: 'Garuda melambangkan kekuatan, visi besar, dan tanggung jawab. Dalam dunia teknologi, Garuda merepresentasikan engineer yang membangun fondasi digital agar sistem berjalan aman dan stabil — bergerak di area system architecture, cybersecurity, dan infrastructure. They are the backbone behind every great digital ecosystem.'
  },
  {
    id: 'PEGASUS',
    name: 'PEGASUS',
    enamel: 'ENNAMEL PIN/ENNAMEL PEGGASUS.png',
    twibbon: 'TWIBBON/TWIBBON PEGASUS.png',
    card: 'CARD/PEGGASUS CARD.png',
    twibbonize: 'https://twb.nz/pegasussamba26',
    meaning: 'Pegasus melambangkan kebangkitan, perubahan, dan inovasi tanpa batas. Dalam dunia teknologi, Pegasus menggambarkan para visioner yang selalu menciptakan sesuatu yang baru dari ide yang mungkin terlihat impossible — AI researcher, developer kreatif, dan future builder. They don\'t follow the future, they create it.'
  },
  {
    id: 'RUBAH',
    name: 'RUBAH',
    enamel: 'ENNAMEL PIN/ENAMEL RUBAH.png',
    twibbon: 'TWIBBON/TWIBBON RUBAH.png',
    card: 'CARD/RUBAH CARD.png',
    twibbonize: 'https://twb.nz/foxkingsambatip26',
    meaning: 'Rubah menggambarkan sosok engineer yang punya sharp mind, adaptive thinking, dan problem-solving skill. Dalam dunia Teknik Informatika, rubah merepresentasikan orang-orang yang selalu mencari cara paling smart untuk menyelesaikan masalah — bukan cuma kerja keras tapi juga kerja cerdas. They don\'t just write code, they understand the brain behind the code.'
  },
  {
    id: 'SINGA',
    name: 'SINGA',
    enamel: 'ENNAMEL PIN/ENNAMEL SINGA.png',
    twibbon: 'TWIBBON/TWIBBON SINGA.png',
    card: 'CARD/SINGA CARD.png',
    twibbonize: 'https://twb.nz/lionskingsambatif26',
    meaning: 'Singa menjadi simbol keberanian, kepemimpinan, dan ambisi untuk menciptakan sesuatu yang besar. Dalam Teknik Informatika, singa menggambarkan individu yang berani mengambil challenge, memimpin project, dan membawa ide menjadi real product. They don\'t wait for opportunities, they build them.'
  },
  {
    id: 'ULAR',
    name: 'ULAR',
    enamel: 'ENNAMEL PIN/ENAMEL ULAR.png',
    twibbon: 'TWIBBON/TWIBBON ULAR.png',
    card: 'CARD/ULAR CARD.png',
    twibbonize: 'https://twb.nz/snakesambatif26',
    meaning: 'Ular merepresentasikan kecerdasan, strategi, dan kemampuan membaca celah. Dalam dunia IT, ular punya filosofi seorang cybersecurity expert yang memahami bagaimana sistem bekerja, bagaimana sistem bisa diserang, dan bagaimana mengamankannya. To protect the system, you must understand how it can break.'
  }
];

// ═══════════════════════════════════════════════════════
//  CHARACTER THEMES — warna per karakter
//  Setiap tema: bg, accent, accent2, slate, light
//  Semua diturunkan dari warna dasar karakter
//  dengan mempertahankan kontras & keterbacaan
// ═══════════════════════════════════════════════════════
const themes = {
  SINGA: {
    bg:      '#1A0000',  // navy tapi bernuansa merah gelap
    accent:  '#B30000',  // merah kuat
    accent2: '#D42020',  // merah lebih terang untuk hover
    slate:   '#A06060',  // slate bernuansa merah muted
    light:   '#2E0808',  // navy-light bernuansa merah
  },
  ULAR: {
    bg:      '#001A00',  // navy bernuansa hijau gelap
    accent:  '#006E00',  // hijau kuat
    accent2: '#1A9A1A',  // hijau lebih terang
    slate:   '#508050',  // slate bernuansa hijau muted
    light:   '#002E00',  // navy-light bernuansa hijau
  },
  PEGASUS: {
    bg:      '#0D0020',  // navy bernuansa ungu gelap
    accent:  '#3E0088',  // ungu kuat
    accent2: '#5E20A8',  // ungu lebih terang
    slate:   '#7060A0',  // slate bernuansa ungu muted
    light:   '#1A0040',  // navy-light bernuansa ungu
  },
  GAGAK: {
    bg:      '#001428',  // navy bernuansa biru teal gelap
    accent:  '#1D4D7B',  // biru teal
    accent2: '#2E6A9E',  // biru teal lebih terang
    slate:   '#507090',  // slate bernuansa biru muted
    light:   '#002040',  // navy-light bernuansa biru
  },
  RUBAH: {
    bg:      '#1A0A00',  // navy bernuansa oranye gelap
    accent:  '#B35C1A',  // oranye coklat
    accent2: '#D07030',  // oranye lebih terang
    slate:   '#907060',  // slate bernuansa oranye muted
    light:   '#2E1000',  // navy-light bernuansa oranye
  },
  GARUDA: {
    bg:      '#1A1200',  // navy bernuansa coklat emas gelap
    accent:  '#866127',  // coklat keemasan
    accent2: '#A07A35',  // lebih terang untuk hover
    slate:   '#806050',  // slate bernuansa emas muted
    light:   '#2E2000',  // navy-light bernuansa emas
  },
};

// Default theme (navy asli)
const defaultTheme = {
  bg:      '#0B0D2E',
  accent:  '#4A5490',
  accent2: '#5B68A8',
  slate:   '#7480A0',
  light:   '#13163D',
};

// ─── Hex color interpolation helpers ─────────────────
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3
    ? h.split('').map(c => c + c).join('')
    : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function rgbToHex({ r, g, b }) {
  return '#' + [r, g, b].map(v =>
    Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')
  ).join('');
}
function lerpColor(from, to, t) {
  const a = hexToRgb(from), b = hexToRgb(to);
  return rgbToHex({
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  });
}

// Current live colors (mulai dari default)
let liveTheme = { ...defaultTheme };

function applyTheme(targetTheme, withBurst = true) {
  const root      = document.documentElement;
  const burst     = document.getElementById('theme-burst');
  const fromTheme = { ...liveTheme };
  const keys      = ['bg', 'accent', 'accent2', 'slate', 'light'];

  // Anime.js interpolasi 0 → 1 selama 900ms
  anime({
    targets: { t: 0 },
    t: 1,
    duration: 900,
    easing: 'easeInOutCubic',
    update(anim) {
      const t = anim.animations[0].currentValue;
      keys.forEach(k => {
        liveTheme[k] = lerpColor(fromTheme[k], targetTheme[k], t);
      });

      const navy  = liveTheme.bg;
      const blue  = liveTheme.accent;
      const glow  = liveTheme.accent2;
      const slate = liveTheme.slate;
      const light = liveTheme.light;

      // Update CSS variables utama
      root.style.setProperty('--navy',         navy);
      root.style.setProperty('--blue',         blue);
      root.style.setProperty('--blue-glow',    glow);
      root.style.setProperty('--slate',        slate);
      root.style.setProperty('--navy-light',   light);
      root.style.setProperty('--theme-accent', blue);

      // Turunkan rgb components untuk rgba() di CSS
      const nr = hexToRgb(navy);
      const br = hexToRgb(blue);
      const sr = hexToRgb(slate);
      const lr = hexToRgb(light);
      root.style.setProperty('--navy-rgb',       `${nr.r},${nr.g},${nr.b}`);
      root.style.setProperty('--blue-rgb',       `${br.r},${br.g},${br.b}`);
      root.style.setProperty('--slate-rgb',      `${sr.r},${sr.g},${sr.b}`);
      root.style.setProperty('--navy-light-rgb', `${lr.r},${lr.g},${lr.b}`);

      // Set background langsung ke body & elemen kunci
      document.body.style.backgroundColor = navy;

      // Navbar
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.style.background      = `rgba(${nr.r},${nr.g},${nr.b},0.75)`;
        navbar.style.borderColor     = `rgba(${sr.r},${sr.g},${sr.b},0.2)`;
      }

      // Slot machine
      const machine = document.getElementById('slot-machine');
      if (machine) {
        machine.style.background  = `rgba(${Math.max(0,nr.r-4)},${Math.max(0,nr.g-3)},${Math.max(0,nr.b-17)},0.82)`;
        machine.style.borderColor = `rgba(${sr.r},${sr.g},${sr.b},0.3)`;
      }

      // Gacha slot container
      const container = document.querySelector('.gacha-slot-container');
      if (container) {
        container.style.background  = `rgba(${nr.r},${nr.g},${nr.b},0.72)`;
        container.style.borderColor = `rgba(${sr.r},${sr.g},${sr.b},0.25)`;
      }

      // Modal card
      const modal = document.querySelector('.modal-card');
      if (modal) {
        modal.style.background  = `rgba(${nr.r},${nr.g},${nr.b},0.92)`;
        modal.style.borderColor = `rgba(${sr.r},${sr.g},${sr.b},0.25)`;
      }

      // Preview cards
      document.querySelectorAll('.preview-card').forEach(c => {
        c.style.background  = light;
        c.style.borderColor = `rgba(${sr.r},${sr.g},${sr.b},0.15)`;
      });

      // Btn-spin gradient
      const btnSpin = document.getElementById('btn-spin');
      if (btnSpin) {
        btnSpin.style.background = `linear-gradient(135deg, ${blue} 0%, ${glow} 100%)`;
      }

      // Download button
      const btnDl = document.getElementById('btn-download');
      if (btnDl) btnDl.style.background = blue;
    }
  });

  // Burst radial glow saat reveal
  if (withBurst && burst) {
    burst.style.background =
      `radial-gradient(circle at 50% 50%, ${targetTheme.accent} 0%, transparent 65%)`;
    burst.classList.add('active');
    setTimeout(() => burst.classList.remove('active'), 700);
  }
}

function resetTheme() {
  // Tidak reset — warna tetap sampai refresh (sesuai permintaan)
}
let spinCount    = 0;
let isSpinning   = false;
let currentResult = null;
let hasSpun      = false; // gacha hanya boleh 1x

// ═══════════════════════════════════════════════════════
//  LOADING SCREEN
// ═══════════════════════════════════════════════════════
window.addEventListener('load', () => {
  setTimeout(() => {
    const loading = document.getElementById('loading');
    // Aktifkan transisi dulu sebelum tambah class .hidden
    loading.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1), visibility 0.7s';
    loading.classList.add('hidden');
    // Jalankan entrance setelah fade selesai
    setTimeout(initEntrance, 750);
  }, 1400);
});

// ═══════════════════════════════════════════════════════
//  ENTRANCE ANIMATION (Anime.js)
// ═══════════════════════════════════════════════════════
function initEntrance() {
  anime({
    targets: '.reveal',
    opacity: [0, 1],
    translateY: [30, 0],
    easing: 'easeOutExpo',
    duration: 700,
    delay: anime.stagger(120)
  });
  checkReveal();
}

// ═══════════════════════════════════════════════════════
//  SCROLL REVEAL
// ═══════════════════════════════════════════════════════
function checkReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add('visible');
      // trigger section-divider di dalam element ini
      el.querySelectorAll('.section-divider').forEach(d => d.classList.add('visible'));
    }
  });
  // standalone dividers (tidak dalam .reveal)
  document.querySelectorAll('.section-divider:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) el.classList.add('visible');
  });
}
window.addEventListener('scroll', checkReveal, { passive: true });

// ═══════════════════════════════════════════════════════
//  NAVBAR SCROLL
// ═══════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ═══════════════════════════════════════════════════════
//  PARTICLES CANVAS
// ═══════════════════════════════════════════════════════
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.5 + 0.3;
      this.a  = Math.random() * 0.4 + 0.05;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.vx = (Math.random() - 0.5) * 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -5) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(116,128,160,${this.a})`;
      ctx.fill();
    }
  }

  const particles = Array.from({ length: 80 }, () => new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

// ═══════════════════════════════════════════════════════
//  AUDIO ENGINE
//  Satu file MP3 slot machine → dipotong jadi beberapa segmen:
//    spin  : loop saat gulungan berputar
//    tick  : pendek saat satu kolom berhenti
//    reveal: saat semua berhenti & win flash
// ═══════════════════════════════════════════════════════
const SFX_SRC = 'sound/echl-sound-effect-slot-machine.mp3';

let audioCtx   = null;
let sfxBuffer  = null;
let spinSource = null; // AudioBufferSourceNode yang sedang loop

// Inisialisasi AudioContext setelah interaksi user (autoplay policy)
function ensureAudio() {
  if (audioCtx) return Promise.resolve();
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return fetch(SFX_SRC)
    .then(r => r.arrayBuffer())
    .then(ab => audioCtx.decodeAudioData(ab))
    .then(buf => { sfxBuffer = buf; });
}

/**
 * playSegment(startSec, durationSec, volume, loop)
 * Potong buffer pada detik tertentu dan putar.
 * Kembalikan source node agar bisa dihentikan.
 */
function playSegment(startSec, durationSec, volume = 1, loop = false) {
  if (!audioCtx || !sfxBuffer) return null;

  const gain   = audioCtx.createGain();
  gain.gain.value = volume;
  gain.connect(audioCtx.destination);

  const src    = audioCtx.createBufferSource();
  src.buffer   = sfxBuffer;
  src.loop     = loop;
  if (loop) {
    src.loopStart = startSec;
    src.loopEnd   = startSec + durationSec;
  }
  src.connect(gain);
  src.start(0, startSec, loop ? undefined : durationSec);

  // Fade out saat stop agar tidak klik
  src._gain = gain;
  return src;
}

function fadeOutAndStop(srcNode, durationMs = 120) {
  if (!srcNode || !srcNode._gain) return;
  const gain = srcNode._gain;
  const now  = audioCtx.currentTime;
  gain.gain.setValueAtTime(gain.gain.value, now);
  gain.gain.linearRampToValueAtTime(0, now + durationMs / 1000);
  setTimeout(() => { try { srcNode.stop(); } catch(e){} }, durationMs + 50);
}

// ─── Segmen sound — disinkron dengan file 9 detik ─────
// Kolom 1 berhenti di 4.10s
// Kolom 2 berhenti di 4.35s
// Kolom 3 berhenti di 4.69s
// Sisa 4.69 → 9.0s = reveal/jingle
const SEG = {
  spin:   { start: 0.0,  dur: 4.69 }, // loop dari awal sampai kolom terakhir berhenti
  tick:   { start: 4.10, dur: 0.25 }, // klik pendek saat kolom berhenti
  reveal: { start: 4.69, dur: 4.31 }  // jingle setelah semua berhenti
};

// Tick per kolom punya offset berbeda sesuai waktunya
const TICK_TIMES = [4.10, 4.35, 4.69]; // detik di file audio

function sfxSpin()         { spinSource = playSegment(SEG.spin.start, SEG.spin.dur, 0.7, true); }
function sfxTickAt(colIdx) { playSegment(TICK_TIMES[colIdx], 0.25, 0.9, false); }
function sfxReveal()       { playSegment(SEG.reveal.start, SEG.reveal.dur, 0.9, false); }
function sfxStop()         { if (spinSource) { fadeOutAndStop(spinSource, 80); spinSource = null; } }
const REEL_COUNT   = 3;
const VISIBLE_ROWS = 3;
const PAD_BEFORE   = 18; // item acak sebelum target

function getCellH() {
  const machine = document.getElementById('slot-machine');
  return machine ? Math.floor(machine.offsetHeight / VISIBLE_ROWS) : 60;
}

/**
 * buildReel
 * ─────────
 * Sequence layout (per kolom):
 *   index  0 .. PAD_BEFORE-1  → item acak (padding scroll)
 *   index  PAD_BEFORE         → item acak (row ATAS saat berhenti)
 *   index  PAD_BEFORE+1       → TARGET   (row TENGAH — ini yg terlihat)
 *   index  PAD_BEFORE+2       → item acak (row BAWAH saat berhenti)
 *
 * stopY (translateY saat berhenti):
 *   Kita mau index (PAD_BEFORE+1) tampil di baris tengah viewport.
 *   Baris tengah = offset cellH dari top visible window.
 *   visible top = -translateY
 *   top of target cell = (PAD_BEFORE+1) * cellH
 *   kita mau: top of target cell = -translateY + cellH
 *   → translateY = -((PAD_BEFORE+1)*cellH - cellH)
 *   → translateY = -(PAD_BEFORE * cellH)   ← stopY
 */
function buildReel(reelEl, targetItem, cellH) {
  reelEl.innerHTML = '';
  reelEl.style.transform = 'translateY(0px)';

  const sequence = [];

  // padding acak
  for (let i = 0; i < PAD_BEFORE; i++) {
    sequence.push(items[Math.floor(Math.random() * items.length)]);
  }
  // tiga baris terakhir yang terlihat saat berhenti
  sequence.push(items[Math.floor(Math.random() * items.length)]); // row atas
  sequence.push(targetItem);                                        // row tengah ← TARGET
  sequence.push(items[Math.floor(Math.random() * items.length)]); // row bawah

  sequence.forEach(item => {
    const cell        = document.createElement('div');
    cell.className    = 'slot-cell';
    cell.style.height = cellH + 'px';
    const img = document.createElement('img');
    img.src   = item.enamel;
    img.alt   = item.name;
    cell.appendChild(img);
    reelEl.appendChild(cell);
  });

  const stopY = -(PAD_BEFORE * cellH);
  return stopY;
}

// ═══════════════════════════════════════════════════════
//  GACHA LOGIC
// ═══════════════════════════════════════════════════════

// Durasi animasi tiap kolom HARUS match dengan TICK_TIMES audio:
//   Kolom 0 (kiri)   → berhenti di 4100ms
//   Kolom 1 (kanan)  → berhenti di 4350ms
//   Kolom 2 (tengah) → berhenti di 4690ms
//
// Order berhenti: kiri (0) → kanan (2) → tengah (1)
// Map colIdx → durasi ms
const COL_STOP_MS = {
  0: 4100,  // kiri  — tick di 4.10s
  2: 4350,  // kanan — tick di 4.35s
  1: 4690   // tengah — tick di 4.69s
};

function doGacha() {
  if (isSpinning || hasSpun) return;
  isSpinning = true;

  const btn         = document.getElementById('btn-spin');
  const spinText    = document.getElementById('spin-text');
  const machine     = document.getElementById('slot-machine');
  const statusLabel = document.getElementById('spin-status');

  btn.disabled            = true;
  spinText.textContent    = 'Spinning...';
  machine.classList.add('spinning');
  statusLabel.textContent = 'MENCARI CODERMU...';
  statusLabel.classList.remove('win');

  document.querySelectorAll('.slot-col').forEach(c => c.classList.remove('stopped'));

  const targetIndex = Math.floor(Math.random() * items.length);
  const result      = items[targetIndex];
  currentResult     = result;

  const cellH = getCellH();

  const reelEls = [
    document.getElementById('slot-reel-0'), // kiri
    document.getElementById('slot-reel-1'), // tengah
    document.getElementById('slot-reel-2')  // kanan
  ];

  const stopYs = reelEls.map(el => buildReel(el, result, cellH));

  let doneCount = 0;

  // ─── Mulai audio — sync langsung dari awal file ───────
  ensureAudio().then(() => {
    sfxSpin();
  }).catch(() => {});

  reelEls.forEach((reel, colIdx) => {
    const stopY = stopYs[colIdx];
    const dur   = COL_STOP_MS[colIdx]; // ms sesuai timing audio
    const fastY = stopY - cellH * 4;

    anime({
      targets: reel,
      keyframes: [
        { translateY: -(cellH * 3), duration: dur * 0.10, easing: 'easeInCubic'  },
        { translateY: fastY,         duration: dur * 0.64, easing: 'linear'        },
        { translateY: stopY,         duration: dur * 0.26, easing: 'easeOutQuart'  }
      ],
      complete: () => {
        reel.style.transform = `translateY(${stopY}px)`;

        // ─── Tick sound sesuai kolom ─────────────────────
        const tickOrder = { 0: 0, 2: 1, 1: 2 };
        sfxTickAt(tickOrder[colIdx]);

        // ─── Efek cahaya kolom berhenti ──────────────────
        const colEl = document.getElementById(`slot-col-${colIdx}`);
        colEl.classList.remove('stopped');
        void colEl.offsetWidth;
        colEl.classList.add('stopped');

        // Bounce proporsional dengan tinggi kolom
        const bounceAmt = Math.max(4, Math.round(cellH * 0.12));
        anime({
          targets: colEl,
          translateY: [0, -bounceAmt, bounceAmt * 0.5, -bounceAmt * 0.25, 0],
          duration:   260,
          easing:     'easeOutBounce'
        });

        doneCount++;
        if (doneCount === REEL_COUNT) {
          sfxStop();
          finishGacha(result);
        }
      }
    });
  });
}

function finishGacha(result) {
  spinCount++;
  hasSpun = true;
  document.getElementById('spin-count').textContent = spinCount;

  const btn         = document.getElementById('btn-spin');
  const spinText    = document.getElementById('spin-text');
  const machine     = document.getElementById('slot-machine');
  const statusLabel = document.getElementById('spin-status');

  machine.classList.remove('spinning');

  setTimeout(() => {
    // ─── Win flash + reveal sound ─────────────────────
    sfxReveal();
    machine.classList.add('win-flash');

    anime({
      targets: '.slot-col',
      boxShadow: [
        'inset 0 0 0px rgba(116,128,160,0)',
        'inset 0 0 24px rgba(116,128,160,0.3)',
        'inset 0 0 0px rgba(116,128,160,0)'
      ],
      duration: 700,
      delay:    anime.stagger(80),
      easing:   'easeOutExpo'
    });

    statusLabel.textContent = result.name + ' ✦';
    statusLabel.classList.add('win');

    btn.disabled         = false;
    spinText.textContent = '✦ LIHAT HASIL ✦';
    btn.onclick          = () => openResult(currentResult);
    isSpinning           = false;

    setTimeout(() => openResult(result), 700);
  }, 150);
}

// ═══════════════════════════════════════════════════════
//  PREVIEW CARDS — hanya lihat, tanpa download
// ═══════════════════════════════════════════════════════
function openGachaWithResult(id) {
  const result = items.find(i => i.id === id);
  if (!result) return;
  openResult(result, true); // previewOnly = true
}

// ═══════════════════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════════════════
function openResult(result, previewOnly = false) {
  document.getElementById('result-enamel').src              = result.enamel;
  document.getElementById('result-name').textContent        = result.name;
  document.getElementById('result-meaning').textContent     = result.meaning;
  document.getElementById('result-twibbon').src             = result.twibbon;

  const btnDownload = document.getElementById('btn-download');
  const btnAgain    = document.getElementById('btn-again');
  const rarity      = document.getElementById('result-rarity');

  if (previewOnly) {
    btnDownload.style.display = 'none';
    btnAgain.style.display    = 'none';
    document.getElementById('btn-twibbonize').style.display = 'none';
    rarity.textContent        = 'Preview Kartu';

    let hint = document.getElementById('modal-hint');
    if (!hint) {
      hint = document.createElement('p');
      hint.id = 'modal-hint';
      hint.style.cssText = 'font-size:0.75rem; color:var(--slate); margin-top:12px; letter-spacing:0.05em;';
      document.querySelector('.modal-actions').after(hint);
    }
    hint.textContent  = hasSpun
      ? '— Kamu sudah mendapatkan codermu —'
      : '— Unlock your digital identity with a single spin —';
    hint.style.display = 'block';

  } else {
    // Hasil gacha — tampilkan download
    btnDownload.href = result.twibbon;
    btnDownload.setAttribute('download', 'Twibbon SAMBATIF26 - ' + result.name + '.png');
    btnDownload.style.display = 'flex';
    btnAgain.style.display    = 'none';
    rarity.textContent        = 'Coder Ditemukan';

    // Twibbonize button
    const btnTwibbonize = document.getElementById('btn-twibbonize');
    btnTwibbonize.href         = result.twibbonize;
    btnTwibbonize.style.display = 'flex';

    const hint = document.getElementById('modal-hint');
    if (hint) hint.style.display = 'none';
  }

  const modal = document.getElementById('result-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Apply character theme saat hasil gacha (bukan preview)
  if (!previewOnly && themes[result.id]) {
    setTimeout(() => applyTheme(themes[result.id]), 200);
  }

  if (!previewOnly) setTimeout(() => burstConfetti(), 300);

  anime({
    targets: '.result-enamel',
    rotateY: ['-30deg', '0deg'],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutBack',
    delay: 200
  });

  modal.addEventListener('keydown', trapFocus);
}

function closeModal() {
  const modal = document.getElementById('result-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  modal.removeEventListener('keydown', trapFocus);
}

// Tutup modal klik backdrop
document.getElementById('result-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Tutup modal tekan Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Focus trap di dalam modal
function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const modal    = document.getElementById('result-modal');
  const focusable = modal.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
    e.preventDefault();
    (e.shiftKey ? last : first).focus();
  }
}

// ═══════════════════════════════════════════════════════
//  CONFETTI
// ═══════════════════════════════════════════════════════
function burstConfetti() {
  const container = document.getElementById('confetti-container');
  const colors    = ['#4A5490', '#7480A0', '#EDE8DC', '#0B0D2E', '#8896C0', '#C8D0E4'];

  container.innerHTML = '';

  for (let i = 0; i < 55; i++) {
    const el = document.createElement('div');
    el.className        = 'confetti-piece';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.left        = (30 + Math.random() * 40) + '%';
    el.style.top         = (20 + Math.random() * 20) + '%';
    el.style.width       = (6 + Math.random() * 8) + 'px';
    el.style.height      = (6 + Math.random() * 8) + 'px';
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    container.appendChild(el);
  }

  anime({
    targets: '.confetti-piece',
    translateX: () => anime.random(-300, 300),
    translateY: () => anime.random(-280, 160),
    rotate:     () => anime.random(-360, 360),
    opacity:    [{ value: 1, duration: 100 }, { value: 0, duration: 800, delay: 400 }],
    scale:      [{ value: 1, duration: 100 }, { value: 0.3, duration: 900, delay: 300 }],
    duration:   1200,
    easing:     'easeOutExpo',
    delay:      anime.stagger(18),
    complete:   () => { container.innerHTML = ''; }
  });
}

// ═══════════════════════════════════════════════════════
//  KEYBOARD SUPPORT — preview cards
// ═══════════════════════════════════════════════════════
document.querySelectorAll('.preview-card[role="button"]').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// ═══════════════════════════════════════════════════════
//  LOGO HOVER EFFECT
// ═══════════════════════════════════════════════════════
document.querySelector('.hero-logo')?.addEventListener('mouseenter', function () {
  anime({
    targets: this,
    rotate: ['-5deg', '5deg', '0deg'],
    duration: 500,
    easing: 'easeOutElastic(1, 0.6)'
  });
});
