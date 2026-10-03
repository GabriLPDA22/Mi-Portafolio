/**
 * Genera todos los recursos de marca a partir del logo original (brand/logo-g.png, la G de cinta
 * violeta con fondo transparente):
 *   - public/img/brand-mark.png            logo suelto, transparente (512 px)
 *   - public/img/brand-mark-on-dark.png    logo sobre grafito con halo violeta (512 px)
 *   - public/icon.png, apple-touch-icon.png iconos de app (512 / 180 px, PNG con paleta)
 *   - public/favicon.ico, favicon-96.png    favicons
 *   - src/assets/img/logo-g.webp            logo de la cabecera
 * Uso: node scripts/build-brand-assets.mjs
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const src = `${root}brand/logo-g.png`;
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

/** Logo centrado en un cuadrado de `size` px dejando `pad` (fracción) de margen. */
const fit = (size, pad = 0) => {
  const inner = Math.round(size * (1 - pad * 2));
  return sharp(src).resize(inner, inner, { fit: 'contain', background: transparent }).png().toBuffer();
};

/** Logo sobre fondo grafito (#0c0c0f) con un halo violeta suave detrás. */
const onDark = async (size, pad) => {
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><defs><radialGradient id="r" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#7c3aed" stop-opacity=".35"/><stop offset="1" stop-color="#0c0c0f" stop-opacity="0"/></radialGradient></defs><rect width="100%" height="100%" fill="#0c0c0f"/><rect width="100%" height="100%" fill="url(#r)"/></svg>`,
  );
  return sharp(bg).composite([{ input: await fit(size, pad), gravity: 'center' }]).png().toBuffer();
};

const palette = (buf) => sharp(buf).png({ palette: true, quality: 90, colours: 192, effort: 10, dither: 0.6 }).toBuffer();

/** ICO con PNG dentro (lo aceptan todos los navegadores actuales). */
const ico = (pngs, sizes) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = 6 + 16 * sizes.length;
  const dirs = sizes.map((s, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(s, 0);
    e.writeUInt8(s, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(pngs[i].length, 8);
    e.writeUInt32LE(offset, 12);
    offset += pngs[i].length;
    return e;
  });
  return Buffer.concat([header, ...dirs, ...pngs]);
};

const out = {
  'public/img/brand-mark.png': await palette(await fit(512)),
  'public/img/brand-mark-on-dark.png': await palette(await onDark(512, 0.16)),
  'public/icon.png': await palette(await onDark(512, 0.16)),
  'public/apple-touch-icon.png': await palette(await onDark(180, 0.16)),
  'public/favicon-96.png': await fit(96),
  'public/favicon.ico': ico(await Promise.all([fit(32), fit(48)]), [32, 48]),
  'src/assets/img/logo-g.webp': await sharp(src).resize({ height: 128 }).webp({ quality: 92, alphaQuality: 100 }).toBuffer(),
};
for (const [file, buf] of Object.entries(out)) {
  writeFileSync(`${root}${file}`, buf);
  console.log(`OK ${file} (${Math.round(buf.length / 1024)} KB)`);
}
