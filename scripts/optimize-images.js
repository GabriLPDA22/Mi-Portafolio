const sharp = require("sharp");
const path = require("path");

const images = [
  { input: "mock_arch_iphone_15.png", output: "mock_arch_iphone_15.webp", quality: 85 },
  { input: "Arch.png",               output: "Arch.webp",                quality: 85 },
  { input: "0x0ss.png",              output: "0x0ss.webp",               quality: 85 },
  { input: "logo_gabriel_saiz_violet_dark.png", output: "logo_gabriel_saiz_violet_dark.webp", quality: 90 },
];

const dir = path.join(__dirname, "..", "public", "img");

async function run() {
  for (const img of images) {
    const inputPath  = path.join(dir, img.input);
    const outputPath = path.join(dir, img.output);
    try {
      const info = await sharp(inputPath)
        .webp({ quality: img.quality })
        .toFile(outputPath);
      const inputSize  = require("fs").statSync(inputPath).size;
      const outputSize = info.size;
      const reduction  = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);
      console.log(`✓ ${img.input} → ${img.output}  ${(inputSize/1024).toFixed(0)}KB → ${(outputSize/1024).toFixed(0)}KB  (-${reduction}%)`);
    } catch (e) {
      console.error(`✗ ${img.input}: ${e.message}`);
    }
  }
}

run();
