import { ArrowRight, FolderGit2, ShieldCheck } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const cycle = [
  { t: 'Backlog', d: 'What to build, in order', at: 0 },
  { t: 'Sprint', d: 'Build something that works', at: 0 },
  { t: 'Review', d: 'Check the result', at: 1 },
  { t: 'Retrospective', d: 'Improve how I work', at: 1 },
]

const proof = [
  { icon: FolderGit2, t: 'Tracked in the repository', d: 'Epics, tasks and review checklists' },
  { icon: ShieldCheck, t: 'Verified automatically', d: 'Automated checks on every change' },
]

export default function Methodology({ step }: SlideProps) {
  return (
    <Slide section="Methodology" title={<>Scrum, <span className="gradient-text-teal">adapted to working alone</span></>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="flex items-stretch gap-3">
          {cycle.map(({ t, d, at }, i) => (
            <div key={t} className="flex flex-1 items-stretch gap-3">
              <Reveal show={step >= at} delay={(i % 2) * 0.1} className="flex-1 border-t-[3px] border-px-teal bg-white px-5 py-5">
                <span className="font-mono text-[14px] font-bold text-[#029090]">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[27px] font-bold leading-tight">{t}</p>
                <p className="mt-1 text-[16px] leading-snug text-px-muted">{d}</p>
              </Reveal>
              {i < cycle.length - 1 && <ArrowRight size={22} className="shrink-0 self-center text-px-teal" />}
            </div>
          ))}
        </div>
        <Reveal show={step >= 2} className="grid grid-cols-2 gap-10 border-t border-black/10 pt-6">
          {proof.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-4">
              <Icon size={30} className="mt-1 shrink-0 text-px-teal" />
              <div><p className="text-[24px] font-bold leading-tight">{t}</p><p className="mt-1 text-[18px] text-px-muted">{d}</p></div>
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 2}><p className="text-[22px] text-px-muted">Then I started with the users: what does each one need to do?</p></Reveal>
      </div>
    </Slide>
  )
}
