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

const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="#2B3AFF"/><path d="M13 10.5 8 16l5 5.5M19 10.5l5 5.5-5 5.5" fill="none" stroke="#D4FF3F" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/** Icono con margen interno (maskable / apple-touch) sobre fondo papel. */
const paddedIcon = (size) =>
  sharp({ create: { width: size, height: size, channels: 4, background: '#F3F0E8' } })
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
    title: 'Desarrollador Full-Stack <em>web &amp; mobile</em>',
    subtitle: '.NET · Vue 3 · React Native · AWS',
  },
];

const ogHtml = (fonts, { eyebrow, title, subtitle = '' }) => `<!doctype html><html><head><style>
@font-face{font-family:Inter;src:url(data:font/woff2;base64,${fonts.inter}) format('woff2');font-weight:100 900}
@font-face{font-family:Bricolage;src:url(data:font/woff2;base64,${fonts.bricolage}) format('woff2');font-weight:200 800}
@font-face{font-family:Instrument;font-style:italic;src:url(data:font/woff2;base64,${fonts.instrument}) format('woff2')}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#F3F0E8;font-family:Inter;color:#121212;position:relative;overflow:hidden}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(18,18,18,.14) 1.2px,transparent 1.2px);background-size:24px 24px;-webkit-mask-image:radial-gradient(ellipse 70% 80% at 85% 20%,#000 20%,transparent 70%)}
.wrap{position:relative;height:100%;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.brand{display:flex;align-items:center;gap:16px;font-family:Bricolage;font-size:32px;font-weight:700;letter-spacing:-.02em}
.brand b{color:#2B3AFF}
.eyebrow{display:inline-flex;align-items:center;gap:12px;font-size:22px;font-weight:600;background:#fff;border:2px solid #121212;border-radius:999px;padding:8px 20px;margin-bottom:26px}
.eyebrow i{width:12px;height:12px;border-radius:50%;background:#16a34a}
h1{font-family:Bricolage;font-size:84px;line-height:1;letter-spacing:-.04em;font-weight:700;max-width:980px}
h1 em{font-family:Instrument;font-weight:400;color:#2B3AFF;letter-spacing:-.01em}
.foot{display:flex;justify-content:space-between;align-items:center;font-size:24px;color:#5c5a54;font-family:ui-monospace,monospace}
p.sub{margin-top:24px;font-size:30px;color:#5c5a54;font-weight:500}
.pill{background:#D4FF3F;color:#121212;font-family:Inter;font-weight:700;padding:14px 28px;border-radius:999px;border:2px solid #121212;box-shadow:6px 6px 0 #121212}
</style></head><body><div class="dots"></div><div class="wrap">
<div class="brand">${MARK_SVG.replace('<svg ', '<svg width="52" height="52" ')}<span>Gabriel Saiz<b>.</b></span></div>
<div><span class="eyebrow"><i></i>${eyebrow}</span><h1>${title}</h1><p class="sub">${subtitle}</p></div>
<div class="foot"><span>gabrielcodes.dev</span><span class="pill">Descargar CV</span></div>
</div></body></html>`;

async function ogImages() {
  const b64 = async (file) => (await readFile(path.join(root, 'src/assets/fonts', file))).toString('base64');
  const fonts = {
    inter: await b64('inter-latin-wght.woff2'),
    bricolage: await b64('bricolage-latin-wght.woff2'),
    instrument: await b64('instrument-serif-latin-italic.woff2'),
  };
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await mkdir(pub('og'), { recursive: true });
  for (const og of OG_PAGES) {
    await page.setContent(ogHtml(fonts, og), { waitUntil: 'load' });
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
