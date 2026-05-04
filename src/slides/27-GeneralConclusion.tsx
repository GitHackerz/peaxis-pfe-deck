import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const sections = [
  {
    title: 'Achievements',
    color: '#00B8B3',
    items: [
      '14 API modules · 60+ REST endpoints · full Swagger documentation',
      '6 AI features: CV parsing, match scoring, JD generation, hiring copilot, semantic search, skill normalisation',
      'End-to-end multi-tenant SaaS — PEAXIS Hire + PEAXIS Jobs — production-ready',
      '4 containerised microservices deployed via Docker Compose with network isolation',
    ],
  },
  {
    title: 'Technical Contributions',
    color: '#001027',
    items: [
      'AI-native queue-based pipeline: BullMQ workers → FastAPI → pgvector embeddings',
      'Explainable match scoring with matched/missing skill breakdowns and confidence scores',
      'Cache-first strategy (Redis 3-layer TTL) for AI result performance optimisation',
      'Secure inter-service communication via X-Service-Secret header validation',
    ],
  },
  {
    title: 'Future Perspectives',
    color: '#6B7280',
    items: [
      'Real-time collaborative hiring workspace with role-based decision tracking',
      'Multilingual CV parsing and region-aware job matching (MENA market focus)',
      'Advanced analytics dashboard with predictive pipeline velocity metrics',
      'Integration ecosystem: LinkedIn, Greenhouse, Workday — open API layer',
    ],
  },
]

export default function GeneralConclusion({ step }: Props) {
  return (
    <div className="slide-root">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(0,184,179,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Conclusion" number="12" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            General <GradientText variant="teal">Conclusion</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-2xl">
            Achievements · Technical Contributions · Future Perspectives
          </motion.p>
        </motion.div>

        {/* Three-column conclusion grid */}
        <div className="grid grid-cols-3 gap-4">
          {sections.map((sec, i) => (
            <AnimatePresence key={sec.title}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl border border-[var(--border)] p-5 shadow-sm flex flex-col gap-3"
                >
                  {/* Section header */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: sec.color }} />
                    <h3 className="text-sm font-extrabold uppercase tracking-wider" style={{ color: sec.color }}>
                      {sec.title}
                    </h3>
                  </div>
                  <div className="h-[2px] w-8 rounded-full" style={{ background: `${sec.color}35` }} />

                  {/* Bullet list */}
                  <ul className="flex flex-col gap-2">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[5px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: sec.color }} />
                        <span className="text-sm text-px-muted leading-snug">{item}</span>
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
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.25)]"
            >
              <div className="w-8 h-8 rounded-full bg-px-teal flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.5l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-px-navy leading-relaxed">
                <strong>PEAXIS</strong> demonstrates that AI-powered recruitment can be built with engineering rigour,
                academic depth, and real product maturity — transforming a 6-month internship into a fully deployable,
                multi-tenant SaaS platform ready for market.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, transparent)' }} />
    </div>
  )
}
