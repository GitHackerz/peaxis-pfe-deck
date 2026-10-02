import { Rocket } from 'lucide-react'
import CountUp from '../components/slide/CountUp'
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

const kpis = [
  { to: 1400, suffix: '+', fmt: (n: number) => n.toLocaleString('en-US'), label: 'automated tests', sub: 'API, web, admin and AI service' },
  { to: 27, suffix: '', fmt: (n: number) => String(n), label: 'backend modules', sub: '122 data models, 28 migrations' },
  { to: 7, suffix: '', fmt: (n: number) => String(n), label: 'automated CI jobs', sub: 'quality, tests, security scans' },
  { to: 68, suffix: '/68', fmt: (n: number) => String(n), label: 'production checks passed', sub: 'at the first production deployment' },
]

export default function PfeToProduct({ step }: SlideProps) {
  return (
    <Slide
      section="Production"
      title={<>From Final Year Project to <span className="gradient-text-teal">real product</span></>}
      source="Counted from the PEAXIS repository and deployment evidence, October 2026"
    >
      <div className="flex h-full flex-col justify-between pb-2">
        <Reveal show className="relative flex items-start justify-between pt-2">
          <div className="absolute left-[60px] right-[60px] top-[26px] h-[3px] bg-black/10" />
          <div className="absolute left-[60px] top-[26px] h-[3px] bg-px-teal" style={{ width: '57%' }} />
          {timeline.map((t) => (
            <div key={t.label} className="relative flex w-[170px] flex-col items-center gap-3 text-center">
              <span className={`flex h-[54px] w-[54px] items-center justify-center rounded-full ring-4 ring-[#F8FAFC] ${t.state === 'done' ? 'bg-px-teal text-white' : t.state === 'now' ? 'bg-px-navy text-white' : 'bg-white text-px-muted shadow-sm'}`}>
                {t.state === 'now' ? <Rocket size={26} /> : t.state === 'done' ? <span className="text-[24px] font-bold">✓</span> : <span className="h-3 w-3 rounded-full bg-black/20" />}
              </span>
              <span className={`text-[19px] font-bold leading-tight ${t.state === 'next' ? 'text-px-muted' : 'text-px-navy'}`}>{t.label}</span>
              {t.state === 'now' && <span className="-mt-1 rounded-full bg-px-navy/10 px-3 py-0.5 text-[13px] font-bold uppercase tracking-wider text-px-navy">Starting</span>}
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 1} className="grid grid-cols-4 gap-5">
          {kpis.map((k) => (
            <div key={k.label} className="flex flex-col gap-1 rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-black/5">
              <p className="text-[52px] font-extrabold leading-none tracking-tight text-px-navy">
                <span className="gradient-text-teal"><CountUp to={k.to} run={step >= 1} format={k.fmt} /></span>
                <span className="text-[34px] text-px-navy">{k.suffix}</span>
              </p>
              <p className="mt-1 text-[19px] font-bold leading-tight">{k.label}</p>
              <p className="text-[14px] leading-snug text-px-muted">{k.sub}</p>
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 2}>
          <p className="text-[24px] font-semibold leading-snug text-px-navy">PEAXIS was not built only for the defense. It is a SaaS product intended for real organizations, and the first client companies are starting to test it.</p>
        </Reveal>
      </div>
    </Slide>
  )
}
