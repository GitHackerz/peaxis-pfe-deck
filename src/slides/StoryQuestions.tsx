import { motion } from 'framer-motion'
import { ScoreRing } from '../components/product/ui'
import type { SlideProps } from './registry'

const spring = { type: 'spring', stiffness: 140, damping: 15 } as const
const qs = [
  { q: 'Why 85%?', x: 150, y: 190, bold: true },
  { q: 'Which parts of his CV led to this result?', x: 800, y: 190 },
  { q: 'What does he actually match?', x: 150, y: 430, bold: true },
  { q: 'What might the system have misunderstood?', x: 800, y: 430 },
]

export default function StoryQuestions({ step }: SlideProps) {
  return (
    <div className="slide-root">
      <p className="absolute left-[80px] top-[92px] flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.2em] text-[#029090]"><span className="h-[2px] w-8 bg-px-teal" />A short story · 3 of 4</p>
      <h2 className="absolute left-[80px] top-[122px] text-[34px] font-bold tracking-[-0.02em]">Before deciding, several questions remain</h2>

      <svg className="pointer-events-none absolute inset-0" width="1280" height="720" fill="none">
        {[['M480 223 L 548 322'], ['M800 240 L 732 322'], ['M480 480 L 548 478'], ['M800 480 L 732 478']].map(([d], i) => (
          <motion.path key={d} d={d} stroke="#00B8B3" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" initial={false} animate={{ pathLength: step >= i + 1 ? 1 : 0, opacity: step >= i + 1 ? 1 : 0 }} transition={{ duration: 0.6 }} />
        ))}
      </svg>

      <div className="absolute" style={{ left: 525, top: 285, width: 230, height: 230 }}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={spring}>
          <ScoreRing value={85} size={230} stroke={20} label="match" />
        </motion.div>
        {[1, 2, 3, 4].map((n) => (
          <motion.span key={n} initial={false} animate={{ opacity: step >= n ? 1 : 0, scale: step >= n ? 1 : 0.3 }} transition={spring} className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-[#FE595A] text-[24px] font-extrabold text-white shadow-md" style={{ left: [-16, 206, -16, 206][n - 1], top: [-8, -8, 198, 198][n - 1] }}>?</motion.span>
        ))}
      </div>

      {qs.map((it, i) => (
        <motion.div key={it.q} initial={false} animate={step >= i + 1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.92 }} transition={spring} className="absolute w-[330px] border border-black/10 bg-white px-5 py-4 shadow-[0_18px_40px_-24px_rgba(0,16,39,0.35)]" style={{ left: it.x, top: it.y }}>
          <p className={`text-[24px] leading-snug tracking-[-0.01em] ${it.bold ? 'font-bold' : 'font-semibold text-px-navy/85'}`}>{it.q}</p>
        </motion.div>
      ))}
    </div>
  )
}
