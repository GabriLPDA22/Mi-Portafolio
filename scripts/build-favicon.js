const sharp = require("sharp");
const fs = require("fs");

(async () => {
  const logo = await sharp("public/img/brand-mark-on-dark.png")
    .resize(340, 340, {
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

  const b64 = fs.readFileSync("public/img/brand-mark-on-dark.png").toString("base64");
  fs.writeFileSync(
    "public/favicon.svg",
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="gabriel.codes"><rect width="64" height="64" rx="14" fill="#120e0b"/><image href="data:image/png;base64,${b64}" x="7" y="7" width="50" height="50"/></svg>`
  );

  console.log("favicon contrast fixed");
})();
