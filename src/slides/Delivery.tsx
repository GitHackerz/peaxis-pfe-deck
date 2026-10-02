import { ChevronRight } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const flow = [
  ['Commit', 'on main'],
  ['7 CI jobs', 'checks run automatically'],
  ['4 images', 'built and scanned'],
  ['Gated deploy', 'backup, then migrate'],
  ['Rollback', 'previous release ready'],
]
const checks = ['Lint and types', '1,400+ tests', 'Migrations + end-to-end', 'Secret scan', 'Image scan', 'Dependency audit']

export default function Delivery({ step }: SlideProps) {
  return (
    <Slide section="Production" title={<>From commit to production, <span className="gradient-text-teal">safely</span></>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <Reveal show className="flex items-stretch gap-2">
          {flow.map(([t, d], i) => (
            <div key={t} className="flex flex-1 items-center gap-2">
              <div className={`flex-1 rounded-2xl px-4 py-5 text-center ${i === 1 ? 'bg-px-navy text-white' : 'bg-white shadow-sm ring-1 ring-black/5'}`}>
                <p className="text-[24px] font-extrabold leading-tight">{t}</p>
                <p className={`mt-1 text-[15px] ${i === 1 ? 'text-white/70' : 'text-px-muted'}`}>{d}</p>
              </div>
              {i < flow.length - 1 && <ChevronRight size={22} className="shrink-0 text-px-teal" />}
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 1} className="flex flex-col gap-3">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-px-muted">What the gates check</p>
          <div className="flex flex-wrap gap-3">{checks.map((c) => <span key={c} className="rounded-full bg-px-teal-lt px-4 py-2 text-[17px] font-semibold text-[#0B7F7B]">{c}</span>)}</div>
        </Reveal>
        <Reveal show={step >= 2}><Takeaway>Nothing reaches production without passing the checks, and every release can be rolled back.</Takeaway></Reveal>
      </div>
    </Slide>
  )
}
