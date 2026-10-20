const sharp = require("sharp");
const path = require("path");

async function enhanceUsmanPhoto() {
  try {
    const inputPath = path.join(__dirname, "../public/images/hero-portrait-cutout.png");
    const outputPath = path.join(__dirname, "../public/images/hero-portrait-usman.png");

    const image = sharp(inputPath);
    const meta = await image.metadata();
    const width = meta.width;
    const height = meta.height;

    console.log(`Original dimensions: ${width}x${height}`);

    const { data } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

    // 1. Remove ONLY the watermark icon (tiny 25x20 star between x=385..415, y=550..572)
    for (let y = 548; y <= 574; y++) {
      for (let x = 385; x <= 415; x++) {
        if (x < width && y < height) {
          const idx = (y * width + x) * 4;
          // Set to pure transparent 0,0,0,0
          data[idx] = 0;
          data[idx + 1] = 0;
          data[idx + 2] = 0;
          data[idx + 3] = 0;
        }
      }
    }

    // 2. Apply smooth bottom feather fade across the bottom 15% of the image (y from height * 0.85 to height)
    const fadeStartY = Math.floor(height * 0.85);
    for (let y = fadeStartY; y < height; y++) {
      const progress = (y - fadeStartY) / (height - fadeStartY);
      const fadeFactor = 0.5 * (1 + Math.cos(Math.PI * progress));
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        data[idx + 3] = Math.round(data[idx + 3] * fadeFactor);
      }
    }

    // 3. Subtle color grading: Enrich blacks, add warm golden highlight glow matching portfolio theme
    for (let i = 0; i < width * height; i++) {
      const idx = i * 4;
      const a = data[idx + 3];
      if (a > 0) {
        let r = data[idx];
        let g = data[idx + 1];
        let b = data[idx + 2];

        // Slightly deepen dark blazer shadows
        if (r < 50 && g < 50 && b < 50) {
          r = Math.round(r * 0.94);
          g = Math.round(g * 0.94);
          b = Math.round(b * 0.94);
        }
        // Slightly warm skin highlights with subtle champagne gold tone
        else if (r > 90) {
          r = Math.min(255, Math.round(r * 1.02));
          g = Math.min(255, Math.round(g * 1.01));
          b = Math.max(0, Math.round(b * 0.98));
        }

        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
      }
    }

    // 4. Save cleaned base, then upscale with high quality Lanczos3 and subtle sharpening
    const cleanedBaseBuffer = await sharp(data, {
      raw: { width, height, channels: 4 }
    }).png().toBuffer();

    const targetWidth = width * 2; // 854px
    const targetHeight = height * 2; // 1170px

    await sharp(cleanedBaseBuffer)
      .resize(targetWidth, targetHeight, {
        kernel: sharp.kernel.lanczos3,
        fastShrinkOnLoad: false,
      })
      .sharpen({
        sigma: 1.0,
        m1: 0.8,
        m2: 1.5,
      })
      .png({ quality: 95, compressionLevel: 8 })
      .toFile(outputPath);

    console.log(`Successfully generated enhanced photo at: ${outputPath} (${targetWidth}x${targetHeight})`);
  } catch (err) {
    console.error("Error enhancing photo:", err);
  }
}

enhanceUsmanPhoto();
