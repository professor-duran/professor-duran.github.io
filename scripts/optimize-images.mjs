// One-time image optimization script.
// Resizes any image > 1800px wide down to 1800, re-encodes JPG/PNG at quality 82,
// and writes a sibling .webp at quality 80.
//
// Usage: node scripts/optimize-images.mjs

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const IMG_DIR = 'public/images';
const MAX_WIDTH = 1800;
const JPG_QUALITY = 82;
const PNG_QUALITY = 90;
const WEBP_QUALITY = 80;

const RASTER = new Set(['.jpg', '.jpeg', '.png']);

async function processFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!RASTER.has(ext)) return null;

  const fs = await import('node:fs/promises');
  // Read original into memory so we can safely overwrite the file
  const original = await fs.readFile(filePath);
  const before = original.length;

  const meta = await sharp(original).metadata();
  const needsResize = meta.width && meta.width > MAX_WIDTH;

  // Build pipeline from buffer (no file handle held open)
  function pipeline() {
    let p = sharp(original, { failOn: 'none' });
    if (needsResize) p = p.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    return p;
  }

  const buf = ext === '.png'
    ? await pipeline().png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
    : await pipeline().jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toBuffer();

  let after = before;
  if (buf.length < before) {
    await fs.writeFile(filePath, buf);
    after = buf.length;
  }

  // Generate webp sibling
  const webpPath = filePath.slice(0, -ext.length) + '.webp';
  let webpBytes = 0;
  try {
    const webpBuf = await pipeline().webp({ quality: WEBP_QUALITY }).toBuffer();
    await fs.writeFile(webpPath, webpBuf);
    webpBytes = webpBuf.length;
  } catch (e) {
    // skip webp on failure
  }

  return { name: basename(filePath), before, after, webp: webpBytes };
}

async function main() {
  const files = await readdir(IMG_DIR);
  const results = [];
  for (const f of files) {
    const path = join(IMG_DIR, f);
    const s = await stat(path);
    if (!s.isFile()) continue;
    const r = await processFile(path);
    if (r) results.push(r);
  }

  // Report
  const fmt = (n) => n >= 1024 * 1024 ? `${(n / (1024 * 1024)).toFixed(2)} MB` : `${(n / 1024).toFixed(0)} KB`;
  let totalBefore = 0, totalAfter = 0, totalWebp = 0;
  console.log('\nImage optimization report:');
  console.log('-'.repeat(78));
  console.log(`${'File'.padEnd(40)} ${'Before'.padStart(10)} ${'After'.padStart(10)} ${'WebP'.padStart(10)}`);
  console.log('-'.repeat(78));
  for (const r of results) {
    totalBefore += r.before;
    totalAfter += r.after;
    totalWebp += r.webp;
    const saved = r.before - r.after;
    const pct = saved > 0 ? `(-${((saved / r.before) * 100).toFixed(0)}%)` : '';
    console.log(`${r.name.padEnd(40)} ${fmt(r.before).padStart(10)} ${fmt(r.after).padStart(10)} ${fmt(r.webp).padStart(10)} ${pct}`);
  }
  console.log('-'.repeat(78));
  console.log(`${'TOTAL'.padEnd(40)} ${fmt(totalBefore).padStart(10)} ${fmt(totalAfter).padStart(10)} ${fmt(totalWebp).padStart(10)}`);
  console.log(`Original total reduced by ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`);
}

main().catch(e => { console.error(e); process.exit(1); });
