import { chromium } from 'playwright'
import { execSync } from 'child_process'
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 720 } })
await p.goto('http://127.0.0.1:5178/?export=true', { waitUntil: 'networkidle' }); await p.waitForTimeout(800)
const test = async (name: string, css: string) => {
  const h = await p.addStyleTag({ content: css })
  await p.pdf({ path: '/tmp/claude-1000/t.pdf', printBackground: true, preferCSSPageSize: true })
  const out = execSync('pdftotext -bbox /tmp/claude-1000/t.pdf - | grep -m1 ">CONTEXT<"').toString().trim()
  console.log(name, out.slice(0, 80))
  await h.evaluate((e) => e.remove())
}
await test('baseline', '.x{}')
await test('no orb', '[data-slide="cover"] .slide-root > div:first-child{display:none}')
await test('no board', '[data-slide="cover"] .font-app.relative{display:none}')
await test('no chips', '[data-slide="cover"] .absolute.-left-10, [data-slide="cover"] .absolute.-top-2{display:none}')
await test('no left col', '[data-slide="cover"] .slide-root > div:nth-child(2){display:none}')
await test('no right group', '[data-slide="cover"] .slide-root > div:nth-child(3){display:none}')
await b.close()
