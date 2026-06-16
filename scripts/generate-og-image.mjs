import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "../public/img/og-image.jpg");

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glowPurple" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6d5dfc" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#6d5dfc" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowAcid" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ccf53f" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#ccf53f" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#060607"/>

  <ellipse cx="220" cy="120" rx="260" ry="210" fill="url(#glowPurple)"/>
  <ellipse cx="1020" cy="560" rx="240" ry="190" fill="url(#glowAcid)"/>

  <rect x="80" y="60" width="1040" height="510" rx="32" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

  <text x="144" y="170" fill="#f4f4ef" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700">Gabriel Saiz</text>
  <text x="144" y="250" fill="#ccf53f" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="700">Desarrollador web y móvil</text>
  <rect x="144" y="272" width="80" height="3" fill="#ccf53f" rx="1.5"/>
  <text x="144" y="320" fill="rgba(244,244,239,0.65)" font-family="Arial, Helvetica, sans-serif" font-size="24">React Native · Next.js · .NET</text>

  <text x="144" y="510" fill="rgba(244,244,239,0.45)" font-family="Arial, Helvetica, sans-serif" font-size="20">De la idea al producto en producción</text>
  <text x="960" y="510" fill="rgba(244,244,239,0.35)" font-family="Arial, Helvetica, sans-serif" font-size="18" text-anchor="end">gabrielcodes.dev</text>
</svg>
`;

const buffer = await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toBuffer();
writeFileSync(outputPath, buffer);
console.log(`✓ OG image generada en ${outputPath}`);
