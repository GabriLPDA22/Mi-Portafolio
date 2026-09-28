/**
 * Genera public/img/og-image.jpg (1200×630) con el estilo 8-bit actual de la web:
 * fondo noir, título con contorno dorado, fuente pixel Tiny5 y el monigote en pixel art.
 * Uso: node scripts/og-image.mjs   (requiere Playwright/Chromium)
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = fileURLToPath(new URL('..', import.meta.url));
const font = (f) => readFileSync(`${root}src/assets/fonts/${f}`).toString('base64');

// Monigote: se lee el sprite de src/data/mascot.ts sin compilar TypeScript
const src = readFileSync(`${root}src/data/mascot.ts`, 'utf8');
const palette = JSON.parse(src.match(/MASCOT_PALETTE[^=]*=\s*(\{[\s\S]*?\});/)[1]);
const idle = [...src.match(/idle:\s*\[([\s\S]*?)\]/)[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);

const rects = idle
  .flatMap((row, y) =>
    [...row].map((ch, x) => (ch === '.' ? '' : `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${palette[ch]}"/>`)),
  )
  .join('');
const mascot = `<svg viewBox="0 0 32 42" width="352" height="462" shape-rendering="crispEdges">${rects}</svg>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Nunito;src:url(data:font/woff2;base64,${font('nunito-latin-wght-normal.woff2')}) format('woff2');font-weight:200 1000}
@font-face{font-family:Tiny5;src:url(data:font/woff2;base64,${font('tiny5-latin-400-normal.woff2')}) format('woff2')}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#120e0b;font-family:Nunito;color:#fff3e6;position:relative}
.glow{position:absolute;inset:0;background:
  radial-gradient(700px 420px at 88% 18%,rgba(240,180,41,.28),transparent 70%),
  radial-gradient(500px 300px at 10% 110%,rgba(212,146,31,.16),transparent 70%)}
.grid{position:absolute;inset:0;background-image:
  linear-gradient(rgba(255,243,230,.035) 1px,transparent 1px),
  linear-gradient(90deg,rgba(255,243,230,.035) 1px,transparent 1px);background-size:24px 24px}
.scan{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 2px,transparent 2px 4px)}
.frame{position:absolute;inset:22px;border:4px solid #0a0706;border-radius:28px;box-shadow:inset 0 0 0 3px #3a2d22}
.left{position:absolute;left:78px;top:70px;width:640px}
.tag{display:inline-flex;gap:12px;align-items:center;background:#0a0706;border:3px solid #f0b429;color:#f0b429;
  font-family:Tiny5;font-size:22px;letter-spacing:.06em;text-transform:uppercase;padding:8px 16px;border-radius:999px}
.dot{width:12px;height:12px;border-radius:50%;background:#3ecf6e;box-shadow:0 0 12px #3ecf6e}
h1{margin-top:26px;font-weight:900;font-size:104px;line-height:.92;text-transform:uppercase;letter-spacing:-.01em;
  -webkit-text-stroke:.08em #0a0706;paint-order:stroke fill;text-shadow:.035em .045em 0 #f0b429,.07em .09em 0 #0a0706}
.role{margin-top:24px;font-size:40px;font-weight:800;color:#ffd06a}
.stack{margin-top:22px;display:flex;gap:12px}
.chip{font-family:Tiny5;font-size:22px;text-transform:uppercase;letter-spacing:.05em;background:#221c17;
  border:3px solid #0a0706;box-shadow:0 4px 0 #0a0706;border-radius:12px;padding:8px 14px;color:#fff3e6}
.foot{position:absolute;left:78px;bottom:58px;display:flex;gap:28px;align-items:center;font-family:Tiny5;font-size:24px;letter-spacing:.06em;text-transform:uppercase}
.start{background:#f0b429;color:#120e0b;border:3px solid #0a0706;box-shadow:0 6px 0 #0a0706;border-radius:14px;padding:10px 18px}
.url{color:rgba(255,243,230,.7)}
.hero{position:absolute;right:96px;bottom:56px;display:flex;flex-direction:column;align-items:center}
.hero svg{filter:drop-shadow(0 8px 0 rgba(10,7,6,.85))}
.ground{width:380px;height:22px;margin-top:-6px;background:#3a2d22;border:4px solid #0a0706;border-radius:6px;box-shadow:inset 0 4px 0 #6b4a2e}
.bubble{position:absolute;top:40px;left:-96px;background:#fff3e6;color:#120e0b;font-family:Tiny5;font-size:24px;
  text-transform:uppercase;padding:12px 18px;border:4px solid #0a0706;border-radius:16px;box-shadow:0 6px 0 #0a0706;white-space:nowrap}
.bubble:after{content:'';position:absolute;right:24px;bottom:-16px;border:10px solid transparent;border-top-color:#0a0706}
</style></head><body>
<div class="glow"></div><div class="grid"></div><div class="scan"></div><div class="frame"></div>
<div class="left">
  <span class="tag"><span class="dot"></span>P1 · Abierto a oportunidades</span>
  <h1>Gabriel<br>Saiz</h1>
  <p class="role">Desarrollador Full-Stack</p>
  <div class="stack"><span class="chip">React Native</span><span class="chip">Next.js</span><span class="chip">.NET</span></div>
</div>
<div class="foot"><span class="start">▶ Press start</span><span class="url">gabrielcodes.dev</span></div>
<div class="hero"><span class="bubble">¡Hola!</span>${mascot}<div class="ground"></div></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${root}public/img/og-image.jpg`, type: 'jpeg', quality: 88 });
await browser.close();
console.log('OK public/img/og-image.jpg');
