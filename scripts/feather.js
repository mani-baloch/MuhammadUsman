const sharp = require("sharp");
const path = require("path");

const width = 896;
const height = 1200;

// Create an SVG mask where:
// - Top 60px fades from transparent to white so there is NO horizontal cut
// - Left & Right 80px fades smoothly to transparent
// - Bottom 150px fades smoothly to transparent
// - Central face and shoulders remain 100% crisp and opaque
const maskSvg = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="radial" cx="50%" cy="48%" rx="48%" ry="50%" fx="50%" fy="48%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="55%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="78%" stop-color="#ffffff" stop-opacity="0.85" />
      <stop offset="90%" stop-color="#ffffff" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="topLinear" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
      <stop offset="6%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="85%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <filter id="blur">
      <feGaussianBlur stdDeviation="8" />
    </filter>
  </defs>
  <!-- Base filled with combined gradients -->
  <rect width="${width}" height="${height}" fill="url(#radial)" />
  <rect width="${width}" height="${height}" fill="url(#topLinear)" style="mix-blend-mode: multiply;" />
</svg>
`);

async function generateFeatheredPortrait() {
  try {
    const inputPath = path.join(__dirname, "../public/images/hero-portrait.jpg");
    const outputPath = path.join(__dirname, "../public/images/hero-portrait-feathered.png");

    const maskBuffer = await sharp(maskSvg).png().toBuffer();

    await sharp(inputPath)
      .ensureAlpha()
      .composite([{ input: maskBuffer, blend: "dest-in" }])
      .png({ quality: 95, compressionLevel: 8 })
      .toFile(outputPath);

    console.log("Created hero-portrait-feathered.png successfully!");
  } catch (err) {
    console.error("Error creating feathered portrait:", err);
  }
}

generateFeatheredPortrait();
