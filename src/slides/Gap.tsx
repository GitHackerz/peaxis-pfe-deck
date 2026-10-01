import { Brain, Hand, LayoutGrid, ScanSearch } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import type { SlideProps } from './registry'

const goals = [
  { icon: LayoutGrid, text: 'Centralize the recruitment workflow' },
  { icon: ScanSearch, text: 'Understand candidate evidence' },
  { icon: Brain, text: 'Assist recruiters with AI' },
  { icon: Hand, text: 'Keep humans in control' },
]

export default function Gap({ step }: SlideProps) {
  return (
    <div className="slide-root flex flex-col justify-center px-[80px] pt-10">
      <span className="text-[15px] font-bold uppercase tracking-[0.18em] text-[#029090]">Problem · Project objective</span>
      <h2 className="mt-3 max-w-[1090px] text-[46px] font-extrabold leading-[1.1] tracking-tight text-px-navy">
        How can AI make recruitment more efficient{' '}
        <span className="gradient-text-teal">without turning hiring into a black box?</span>
      </h2>
      <div className="mt-12 grid grid-cols-4 gap-8">
        {goals.map(({ icon: Icon, text }, i) => (
          <Reveal key={text} show={step >= 1} delay={i * 0.1} className="flex flex-col gap-3 border-t-[3px] border-px-teal pt-4">
            <Icon size={32} className="text-px-teal" />
            <p className="text-[22px] font-bold leading-snug text-px-navy">{text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
