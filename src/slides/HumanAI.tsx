import { Bot, UserCheck } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const ai = ['Parse', 'Summarize', 'Explain', 'Recommend', 'Draft']
const humans = ['Requirements', 'Interviews', 'Stage changes', 'Rejections', 'Offers']

export default function HumanAI({ step }: SlideProps) {
  return (
    <Slide section="AI" title={<>Explainable, <span className="gradient-text-teal">human-controlled</span> AI</>}>
      <div className="flex h-full flex-col justify-evenly pb-3">
        <div className="grid grid-cols-2 gap-10">
          <Reveal show={step >= 0} from="left" className="rounded-xl bg-white p-7 border border-black/10">
            <div className="flex items-center gap-3 text-[#029090]"><Bot size={32} /><p className="text-[26px] font-extrabold uppercase tracking-wide">AI assists</p></div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[24px] font-semibold text-px-navy">{ai.map((a) => <li key={a}>{a}</li>)}</ul>
          </Reveal>
          <Reveal show={step >= 1} from="right" className="rounded-xl border border-px-teal bg-px-teal-lt p-7">
            <div className="flex items-center gap-3 text-[#029090]"><UserCheck size={32} /><p className="text-[26px] font-extrabold uppercase tracking-wide">Humans control</p></div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[24px] font-semibold text-px-navy">{humans.map((a) => <li key={a}>{a}</li>)}</ul>
          </Reveal>
        </div>
        <Reveal show={step >= 2} className="flex flex-col gap-3">
          <p className="text-[34px] font-extrabold leading-tight text-px-navy">Show the evidence. <span className="gradient-text-teal">Let the human decide.</span></p>
          <p className="text-[18px] text-px-muted">AI supports recruiter judgment, it does not replace it. Evidence-linked, reviewable, advisory only: no AI step moves a candidate or makes an offer.</p>
        </Reveal>
      </div>
    </Slide>
  )
}
