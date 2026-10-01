import { Bot, Brain, Code2, Layers, Server, Workflow } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const traits = [{ icon: Bot, t: 'LLM workflows' }, { icon: Layers, t: 'Multi-tenant SaaS' }, { icon: Workflow, t: 'Background workers' }]
const hats = [
  { icon: Code2, t: 'Software engineering', d: 'Web, API, business rules' },
  { icon: Brain, t: 'AI engineering', d: 'LLM integration, evidence assessment' },
  { icon: Server, t: 'Platform engineering', d: 'Deployment, security, operations' },
]

export default function Context({ step }: SlideProps) {
  return (
    <Slide section="Context" title={<>Built inside <span className="gradient-text-teal">Prospecter</span>, an AI product company</>}>
      <div className="flex h-full flex-col justify-evenly pb-2">
        <div className="grid grid-cols-[1fr_1.2fr] gap-14">
          <Reveal show>
            <p className="text-[13px] font-bold uppercase tracking-widest text-[#029090]">The host company</p>
            <p className="mt-2 text-[25px] font-semibold leading-snug text-px-navy">AI-powered B2B platform: autonomous AI SDRs for outbound prospecting.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {traits.map(({ icon: Icon, t }) => (
                <span key={t} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[17px] font-semibold ring-1 ring-black/10"><Icon size={18} className="text-px-teal" />{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal show={step >= 1} className="border-l-2 border-px-teal/30 pl-12">
            <p className="text-[13px] font-bold uppercase tracking-widest text-[#029090]">My role: three hats</p>
            <ul className="mt-3 flex flex-col gap-4">
              {hats.map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex items-center gap-4"><Icon size={30} className="shrink-0 text-px-teal" /><div><p className="text-[23px] font-extrabold leading-tight">{t}</p><p className="text-[16px] text-px-muted">{d}</p></div></li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal show={step >= 2}><Takeaway>An independent product, from architecture and implementation through production deployment.</Takeaway></Reveal>
      </div>
    </Slide>
  )
}
