/**
 * Genera las portadas de los proyectos (src/assets/img/projects/*.webp, 1200×1200) con el mismo
 * lenguaje visual de la web: grafito, rejilla que se apaga, anillos y un halo del color de cada
 * proyecto. Así las tres tarjetas rellenan su panel igual, sin huecos, y el contenido real
 * (capturas reales de la app y de las webs) va en un móvil con el mismo acabado.
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
  // ARCH: pantalla real de la app (captura de Android sin la barra de estado) en un iPhone dibujado
  // en CSS con el mismo acabado que las capturas de Huvegrym y Tarot
  arch: base(
    'rgba(99,102,241,.42)',
    `<div class="stage"><div style="position:relative;width:500px;height:1034px;border-radius:84px;padding:7px;transform:rotate(-5deg);
        background:linear-gradient(145deg,#c3d3e3,#7f97b0 40%,#5b7189 70%,#a9bdd0);
        box-shadow:0 60px 80px -10px rgba(0,0,0,.85),0 0 110px -10px rgba(99,102,241,.55)">
      <span style="position:absolute;left:-4px;top:200px;width:4px;height:60px;border-radius:2px;background:#7f97b0"></span>
      <span style="position:absolute;left:-4px;top:290px;width:4px;height:100px;border-radius:2px;background:#7f97b0"></span>
      <span style="position:absolute;right:-4px;top:260px;width:4px;height:130px;border-radius:2px;background:#7f97b0"></span>
      <div style="position:relative;width:100%;height:100%;border-radius:77px;padding:16px;background:#050506">
        <div style="position:relative;width:100%;height:100%;border-radius:62px;overflow:hidden;background:#000">
          <img src="${img('src/assets/img/arch-screen.webp')}" style="width:100%;height:100%;object-fit:cover;object-position:50% 0;display:block">
          <div style="position:absolute;inset:0 0 auto 0;height:96px;background:linear-gradient(rgba(0,0,0,.55),transparent)"></div>
          <div style="position:absolute;left:50%;top:0;width:190px;height:34px;transform:translateX(-50%);border-radius:0 0 22px 22px;background:#050506"></div>
          <span style="position:absolute;left:44px;top:12px;color:#fff;font-size:21px;font-weight:600;letter-spacing:-.01em">18:05</span>
          <div style="position:absolute;right:34px;top:15px;display:flex;align-items:flex-end;gap:7px">
            <span style="display:flex;align-items:flex-end;gap:2px">
              <i style="width:4px;height:6px;background:#fff;border-radius:1px"></i><i style="width:4px;height:9px;background:#fff;border-radius:1px"></i>
              <i style="width:4px;height:12px;background:#fff;border-radius:1px"></i><i style="width:4px;height:15px;background:#fff;border-radius:1px"></i>
            </span>
            <span style="position:relative;width:30px;height:15px;border-radius:5px;border:1.5px solid rgba(255,255,255,.85);padding:1.5px">
              <i style="display:block;width:85%;height:100%;background:#fff;border-radius:2px"></i>
            </span>
          </div>
        </div>
      </div>
    </div></div>`,
  ),
  // Huvegrym: captura real de la web en un iPhone (la imagen ya trae el móvil y fondo transparente)
  huvegrym: base(
    'rgba(139,92,246,.38)',
    `<div class="stage"><img src="${img('src/assets/img/huvegrym-mockup.webp')}" style="height:1010px;display:block;transform:rotate(-5deg);
      filter:drop-shadow(0 60px 80px rgba(0,0,0,.85)) drop-shadow(0 0 90px rgba(139,92,246,.45))"></div>`,
  ),
  // Tarot Divinidad: captura real de la web en un iPhone, girado al otro lado que Huvegrym
  'tarot-divinidad': base(
    'rgba(192,38,211,.3)',
    `<div class="stage"><img src="${img('src/assets/img/tarot-mockup.webp')}" style="height:1010px;display:block;transform:rotate(5deg);
      filter:drop-shadow(0 60px 80px rgba(0,0,0,.85)) drop-shadow(0 0 90px rgba(192,38,211,.4))"></div>`,
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
