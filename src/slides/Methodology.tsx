import { RefreshCw } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const loop = [
  ['Product backlog', 'Epics and user stories'],
  ['Sprint', 'Plan, build, test'],
  ['Increment', 'Working, deployable slice'],
  ['Review & retro', 'Validate, then adapt'],
]
const practices = ['Epics, tasks and review checklists tracked in the repository', 'Every change passes automated checks (lint, types, tests) before release', 'Continuous validation with supervisors and first users']

export default function Methodology({ step }: SlideProps) {
  return (
    <Slide section="Method" title={<>Methodology: <span className="gradient-text-teal">Scrum</span>, adapted to a solo project</>}>
      <div className="flex h-full flex-col justify-evenly pb-2">
        <Reveal show className="relative grid grid-cols-4 gap-5">
          {loop.map(([t, d], i) => (
            <div key={t} className={`flex flex-col gap-1 rounded-2xl px-5 py-5 ${i === 0 ? 'bg-px-navy text-white' : 'bg-white shadow-sm ring-1 ring-black/5'}`}>
              <span className={`text-[14px] font-bold ${i === 0 ? 'text-px-teal' : 'text-[#029090]'}`}>{i + 1}</span>
              <p className="text-[25px] font-extrabold leading-tight">{t}</p>
              <p className={`text-[16px] ${i === 0 ? 'text-white/75' : 'text-px-muted'}`}>{d}</p>
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 1} className="flex items-center gap-3 text-[18px] font-semibold text-[#029090]">
          <RefreshCw size={22} /> Repeated sprint after sprint; feedback feeds the backlog
        </Reveal>
        <Reveal show={step >= 1}>
          <ul className="flex flex-col gap-2 text-[21px] text-px-navy">
            {practices.map((p) => <li key={p} className="flex gap-3"><span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-px-teal" />{p}</li>)}
          </ul>
        </Reveal>
        <Reveal show={step >= 2}><Takeaway>One person, one backlog, small validated increments: the discipline of Scrum without the ceremony.</Takeaway></Reveal>
      </div>
    </Slide>
  )
}
