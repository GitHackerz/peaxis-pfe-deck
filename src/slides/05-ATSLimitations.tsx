import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const comparison = [
  {
    feature: 'Core ATS',
    greenhouse: true,
    lever: true,
    workable: true,
    ashby: true,
    hirevue: false,
    eightfold: 'partial',
    peaxis: true,
  },
  {
    feature: 'Candidate Portal',
    greenhouse: 'basic',
    lever: 'basic',
    workable: 'basic',
    ashby: false,
    hirevue: true,
    eightfold: false,
    peaxis: true,
  },
  {
    feature: 'Explainable AI',
    greenhouse: false,
    lever: false,
    workable: 'partial',
    ashby: false,
    hirevue: 'partial',
    eightfold: true,
    peaxis: true,
  },
  {
    feature: 'Integrated Ecosystem',
    greenhouse: false,
    lever: false,
    workable: 'partial',
    ashby: 'partial',
    hirevue: false,
    eightfold: false,
    peaxis: true,
  },
  {
    feature: 'Tenant Isolation',
    greenhouse: true,
    lever: true,
    workable: true,
    ashby: true,
    hirevue: true,
    eightfold: true,
    peaxis: true,
  },
]

function StatusCell({ value }: { value: boolean | string }) {
  if (value === true) return (
    <div className="flex justify-center">
      <div className="w-5 h-5 rounded-full bg-[#E6FAF9] border border-[rgba(0,184,179,0.3)] flex items-center justify-center">
        <Check size={11} className="text-[#00B8B3]" strokeWidth={3} />
      </div>
    </div>
  )
  if (value === false) return (
    <div className="flex justify-center">
      <div className="w-5 h-5 rounded-full bg-[#FFF0F0] border border-[rgba(254,89,90,0.2)] flex items-center justify-center">
        <X size={11} className="text-[#FE595A]" strokeWidth={3} />
      </div>
    </div>
  )
  return (
    <div className="flex justify-center">
      <span className="text-xs text-[#6B7280] font-bold px-1.5 py-0.5 rounded-full bg-[#F3F4F6] border border-[rgba(0,0,0,0.07)] whitespace-nowrap">
        {value}
      </span>
    </div>
  )
}

export default function ATSLimitations({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-4">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1.5">
          <motion.div variants={fadeUp}>
            <SectionTag section="Existing Solutions & Gap" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Competitive <GradientText variant="teal">Analysis</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            How existing recruitment platforms cover core ATS, candidate experience, and explainability.
          </motion.p>
        </motion.div>

        {/* Comparison table */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-[var(--border)] overflow-hidden shadow-sm"
            >
              {/* Table header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1.1fr] px-4 py-2.5 bg-[#F8FAFC] border-b border-[var(--border)] items-center">
                <span className="text-xs font-bold text-px-muted uppercase tracking-wider">Capability</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">Greenhouse</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">Lever</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">Workable</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">Ashby</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">HireVue</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center text-gray-500">Eightfold AI</span>
                <span className="text-xs font-bold text-[#00B8B3] uppercase tracking-wider text-center">PEAXIS</span>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <AnimatePresence key={i}>
                  {step >= (i < 3 ? 1 : i < 5 ? 2 : 3) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                      className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1.1fr] px-4 py-2.5 border-b border-[var(--border)] last:border-b-0 hover:bg-[#F8FAFC] transition-colors items-center"
                    >
                      <span className="text-xs font-semibold text-px-navy">{row.feature}</span>
                      <StatusCell value={row.greenhouse} />
                      <StatusCell value={row.lever} />
                      <StatusCell value={row.workable} />
                      <StatusCell value={row.ashby} />
                      <StatusCell value={row.hirevue} />
                      <StatusCell value={row.eightfold} />
                      <StatusCell value={row.peaxis} />
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Observation */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F3F4F6] border border-[rgba(0,0,0,0.07)]"
            >
              <div className="w-1.5 h-6 rounded-full bg-[#6B7280] flex-shrink-0" />
              <p className="text-sm text-px-navy leading-relaxed">
                <strong>Observation:</strong> few platforms combine core ATS workflows, a candidate-facing portal,
                and explainable AI scoring in a single, SME-accessible product.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
