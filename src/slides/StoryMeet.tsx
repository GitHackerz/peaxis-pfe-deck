import { motion } from 'framer-motion'
import { Check, Clock, FileText } from 'lucide-react'
import Person from '../components/story/Person'
import type { SlideProps } from './registry'

const spring = { type: 'spring', stiffness: 120, damping: 16 } as const

export default function StoryMeet({ step }: SlideProps) {
  return (
    <div className="slide-root">
      <p className="absolute left-[80px] top-[92px] flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.2em] text-[#029090]"><span className="h-[2px] w-8 bg-px-teal" />A short story · 1 of 4</p>

      {/* Amine */}
      <motion.div initial={{ opacity: 0, x: -60, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={spring} className="absolute left-[110px] top-[170px] flex flex-col items-center">
        <Person variant="candidate" size={300} />
        <p className="mt-4 text-[34px] font-bold tracking-[-0.02em]">Amine</p>
        <p className="text-[19px] text-px-muted">Backend engineer, looking for a new opportunity</p>
      </motion.div>

      {/* Job offer */}
      <motion.div
        initial={false}
        animate={step >= 1 ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 80, scale: 0.94 }}
        transition={spring}
        className="font-app absolute left-[640px] top-[200px] w-[470px] border border-black/10 bg-white p-6 shadow-[0_24px_50px_-24px_rgba(0,16,39,0.35)]"
      >
        <p className="font-sans text-[13px] font-bold uppercase tracking-widest text-[#029090]">A job offer</p>
        <p className="mt-1 text-[28px] font-bold leading-tight">Backend Engineer</p>
        <p className="text-[16px] text-a-mfg">Northwind · Tunis · Hybrid</p>
        <div className="mt-4 flex gap-2">{['NestJS', 'PostgreSQL', 'Docker'].map((t) => <span key={t} className="rounded-md bg-a-accent px-3 py-1 text-[15px] font-medium text-a-primary">{t}</span>)}</div>
        <p className="mt-4 flex items-center gap-2 font-sans text-[17px] font-semibold text-px-navy"><Check size={20} className="text-px-teal" strokeWidth={3} />It seems to match his experience</p>
        <motion.div initial={false} animate={step >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }} transition={{ delay: 0.7, ...spring }} className="absolute -right-5 -top-5 flex items-center gap-2 rounded-full bg-px-teal px-4 py-2 font-sans text-[15px] font-bold text-white shadow-lg">
          <Check size={16} strokeWidth={3} />CV submitted
        </motion.div>
      </motion.div>

      {/* Dotted link */}
      <svg className="pointer-events-none absolute inset-0" width="1280" height="720" fill="none">
        <motion.path d="M420 330 C 520 300, 560 300, 630 320" stroke="#00B8B3" strokeWidth="3" strokeDasharray="3 9" strokeLinecap="round" initial={false} animate={{ pathLength: step >= 1 ? 1 : 0, opacity: step >= 1 ? 1 : 0 }} transition={{ duration: 0.8 }} />
      </svg>

      {/* CV flying to the offer */}
      <motion.div
        initial={false}
        animate={step >= 2 ? { opacity: 1, x: 0, y: 0, rotate: -4, scale: 0.9 } : { opacity: 0, x: -330, y: 70, rotate: -12, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 14 }}
        className="font-app absolute left-[780px] top-[450px] w-[230px] border border-black/10 bg-white p-4 shadow-[0_20px_40px_-20px_rgba(0,16,39,0.4)]"
      >
        <div className="flex items-center gap-2"><FileText size={22} className="text-a-primary" /><p className="text-[16px] font-bold">cv_amine_benali.pdf</p></div>
        <div className="mt-3 space-y-1.5"><div className="h-2 w-full rounded bg-a-muted" /><div className="h-2 w-5/6 rounded bg-a-muted" /><div className="h-2 w-2/3 rounded bg-a-muted" /></div>
      </motion.div>

      {/* Waiting */}
      <motion.div initial={false} animate={step >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="absolute bottom-[78px] left-[80px] right-[80px] flex items-center justify-end gap-4 border-t border-black/10 pt-4">
        <Clock size={30} className="text-px-teal" />
        <p className="text-[30px] font-bold tracking-[-0.02em]">…and waits<motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.4 }}>.</motion.span><motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.25 }}>.</motion.span><motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.5 }}>.</motion.span></p>
      </motion.div>
    </div>
  )
}
