const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const clean = path.join(
  process.env.USERPROFILE || "",
  ".cursor/projects/c-Programacion-Portfolios-mi-portafolio/assets/brand-mark-clean.png"
);

(async () => {
  // Square white canvas with logo
  await sharp(clean)
    .trim()
    .resize(512, 512, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile("public/img/brand-mark.png");

  const { data, info } = await sharp("public/img/brand-mark.png")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // white / near-white → transparent
    if (r > 230 && g > 230 && b > 230) {
      data[i + 3] = 0;
      continue;
    }

    // gold / yellow (high r, mid g, low b)
    if (r > 160 && g > 110 && b < 120 && r - b > 60) {
      data[i] = 240;
      data[i + 1] = 180;
      data[i + 2] = 41;
      data[i + 3] = 255;
      continue;
    }

    // dark stroke → cream
    if (max < 90) {
      data[i] = 244;
      data[i + 1] = 239;
      data[i + 2] = 230;
      data[i + 3] = 255;
      continue;
    }

    // gray antialias on stroke → cream with partial alpha
    if (max - min < 25 && max < 200) {
      data[i] = 244;
      data[i + 1] = 239;
      data[i + 2] = 230;
      data[i + 3] = Math.round(((255 - max) / 255) * 255);
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile("public/img/brand-mark-on-dark.png");

  const logo = await sharp("public/img/brand-mark-on-dark.png")
    .resize(360, 360, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const rounded = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="512" height="512" rx="112" fill="#120e0b"/></svg>`
  );

  await sharp(rounded)
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toFile("public/icon.png");

  await sharp("public/icon.png")
    .resize(180, 180)
    .png()
    .toFile("public/apple-touch-icon.png");

  const png32 = await sharp("public/icon.png").resize(32, 32).png().toBuffer();
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry[0] = 32;
  entry[1] = 32;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png32.length, 8);
  entry.writeUInt32LE(22, 12);
  fs.writeFileSync("public/favicon.ico", Buffer.concat([header, entry, png32]));

  const b64 = fs
    .readFileSync("public/img/brand-mark-on-dark.png")
    .toString("base64");
  fs.writeFileSync(
    "public/favicon.svg",
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="gabriel.codes"><rect width="64" height="64" rx="14" fill="#120e0b"/><image href="data:image/png;base64,${b64}" x="7" y="7" width="50" height="50"/></svg>`
  );

  console.log("done");
})();
