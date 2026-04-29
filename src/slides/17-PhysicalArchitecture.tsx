import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

// Docker service nodes
const services = [
  { name: 'peaxis-hire', port: '3000', tech: 'Next.js', color: '#6D28D9', network: 'frontend' },
  { name: 'peaxis-jobs', port: '3001', tech: 'Next.js', color: '#6D28D9', network: 'frontend' },
  { name: 'peaxis-api', port: '4000', tech: 'NestJS', color: '#0087F8', network: 'backend' },
  { name: 'peaxis-ai', port: '8000', tech: 'FastAPI', color: '#00B8B3', network: 'backend' },
  { name: 'postgres', port: '5432', tech: 'PostgreSQL', color: '#34D399', network: 'data' },
  { name: 'redis', port: '6379', tech: 'Redis', color: '#FE595A', network: 'data' },
]

const networks = [
  { id: 'frontend', label: 'frontend-net', color: '#6D28D9', services: ['peaxis-hire', 'peaxis-jobs', 'peaxis-api'] },
  { id: 'backend', label: 'backend-net', color: '#0087F8', services: ['peaxis-api', 'peaxis-ai', 'postgres', 'redis'] },
  { id: 'data', label: 'data-net', color: '#34D399', services: ['postgres', 'redis'] },
]

export default function PhysicalArch({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Physical Architecture" number="9" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Docker Compose <GradientText variant="teal">deployment topology</GradientText>
          </motion.h2>
        </motion.div>

        {/* Service grid */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-3 gap-3"
            >
              {services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  className="p-4 rounded-2xl border bg-white shadow-sm"
                  style={{ borderColor: `${s.color}30` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${s.color}15`, color: s.color }}
                    >
                      {s.tech}
                    </span>
                    <span className="text-[10px] font-mono text-px-muted">:{s.port}</span>
                  </div>
                  <p className="text-xs font-bold text-px-navy font-mono">{s.name}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Networks */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <p className="text-xs font-bold text-px-muted uppercase tracking-wider">Docker Networks</p>
              <div className="flex gap-3">
                {networks.map((n) => (
                  <div
                    key={n.id}
                    className="flex-1 p-3 rounded-xl border"
                    style={{ background: `${n.color}08`, borderColor: `${n.color}25` }}
                  >
                    <p className="text-[10px] font-bold font-mono mb-1.5" style={{ color: n.color }}>{n.label}</p>
                    {n.services.map((s) => (
                      <div key={s} className="flex items-center gap-1.5 mb-1">
                        <div className="w-1 h-1 rounded-full" style={{ background: n.color }} />
                        <span className="text-[10px] font-mono text-px-muted">{s}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Exposed ports */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[var(--border)] text-xs"
            >
              <span className="font-bold text-px-navy">Exposed to host:</span>
              {[':3000 (Hire)', ':3001 (Jobs)', ':4000 (API)', ':8000 (AI)', ':5432 (PG dev)', ':6379 (Redis dev)'].map((p) => (
                <code key={p} className="font-mono text-[#0087F8] bg-[#EFF6FF] px-1.5 py-0.5 rounded">{p}</code>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
