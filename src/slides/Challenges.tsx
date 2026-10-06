import { Layers, ListChecks, SearchX } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const items = [
  { icon: ListChecks, n: '01', title: 'Manual work', text: 'Reading and comparing CVs takes a lot of time.' },
  { icon: Layers, n: '02', title: 'Scattered tools', text: 'The CV is in one place, the discussion in email, the interview in a calendar.' },
  { icon: SearchX, n: '03', title: 'Unclear AI results', text: 'A score appears, but the recruiter cannot see why.' },
]

export default function Challenges({ step }: SlideProps) {
  return (
    <Slide section="Problem" title={<>Three <span className="gradient-text-teal">problems</span> to solve</>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="grid grid-cols-3 gap-12 pt-2">
          {items.map(({ icon: Icon, n, title, text }, i) => (
            <Reveal key={title} show={step >= i} className="flex flex-col gap-3 border-t-[3px] border-px-teal pt-4">
              <div className="flex items-center justify-between"><span className="font-mono text-[16px] font-bold text-[#029090]">{n}</span><Icon size={30} className="text-px-teal" /></div>
              <p className="text-[32px] font-bold leading-tight tracking-[-0.015em] text-px-navy">{title}</p>
              <p className="text-[21px] leading-snug text-px-muted">{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal show={step >= 3}><Takeaway>These are the three problems I wanted PEAXIS to solve.</Takeaway></Reveal>
      </div>
    </Slide>
  )
}
