import { Layers, ListChecks, SearchX } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const items = [
  { icon: ListChecks, title: 'Manual workload', text: 'Screening, organizing applications, interviews and follow-up.' },
  { icon: Layers, title: 'Fragmented workflows', text: 'Jobs, spreadsheets, email and calendars live in different tools.' },
  { icon: SearchX, title: 'Decision clarity', text: 'Keyword matching and opaque AI scores hide why a candidate is recommended.' },
]

export default function Challenges({ step }: SlideProps) {
  return (
    <Slide section="Problem" title={<>Three <span className="gradient-text-teal">core challenges</span></>}>
      <div className="flex h-full flex-col justify-evenly pb-2">
        <div className="grid grid-cols-3 gap-12 pt-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} show={step >= i} className="flex flex-col gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-px-teal-lt text-[#029090]"><Icon size={32} /></div>
              <p className="text-[27px] font-extrabold uppercase leading-tight tracking-wide text-px-navy">{title}</p>
              <p className="text-[20px] leading-snug text-px-muted">{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal show={step >= 3}>
          <Takeaway>Less effort is not enough: recruiters must also understand and trust the result.</Takeaway>
        </Reveal>
      </div>
    </Slide>
  )
}
