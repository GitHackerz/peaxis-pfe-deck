import { AnimatePresence, motion } from 'framer-motion'
import { Brain, Building2, Sparkles, User } from 'lucide-react'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const aiPillars = [
  {
    icon: <Building2 size={18} />,
    title: 'Recruiter AI',
    features: ['Match scoring', 'Candidate summaries', 'Interview Q\'s', 'Risk flags', 'Suggested actions'],
  },
  {
    icon: <User size={18} />,
    title: 'Candidate AI',
    features: ['CV parsing', 'Resume optimization', 'Cover letters', 'Match preview'],
  },
  {
    icon: <Sparkles size={18} />,
    title: 'Employer AI',
    features: ['JD generation', 'Bias checking', 'Skill normalization'],
  },
]

export default function PeaxisAIBrain({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Solution" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS AI Brain</GradientText> — Intelligence Layer
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            Dedicated FastAPI microservice. Three AI domains serving three stakeholders — explainable, cacheable, production-grade.
          </motion.p>
        </motion.div>

        {/* Three compact pillars */}
        <div className="grid grid-cols-3 gap-3">
          {aiPillars.map((pillar, i) => (
            <AnimatePresence key={pillar.title}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="rounded-xl border p-4 flex flex-col gap-3 bg-white border-[var(--border)]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0 bg-px-teal">
                      {pillar.icon}
                    </div>
                    <p className="text-sm font-extrabold text-px-navy">{pillar.title}</p>
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

        {/* Key architecture insights */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]">
                <Brain size={16} className="text-px-teal flex-shrink-0" />
                <p className="text-xs text-px-navy"><strong>Hybrid approach:</strong> Deterministic skill-overlap for scores + Gemini Flash for explanations (24h cached in Redis).</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[var(--border)]">
                <Sparkles size={16} className="text-px-teal flex-shrink-0" />
                <p className="text-xs text-px-navy"><strong>Queue-driven:</strong> BullMQ workers dispatch jobs asynchronously. Full scalability, no request blocking.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech badges */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Badge variant="teal">Gemini 2.5-flash</Badge>
              <Badge variant="navy">pgvector</Badge>
              <Badge variant="gray">BullMQ</Badge>
              <Badge variant="outline">Redis Cache</Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
