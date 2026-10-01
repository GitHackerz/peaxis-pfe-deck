import { Bot, Building2, Rocket, ShieldCheck, Users } from 'lucide-react'
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

const wins = [
  { icon: Users, title: 'Real product', text: 'Candidate and recruiter workflows' },
  { icon: Bot, title: 'Controlled AI', text: 'Evidence-based recruiter assistance' },
  { icon: ShieldCheck, title: 'Production architecture', text: 'Multi-tenant, deployed' },
  { icon: Building2, title: 'Real-world validation', text: 'First client companies starting to test' },
]

export default function PfeToProduct({ step }: SlideProps) {
  return (
    <Slide section="Production" title={<>From Final Year Project to <span className="gradient-text-teal">real product</span></>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <Reveal show={step >= 0} className="relative flex items-start justify-between pt-2">
          <div className="absolute left-[60px] right-[60px] top-[26px] h-[3px] bg-black/10" />
          <div className="absolute left-[60px] top-[26px] h-[3px] bg-px-teal" style={{ width: '57%' }} />
          {timeline.map((t) => (
            <div key={t.label} className="relative flex w-[170px] flex-col items-center gap-3 text-center">
              <span className={`flex h-[54px] w-[54px] items-center justify-center rounded-full ring-4 ring-[#F8FAFC] ${t.state === 'done' ? 'bg-px-teal text-white' : t.state === 'now' ? 'bg-px-navy text-white' : 'bg-white text-px-muted ring-offset-0 shadow-sm'}`}>
                {t.state === 'now' ? <Rocket size={26} /> : t.state === 'done' ? <span className="text-[24px] font-bold">✓</span> : <span className="h-3 w-3 rounded-full bg-black/20" />}
              </span>
              <span className={`text-[19px] font-bold leading-tight ${t.state === 'next' ? 'text-px-muted' : 'text-px-navy'}`}>{t.label}</span>
              {t.state === 'now' && <span className="-mt-1 rounded-full bg-px-navy/10 px-3 py-0.5 text-[13px] font-bold uppercase tracking-wider text-px-navy">Starting</span>}
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 1} className="grid grid-cols-4 gap-6">
          {wins.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col gap-2 border-t-[3px] border-px-teal pt-3">
              <Icon size={28} className="text-px-teal" />
              <p className="text-[22px] font-extrabold leading-tight">{title}</p>
              <p className="text-[17px] leading-snug text-px-muted">{text}</p>
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 2}>
          <p className="text-[24px] font-semibold leading-snug text-px-navy">PEAXIS was not built only for the defense. It is a SaaS product intended for real organizations and real users.</p>
        </Reveal>
      </div>
    </Slide>
  )
}
