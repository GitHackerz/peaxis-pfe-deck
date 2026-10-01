import { ArrowRight } from 'lucide-react'
import { CvDocument, StructuredProfile } from '../components/product/CvParts'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const stages = ['Extract content', 'AI structures information', 'Validate against source', 'Profile & evidence']

export default function CvUnderstanding({ step }: SlideProps) {
  const active = step >= 3 ? 3 : step - 1 // -1 = nothing started yet
  return (
    <Slide section="AI" title={<>How PEAXIS <span className="gradient-text-teal">understands a CV</span></>} source="Fictitious CV and candidate">
      <div className="flex h-full flex-col gap-4 pb-3">
        <div className="grid grid-cols-[420px_1fr_500px] items-center gap-4">
          <div className="h-[318px]"><CvDocument scan={step === 1} evidence={step >= 3} /></div>
          <div className="flex justify-center"><ArrowRight size={44} className={step >= 1 ? 'text-px-teal' : 'text-black/15'} /></div>
          <Reveal show={step >= 2} from="right" className="h-[318px]"><StructuredProfile validated={step >= 3} /></Reveal>
        </div>
        <div className="flex items-center justify-between gap-2">
          {stages.map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-2">
              <span className={`flex-1 rounded-full px-4 py-2 text-center text-[17px] font-bold ${i === active ? 'bg-px-teal text-white' : i < active ? 'bg-px-teal-lt text-[#029090]' : 'bg-black/5 text-px-muted'}`}>{s}</span>
              {i < 3 && <ArrowRight size={16} className="text-px-muted" />}
            </div>
          ))}
        </div>
        <Reveal show={step >= 3}>
          <p className="text-[20px] leading-snug text-px-navy"><b>PEAXIS does not blindly trust generated output.</b> Parsed information is checked against the source before it becomes usable evidence.</p>
        </Reveal>
      </div>
    </Slide>
  )
}
