/**
 * Genera public/img/og-image.jpg (1200×630) con el estilo actual de la web: negro con brillo
 * dorado en el horizonte, nombre con brillo metálico (Geist), acento en Instrument Serif y foto.
 * Uso: node scripts/og-image.mjs   (requiere Playwright/Chromium)
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = fileURLToPath(new URL('..', import.meta.url));
const b64 = (p) => readFileSync(`${root}${p}`).toString('base64');
const font = (f) => b64(`src/assets/fonts/${f}`);

const chips = ['React Native', 'Next.js', '.NET', 'TypeScript', 'PostgreSQL'];

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Geist;src:url(data:font/woff2;base64,${font('geist-latin-wght-normal.woff2')}) format('woff2');font-weight:100 900}
@font-face{font-family:Serif;font-style:italic;src:url(data:font/woff2;base64,${font('instrument-serif-latin-400-italic.woff2')}) format('woff2')}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#08080a;font-family:Geist;color:#f2ede4;position:relative}
.grid{position:absolute;inset:0;background-image:linear-gradient(to right,rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.05) 1px,transparent 1px);
  background-size:60px 60px;-webkit-mask-image:radial-gradient(ellipse 70% 70% at 30% 0%,#000 30%,transparent 75%)}
.halo{position:absolute;left:-100px;top:-200px;width:1000px;height:700px;background:radial-gradient(closest-side,rgba(240,180,41,.16),transparent 70%)}
.blue{position:absolute;right:-150px;top:120px;width:700px;height:600px;background:radial-gradient(closest-side,rgba(61,91,255,.14),transparent 70%)}
.horizon{position:absolute;left:50%;top:505px;width:2600px;height:2600px;transform:translateX(-50%);border-radius:50%;background:#0b0b0e;
  box-shadow:inset 0 2px 0 rgba(255,220,140,.6),inset 0 30px 80px -40px rgba(240,180,41,.5),0 -2px 30px rgba(240,180,41,.3),0 -40px 160px -30px rgba(240,180,41,.45)}
.left{position:absolute;left:80px;top:78px;width:700px}
.badge{display:inline-flex;align-items:center;gap:12px;border:1px solid rgba(240,180,41,.35);background:rgba(240,180,41,.06);
  color:#f6dfa6;font-size:21px;font-weight:500;padding:9px 20px;border-radius:999px}
.dot{width:11px;height:11px;border-radius:50%;background:#4ade80;box-shadow:0 0 12px rgba(74,222,128,.8)}
h1{margin-top:34px;font-size:122px;font-weight:600;letter-spacing:-.05em;line-height:.9;
  background:linear-gradient(180deg,#fff 0%,#f2ede4 45%,rgba(242,237,228,.6) 100%);-webkit-background-clip:text;color:transparent}
.role{margin-top:22px;font-size:40px;font-weight:500;letter-spacing:-.03em;color:rgba(242,237,228,.9)}
.serif{font-family:Serif;font-style:italic;font-weight:400;font-size:1.15em;
  background:linear-gradient(100deg,#ffe39a,#f0b429 45%,#c9921a);-webkit-background-clip:text;color:transparent;padding-right:4px}
.chips{margin-top:34px;display:flex;flex-wrap:wrap;gap:10px}
.chip{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);border-radius:999px;padding:8px 18px;font-size:19px;color:rgba(242,237,228,.75)}
.photo{position:absolute;right:80px;top:78px;width:300px;height:380px;border-radius:32px;overflow:hidden;border:1px solid rgba(255,255,255,.12);
  box-shadow:0 0 0 8px rgba(255,255,255,.02),0 30px 80px -20px rgba(240,180,41,.35)}
.photo img{width:100%;height:100%;object-fit:cover;object-position:50% 25%;filter:grayscale(1) contrast(1.05)}
.photo::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(8,8,10,.85))}
.foot{position:absolute;left:80px;right:80px;bottom:40px;display:flex;justify-content:space-between;align-items:center;font-size:22px;color:rgba(242,237,228,.7)}
.brand{display:flex;align-items:center;gap:12px;font-weight:600;color:#f2ede4}
.brand img{width:34px;height:34px}
</style></head><body>
<div class="halo"></div><div class="blue"></div><div class="grid"></div><div class="horizon"></div>
<div class="left">
  <span class="badge"><span class="dot"></span>Abierto a oportunidades · Zaragoza / Remoto</span>
  <h1>Gabriel Saiz</h1>
  <p class="role">Desarrollador <span class="serif">full-stack</span></p>
  <div class="chips">${chips.map((c) => `<span class="chip">${c}</span>`).join('')}</div>
</div>
<div class="photo"><img src="data:image/webp;base64,${b64('src/assets/img/Yo.webp')}"></div>
<div class="foot">
  <span class="brand"><img src="data:image/png;base64,${b64('public/img/brand-mark-on-dark.png')}"><span>gabriel<span style="color:#f0b429">.</span><span style="opacity:.6">codes</span></span></span>
  <span>gabrielcodes.dev</span>
</div>
</body></html>`;

const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${root}public/img/og-image.jpg`, type: 'jpeg', quality: 88 });
await browser.close();
console.log('public/img/og-image.jpg');
