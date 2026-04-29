import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const comparison = [
  {
    feature: 'AI-powered candidate ranking',
    legacy: false,
    modern: true,
  },
  {
    feature: 'Explainable match scores',
    legacy: false,
    modern: true,
  },
  {
    feature: 'Automatic CV parsing',
    legacy: false,
    modern: true,
  },
  {
    feature: 'Candidate-facing portal',
    legacy: 'basic',
    modern: true,
  },
  {
    feature: 'Real-time analytics pipeline',
    legacy: false,
    modern: true,
  },
  {
    feature: 'Semantic job search',
    legacy: false,
    modern: true,
  },
  {
    feature: 'Hiring copilot / AI assistant',
    legacy: false,
    modern: true,
  },
  {
    feature: 'Multi-tenant SaaS architecture',
    legacy: 'partial',
    modern: true,
  },
]

function StatusCell({ value }: { value: boolean | string }) {
  if (value === true) return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-[#E6FAF9] border border-[rgba(0,184,179,0.3)] flex items-center justify-center">
        <Check size={12} className="text-[#00B8B3]" strokeWidth={2.5} />
      </div>
    </div>
  )
  if (value === false) return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-[#FFF0F0] border border-[rgba(254,89,90,0.2)] flex items-center justify-center">
        <X size={12} className="text-[#FE595A]" strokeWidth={2.5} />
      </div>
    </div>
  )
  return (
    <div className="flex justify-center">
      <span className="text-[10px] text-[#B78300] font-medium px-2 py-0.5 rounded-full bg-[#FFFBEB] border border-[rgba(254,200,73,0.3)]">
        {value}
      </span>
    </div>
  )
}

export default function ATSLimitations({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="The Problem" number="3" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Legacy ATS tools are <GradientText variant="coral">not enough</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            Traditional Applicant Tracking Systems were built to store applications — not to intelligently process them.
          </motion.p>
        </motion.div>

        {/* Comparison table */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm"
            >
              {/* Table header */}
              <div className="grid grid-cols-[1fr_140px_140px] px-5 py-3 bg-[#F8FAFC] border-b border-[var(--border)]">
                <span className="text-xs font-bold text-px-muted uppercase tracking-wider">Capability</span>
                <span className="text-xs font-bold text-[#FE595A] uppercase tracking-wider text-center">Legacy ATS</span>
                <span className="text-xs font-bold text-[#00B8B3] uppercase tracking-wider text-center">PEAXIS</span>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <AnimatePresence key={i}>
                  {step >= (i < 4 ? 1 : i < 6 ? 2 : 3) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (i % 4) * 0.06 }}
                      className="grid grid-cols-[1fr_140px_140px] px-5 py-2.5 border-b border-[var(--border)] last:border-b-0 hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="text-sm text-px-navy">{row.feature}</span>
                      <StatusCell value={row.legacy} />
                      <StatusCell value={row.modern} />
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
