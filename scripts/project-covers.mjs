/**
 * Genera las portadas de los proyectos (src/assets/img/projects/*.webp, 1200×1200) con el mismo
 * lenguaje visual de la web: grafito, rejilla que se apaga, anillos y un halo del color de cada
 * proyecto. Así las tres tarjetas rellenan su panel igual, sin huecos, y el contenido real
 * (icono, captura en móvil, captura en navegador) va dentro de un soporte coherente.
 *
 * Uso: node scripts/project-covers.mjs   (requiere Playwright/Chromium y sharp)
 */
import { mkdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const b64 = (p) => readFileSync(`${root}${p}`).toString('base64');
const img = (p) => `data:image/webp;base64,${b64(p)}`;
const geist = b64('src/assets/fonts/geist-latin-wght-normal.woff2');
const SIZE = 1200;
const BG = '#0e0e12';

const base = (tint, body) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Geist;src:url(data:font/woff2;base64,${geist}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:${SIZE}px;height:${SIZE}px;overflow:hidden;background:${BG};font-family:Geist;position:relative}
.glow{position:absolute;inset:0;background:radial-gradient(42% 42% at 50% 52%,${tint},transparent 72%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(to right,rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.05) 1px,transparent 1px);
  background-size:60px 60px;background-position:center;-webkit-mask-image:radial-gradient(circle at 50% 50%,#000 20%,transparent 62%)}
.ring{position:absolute;left:50%;top:50%;border-radius:50%;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.07)}
.vignette{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,transparent 55%,${BG} 92%)}
.stage{position:absolute;inset:0;display:grid;place-items:center}
</style></head><body>
<div class="glow"></div><div class="grid"></div>
<div class="ring" style="width:620px;height:620px"></div>
<div class="ring" style="width:900px;height:900px;border-color:rgba(255,255,255,.045)"></div>
${body}
<div class="vignette"></div>
</body></html>`;

const covers = {
  // ARCH: el icono de la app, grande, con brillo índigo dentro de los anillos
  arch: base(
    'rgba(99,102,241,.42)',
    `<div class="stage"><div style="position:relative">
      <img src="${img('src/assets/img/arch-icon.webp')}" style="width:440px;height:440px;border-radius:99px;display:block;
        box-shadow:0 0 0 1px rgba(255,255,255,.12),0 60px 120px -30px rgba(79,70,229,.75),0 0 140px -20px rgba(139,92,246,.55)">
    </div></div>`,
  ),
  // Huvegrym: captura real de la web en un iPhone (la imagen ya trae el móvil y fondo transparente)
  huvegrym: base(
    'rgba(139,92,246,.38)',
    `<div class="stage"><img src="${img('src/assets/img/huvegrym-mockup.webp')}" style="height:1010px;display:block;transform:rotate(-5deg);
      filter:drop-shadow(0 60px 80px rgba(0,0,0,.85)) drop-shadow(0 0 90px rgba(139,92,246,.45))"></div>`,
  ),
  // Tarot Divinidad: la web real en una ventana de navegador con perspectiva
  'tarot-divinidad': base(
    'rgba(192,38,211,.3)',
    `<div class="stage" style="perspective:1800px"><div style="width:940px;border-radius:24px;overflow:hidden;background:#0d0d10;
        transform:rotateY(-10deg) rotateX(5deg);
        box-shadow:0 0 0 1px rgba(255,255,255,.12),0 80px 160px -40px rgba(0,0,0,.95),0 0 180px -30px rgba(192,38,211,.5)">
      <div style="display:flex;align-items:center;gap:12px;padding:20px 24px;background:#141418;border-bottom:1px solid rgba(255,255,255,.07)">
        <span style="width:16px;height:16px;border-radius:50%;background:rgba(255,255,255,.16)"></span>
        <span style="width:16px;height:16px;border-radius:50%;background:rgba(255,255,255,.16)"></span>
        <span style="width:16px;height:16px;border-radius:50%;background:rgba(255,255,255,.16)"></span>
        <span style="margin:0 auto;padding:8px 22px;border-radius:999px;background:rgba(255,255,255,.06);color:rgba(237,237,242,.7);font-size:21px">divinidad000.com</span>
      </div>
      <img src="${img('src/assets/img/divinidad-hero.webp')}" style="display:block;width:100%">
    </div></div>`,
  ),
};

mkdirSync(`${root}src/assets/img/projects`, { recursive: true });
const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const page = await browser.newPage({ viewport: { width: SIZE, height: SIZE }, deviceScaleFactor: 1 });
for (const [id, html] of Object.entries(covers)) {
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: 'png' });
  const out = `src/assets/img/projects/${id}.webp`;
  await sharp(png).webp({ quality: 88 }).toFile(`${root}${out}`);
  console.log(out);
}
await browser.close();
