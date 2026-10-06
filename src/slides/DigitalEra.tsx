import { ArrowRight, Clock, FileText, Sparkles } from 'lucide-react'
import Person from '../components/story/Person'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const recruiter = ['Receives applications', 'Reads', 'Compares profiles', 'Organizes interviews']

export default function DigitalEra({ step }: SlideProps) {
  return (
    <Slide
      section="Problem"
      title={<>Hiring, seen from <span className="gradient-text-teal">both sides</span></>}
      source="Sources: SHRM, 2025 Recruiting Benchmarking · LinkedIn, Future of Recruiting 2025"
    >
      <div className="flex h-full flex-col justify-between pb-3">
        <Reveal show className="grid grid-cols-[300px_1fr] gap-5">
          <div className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 border border-black/10">
            <Person variant="candidate" size={64} />
            <div><p className="text-[13px] font-bold uppercase tracking-widest text-[#029090]">Candidate</p><p className="text-[21px] font-extrabold leading-tight">Sends a CV, then waits</p></div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 border border-black/10">
            <span className="shrink-0"><Person variant="recruiter" size={64} /></span>
            <div className="mr-2"><p className="text-[13px] font-bold uppercase tracking-widest text-px-muted">Recruiter</p></div>
            <div className="flex flex-1 items-center gap-2">
              {recruiter.map((r, i) => (
                <div key={r} className="flex flex-1 items-center gap-2">
                  <span className="flex-1 rounded-lg bg-black/[0.04] px-2 py-2 text-center text-[16px] font-bold leading-tight">{r}</span>
                  {i < recruiter.length - 1 && <ArrowRight size={16} className="shrink-0 text-px-teal" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal show={step >= 1} className="flex items-center gap-5 border-l-[4px] border-[#FE595A] bg-[#FFF0F0]/60 px-6 py-3">
          <FileText size={26} className="text-[#C93435]" />
          <p className="text-[24px] font-bold text-[#C93435]">When applications grow, the work becomes hard to manage</p>
        </Reveal>

        <Reveal show={step >= 2} className="grid grid-cols-2 gap-5">
          <div className="flex items-center gap-5 rounded-xl bg-white px-6 py-4 border border-black/10">
            <Clock size={34} className="shrink-0 text-px-teal" />
            <p className="whitespace-nowrap text-[48px] font-extrabold leading-none tracking-tight">≈ 1.5<span className="ml-1 text-[22px]"> months</span></p>
            <p className="text-[16px] leading-snug text-px-muted">median time to fill a role (SHRM)</p>
          </div>
          <div className="flex items-center gap-5 rounded-xl bg-white px-6 py-4 border border-black/10">
            <Sparkles size={34} className="shrink-0 text-px-teal" />
            <p className="text-[56px] font-extrabold leading-none tracking-tight text-[#029090]">37%</p>
            <p className="text-[16px] leading-snug text-px-muted">of recruiting teams already try generative AI (LinkedIn)</p>
          </div>
        </Reveal>

      </div>
    </Slide>
  )
}
