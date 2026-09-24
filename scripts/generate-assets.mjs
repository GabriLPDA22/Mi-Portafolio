/**
 * Genera los assets estáticos de marca en /public:
 *  - favicon.svg, favicon.ico (32 px), apple-touch-icon.png (180), icon-192/512.png
 *  - imágenes Open Graph 1200×630 por página (public/og/*.png)
 *  - foto optimizada del fundador para Schema.org (public/img/gabriel-saiz.webp)
 *
 * Uso: npm run assets
 * Requiere Chromium (variable CHROMIUM_PATH o la ruta de Playwright por defecto).
 * Los PNG resultantes se versionan: no se ejecuta en cada build.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import { chromium } from 'playwright-core';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (...p) => path.join(root, 'public', ...p);

const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="#00E676"/><path d="M13 10.5 8 16l5 5.5M19 10.5l5 5.5-5 5.5" fill="none" stroke="#09090B" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/** Icono con margen interno (maskable / apple-touch) sobre fondo oscuro. */
const paddedIcon = (size) =>
  sharp({ create: { width: size, height: size, channels: 4, background: '#09090B' } })
    .composite([
      {
        input: Buffer.from(MARK_SVG.replace('viewBox="0 0 32 32"', `viewBox="0 0 32 32" width="${Math.round(size * 0.7)}" height="${Math.round(size * 0.7)}"`)),
        gravity: 'center',
      },
    ])
    .png();

/** ICO con una única imagen PNG embebida (soportado por todos los navegadores actuales). */
const pngToIco = (png, size) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0);
  entry.writeUInt8(size === 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
};

async function icons() {
  await writeFile(pub('favicon.svg'), MARK_SVG);
  const ico32 = await sharp(Buffer.from(MARK_SVG)).resize(32, 32).png().toBuffer();
  await writeFile(pub('favicon.ico'), pngToIco(ico32, 32));
  await paddedIcon(180).toFile(pub('apple-touch-icon.png'));
  await paddedIcon(192).toFile(pub('icon-192.png'));
  await paddedIcon(512).toFile(pub('icon-512.png'));
}

async function founderPhoto() {
  await mkdir(pub('img'), { recursive: true });
  await sharp(path.join(root, 'src/assets/team/gabriel-saiz.webp')).resize(400, 400).webp({ quality: 80 }).toFile(pub('img', 'gabriel-saiz.webp'));
}

const OG_PAGES = [
  {
    file: 'og-default',
    eyebrow: 'Disponible · Zaragoza / Remoto',
    title: 'Gabriel Saiz<br>Desarrollador Full-Stack',
    subtitle: '.NET · Vue 3 · React Native · AWS',
  },
];

const ogHtml = (fontB64, { eyebrow, title, subtitle = '' }) => `<!doctype html><html><head><style>
@font-face{font-family:Inter;src:url(data:font/woff2;base64,${fontB64}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#09090B;font-family:Inter;color:#fff;position:relative;overflow:hidden}
.grid{position:absolute;inset:0;background-image:linear-gradient(to right,rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.05) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse 80% 80% at 70% 0%,#000 20%,transparent 70%)}
.glow{position:absolute;top:-260px;right:-120px;width:760px;height:520px;border-radius:50%;background:rgba(0,230,118,.22);filter:blur(120px)}
.wrap{position:relative;height:100%;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.brand{display:flex;align-items:center;gap:16px;font-size:30px;font-weight:600;letter-spacing:-.02em}
.brand b{color:#00E676;font-weight:600}
.eyebrow{display:inline-block;font-size:22px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#00E676;margin-bottom:22px}
h1{font-size:76px;line-height:1.05;letter-spacing:-.035em;font-weight:600;max-width:940px}
.foot{display:flex;justify-content:space-between;align-items:center;font-size:24px;color:#a1a1aa}
p.sub{margin-top:22px;font-size:30px;color:#a1a1aa;font-weight:500}
.pill{background:#00E676;color:#04150b;font-weight:600;padding:14px 28px;border-radius:999px}
</style></head><body><div class="grid"></div><div class="glow"></div><div class="wrap">
<div class="brand">${MARK_SVG.replace('<svg ', '<svg width="52" height="52" ')}<span>Gabriel Saiz<b>.</b></span></div>
<div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p class="sub">${subtitle}</p></div>
<div class="foot"><span>gabrielcodes.dev</span><span class="pill">Descargar CV</span></div>
</div></body></html>`;

async function ogImages() {
  const font = (await readFile(path.join(root, 'src/assets/fonts/inter-latin-wght.woff2'))).toString('base64');
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await mkdir(pub('og'), { recursive: true });
  for (const og of OG_PAGES) {
    await page.setContent(ogHtml(font, og), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const png = await page.screenshot({ type: 'png' });
    await sharp(png).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(pub('og', `${og.file}.png`));
    console.log(`✓ og/${og.file}.png`);
  }
  await browser.close();
}

await icons();
await founderPhoto();
await ogImages();
console.log('Assets generados.');
