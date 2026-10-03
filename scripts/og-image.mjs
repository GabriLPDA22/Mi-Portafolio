/**
 * Genera las imágenes para compartir (Open Graph, 1200×630) con el diseño actual:
 *   public/img/og-image.jpg (español) y public/img/og-image-en.jpg (inglés).
 * Grafito + violeta, Archivo, logo G y el retrato en blanco y negro.
 * Uso: node scripts/og-image.mjs
 * Usa el Chrome instalado en el equipo (chrome-launcher + puppeteer-core, que ya vienen con
 * Lighthouse en devDependencies).
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { Launcher } from 'chrome-launcher';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const b64 = (file) => readFileSync(`${root}${file}`).toString('base64');
const font = b64('src/assets/fonts/archivo-latin-wdth-wght.woff2');
const logo = b64('brand/logo-g.png');
// El retrato en JPEG para incrustarlo (el original es WebP)
const photo = (await sharp(`${root}src/assets/img/Yo.webp`).resize(520).grayscale().jpeg({ quality: 88 }).toBuffer()).toString('base64');

const texts = {
  es: {
    role: 'Desarrollador full-stack',
    stack: '.NET · Vue · Astro · React Native',
    status: 'Disponible · Zaragoza o remoto',
    file: 'og-image.jpg',
  },
  en: {
    role: 'Full-stack developer',
    stack: '.NET · Vue · Astro · React Native',
    status: 'Available · Spain or remote',
    file: 'og-image-en.jpg',
  },
};

const page = (t) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Archivo;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:400 900;font-stretch:100% 125%}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#0c0c0f;font-family:Archivo;color:#ededf2;position:relative}
.glow{position:absolute;inset:0;background:
  radial-gradient(620px 520px at 92% 8%,rgba(124,58,237,.42),transparent 70%),
  radial-gradient(520px 360px at 0% 110%,rgba(124,58,237,.18),transparent 70%)}
.brand{position:absolute;left:72px;top:58px;display:flex;align-items:center;gap:14px;font-size:26px;font-weight:700;font-stretch:112%}
.brand img{height:46px;filter:drop-shadow(0 0 14px rgba(139,92,246,.6))}
.brand span{opacity:.55}
.name{position:absolute;left:66px;top:150px;font-size:132px;font-weight:860;font-stretch:125%;letter-spacing:-.045em;line-height:.86;text-transform:uppercase;
  background:linear-gradient(180deg,#fff 10%,#9a9ab0 110%);-webkit-background-clip:text;background-clip:text;color:transparent}
.role{position:absolute;left:72px;top:398px;font-size:42px;font-weight:650;font-stretch:112%;letter-spacing:-.02em;color:#a78bfa}
.stack{position:absolute;left:72px;top:460px;font-size:28px;font-weight:500;color:#b4b4c2}
.status{position:absolute;left:72px;bottom:56px;display:flex;align-items:center;gap:14px;border:1.5px solid rgba(52,211,153,.35);border-radius:999px;padding:12px 22px;font-size:24px;font-weight:600;color:#a7f3d0}
.status i{width:14px;height:14px;border-radius:50%;background:#34d399;box-shadow:0 0 16px rgba(52,211,153,.8)}
.photo{position:absolute;right:66px;top:78px;width:330px;height:474px;border-radius:30px;overflow:hidden;background:#d9d9de;
  box-shadow:0 0 0 2px rgba(237,237,242,.12),0 40px 120px -30px rgba(124,58,237,.8)}
.photo img{width:100%;height:100%;object-fit:cover;object-position:50% 30%}
.photo::after{content:'';position:absolute;inset:0;background:linear-gradient(200deg,rgba(139,92,246,.4),rgba(76,29,149,.15) 45%,transparent 70%);mix-blend-mode:multiply}
</style></head><body>
<div class="glow"></div>
<div class="brand"><img src="data:image/png;base64,${logo}" alt=""><b>gabriel<span>.codes</span></b></div>
<div class="name">Gabriel<br>Saiz</div>
<div class="role">${t.role}</div>
<div class="stack">${t.stack}</div>
<div class="status"><i></i>${t.status}</div>
<div class="photo"><img src="data:image/jpeg;base64,${photo}" alt=""></div>
</body></html>`;

const [chrome] = Launcher.getInstallations();
if (!chrome) throw new Error('No se ha encontrado Chrome instalado');
const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
try {
  const tab = await browser.newPage();
  await tab.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  for (const t of Object.values(texts)) {
    await tab.setContent(page(t), { waitUntil: 'load' });
    await tab.evaluate(() => document.fonts.ready);
    await tab.screenshot({ path: `${root}public/img/${t.file}`, type: 'jpeg', quality: 88 });
    console.log(`OK public/img/${t.file}`);
  }
} finally {
  await browser.close();
}
