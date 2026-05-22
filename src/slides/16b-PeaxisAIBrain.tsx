import { AnimatePresence, motion } from 'framer-motion'
import { Brain, Building2, Sparkles, User } from 'lucide-react'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const aiPillars = [
  {
    icon: <Building2 size={16} />,
    title: 'Recruiter AI',
    features: ['Semantic match scoring', 'Candidate text summaries', 'Interview question generation', 'Dynamic risk flags'],
  },
  {
    icon: <User size={16} />,
    title: 'Candidate AI',
    features: ['CV parsing & mapping', 'Resume recommendations', 'Smart match preview'],
  },
  {
    icon: <Sparkles size={16} />,
    title: 'Employer AI',
    features: ['JD generation tools', 'Unconscious bias checking', 'Skill taxonomy mapping'],
  },
]

export default function PeaxisAIBrain({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-4">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS AI Brain</GradientText> — Intelligence Layer
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted">
            Dedicated FastAPI microservice. Processing structured resumes and job data in parallel.
          </motion.p>
        </motion.div>

        {/* Three compact pillars (reveals initially on step >= 1) */}
        <div className="grid grid-cols-3 gap-4 min-h-[220px]">
          {aiPillars.map((pillar, i) => (
            <AnimatePresence key={pillar.title}>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border p-4 flex flex-col gap-3 bg-white border-[var(--border)] shadow-sm"
                >
                  <div className="flex items-center gap-2 border-b pb-2">
                    <div className="w-7 h-7 rounded bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0">
                      {pillar.icon}
                    </div>
                    <p className="text-sm font-bold text-px-navy">{pillar.title}</p>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {pillar.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-px-muted">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5 bg-px-teal" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Key architecture insights (reveals on step >= 2) */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]">
                <Brain size={16} className="text-px-teal flex-shrink-0" />
                <p className="text-xs text-px-navy"><strong>Hybrid Pipeline:</strong> Deterministic skill-overlap scoring + generative Gemini explanation (cached 24h in Redis).</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[var(--border)]">
                <Sparkles size={16} className="text-px-teal flex-shrink-0" />
                <p className="text-xs text-px-navy"><strong>Queue-driven:</strong> BullMQ workers dispatch heavy inference jobs asynchronously to prevent API request blockages.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech badges (reveals on step >= 3) */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Badge variant="teal">FastAPI</Badge>
              <Badge variant="navy">Gemini Pro</Badge>
              <Badge variant="teal">pgvector</Badge>
              <Badge variant="outline">Redis cache</Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
