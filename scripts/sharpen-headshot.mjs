// One-off script: analyze headshot and produce sharpened variants for visual comparison.
// Run with:  node scripts/sharpen-headshot.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, '../public/images/headshot.png');
const OUT_DIR = path.resolve(__dirname, '../public/images');

async function main() {
  const meta = await sharp(SRC).metadata();
  console.log('Source:', `${meta.width}x${meta.height}`, meta.format, `${(meta.size / 1024).toFixed(0)} KB`);

  // Three sharpening passes at escalating strength. Portrait-safe: gentle on
  // flat areas (m1), stronger on detected edges (m2), threshold protects skin.
  const presets = [
    { name: 'gentle',   sigma: 0.8, m1: 0.4, m2: 1.5 },
    { name: 'moderate', sigma: 1.0, m1: 0.6, m2: 2.2 },
    { name: 'strong',   sigma: 1.2, m1: 0.8, m2: 3.0 },
  ];

  for (const p of presets) {
    const outPath = path.join(OUT_DIR, `headshot-${p.name}.png`);
    await sharp(SRC)
      .sharpen({ sigma: p.sigma, m1: p.m1, m2: p.m2 })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
    const outMeta = await sharp(outPath).metadata();
    console.log(`${p.name.padEnd(9)}-> ${path.basename(outPath)}  ${(outMeta.size / 1024).toFixed(0)} KB`);
  }

  console.log('\nOpen these in VS Code (preview panel) or Windows Photos to compare:');
  for (const p of presets) {
    console.log(`  public/images/headshot-${p.name}.png`);
  }
  console.log('Original for reference: public/images/headshot.png');
}

main().catch(e => { console.error(e); process.exit(1); });
