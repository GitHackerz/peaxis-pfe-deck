import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const rows = [
  { name: 'LinkedIn Recruiter', tag: '+ Hiring Assistant', best: 'Sourcing: finding candidates in a huge network, AI shortlists', diff: 'Starts after the application, with evidence per requirement' },
  { name: 'Greenhouse', tag: 'Structured hiring', best: 'Mature enterprise ATS, AI answers linked to sources, human-led', diff: 'Same spirit, lighter product, evidence in every candidate review' },
  { name: 'Ashby', tag: 'All-in-one suite', best: 'ATS + CRM + scheduling + analytics, AI throughout', diff: 'Narrower on purpose: centred on explainable assessment' },
  { name: 'Workable', tag: 'SME-friendly ATS', best: 'Quick to start, AI agent, paid plans from $299/month', diff: 'Free entry plan, billing in local currency (TND)' },
]

export default function Landscape({ step }: SlideProps) {
  return (
    <Slide
      section="Problem"
      title={<>Existing solutions, and <span className="gradient-text-teal">our difference</span></>}
      source="Vendors' public websites, October 2026. List prices change; simplified view, not a full comparison."
    >
      <div className="flex h-full flex-col gap-2 pb-6">
        <div className="grid grid-cols-[250px_1fr_1fr] gap-6 px-5 text-[13px] font-bold uppercase tracking-[0.16em] text-px-muted">
          <span>Solution</span><span>Strong at</span><span className="text-[#029090]">PEAXIS focus</span>
        </div>
        {rows.map((r, i) => (
          <Reveal key={r.name} show={step >= i} className="grid flex-1 grid-cols-[250px_1fr_1fr] items-center gap-6 rounded-xl bg-white px-5 border border-black/10">
            <div><p className="text-[23px] font-extrabold leading-tight">{r.name}</p><p className="text-[14px] text-px-muted">{r.tag}</p></div>
            <p className="text-[18px] leading-snug text-px-navy">{r.best}</p>
            <p className="text-[18px] font-semibold leading-snug text-[#0B7F7B]">{r.diff}</p>
          </Reveal>
        ))}
        <Reveal show={step >= 4} className="rounded-xl bg-px-teal-lt px-6 py-3 ring-1 ring-px-teal/40">
          <p className="text-[22px] font-extrabold leading-snug text-px-navy">PEAXIS: one candidate-to-recruiter journey, every AI result linked to evidence, the human decides.</p>
        </Reveal>
      </div>
    </Slide>
  )
}
