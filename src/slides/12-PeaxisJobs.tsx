import { AnimatePresence, motion } from 'framer-motion'
import { Layers, Search, Star, Upload, Zap } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const features = [
  { icon: <Search size={18} />, title: 'Semantic Job Search', desc: 'pgvector embeddings find relevant jobs beyond keyword matching' },
  { icon: <Zap size={18} />, title: 'Job Lite Format', desc: 'Lightweight public job listings optimised for mobile discovery' },
  { icon: <Upload size={18} />, title: 'AI CV Parsing', desc: 'Upload CV → Gemini parses → candidate profile auto-filled instantly' },
  { icon: <Star size={18} />, title: 'Match Score Preview', desc: 'See AI match percentage + skill gaps before applying — transparency first' },
  { icon: <Layers size={18} />, title: 'Personalized Feed', desc: 'AI recommendations powered by candidate embedding similarity' },
  { icon: <Search size={18} />, title: 'Easy Apply + Tracking', desc: 'One-click apply workflow with real-time pipeline stage visibility' },
]

export default function PeaxisJobs({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Solution" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="navy">PEAXIS Jobs</GradientText> — Talent Acquisition
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            Public talent acquisition platform designed to optimize candidate discovery, onboarding, and application experience.
          </motion.p>
        </motion.div>

        {/* Feature grid: 6 cards */}
        <div className="grid grid-cols-6 gap-3">
          {features.map((f, i) => (
            <AnimatePresence key={f.title}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  className="flex flex-col gap-2.5 p-4 rounded-xl bg-white border border-[var(--border)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-px-navy">{f.title}</p>
                    <p className="text-xs text-px-muted leading-snug">{f.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Strategic value */}
        <AnimatePresence>
          {step >= 7 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1 h-6 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-xs text-px-navy">
                <strong>Strategic Value:</strong> PEAXIS Jobs reduces candidate friction while introducing intelligent matching before recruiters even intervene.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
