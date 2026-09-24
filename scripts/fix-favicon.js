const sharp = require("sharp");
const fs = require("fs");

(async () => {
  const { data, info } = await sharp("public/img/brand-mark.png")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 230 && g > 230 && b > 230) {
      data[i + 3] = 0;
      continue;
    }
    if (r > 160 && g > 110 && b < 120 && r - b > 60) {
      data[i] = 240;
      data[i + 1] = 180;
      data[i + 2] = 41;
      data[i + 3] = 255;
      continue;
    }
    if (Math.max(r, g, b) < 90) {
      data[i] = 244;
      data[i + 1] = 239;
      data[i + 2] = 230;
      data[i + 3] = 255;
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile("public/img/brand-mark-on-dark.png");

  await sharp("public/img/brand-mark-on-dark.png")
    .resize(64, 64)
    .png()
    .toFile("public/img/brand-mark-64.png");

  const logo = await sharp("public/img/brand-mark-on-dark.png")
    .resize(360, 360, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const rounded =
    '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="512" height="512" rx="112" fill="#120e0b"/></svg>';

  await sharp(Buffer.from(rounded))
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

  const b64 = fs.readFileSync("public/img/brand-mark-64.png").toString("base64");
  fs.writeFileSync(
    "public/favicon.svg",
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#120e0b"/><image href="data:image/png;base64,${b64}" x="8" y="8" width="48" height="48"/></svg>`
  );

  console.log("favicon restored from brand-mark.png");
})();
