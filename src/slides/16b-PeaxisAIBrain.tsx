import { AnimatePresence, motion } from 'framer-motion'
import { Brain, Building2, Sparkles, User } from 'lucide-react'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const aiPillars = [
  {
    icon: <Building2 size={20} />,
    title: 'Recruiter AI',
    desc: 'Evidence-based assessments with cited, auditable evaluations.',
  },
  {
    icon: <User size={20} />,
    title: 'Candidate AI',
    desc: 'Durable CV parsing and application tracking.',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Employer AI',
    desc: 'Requirement definition and job description drafting.',
  },
]

export default function PeaxisAIBrain({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS AI Brain</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted">
            A stateless inference service; the API owns evidence, authorization, and hiring decisions.
          </motion.p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-3 gap-4">
          {aiPillars.map((pillar, i) => (
            <AnimatePresence key={pillar.title}>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border p-5 flex flex-col gap-3 bg-white border-[var(--border)]"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-px-navy">{pillar.title}</h3>
                  <p className="text-sm text-px-muted leading-snug">{pillar.desc}</p>
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
                <p className="text-sm text-px-navy">Evidence-first: every assessment stays auditable.</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[var(--border)]">
                <Sparkles size={16} className="text-px-teal flex-shrink-0" />
                <p className="text-sm text-px-navy">Durable work: queued outside the request path.</p>
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
              <Badge variant="navy">Gemini / Azure OpenAI</Badge>
              <Badge variant="teal">pgvector</Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
