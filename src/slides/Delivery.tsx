import { motion } from 'framer-motion'
import { Boxes, Check, GitCommitHorizontal, RotateCcw, Rocket, ShieldCheck } from 'lucide-react'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const stations = [
  { icon: GitCommitHorizontal, t: 'Commit', d: 'a change on main' },
  { icon: ShieldCheck, t: '7 CI jobs', d: 'run automatically' },
  { icon: Boxes, t: 'Images', d: 'built and scanned' },
  { icon: Rocket, t: 'Gated deploy', d: 'backup, then migrate' },
  { icon: RotateCcw, t: 'Rollback ready', d: 'previous release kept' },
]
const checks = ['Lint and types', '1,400+ tests', 'Migrations + end-to-end', 'Secret scan', 'Image scan', 'Dependency audit']
const spring = { type: 'spring', stiffness: 90, damping: 15 } as const
const pos = (i: number) => `${((i + 0.5) / 5) * 100}%`

/** A change travels from commit to production; each click moves it one gate further. */
export default function Delivery({ step }: SlideProps) {
  return (
    <Slide section="Production" title={<>From commit to production, <span className="gradient-text-teal">safely</span></>}>
      <div className="relative h-full">
        <div className="absolute left-0 right-0 top-[110px] h-[4px] rounded bg-black/10" />
        <motion.div className="absolute left-[10%] top-[110px] h-[4px] origin-left rounded bg-px-teal" initial={false} animate={{ width: `${(step / 5) * 100}%` }} transition={spring} />
        {stations.map(({ icon: Icon, t, d }, i) => {
          const done = step > i
          const here = step === i
          return (
            <div key={t} className="absolute top-[68px] flex w-[200px] -translate-x-1/2 flex-col items-center text-center" style={{ left: pos(i) }}>
              <motion.div initial={false} animate={{ scale: here ? 1.12 : 1 }} transition={spring} className={`flex h-[84px] w-[84px] items-center justify-center rounded-full border-[3px] ${done || here ? 'border-px-teal bg-px-teal-lt text-[#029090]' : 'border-black/15 bg-white text-black/30'}`}><Icon size={36} /></motion.div>
              {done && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={spring} className="absolute left-[calc(50%+22px)] top-[-6px] flex h-7 w-7 items-center justify-center rounded-full bg-px-teal text-white"><Check size={16} strokeWidth={3.5} /></motion.span>}
              <p className={`mt-4 text-[22px] font-bold leading-tight ${done || here ? 'text-px-navy' : 'text-px-muted'}`}>{t}</p>
              <p className="text-[15px] text-px-muted">{d}</p>
            </div>
          )
        })}
        <motion.div initial={false} animate={{ left: pos(Math.min(step, 4)), y: [0, -6, 0] }} transition={{ left: spring, y: { repeat: Infinity, duration: 2.2 } }} style={{ x: '-50%' }} className="absolute top-[14px] z-10 flex flex-col items-center">
          <span className="rounded-full border-2 border-px-teal bg-white px-4 py-1 font-mono text-[14px] font-bold shadow-[0_12px_28px_-12px_rgba(0,16,39,0.5)]">a1f9c3e · my change</span>
          <div className="h-3 w-[3px] bg-px-teal" />
        </motion.div>

        <motion.div initial={false} animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} className="absolute left-0 right-0 top-[290px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-px-muted">What the CI jobs check</p>
          <div className="mt-3 flex flex-wrap gap-3">{checks.map((c) => <span key={c} className="rounded-full bg-px-teal-lt px-4 py-2 text-[17px] font-semibold text-[#0B7F7B]">{c}</span>)}</div>
        </motion.div>
        <motion.p initial={false} animate={step >= 4 ? { opacity: 1 } : { opacity: 0 }} className="absolute bottom-0 left-0 border-l-[4px] border-px-teal pl-4 text-[24px] font-semibold">Nothing reaches production without passing the checks, and every release can be rolled back.</motion.p>
      </div>
    </Slide>
  )
}
