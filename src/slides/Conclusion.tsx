import { Layers, ScanSearch, ServerCog } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import type { SlideProps } from './registry'

const ideas = [
  { icon: Layers, title: 'One platform', text: 'for the recruitment journey' },
  { icon: ScanSearch, title: 'Explainable AI', text: 'that assists rather than replaces recruiters' },
  { icon: ServerCog, title: 'Production engineering', text: 'built for real organizations and real users' },
]

export default function Conclusion({ step }: SlideProps) {
  return (
    <div className="slide-root flex flex-col justify-center px-[80px] pt-10">
      <span className="text-[15px] font-bold uppercase tracking-[0.18em] text-[#029090]">Conclusion</span>
      <h2 className="mt-2 text-[46px] font-extrabold leading-tight tracking-tight text-px-navy">Three ideas to remember</h2>
      <div className="mt-10 grid grid-cols-3 gap-10">
        {ideas.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} show={step >= i} className="flex flex-col gap-3 border-t-[3px] border-px-teal pt-5">
            <Icon size={38} className="text-px-teal" />
            <p className="text-[30px] font-extrabold leading-tight text-px-navy">{title}</p>
            <p className="text-[21px] leading-snug text-px-muted">{text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal show={step >= 3} className="mt-12 max-w-[980px]">
        <p className="text-[28px] font-semibold leading-snug text-px-navy">What started as a Final Year Project has evolved into a production SaaS platform designed to solve a real recruitment problem.</p>
      </Reveal>
    </div>
  )
}
