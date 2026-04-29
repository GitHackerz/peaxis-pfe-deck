import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const comparison = [
  {
    feature: 'AI-powered candidate ranking',
    manual: false,
    legacy: false,
    fragmented: 'partial',
    modern: true,
  },
  {
    feature: 'Explainable match scores',
    manual: false,
    legacy: false,
    fragmented: false,
    modern: true,
  },
  {
    feature: 'Automatic CV parsing',
    manual: false,
    legacy: false,
    fragmented: 'partial',
    modern: true,
  },
  {
    feature: 'Candidate-facing portal',
    manual: false,
    legacy: 'basic',
    fragmented: 'basic',
    modern: true,
  },
  {
    feature: 'Real-time analytics pipeline',
    manual: false,
    legacy: false,
    fragmented: false,
    modern: true,
  },
  {
    feature: 'Semantic job search',
    manual: false,
    legacy: false,
    fragmented: false,
    modern: true,
  },
  {
    feature: 'Hiring copilot / AI assistant',
    manual: false,
    legacy: false,
    fragmented: false,
    modern: true,
  },
  {
    feature: 'Multi-tenant SaaS architecture',
    manual: false,
    legacy: 'partial',
    fragmented: false,
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
      <span className="text-[10px] text-[#6B7280] font-medium px-2 py-0.5 rounded-full bg-[#F3F4F6] border border-[rgba(0,0,0,0.07)]">
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
            Manual workflows, legacy ATS &amp; fragmented stacks are <GradientText variant="coral">not enough</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            From spreadsheets to traditional ATS to stitched-together SaaS tools — none deliver the AI-native intelligence modern hiring requires.
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
              <div className="grid grid-cols-[1fr_100px_100px_100px_100px] px-5 py-3 bg-[#F8FAFC] border-b border-[var(--border)]">
                <span className="text-xs font-bold text-px-muted uppercase tracking-wider">Capability</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#9CA3AF' }}>Manual</span>
                <span className="text-xs font-bold text-[#FE595A] uppercase tracking-wider text-center">Legacy ATS</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#6B7280' }}>Fragmented</span>
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
                      className="grid grid-cols-[1fr_100px_100px_100px_100px] px-5 py-2.5 border-b border-[var(--border)] last:border-b-0 hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="text-sm text-px-navy">{row.feature}</span>
                      <StatusCell value={row.manual} />
                      <StatusCell value={row.legacy} />
                      <StatusCell value={row.fragmented} />
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
