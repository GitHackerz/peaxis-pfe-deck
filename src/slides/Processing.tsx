import { motion } from 'framer-motion'
import { Bot, Calculator, Check, Database, Eye, ListChecks, Server, X } from 'lucide-react'
import { Avatar } from '../components/product/ui'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const stations = [
  { icon: Database, t: 'Application saved', d: 'with its history and an event, in one transaction' },
  { icon: ListChecks, t: 'Work recorded', d: 'a durable work item in the database' },
  { icon: Server, t: 'Worker picks it up', d: 'through the Redis queue, outside the web request' },
  { icon: Bot, t: 'AI classifies evidence', d: 'only on quotes the platform supplies' },
  { icon: Calculator, t: 'Rules compute alignment', d: 'versioned, repeatable scoring' },
  { icon: Eye, t: 'Recruiter reviews', d: 'result shown with its evidence' },
]
const spring = { type: 'spring', stiffness: 90, damping: 15 } as const
const pos = (i: number) => `${((i + 0.5) / 6) * 100}%`

/** Amine's application travels through the pipeline, one station per click; the last click breaks the AI step. */
export default function Processing({ step }: SlideProps) {
  const at = Math.min(step, 5)
  const failed = step >= 6
  return (
    <Slide section="Architecture" title={<>What happens when <span className="gradient-text-teal">Amine applies</span></>}>
      <div className="relative h-full">
        <div className="absolute left-0 right-0 top-[120px] h-[4px] rounded bg-black/10" />
        <motion.div className="absolute left-[8.3%] top-[120px] h-[4px] origin-left rounded bg-px-teal" initial={false} animate={{ width: `${(Math.min(at, 5) / 6) * 100}%` }} transition={spring} />

        {stations.map(({ icon: Icon, t, d }, i) => {
          const done = at > i
          const here = at === i
          const broken = failed && i === 3
          return (
            <div key={t} className="absolute top-[78px] flex w-[186px] -translate-x-1/2 flex-col items-center text-center" style={{ left: pos(i) }}>
              <motion.div
                initial={false}
                animate={{ scale: here ? 1.12 : 1 }}
                transition={spring}
                className={`flex h-[84px] w-[84px] items-center justify-center rounded-full border-[3px] ${broken ? 'border-[#FE595A] bg-[#FFF0F0] text-[#FE595A]' : done || here ? 'border-px-teal bg-px-teal-lt text-[#029090]' : 'border-black/15 bg-white text-black/30'}`}
              >
                {broken ? <X size={38} strokeWidth={3} /> : <Icon size={36} />}
              </motion.div>
              {done && !broken && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={spring} className="absolute left-[calc(50%+22px)] top-[-6px] flex h-7 w-7 items-center justify-center rounded-full bg-px-teal text-white"><Check size={16} strokeWidth={3.5} /></motion.span>}
              <p className={`mt-4 text-[20px] font-bold leading-tight ${done || here ? 'text-px-navy' : 'text-px-muted'}`}>{t}</p>
              <p className="mt-1 text-[14px] leading-snug text-px-muted">{d}</p>
            </div>
          )
        })}

        {/* Amine's application */}
        <motion.div initial={false} animate={{ left: `${((at + 0.5) / 6) * 100}%`, y: [0, -6, 0] }} transition={{ left: spring, y: { repeat: Infinity, duration: 2.2 } }} style={{ x: '-50%' }} className="absolute top-[14px] z-10 flex flex-col items-center">
          <div className="font-app flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-px-teal bg-white py-1 pl-1 pr-4 shadow-[0_12px_28px_-12px_rgba(0,16,39,0.5)]"><Avatar name="Amine Benali" size={32} /><span className="text-[15px] font-semibold">Amine's application</span></div>
          <div className="h-3 w-[3px] bg-px-teal" />
        </motion.div>

        {/* Failure scenario */}
        <motion.div initial={false} animate={failed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="absolute bottom-0 left-0 right-0 grid grid-cols-[1fr_auto_1fr] items-center gap-8 border-t border-black/10 pt-5">
          <p className="text-[24px] font-bold leading-snug text-[#C93435]">What if the AI service is down?</p>
          <span className="text-[30px] text-px-muted">→</span>
          <p className="flex items-center gap-3 text-[24px] font-bold leading-snug text-px-navy"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-px-teal text-white"><Check size={20} strokeWidth={3.5} /></span>Amine's application is still saved. The work is retried later.</p>
        </motion.div>
      </div>
    </Slide>
  )
}
