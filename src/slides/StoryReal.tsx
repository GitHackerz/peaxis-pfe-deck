import { motion } from 'framer-motion'
import type { SlideProps } from './registry'

const spring = { type: 'spring', stiffness: 110, damping: 16 } as const
const words = "Can we trust a number if we don't understand how we got there?".split(' ')

export default function StoryReal({ step }: SlideProps) {
  return (
    <div className="slide-root flex flex-col justify-center px-[80px]">
      <p className="absolute left-[80px] top-[92px] flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.2em] text-[#029090]"><span className="h-[2px] w-8 bg-px-teal" />A short story · 4 of 4</p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={spring} className="text-[40px] font-semibold leading-snug tracking-[-0.02em] text-px-navy/80">
        The real question is not whether the result is{' '}
        <span className="relative inline-block text-px-navy">
          85%
          <motion.span initial={false} animate={{ scaleX: step >= 1 ? 1 : 0 }} transition={{ duration: 0.5 }} style={{ originX: 0 }} className="absolute left-0 right-0 top-1/2 h-[5px] -translate-y-1/2 bg-[#FE595A]" />
        </span>
        .
      </motion.p>

      <p className="mt-8 text-[62px] font-bold leading-[1.05] tracking-[-0.03em] text-px-navy">
        {words.map((w, i) => (
          <motion.span key={i} initial={false} animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ delay: step >= 1 ? 0.55 + i * 0.07 : 0, ...spring }} className={`mr-[0.28em] inline-block ${i >= 5 && i <= 9 ? 'text-[#029090]' : ''}`}>{w}</motion.span>
        ))}
      </p>
    </div>
  )
}
