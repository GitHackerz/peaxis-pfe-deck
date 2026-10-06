import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const rows = [
  { name: 'LinkedIn Recruiter', tag: 'Sourcing candidates' },
  { name: 'Greenhouse', tag: 'Structured hiring' },
  { name: 'Ashby', tag: 'All-in-one suite' },
  { name: 'Workable', tag: 'Easy for small teams' },
]

export default function Landscape({ step }: SlideProps) {
  return (
    <Slide
      section="Problem"
      title={<>Existing solutions, and <span className="gradient-text-teal">our difference</span></>}
      source="Vendors' public websites, October 2026. Simplified view."
    >
      <div className="grid h-full grid-cols-[1.05fr_1fr] items-center gap-14 pb-6">
        <div>
          <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.18em] text-px-muted">Tools companies use today</p>
          {rows.map((r, i) => (
            <Reveal key={r.name} show={step >= i} className="flex items-baseline justify-between border-t border-black/10 py-5 last:border-b">
              <p className="text-[32px] font-bold tracking-[-0.01em]">{r.name}</p>
              <p className="text-[21px] text-px-muted">{r.tag}</p>
            </Reveal>
          ))}
        </div>
        <Reveal show={step >= 4} from="right" className="border-l-[4px] border-px-teal pl-10">
          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#029090]">PEAXIS</p>
          <p className="mt-3 text-[46px] font-bold leading-[1.1] tracking-[-0.025em]">Evidence behind every AI result</p>
          <ul className="mt-6 flex flex-col gap-3 text-[22px] text-px-muted">
            <li>One journey, from candidate to recruiter</li>
            <li>A free plan, with local billing</li>
          </ul>
        </Reveal>
      </div>
    </Slide>
  )
}
