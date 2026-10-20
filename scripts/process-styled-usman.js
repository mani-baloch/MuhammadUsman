const sharp = require("sharp");
const path = require("path");

const inputPath = "C:/Users/Zahid/.gemini/antigravity-ide/brain/b83288d4-ad89-41d3-8262-bab36e28da3b/usman_styled_portrait_v2_1792521291869.jpg";
const outputPath = path.join(__dirname, "../public/images/hero-portrait-usman.png");

async function processStyledPortrait() {
  try {
    const width = 896;
    const height = 1200;

    const maskSvg = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="smoothFeather" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff" />
          <stop offset="72%" stop-color="#fff" />
          <stop offset="90%" stop-color="#fff" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#000" />
        </linearGradient>
      </defs>

      <!-- Background: 0 alpha -->
      <rect width="${width}" height="${height}" fill="#000000" />

      <!-- Complete silhouette with smooth feathering -->
      <g filter="url(#smoothFeather)">
        <!-- Head and hair volume -->
        <ellipse cx="448" cy="270" rx="235" ry="240" fill="#ffffff" />
        
        <!-- Neck and upper collar -->
        <polygon points="260,350 636,350 670,580 226,580" fill="#ffffff" />
        
        <!-- Broad shoulders and suit blazer -->
        <path d="
          M 226,540
          C 140,560 60,610 0,700
          L 0,1200
          L 896,1200
          L 896,700
          C 836,610 756,560 670,540
          Z
        " fill="#ffffff" />
      </g>

      <!-- Smooth bottom fade into dark canvas -->
      <rect width="${width}" height="${height}" fill="url(#bottomFade)" style="mix-blend-mode: multiply;" />
    </svg>
    `);

    const maskRaw = await sharp(maskSvg)
      .toColourspace("b-w")
      .raw()
      .toBuffer();

    const { data: imgData } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Set alpha channel directly from the smooth mask
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

    console.log("Successfully created hero-portrait-usman.png with wide shoulders and full hair!");
  } catch (err) {
    console.error("Error creating portrait:", err);
  }
}

processStyledPortrait();
