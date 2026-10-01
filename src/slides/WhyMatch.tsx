import { ArrowRight } from 'lucide-react'
import { EXAMPLE_REQUIREMENTS, ScoreRing, StatusMark } from '../components/product/ui'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const H = 'text-[13px] font-bold uppercase tracking-[0.16em] text-px-muted'

export default function WhyMatch({ step }: SlideProps) {
  return (
    <Slide
      section="AI"
      title={<>Why does this candidate <span className="gradient-text-teal">match?</span></>}
      source="Illustrative example: not a real candidate"
    >
      <div className="flex h-full flex-col justify-between pb-3">
        <div className="grid grid-cols-[290px_26px_370px_26px_270px_1fr] items-center gap-x-2 gap-y-2.5">
          <p className={H}>Job requirements</p><span /><p className={H}>Candidate evidence</p><span /><p className={H}>Assessment</p><span />
          {EXAMPLE_REQUIREMENTS.map((r, i) => (
            <div key={r.label} className="contents">
              <Reveal show={step >= 1} delay={i * 0.06} className="flex items-baseline gap-2 rounded-lg bg-white px-4 py-2.5 ring-1 ring-black/10">
                <span className="text-[21px] font-bold text-px-navy">{r.label}</span><span className="text-[13px] text-px-muted">{r.badge}</span>
              </Reveal>
              <Reveal show={step >= 2} delay={i * 0.06} from="none"><ArrowRight size={20} className="text-px-teal" /></Reveal>
              <Reveal show={step >= 2} delay={i * 0.06} className={`rounded-lg px-4 py-2.5 text-[17px] italic ${r.status === 'VERIFY' ? 'bg-black/5 text-px-muted' : 'bg-px-teal-lt text-px-navy'}`}>{r.evidence}</Reveal>
              <Reveal show={step >= 3} delay={i * 0.06} from="none"><ArrowRight size={20} className="text-px-teal" /></Reveal>
              <Reveal show={step >= 3} delay={i * 0.06} className="scale-[1.15] origin-left"><StatusMark status={r.status} /></Reveal>
              {i === 0 ? (
                <Reveal show={step >= 4} from="right" className="row-span-5 flex flex-col items-center justify-center gap-2 self-center">
                  <ScoreRing value={85} size={150} stroke={14} />
                  <span className="text-[16px] font-bold uppercase tracking-widest text-px-muted">Alignment</span>
                </Reveal>
              ) : null}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Reveal show={step >= 4}>
            <p className="text-[28px] font-extrabold text-px-navy">Every result can be traced back to evidence.</p>
          </Reveal>
          <Reveal show={step >= 4}>
            <p className="text-[18px] text-px-muted">AI helps retrieve and classify relevant evidence. The platform applies the final assessment rules.</p>
          </Reveal>
        </div>
      </div>
    </Slide>
  )
}
