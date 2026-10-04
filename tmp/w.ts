import { chromium } from 'playwright'
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } })
await p.goto('http://127.0.0.1:5178/'); await p.waitForTimeout(1500)
for (let i=0;i<24;i++){ await p.keyboard.press('ArrowRight'); await p.waitForTimeout(60) }
for (let i=0;i<40;i++){ const f=(await p.locator('.stage .font-mono').first().innerText()); if(f.startsWith('14 /')) break; await p.keyboard.press('ArrowRight'); await p.waitForTimeout(80) }
for (let i=0;i<4;i++){ await p.keyboard.press('ArrowRight'); await p.waitForTimeout(100) }
await p.waitForTimeout(800); await p.screenshot({ path: '/tmp/claude-1000/w.png' }); await b.close()
