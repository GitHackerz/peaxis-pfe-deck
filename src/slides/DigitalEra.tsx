import { ArrowRight } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const chain = ['More applications', 'More screening', 'More coordination', 'Slower decisions', 'Candidate experience suffers']

export default function DigitalEra({ step }: SlideProps) {
  return (
    <Slide
      section="Problem"
      title={<>Recruitment in the <span className="gradient-text-teal">digital era</span></>}
      source="Sources: SHRM, 2025 Recruiting Benchmarking · LinkedIn, Future of Recruiting 2025"
    >
      <div className="flex h-full flex-col justify-between pb-4">
        <div className="flex items-center gap-2 pt-4">
          {chain.map((c, i) => (
            <div key={c} className="flex items-center gap-2">
              <Reveal show={step >= 0} delay={i * 0.12}>
                <div className={`rounded-xl px-4 py-5 text-center text-[19px] font-bold leading-snug ${i === 4 ? 'bg-[#FFF0F0] text-[#C93435]' : 'bg-white text-px-navy shadow-sm ring-1 ring-black/5'}`} style={{ width: 168, minHeight: 92 }}>
                  {c}
                </div>
              </Reveal>
              {i < 4 && <ArrowRight size={22} className="shrink-0 text-px-muted" />}
            </div>
          ))}
        </div>

        <Reveal show={step >= 1} className="flex items-baseline gap-5">
          <span className="text-[64px] font-extrabold leading-none text-px-navy">≈ 1.5 <span className="text-[30px]">months</span></span>
          <span className="max-w-[560px] text-[21px] leading-snug text-px-muted">median time-to-fill, for executive and non-executive roles alike (SHRM, 2025)</span>
        </Reveal>

        <Reveal show={step >= 2} className="flex flex-col gap-4">
          <p className="text-[26px] leading-snug text-px-navy">
            <span className="font-extrabold text-[#029090]">37%</span> of recruiting organizations are already integrating or experimenting with generative AI
            <span className="text-px-muted"> (LinkedIn, 2025).</span>
          </p>
          <Takeaway>AI can remove repetitive work, but hiring also demands trust, transparency and human oversight.</Takeaway>
        </Reveal>
      </div>
    </Slide>
  )
}
