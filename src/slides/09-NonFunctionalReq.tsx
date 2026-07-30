import { AnimatePresence, motion } from 'framer-motion'
import { Activity, Box, Eye, ShieldCheck, TrendingUp, Zap } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const nfrs = [
  {
    icon: <Zap size={20} />,
    id: 'NFR-01',
    title: 'Deployment Readiness',
    detail: 'Web, API, worker, AI runtime, and data services are separated.',
    color: '#00B8B3',
    metric: 'Container-ready',
  },
  {
    icon: <ShieldCheck size={20} />,
    id: 'NFR-02',
    title: 'Security',
    detail: 'Auth, file gates, rate limits, tenant scoping, and service secrets.',
    color: '#FE595A',
    metric: 'Implemented controls',
  },
  {
    icon: <Activity size={20} />,
    id: 'NFR-03',
    title: 'Responsive Requests',
    detail: 'Parsing and assessment run outside the HTTP request path.',
    color: '#374151',
    metric: 'No AI in request path',
  },
  {
    icon: <TrendingUp size={20} />,
    id: 'NFR-04',
    title: 'Failure Handling',
    detail: 'Retries and durable work states expose processing failures.',
    color: '#374151',
    metric: 'Explicit work states',
  },
  {
    icon: <Eye size={20} />,
    id: 'NFR-05',
    title: 'Explainability',
    detail: 'Scores retain evidence, gaps, and verification state.',
    color: '#001027',
    metric: 'Cited assessment trail',
  },
  {
    icon: <Box size={20} />,
    id: 'NFR-06',
    title: 'Modularity',
    detail: 'Separate web apps, API, worker, and inference boundary.',
    color: '#00B8B3',
    metric: 'Modular platform',
  },
]

export default function NFR({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Methodology & Requirements" number="5" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Implemented <GradientText variant="teal">quality attributes</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-3xl">
            Delivered engineering qualities; performance SLAs remain to validate.
          </motion.p>
        </motion.div>

        {/* NFR grid */}
        <div className="grid grid-cols-3 gap-3">
          {nfrs.map((n, i) => (
            <AnimatePresence key={n.id}>
              {step >= Math.floor(i / 2) + 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                  className={i === 6 ? 'col-span-2' : ''}                >
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
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${n.color}18`, color: n.color }}
                      >
                        {n.metric}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-xs font-mono text-px-muted">{n.id}</span>
                        <p className="text-base font-bold text-px-navy">{n.title}</p>
                      </div>
                      <p className="text-sm text-px-muted leading-relaxed">{n.detail}</p>
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
