import { Layers, ScanSearch, ServerCog } from 'lucide-react'
import { EXAMPLE_REQUIREMENTS, ScoreRing, StatusMark } from '../components/product/ui'
import Reveal from '../components/slide/Reveal'
import type { SlideProps } from './registry'

const built = [
  { icon: Layers, t: 'One recruitment platform', d: 'Jobs for candidates, Hire for recruiters' },
  { icon: ScanSearch, t: 'Explainable AI', d: 'Every result linked to evidence' },
  { icon: ServerCog, t: 'Production engineering', d: 'Built to run for real users' },
]

export default function Conclusion({ step }: SlideProps) {
  return (
    <div className="slide-root flex flex-col px-[80px] pb-[64px] pt-[92px]">
      <span className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.2em] text-[#029090]"><span className="h-[2px] w-8 bg-px-teal" />Conclusion</span>
      <h2 className="mt-2 text-[40px] font-bold leading-[1.1] tracking-[-0.025em] text-px-navy">Back to our first question: would you invite a candidate with an 85% match?</h2>

      <div className="mt-6 grid grid-cols-[170px_1fr] items-center gap-8 border-y border-black/10 py-5">
        <div className="flex flex-col items-center gap-1">
          <ScoreRing value={85} size={120} stroke={11} />
          <span className="text-[13px] font-bold uppercase tracking-widest text-px-muted">Match</span>
        </div>
        <div>
          <p className="text-[26px] font-semibold leading-snug text-px-navy">
            {step >= 1 ? <>Now we have something better than a number: <span className="text-[#029090]">the evidence behind it.</span></> : <span className="text-px-muted">A number alone does not tell us why.</span>}
          </p>
          <Reveal show={step >= 1} className="mt-3 flex flex-wrap gap-2">
            {EXAMPLE_REQUIREMENTS.map((r) => (
              <span key={r.label} className="font-app flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[15px] font-semibold">{r.label}<StatusMark status={r.status} /></span>
            ))}
          </Reveal>
        </div>
      </div>

      <Reveal show={step >= 2} className="mt-5">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-px-muted">That is what I built with PEAXIS</p>
        <div className="mt-3 grid grid-cols-3 gap-10">
          {built.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3 border-t-[3px] border-px-teal pt-3">
              <Icon size={26} className="mt-0.5 shrink-0 text-px-teal" />
              <div><p className="text-[22px] font-bold leading-tight">{t}</p><p className="mt-0.5 text-[16px] text-px-muted">{d}</p></div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal show={step >= 3} className="mt-auto">
        <p className="text-[34px] font-bold tracking-[-0.02em] text-px-navy">Show the evidence. <span className="gradient-text-teal">Let the human decide.</span></p>
      </Reveal>
    </div>
  )
}
