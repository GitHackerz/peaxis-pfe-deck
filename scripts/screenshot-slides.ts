/**
 * screenshot-slides.ts — renders every slide (final reveal state) to PNG for visual QA.
 * Usage: [STEP=n] pnpm exec tsx scripts/screenshot-slides.ts [outDir]
 * Requires a running dev server (default http://127.0.0.1:5178).
 */
import { mkdirSync } from 'fs'
import { resolve } from 'path'
import { chromium } from 'playwright'

const BASE = process.env.EXPORT_URL ?? 'http://127.0.0.1:5178'
const OUT = resolve(process.argv[2] ?? 'tmp/slides')
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
page.on('pageerror', (e) => console.error('PAGE ERROR', e.message))
const STEP = process.env.STEP !== undefined ? `&step=${process.env.STEP}` : ''
await page.goto(`${BASE}/?export=true${STEP}`, { waitUntil: 'networkidle' })
await page.waitForTimeout(800)
const pages = await page.locator('.export-page').all()
for (let i = 0; i < pages.length; i++) {
  await pages[i].screenshot({ path: `${OUT}/${String(i + 1).padStart(2, '0')}.png` })
}
console.log(`rendered ${pages.length} slides → ${OUT}`)
await browser.close()
