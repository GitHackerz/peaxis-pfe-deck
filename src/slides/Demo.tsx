import { ArrowDown, Play } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import type { SlideProps } from './registry'

const candidate = ['Discover a job', 'Apply with CV']
const recruiter = ['Application received', 'Review candidate', 'Understand evidence', 'Continue hiring workflow']

function Lane({ title, items, show }: { title: string; items: string[]; show: boolean }) {
  return (
    <Reveal show={show} className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-6 shadow-sm border border-black/10">
      <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-[#029090]">{title}</p>
      {items.map((t, i) => (
        <div key={t} className="flex flex-col items-center gap-1.5">
          <p className="text-[24px] font-extrabold text-px-navy">{t}</p>
          {i < items.length - 1 && <ArrowDown size={20} className="text-px-teal" />}
        </div>
      ))}
    </Reveal>
  )
}

export default function Demo({ step }: SlideProps) {
  return (
    <div className="slide-root flex flex-col justify-center gap-8 px-[80px] pt-14">
      <div className="flex items-center gap-6">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-px-teal"><Play size={36} fill="#001027" className="text-px-navy" /></span>
        <div>
          <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-[#029090]">Live demo · about 5 minutes</p>
          <h2 className="text-[60px] font-extrabold leading-none tracking-tight text-px-navy">PEAXIS in action</h2>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1.1fr] items-stretch gap-8">
        <Lane title="Candidate" items={candidate} show />
        <Lane title="Recruiter" items={recruiter} show={step >= 1} />
      </div>
      <p className="text-[14px] uppercase tracking-[0.2em] text-px-muted">Switch to the app · press → to return</p>
    </div>
  )
}
