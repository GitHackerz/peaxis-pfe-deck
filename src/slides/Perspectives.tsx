import { ArrowRight } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const hire = [
  ['Collaboration', 'Scorecards, feedback, shared ownership'],
  ['Communication hub', 'Candidate email and invitations in one place'],
  ['Source-linked copilot', 'Comparisons, interview kits, evidence gaps'],
  ['Enterprise readiness', 'Fine-grained permissions, integrations, analytics'],
]
const hr = ['Employee records', 'Leave & attendance', 'Documents', 'Performance', 'Employee lifecycle']

export default function Perspectives({ step }: SlideProps) {
  return (
    <Slide section="Perspectives" title={<>Where <span className="gradient-text-teal">PEAXIS goes next</span></>}>
      <div className="flex h-full flex-col justify-between pb-3">
        <div className="grid grid-cols-[1fr_60px_1fr] items-stretch gap-2">
          <Reveal show={step >= 0} from="left" className="flex flex-col gap-3 rounded-xl bg-white p-6 border border-black/10">
            <div><p className="text-[13px] font-bold uppercase tracking-widest text-[#029090]">Direction 1</p><p className="text-[32px] font-extrabold leading-tight">Deepen PEAXIS Hire</p></div>
            <ul className="flex flex-col gap-2.5">
              {hire.map(([t, d]) => (
                <li key={t}><p className="text-[21px] font-bold leading-tight">{t}</p><p className="text-[16px] text-px-muted">{d}</p></li>
              ))}
            </ul>
          </Reveal>
          <div className="flex items-center justify-center"><ArrowRight size={36} className={step >= 1 ? 'text-px-teal' : 'text-black/15'} /></div>
          <Reveal show={step >= 1} from="right" className="flex flex-col gap-4 rounded-xl border-2 border-dashed border-px-teal/60 p-6">
            <div>
              <div className="flex items-center gap-3"><p className="text-[13px] font-bold uppercase tracking-widest text-[#029090]">Direction 2</p><span className="rounded-full bg-px-navy px-3 py-0.5 text-[12px] font-bold uppercase tracking-wider text-white">Future</span></div>
              <p className="text-[32px] font-extrabold leading-tight">PEAXIS HR</p>
            </div>
            <p className="text-[17px] text-px-muted">Beyond hiring: the employee lifecycle. Possible areas, not commitments:</p>
            <ul className="flex flex-col gap-1.5 text-[20px] font-semibold text-px-navy/80">{hr.map((h) => <li key={h}>{h}</li>)}</ul>
          </Reveal>
        </div>
      </div>
    </Slide>
  )
}
