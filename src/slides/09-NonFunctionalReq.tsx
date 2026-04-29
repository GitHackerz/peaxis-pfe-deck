import { AnimatePresence, motion } from 'framer-motion'
import { Zap, ShieldCheck, TrendingUp, Activity, Eye, Box, DollarSign } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const nfrs = [
  {
    icon: <Zap size={20} />,
    id: 'NFR-01',
    title: 'Scalability',
    detail: 'Stateless API pods behind load balancer. BullMQ handles surge traffic via Redis queue. pgvector scales to millions of embeddings.',
    color: '#00B8B3',
    metric: 'Horizontal scale',
  },
  {
    icon: <ShieldCheck size={20} />,
    id: 'NFR-02',
    title: 'Security',
    detail: 'Argon2 passwords, JWT rotation, OAuth2, X-Business-ID multi-tenant isolation, OWASP-hardened API, X-Service-Secret inter-service auth.',
    color: '#FE595A',
    metric: 'OWASP aligned',
  },
  {
    icon: <Activity size={20} />,
    id: 'NFR-03',
    title: 'Performance',
    detail: 'Redis 3-layer caching (embeddings 7d, CV parse 30d, AI results 24h). Sub-200ms API p95. Async BullMQ for heavy operations.',
    color: '#374151',
    metric: 'p95 < 200ms',
  },
  {
    icon: <TrendingUp size={20} />,
    id: 'NFR-04',
    title: 'Availability',
    detail: 'Preferred-region retries in SDK. BullMQ retry logic. Docker health checks. Graceful degradation on AI service downtime.',
    color: '#374151',
    metric: '99.5% target SLA',
  },
  {
    icon: <Eye size={20} />,
    id: 'NFR-05',
    title: 'Explainability',
    detail: 'Every AI score exposes: numeric value, label (Strong/Good/Weak), matched skills, missing skills, and a plain-language explanation.',
    color: '#001027',
    metric: 'Full audit trail',
  },
  {
    icon: <Box size={20} />,
    id: 'NFR-06',
    title: 'Modularity',
    detail: 'NestJS feature modules. Independent AI service. Decoupled frontend apps. BullMQ workers isolated from request handlers.',
    color: '#00B8B3',
    metric: 'Microservices',
  },
  {
    icon: <DollarSign size={20} />,
    id: 'NFR-07',
    title: 'Cost Optimization',
    detail: 'Gemini Flash for fast tasks. GPT-4.1-mini for quality outputs. Redis caching prevents redundant LLM calls. Docker resource limits.',
    color: '#374151',
    metric: 'Cache-first AI',
  },
]

export default function NFR({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Non-Functional Requirements" number="5" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Production-grade <GradientText variant="teal">quality attributes</GradientText>
          </motion.h2>
        </motion.div>

        {/* NFR grid */}
        <div className="grid grid-cols-4 gap-3">
          {nfrs.map((n, i) => (
            <AnimatePresence key={n.id}>
              {step >= Math.floor(i / 2) + 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                  className={i === 6 ? 'col-span-2' : ''}
                >
                  <div
                    className="p-4 rounded-2xl border h-full flex flex-col gap-2"
                    style={{ background: `${n.color}08`, borderColor: `${n.color}20` }}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${n.color}18`, color: n.color }}
                      >
                        {n.icon}
                      </div>
                      <span
                        className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${n.color}18`, color: n.color }}
                      >
                        {n.metric}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[9px] font-mono text-px-muted">{n.id}</span>
                        <p className="text-xs font-bold text-px-navy">{n.title}</p>
                      </div>
                      <p className="text-[10px] text-px-muted leading-relaxed">{n.detail}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  )
}
