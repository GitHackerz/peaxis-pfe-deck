import { AnimatePresence, motion } from 'framer-motion'
import CandidatePortalMockup from '../components/mockups/CandidatePortalMockup'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

// 5 steps: monochrome progression system
const flowSteps = [
  { label: 'Discover',  active: true  },
  { label: 'Upload CV', active: true  },
  { label: 'AI Parse',  active: true  },
  { label: 'Apply',     active: true  },
  { label: 'Track',     active: false },
]

const pipelineSteps = [
  { label: 'PDF / DOCX',       bg: '#F3F4F6', text: '#6B7280' },
  { label: 'Gemini 2.5-flash', bg: '#E6FAF9', text: '#009E9A' },
  { label: 'JSON Profile',     bg: '#F3F4F6', text: '#6B7280' },
  { label: 'Redis Cache (30d)',bg: '#F3F4F6', text: '#6B7280' },
  { label: 'Score + Apply',    bg: '#F3F4F6', text: '#374151' },
  { label: 'Pipeline Stage',   bg: '#001027', text: '#FFFFFF' },
]

export default function DemoCandidate({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-3">

        {/* Header row — compact */}
        <motion.div variants={stagger} initial="hidden" animate="visible"
          className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <motion.div variants={fadeUp}>
              <SectionTag section="Product Demo" number="10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold leading-tight tracking-tight text-px-navy">
              Demo: <GradientText variant="navy">Candidate Flow</GradientText>
            </motion.h2>
          </div>
          {/* Compact monochrome horizontal stepper */}
          <motion.div variants={fadeUp}
            className="flex items-center gap-0 bg-white border border-[var(--border)] rounded-xl px-4 py-2 shadow-sm">
            {flowSteps.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
                    style={{
                      background: s.active ? '#00B8B3' : '#F3F4F6',
                      color: s.active ? 'white' : '#9CA3AF',
                      border: s.active ? 'none' : '1px solid #E5E7EB',
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-[9px] font-medium whitespace-nowrap" style={{ color: s.active ? '#001027' : '#9CA3AF' }}>{s.label}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="w-7 h-[1px] mx-1 mb-3" style={{ background: i < 3 ? '#00B8B3' : '#E5E7EB' }} />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Primary mockup — dominant zone */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <CandidatePortalMockup />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technical pipeline footer — compact strip */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-[var(--border)]"
            >
              <span className="text-[9px] font-bold text-px-muted uppercase tracking-widest mr-2 flex-shrink-0">
                Pipeline
              </span>
              {pipelineSteps.map((p, i) => (
                <div key={p.label} className="flex items-center gap-1.5 flex-shrink-0">
                  <span
                    className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: p.bg, color: p.text }}
                  >
                    {p.label}
                  </span>
                  {i < pipelineSteps.length - 1 && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M6 3l2 2-2 2" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              ))}
              <span className="ml-auto text-[9px] text-px-muted italic flex-shrink-0">
                Upload CV once — AI handles the rest.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
