import { motion } from 'framer-motion'
import { Avatar, ScoreRing } from '../components/product/ui'
import Person from '../components/story/Person'
import type { SlideProps } from './registry'

const spring = { type: 'spring', stiffness: 120, damping: 16 } as const

export default function StoryRecruiter({ step }: SlideProps) {
  return (
    <div className="slide-root">
      <p className="absolute left-[80px] top-[92px] flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.2em] text-[#029090]"><span className="h-[2px] w-8 bg-px-teal" />A short story · 2 of 4</p>

      <motion.div initial={{ opacity: 0, x: -60, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={spring} className="absolute left-[110px] top-[170px] flex flex-col items-center">
        <Person variant="recruiter" size={300} />
        <p className="mt-4 text-[34px] font-bold tracking-[-0.02em]">The recruiter</p>
        <p className="text-[19px] text-px-muted">Applications keep coming in</p>
      </motion.div>

      {/* Stack of applications */}
      <div className="font-app absolute left-[560px] top-[170px] h-[330px] w-[560px]">
        {[3, 2, 1].map((k) => (
          <motion.div key={k} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * k, ...spring }} className="absolute w-[500px] border border-black/10 bg-white px-5 py-4 shadow-sm" style={{ left: k * 18, top: k * 40 + 70 }}>
            <div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-a-muted" /><div className="space-y-1.5"><div className="h-2.5 w-36 rounded bg-a-muted" /><div className="h-2 w-24 rounded bg-a-muted" /></div></div>
          </motion.div>
        ))}
        {/* Amine's application */}
        <motion.div
          initial={false}
          animate={step >= 1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.92 }}
          transition={spring}
          className="absolute left-0 top-0 w-[520px] border-2 border-a-primary bg-white p-5 shadow-[0_28px_60px_-24px_rgba(0,16,39,0.4)]"
        >
          <div className="flex items-center gap-4">
            <Avatar name="Amine Benali" size={56} />
            <div className="flex-1"><p className="text-[26px] font-bold leading-tight">Amine Benali</p><p className="text-[16px] text-a-mfg">Backend engineer · Tunis</p></div>
            <motion.div initial={false} animate={step >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }} transition={{ type: 'spring', stiffness: 160, damping: 12 }}>
              <ScoreRing value={step >= 2 ? 85 : 0} size={112} stroke={11} label="match" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decision */}
      <motion.div initial={false} animate={step >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="absolute bottom-[78px] left-[80px] right-[80px] flex items-center justify-between border-t border-black/10 pt-4">
        <p className="text-[30px] font-bold tracking-[-0.02em]">Should Amine move forward?</p>
        <div className="font-app flex gap-3 text-[18px] font-semibold"><span className="rounded-md bg-a-primary px-6 py-2.5 text-white">Invite to interview</span><span className="rounded-md border border-a-border bg-white px-6 py-2.5">Reject</span></div>
      </motion.div>
    </div>
  )
}
