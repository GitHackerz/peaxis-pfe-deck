import { AnimatePresence, motion } from 'framer-motion'
import { ClipboardList, Search, Star, Upload } from 'lucide-react'
import CandidatePortalMockup from '../components/mockups/CandidatePortalMockup'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const features = [
  { icon: <Search size={14} />, label: 'Semantic Job Search', desc: 'pgvector-powered search — finds relevant jobs even with different wording' },
  { icon: <Upload size={14} />, label: 'Apply with CV', desc: 'Upload CV → AI parses it → profile pre-filled → one-click apply' },
  { icon: <ClipboardList size={14} />, label: 'Application Tracker', desc: 'Real-time pipeline stage visibility — Applied, Screening, Interview, Offer' },
  { icon: <Star size={14} />, label: 'Job Recommendations', desc: 'Personalised job feed powered by candidate embedding similarity' },
]

export default function PeaxisJobs({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Solution" number="6" />
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
              <GradientText variant="navy">PEAXIS Jobs</GradientText> — Candidate Portal
            </h2>
            <Badge variant="gray" size="sm">Next.js 16</Badge>
          </motion.div>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            The candidate experience that makes applying frictionless — from discovery to tracking.
          </motion.p>
        </motion.div>

        {/* Screenshot + features */}
        <div className="grid grid-cols-[1fr_240px] gap-6 items-start">

          {/* Screenshot */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
              >
                <CandidatePortalMockup />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feature list */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2"
              >
                {features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[var(--border)]"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0 mt-0.5">
                      {f.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-px-navy">{f.label}</p>
                      <p className="text-xs text-px-muted leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CV parsing flow */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-[var(--border)] text-xs"
            >
              {['Upload CV (PDF/DOCX)', '→', 'AI parses (Gemini)', '→', 'Profile pre-filled', '→', 'One-click apply', '→', 'Real-time status'].map((s, i) => (
                <span
                  key={i}
                  className={s === '→' ? 'text-px-muted font-light' : 'font-semibold text-px-navy px-2 py-0.5 rounded-md bg-[#E6FAF9]'}
                >
                  {s}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
