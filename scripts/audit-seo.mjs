/**
 * Auditoría SEO del build estático (se ejecuta tras `astro build`).
 * Falla el build (exit 1) si alguna página indexable incumple las reglas básicas,
 * para que un cambio de contenido no degrade el SEO sin que nadie lo note.
 */
import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve('dist');
const SITE = 'https://gabrielcodes.dev';

const walk = async (dir) => (await readdir(dir, { recursive: true })).map((f) => path.join(dir, f));

const exists = (p) =>
  access(p).then(
    () => true,
    () => false,
  );

const attr = (html, re) => html.match(re)?.[1]?.trim();
const decode = (s = '') => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const urlPathFor = (file) => {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
};

const files = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const pages = new Set(files.map(urlPathFor));
const errors = [];
const warnings = [];
const seenTitles = new Map();
const seenDescriptions = new Map();

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const url = urlPathFor(file);
  const err = (m) => errors.push(`${url}: ${m}`);
  const warn = (m) => warnings.push(`${url}: ${m}`);

  const robots = attr(html, /<meta name="robots" content="([^"]+)"/) ?? '';
  const indexable = !robots.includes('noindex');

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) err(`debe tener exactamente 1 <h1> (tiene ${h1s})`);

  const title = decode(attr(html, /<title>([^<]*)<\/title>/));
  const description = decode(attr(html, /<meta name="description" content="([^"]*)"/));
  if (!title) err('falta <title>');
  if (!description) err('falta meta description');
  if (!/<html lang="es"/.test(html)) err('falta lang="es" en <html>');

  // Imágenes sin alt (las decorativas deben llevar alt="").
  for (const img of html.match(/<img\b[^>]*>/g) ?? []) if (!/\salt=/.test(img)) err(`<img> sin atributo alt: ${img.slice(0, 80)}…`);

  // Enlaces internos rotos.
  for (const [, href] of html.matchAll(/<a\b[^>]*\shref="(\/[^"#?]*)[^"]*"/g)) {
    const p = href.replace(/\/$/, '') || '/';
    if (pages.has(p)) continue;
    if (await exists(path.join(DIST, p))) continue;
    err(`enlace interno roto → ${href}`);
  }

  if (!indexable) continue;

  if (title.length < 30 || title.length > 65) warn(`title de ${title.length} caracteres (recomendado 30–65): "${title}"`);
  if (description.length < 110 || description.length > 165) warn(`description de ${description.length} caracteres (recomendado 110–165)`);

  if (seenTitles.has(title)) err(`title duplicado con ${seenTitles.get(title)}`);
  seenTitles.set(title, url);
  if (seenDescriptions.has(description)) err(`description duplicada con ${seenDescriptions.get(description)}`);
  seenDescriptions.set(description, url);

  const canonical = attr(html, /<link rel="canonical" href="([^"]+)"/);
  const expected = url === '/' ? `${SITE}/` : `${SITE}${url}`;
  if (canonical !== expected) err(`canonical "${canonical}" ≠ "${expected}"`);

  for (const prop of ['og:title', 'og:description', 'og:image', 'og:url']) {
    if (!new RegExp(`<meta property="${prop}" content="[^"]+"`).test(html)) err(`falta ${prop}`);
  }
  if (!/<meta name="twitter:card" content="summary_large_image"/.test(html)) err('falta twitter:card');

  const ogImage = attr(html, /<meta property="og:image" content="([^"]+)"/);
  if (ogImage?.startsWith(SITE) && !(await exists(path.join(DIST, new URL(ogImage).pathname)))) err(`og:image no existe: ${ogImage}`);

  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!ldBlocks.length) err('sin datos estructurados JSON-LD');
  for (const [, json] of ldBlocks) {
    try {
      const data = JSON.parse(json);
      const types = (data['@graph'] ?? [data]).flatMap((n) => [n['@type']].flat());
      for (const t of ['LocalBusiness', 'ProfessionalService', 'WebSite', 'Person']) if (!types.includes(t)) err(`JSON-LD sin ${t}`);
      if (/<details/.test(html) && !types.includes('FAQPage')) warn('tiene FAQ visible pero no FAQPage en JSON-LD');
    } catch (e) {
      err(`JSON-LD inválido: ${e.message}`);
    }
  }
}

// El formulario de presupuesto necesita la clave de Web3Forms para entregar los envíos.
for (const file of files) {
  const html = await readFile(file, 'utf8');
  if (/name="access_key" value(="")?[\s>/]/.test(html)) {
    warnings.push(`${urlPathFor(file)}: formulario sin clave de Web3Forms (site.forms.web3formsKey): los envíos NO llegarán`);
  }
}

for (const w of warnings) console.warn(`  ⚠ ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error(`\nAuditoría SEO: ${errors.length} error(es) en ${files.length} páginas.`);
  process.exit(1);
}
console.log(`\n✓ Auditoría SEO: ${files.length} páginas OK (${warnings.length} aviso(s)).`);
