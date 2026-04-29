import { AnimatePresence, motion } from 'framer-motion'
import { Lock, Repeat, Settings } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const envs = [
  {
    name: 'Development',
    compose: 'docker-compose.yml',
    desc: 'Infra only (Postgres, Redis). Frontend/API run natively with hot-reload.',
    color: '#00B8B3',
    services: ['postgres:5432', 'redis:6379', 'API: native 4000', 'AI: native 8000'],
  },
  {
    name: 'Production',
    compose: 'docker-compose.prod.yml',
    desc: 'All services containerised with multi-stage Dockerfiles and resource limits.',
    color: '#0087F8',
    services: ['All 6 services', 'Multi-stage builds', 'Resource limits', 'Health checks'],
  },
]

export default function Infrastructure({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Physical Architecture" number="9" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Infrastructure & <GradientText variant="teal">DevOps setup</GradientText>
          </motion.h2>
        </motion.div>

        {/* Environment cards */}
        <AnimatePresence>
          {step >= 1 && (
            <div className="grid grid-cols-2 gap-4">
              {envs.map((e, i) => (
                <motion.div
                  key={e.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card variant="elevated" className="p-5 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ background: e.color }}
                      />
                      <p className="text-sm font-extrabold text-px-navy">{e.name}</p>
                      <code className="text-[10px] font-mono text-px-muted bg-gray-100 px-2 py-0.5 rounded ml-auto">{e.compose}</code>
                    </div>
                    <p className="text-xs text-px-muted mb-3 leading-relaxed">{e.desc}</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {e.services.map((s) => (
                        <div key={s} className="flex items-center gap-1.5 text-[10px] font-mono text-px-muted">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: e.color }} />
                          {s}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Practices */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                {
                  icon: <Lock size={16} />,
                  title: 'Secrets management',
                  body: 'All credentials via environment variables. .env.example committed. No secrets in version control.',
                  color: '#FE595A',
                },
                {
                  icon: <Settings size={16} />,
                  title: 'Config via ConfigService',
                  body: 'NestJS ConfigService wraps process.env. Direct process.env access is prohibited in application code.',
                  color: '#0087F8',
                },
                {
                  icon: <Repeat size={16} />,
                  title: 'Prisma migrations',
                  body: 'Schema-first with prisma migrate dev. All migrations version-controlled in prisma/migrations/.',
                  color: '#00B8B3',
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl border bg-white"
                  style={{ borderColor: `${p.color}20` }}
                >
                  <div className="flex items-center gap-2 mb-2" style={{ color: p.color }}>
                    {p.icon}
                    <p className="text-xs font-bold text-px-navy">{p.title}</p>
                  </div>
                  <p className="text-[10px] text-px-muted leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Structured logger */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)] text-xs"
            >
              <div className="w-1 h-8 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-px-muted">
                <strong className="text-px-navy">Observability:</strong>{' '}
                NestJS Logger / HumanysLogger for structured logs. No console.log. FastAPI logs routed via uvicorn. Redis diagnostic string captured on latency spikes.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
