import { Brain, Code2, Server } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const areas = [
  { icon: Code2, t: 'The application', d: 'Web platform, API, business rules' },
  { icon: Brain, t: 'The AI', d: 'LLM integration, evidence assessment' },
  { icon: Server, t: 'The infrastructure', d: 'Deployment, security, operations' },
]

export default function Context({ step }: SlideProps) {
  return (
    <Slide section="Context" title={<>Built at <span className="gradient-text-teal">Prospecter</span>, an AI product company</>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="grid grid-cols-[1fr_1.2fr] gap-14">
          <Reveal show>
            <p className="text-[13px] font-bold uppercase tracking-widest text-[#029090]">The host company</p>
            <p className="mt-2 text-[26px] font-semibold leading-snug text-px-navy">AI product for B2B prospecting, based in Doha, Qatar.</p>
            <p className="mt-3 text-[19px] leading-snug text-px-muted">I worked there full time as a software engineer: AI, software, and a real product in production.</p>
          </Reveal>
          <Reveal show={step >= 1} className="border-l border-black/15 pl-12">
            <p className="text-[13px] font-bold uppercase tracking-widest text-[#029090]">My work covered three areas</p>
            <ul className="mt-3 flex flex-col gap-4">
              {areas.map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex items-center gap-4"><Icon size={28} className="shrink-0 text-px-teal" /><div><p className="text-[23px] font-bold leading-tight">{t}</p><p className="text-[16px] text-px-muted">{d}</p></div></li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal show={step >= 2} className="border-t border-black/10 pt-5">
          <p className="text-[22px] font-semibold text-px-navy">Built independently, from architecture to deployment.</p>
          <p className="mt-1 text-[17px] text-px-muted">Supervised by <b className="text-px-navy">Mme Olfa Mannai</b> (academic) and <b className="text-px-navy">Mr. Fedi Naimi</b> (company). Thank you for your support.</p>
        </Reveal>
      </div>
    </Slide>
  )
}
