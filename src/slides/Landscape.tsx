import { Gauge, Globe2, Route, Sparkles } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const others = [
  { icon: Globe2, who: 'Job platforms', focus: 'Reach' },
  { icon: Route, who: 'Established ATS', focus: 'Process' },
  { icon: Gauge, who: 'AI recruiting tools', focus: 'Speed' },
]

export default function Landscape({ step }: SlideProps) {
  return (
    <Slide
      section="Problem"
      title={<>Everyone optimizes <span className="gradient-text-teal">something</span></>}
      lead="AI is no longer rare: major ATS vendors already ship it."
      source="Based on vendors' public positioning (Greenhouse, Ashby, Lever), 2026. Simplified view."
    >
      <div className="flex h-full flex-col justify-center gap-8 pb-6">
        <div className="grid grid-cols-3 gap-6">
          {others.map(({ icon: Icon, who, focus }, i) => (
            <Reveal key={who} show delay={i * 0.1} className="flex flex-col items-center gap-1 rounded-2xl bg-white py-7 text-center shadow-sm ring-1 ring-black/5">
              <Icon size={28} className="text-px-muted" />
              <p className="text-[18px] font-semibold uppercase tracking-wider text-px-muted">{who}</p>
              <p className="text-[46px] font-extrabold leading-tight text-px-navy">{focus}</p>
            </Reveal>
          ))}
        </div>
        <Reveal show={step >= 1} className="flex items-center gap-8 rounded-3xl bg-px-navy px-10 py-7 text-white">
          <Sparkles size={44} className="shrink-0 text-px-teal" />
          <div className="flex-1">
            <p className="text-[16px] font-bold uppercase tracking-[0.2em] text-px-teal">PEAXIS</p>
            <p className="text-[46px] font-extrabold leading-tight">Evidence</p>
          </div>
          <p className="max-w-[460px] text-[21px] leading-snug text-white/85">One candidate-to-recruiter journey, where every AI result is traceable and the human decides.</p>
        </Reveal>
      </div>
    </Slide>
  )
}
