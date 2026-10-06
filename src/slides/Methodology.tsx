import { motion } from 'framer-motion'
import { ClipboardList, FolderGit2, Hammer, MessageSquareMore, SearchCheck, ShieldCheck } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const stations = [
  { icon: ClipboardList, t: 'Backlog', d: 'What to build, in order', at: 0 },
  { icon: Hammer, t: 'Sprint', d: 'Build something that works', at: 0 },
  { icon: SearchCheck, t: 'Review', d: 'Check the result', at: 1 },
  { icon: MessageSquareMore, t: 'Retrospective', d: 'Improve how I work', at: 1 },
]
const proof = [
  { icon: FolderGit2, t: 'Tracked in the repository', d: 'Epics, tasks, review checklists' },
  { icon: ShieldCheck, t: 'Verified automatically', d: 'Automated checks on every change' },
]
const spring = { type: 'spring', stiffness: 110, damping: 16 } as const
const X = (i: number) => 12.5 + i * 25 // % centers: 12.5, 37.5, 62.5, 87.5

export default function Methodology({ step }: SlideProps) {
  return (
    <Slide section="Methodology" title={<>Scrum, <span className="gradient-text-teal">adapted to working alone</span></>}>
      <div className="relative mx-auto h-[450px] w-[1120px]">
        {/* line */}
        <div className="absolute left-[12.5%] right-[12.5%] top-[92px] h-[4px] rounded bg-black/10" />
        <motion.div className="absolute left-[12.5%] top-[92px] h-[4px] origin-left rounded bg-px-teal" initial={false} animate={{ width: step >= 1 ? '75%' : '25%' }} transition={{ duration: 0.8 }} />

        {stations.map(({ icon: Icon, t, d, at }, i) => (
          <motion.div key={t} initial={false} animate={step >= at ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.9 }} transition={spring} className="absolute top-[40px] flex w-[240px] flex-col items-center text-center" style={{ left: `${X(i)}%`, x: '-50%' }}>
            <span className="relative flex h-[108px] w-[108px] items-center justify-center rounded-full border-[3px] border-px-teal bg-white text-[#029090] shadow-[0_18px_36px_-18px_rgba(0,16,39,0.45)]">
              <Icon size={44} />
              <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-px-navy font-mono text-[14px] font-bold text-white">{i + 1}</span>
            </span>
            <p className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.01em]">{t}</p>
            <p className="mt-1 text-[17px] text-px-muted">{d}</p>
          </motion.div>
        ))}

        {/* loop back */}
        <svg className="pointer-events-none absolute inset-0" width="1120" height="450" fill="none">
          <defs><marker id="lp" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto"><path d="M2 2L12 7L2 12" stroke="#029090" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
          <motion.path d="M980 262 C 980 330, 460 330, 420 262" stroke="#029090" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" markerEnd="url(#lp)" initial={false} animate={{ pathLength: step >= 1 ? 1 : 0, opacity: step >= 1 ? 1 : 0 }} transition={{ duration: 1 }} />
        </svg>
        <Reveal show={step >= 1} className="absolute left-[40%] top-[322px] text-[16px] font-semibold text-[#029090]">Sprint after sprint</Reveal>

        {/* proof */}
        <Reveal show={step >= 2} className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-10 border-t border-black/10 pt-5">
          {proof.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-4"><Icon size={30} className="shrink-0 text-px-teal" /><div><p className="text-[22px] font-bold leading-tight">{t}</p><p className="text-[16px] text-px-muted">{d}</p></div></div>
          ))}
        </Reveal>
      </div>
    </Slide>
  )
}
