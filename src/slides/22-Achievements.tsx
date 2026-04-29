import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import KPICard from '../components/ui/KPICard'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const kpis = [
  { value: '14', label: 'NestJS Feature Modules', sublabel: 'auth, jobs, apps, AI, billing…', color: 'teal' as const },
  { value: '60+', label: 'REST API Endpoints', sublabel: 'documented with Swagger', color: 'navy' as const },
  { value: '6', label: 'AI Features', sublabel: 'parse · score · copilot · JD · cover letter · embedding', color: 'teal' as const },
  { value: '4', label: 'Microservices', sublabel: 'Hire · Jobs · API · AI', color: 'coral' as const },
  { value: '3', label: 'Redis Cache Layers', sublabel: 'embeddings 7d · CV 30d · results 24h', color: 'yellow' as const },
  { value: '100%', label: 'Multi-tenant Isolation', sublabel: 'every record scoped to businessId', color: 'teal' as const },
]

const techHighlights = [
  'pgvector 1536-dim semantic search',
  'Playwright PDF export pipeline',
  'OAuth2: Google + LinkedIn',
  'Stripe webhook billing',
  'BullMQ background processor',
  'Prisma schema-first migrations',
  'Argon2 password hashing',
  'Docker multi-stage builds',
]

export default function Achievements({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Results" number="11" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Technical <GradientText variant="teal">achievements</GradientText>
          </motion.h2>
        </motion.div>

        {/* KPI grid */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-3 md:grid-cols-6 gap-3"
            >
              {kpis.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <KPICard
                    value={k.value}
                    label={k.label}
                    sublabel={k.sublabel}
                    color={k.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech highlights */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <p className="text-xs font-bold text-px-muted uppercase tracking-wider">Noteworthy implementations</p>
              <div className="flex flex-wrap gap-2">
                {techHighlights.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-[var(--border)] text-px-navy"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lines of effort */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-4 gap-3"
            >
              {[
                { lang: 'TypeScript', pct: 65, color: '#1D4ED8' },
                { lang: 'Python', pct: 20, color: '#F59E0B' },
                { lang: 'SQL/Prisma', pct: 10, color: '#34D399' },
                { lang: 'CSS/Tailwind', pct: 5, color: '#00B8B3' },
              ].map((l) => (
                <div key={l.lang} className="p-3 rounded-xl bg-white border border-[var(--border)]">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-px-navy">{l.lang}</p>
                    <span className="text-xs font-bold" style={{ color: l.color }}>{l.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${l.pct}%`, background: l.color }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
