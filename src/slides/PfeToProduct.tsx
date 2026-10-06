import { Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

type State = 'done' | 'now' | 'next'
const timeline: { label: string; state: State }[] = [
  { label: 'Final Year Project', state: 'done' },
  { label: 'Engineered product', state: 'done' },
  { label: 'Production deployment', state: 'done' },
  { label: 'First client testing', state: 'now' },
  { label: 'Real feedback', state: 'next' },
  { label: 'Continuous improvement', state: 'next' },
]


export default function PfeToProduct({ step }: SlideProps) {
  return (
    <Slide
      section="Production"
      title={<>From Final Year Project to <span className="gradient-text-teal">real product</span></>}
    >
      <div className="flex h-full flex-col justify-evenly pb-2">
        <Reveal show className="relative flex items-start justify-between pt-2">
          <div className="absolute left-[60px] right-[60px] top-[26px] h-[3px] bg-black/10" />
          <motion.div className="absolute left-[60px] top-[26px] h-[3px] bg-px-teal" initial={{ width: 0 }} animate={{ width: '57%' }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} />
          {timeline.map((t) => (
            <div key={t.label} className="relative flex w-[170px] flex-col items-center gap-3 text-center">
              <span className={`flex h-[54px] w-[54px] items-center justify-center rounded-full ring-4 ring-[#F8FAFC] ${t.state === 'done' ? 'bg-px-teal text-white' : t.state === 'now' ? 'bg-px-navy text-white' : 'bg-white text-px-muted shadow-sm'}`}>
                {t.state === 'now' ? <motion.span animate={{ scale: [1, 1.18, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} className="flex"><Rocket size={26} /></motion.span> : t.state === 'done' ? <span className="text-[24px] font-bold">✓</span> : <span className="h-3 w-3 rounded-full bg-black/20" />}
              </span>
              <span className={`text-[19px] font-bold leading-tight ${t.state === 'next' ? 'text-px-muted' : 'text-px-navy'}`}>{t.label}</span>
              {t.state === 'now' && <span className="-mt-1 rounded-full bg-px-navy/10 px-3 py-0.5 text-[13px] font-bold uppercase tracking-wider text-px-navy">Starting</span>}
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 1}>
          <p className="text-[32px] font-bold leading-snug tracking-[-0.02em] text-px-navy">PEAXIS was not built only to pass a school project. It is a SaaS product for real companies, and the first ones are starting to test it.</p>
        </Reveal>
      </div>
    </Slide>
  )
}
