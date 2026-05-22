import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Lightbulb, TrendingUp } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import KPICard from '../components/ui/KPICard'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const kpis = [
  { value: '14', label: 'API Modules', color: 'teal' as const },
  { value: '60+', label: 'REST Endpoints', color: 'teal' as const },
  { value: '6', label: 'AI Features', color: 'teal' as const },
  { value: '4', label: 'Microservices', color: 'teal' as const },
]

const sections = [
  {
    icon: <CheckCircle size={18} />,
    title: 'Key Achievements',
    color: '#00B8B3',
    items: [
      'Full-stack multi-tenant SaaS: Core workspace, Hire ATS, and Jobs portal',
      'Explainable AI: Deterministic skill-gap overlap with LLM explanations',
      'Semantic Search: pgvector embeddings for non-keyword matching',
      'Queue-based processing: Asynchronous tasks and Stripe automation',
    ],
  },
  {
    icon: <Lightbulb size={18} />,
    title: 'Technical Lessons',
    color: '#00B8B3',
    items: [
      'Schema-first isolation: Multi-tenant guards must be built-in, not retrofitted',
      'Horizontal scalability: FastAPI for ML, NestJS for core Business API',
      'Hybrid AI design: Combining rules and LLMs optimizes cost and reliability',
    ],
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Future Roadmap',
    color: '#00B8B3',
    items: [
      'Collaborative workspaces: Real-time decision tracking for hiring teams',
      'Regional expansion: Multilingual CV parser optimized for the MENA market',
      'Enterprise connectors: Direct integration with LinkedIn, Greenhouse, and Workday',
    ],
  },
]


export default function Conclusion({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Results & Future Work" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            PEAXIS: <GradientText variant="teal">Achievement & Future</GradientText>
          </motion.h2>
        </motion.div>

        {/* KPI row */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-4 gap-3"
            >
              {kpis.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <KPICard
                    value={k.value}
                    label={k.label}
                    sublabel=""
                    color={k.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Three sections */}
        <div className="grid grid-cols-3 gap-3">
          {sections.map((sec, i) => (
            <AnimatePresence key={sec.title}>
              {step >= i + 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-xl border border-[var(--border)] p-4 flex flex-col gap-3"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: sec.color }}
                    >
                      {sec.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-px-navy">{sec.title}</h3>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-8 rounded-full" style={{ background: `${sec.color}40` }} />

                  {/* Bullet list */}
                  <ul className="flex flex-col gap-2">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-px-muted leading-snug">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: sec.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Closing statement */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 px-5 py-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.25)]"
            >
              <div className="w-8 h-8 rounded-full bg-px-teal flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.5l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-px-navy leading-relaxed">
                <strong>PEAXIS demonstrates that AI-powered recruitment can be built with engineering rigour, academic depth, and real product maturity —
                transforming a 6-month internship into a fully deployable, multi-tenant SaaS platform ready for market.</strong>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
