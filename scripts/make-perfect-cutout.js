const sharp = require("sharp");
const path = require("path");

const width = 896;
const height = 1200;

const maskSvg = Buffer.from(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="smoothFeather" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" />
    </filter>
    <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="1" />
      <stop offset="70%" stop-color="#fff" stop-opacity="1" />
      <stop offset="88%" stop-color="#fff" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000" stop-opacity="1" />
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="#000000" />

  <g filter="url(#smoothFeather)">
    <ellipse cx="452" cy="235" rx="178" ry="195" fill="#ffffff" />
    <polygon points="275,290 625,290 585,480 315,480" fill="#ffffff" />
    <path d="
      M 315,480
      C 220,500 130,560 70,680
      L 50,1150
      L 846,1150
      L 826,680
      C 766,560 676,500 585,480
      Z
    " fill="#ffffff" />
  </g>

  <rect width="${width}" height="${height}" fill="url(#bottomFade)" style="mix-blend-mode: multiply;" />
</svg>
`);

async function generateSilhouetteCutout() {
  try {
    const inputPath = path.join(__dirname, "../public/images/hero-portrait.jpg");
    const outputPath = path.join(__dirname, "../public/images/hero-portrait-cutout.png");

    const maskRaw = await sharp(maskSvg)
      .toColourspace("b-w")
      .raw()
      .toBuffer();

    const { data: imgData } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Directly set alpha byte of each RGBA pixel
    for (let i = 0; i < width * height; i++) {
      imgData[i * 4 + 3] = maskRaw[i];
    }

    await sharp(imgData, {
      raw: {
        width,
        height,
        channels: 4,
      },
    })
      .png({ compressionLevel: 8 })
      .toFile(outputPath);

    console.log("Successfully created hero-portrait-cutout.png with TRUE alpha channel!");
  } catch (err) {
    console.error("Error creating cutout:", err);
  }
}

generateSilhouetteCutout();
