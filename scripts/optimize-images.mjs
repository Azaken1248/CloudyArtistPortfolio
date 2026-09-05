/**
 * Generate web-sized WebP versions of the bundled gallery art.
 *
 * The source files are print-resolution masters (up to 3300x3577, 7 MB each).
 * They are displayed at roughly 350 px in the gallery cards and at most ~700 px
 * tall in the lightbox, so shipping the masters meant sending ~27 MB to every
 * visitor for images that render at a fraction of that.
 *
 * Sources in src/assets are left untouched — they are the artist's originals.
 * Only the derived files in src/assets/optimized are imported by the app, and
 * this script regenerates them from scratch.
 *
 *   npm run optimize:images
 */
import { copyFile, mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIRS = ['src/assets', 'src/assets/gallary']
const OUT_DIR = 'src/assets/optimized'

// Comfortably above the largest rendered size (the lightbox at ~64vh on a tall
// 2x display), so nothing is ever upscaled on screen.
const MAX_DIMENSION = 1600
const QUALITY = 82

const IMAGE_PATTERN = /\.(png|jpe?g|webp)$/i

async function optimize(sourcePath, outPath) {
  const input = sharp(sourcePath)
  const meta = await input.metadata()

  const buffer = await input
    .resize({
      width: Math.min(meta.width ?? MAX_DIMENSION, MAX_DIMENSION),
      height: Math.min(meta.height ?? MAX_DIMENSION, MAX_DIMENSION),
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer()

  const before = (await stat(sourcePath)).size

  // A small PNG with flat colour or transparency can already beat WebP at this
  // quality. Copying the original in that case keeps the app importing one
  // predictable directory without ever shipping the larger file.
  if (buffer.length >= before) {
    await copyFile(sourcePath, outPath.replace(/\.webp$/, path.extname(sourcePath)))
    return { before, after: before, width: meta.width, height: meta.height, keptOriginal: true }
  }

  await writeFile(outPath, buffer)
  return { before, after: buffer.length, width: meta.width, height: meta.height, keptOriginal: false }
}

await mkdir(OUT_DIR, { recursive: true })

let totalBefore = 0
let totalAfter = 0

for (const dir of SOURCE_DIRS) {
  let entries
  try {
    entries = await readdir(dir)
  } catch {
    continue
  }

  for (const entry of entries) {
    if (!IMAGE_PATTERN.test(entry)) continue

    const sourcePath = path.join(dir, entry)
    if ((await stat(sourcePath)).isDirectory()) continue

    const outName = `${entry.replace(IMAGE_PATTERN, '')}.webp`
    const { before, after, width, height, keptOriginal } = await optimize(
      sourcePath,
      path.join(OUT_DIR, outName),
    )

    totalBefore += before
    totalAfter += after

    const saved = before === 0 ? 0 : Math.round((1 - after / before) * 100)
    const note = keptOriginal ? '  (kept original — already smaller)' : `  (-${saved}%)`
    console.log(
      `  ${entry.padEnd(34)} ${String(width).padStart(4)}x${String(height).padEnd(5)}` +
        ` ${(before / 1048576).toFixed(2).padStart(6)} MB -> ${(after / 1024).toFixed(0).padStart(4)} KB${note}`,
    )
  }
}

console.log(
  `\n  total ${(totalBefore / 1048576).toFixed(2)} MB -> ${(totalAfter / 1048576).toFixed(2)} MB` +
    `  (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`,
)
