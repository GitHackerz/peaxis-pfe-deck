import { AnimatePresence, motion } from 'framer-motion'
import CandidatePortalMockup from '../components/mockups/CandidatePortalMockup'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const flowSteps = [
  { label: 'Discover',   color: '#00B8B3', n: '1' },
  { label: 'Upload CV',  color: '#00B8B3', n: '2' },
  { label: 'AI Parse',   color: '#00B8B3', n: '3' },
  { label: 'Match Score', color: '#00B8B3', n: '4' },
  { label: 'Apply',      color: '#00B8B3', n: '5' },
  { label: 'Track',      color: '#FE595A', n: '6' },
]

const pipelineSteps = [
  { label: 'PDF / DOCX', bg: '#F3F4F6', text: '#374151' },
  { label: 'Gemini 2.5-flash', bg: '#E6FAF9', text: '#009E9A' },
  { label: 'JSON Profile', bg: '#F3F4F6', text: '#374151' },
  { label: 'Redis Cache (30d)', bg: '#F3F4F6', text: '#374151' },
  { label: 'Match Preview', bg: '#E6FAF9', text: '#009E9A' },
  { label: 'Apply', bg: '#F3F4F6', text: '#374151' },
  { label: 'Pipeline Stage', bg: '#F3F4F6', text: '#374151' },
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
              <SectionTag section="Proposed Solution" number="4" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold leading-tight tracking-tight text-px-navy">
              <GradientText variant="navy">PEAXIS Jobs</GradientText> — Candidate Journey
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xs text-px-muted max-w-sm">
              From job discovery to application tracking — with AI transparency at every step.
            </motion.p>
          </div>
          {/* Compact horizontal stepper */}
          <motion.div variants={fadeUp}
            className="flex items-center gap-0 bg-white border border-[var(--border)] rounded-2xl px-4 py-2.5 shadow-sm">
            {flowSteps.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold"
                    style={{ background: s.color }}
                  >
                    {s.n}
                  </div>
                  <span className="text-xs font-semibold text-px-navy whitespace-nowrap">{s.label}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="w-8 h-[1px] mx-1 mb-3.5 bg-[#E5E7EB]" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Primary mockup */}
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

        {/* Technical pipeline footer */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-[var(--border)]"
            >
              <span className="text-xs font-bold text-px-muted uppercase tracking-widest mr-2 flex-shrink-0">
                AI Pipeline
              </span>
              {pipelineSteps.map((p, i) => (
                <div key={p.label} className="flex items-center gap-1.5 flex-shrink-0">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
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
              <span className="ml-auto text-xs text-px-muted italic flex-shrink-0">
                Upload once — AI handles the rest.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
