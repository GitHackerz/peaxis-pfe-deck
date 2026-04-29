import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

// Numbered steps in the request lifecycle
const steps = [
  {
    num: '01',
    actor: 'Browser',
    action: 'HTTP request → NestJS :4000',
    color: '#FE595A',
  },
  {
    num: '02',
    actor: 'API',
    action: 'Guard chain: JwtAuthGuard → PlanGuard',
    color: '#374151',
  },
  {
    num: '03',
    actor: 'Queue (async)',
    action: 'Heavy ops → BullMQ → Redis queue',
    detail: 'Embedding generation, AI scoring, analysis',
    color: '#374151',
  },
  {
    num: '04',
    actor: 'AI Service',
    action: 'BullMQ worker → FastAPI :8000',
    detail: 'X-Service-Secret, Redis cache check, LLM call',
    color: '#00B8B3',
  },
  {
    num: '05',
    actor: 'Database',
    action: 'Prisma write → PostgreSQL',
    color: '#FEC849',
  },
]

export default function DataFlow({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Logical Architecture" number="8" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Request <GradientText variant="teal">lifecycle & data flow</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xs text-px-muted">
            From browser to database — every hop is authenticated, scoped, and auditable.
          </motion.p>
        </motion.div>

        {/* Flow steps */}
        <div className="flex flex-col gap-2">
          {steps.map((s, i) => (
            <AnimatePresence key={s.num}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4"
                >
                  {/* Step number */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold flex-shrink-0"
                    style={{ background: s.color }}
                  >
                    {s.num}
                  </div>

                  {/* Connector line (not for last) */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[68px] mt-10 w-[1px] h-8" style={{ background: `${s.color}40` }} />
                  )}

                  {/* Content */}
                  <div
                    className="flex-1 flex items-center gap-4 p-3 rounded-xl border"
                    style={{ background: `${s.color}08`, borderColor: `${s.color}20` }}
                  >
                    <div className="flex-shrink-0">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                        style={{ background: `${s.color}20`, color: s.color }}
                      >
                        {s.actor}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-px-navy">{s.action}</p>
                      <p className="text-[10px] text-px-muted">{s.detail}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Inter-service auth callout */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { from: 'Frontend → API', auth: 'JWT Bearer token' },
                { from: 'API → AI service', auth: 'X-Service-Secret header' },
                { from: 'BullMQ → AI service', auth: 'X-Service-Secret header' },
              ].map((r) => (
                <div key={r.from} className="p-3 rounded-xl bg-white border border-[var(--border)] text-center">
                  <p className="text-[10px] font-mono text-px-muted">{r.from}</p>
                  <p className="text-xs font-bold text-px-navy mt-0.5">{r.auth}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
