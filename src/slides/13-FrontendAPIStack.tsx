import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import TechBadge from '../components/ui/TechBadge'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const layers = [
  {
    name: 'Frontend',
    tech: ['Next.js 16', 'React', 'Tailwind', 'TypeScript'],
    detail: 'PEAXIS Core (port 3000) · Hire (3101) · Jobs (3100) — Server components with interactive client state',
  },
  {
    name: 'API',
    tech: ['NestJS', 'Prisma', 'JWT', 'TypeScript'],
    detail: 'Core API (port 4000) · 14 modules · 60+ endpoints — Single source of truth for all data',
  },
  {
    name: 'AI Service',
    tech: ['FastAPI', 'Gemini', 'Python', 'pgvector'],
    detail: 'Queue-driven via BullMQ · CV parsing, match scoring, JD generation — Cacheable in Redis',
  },
  {
    name: 'Database',
    tech: ['PostgreSQL', 'pgvector', 'Redis', 'BullMQ'],
    detail: 'PostgreSQL + 1536-dim embeddings · Redis multi-layer cache (7d/30d/24h) · Async job queue',
  },
]

export default function FrontendAPIStack({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Technologies" number="7" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Tech <GradientText variant="teal">Stack</GradientText> — Four Layers
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            Production-grade architecture. Modular, scalable, and designed for real-world hiring at scale.
          </motion.p>
        </motion.div>

        {/* Four simple cards */}
        <div className="grid grid-cols-4 gap-3">
          {layers.map((layer, i) => (
            <AnimatePresence key={layer.name}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="flex flex-col gap-3 p-4 rounded-xl bg-white border border-[var(--border)]"
                >
                  <p className="text-sm font-extrabold text-px-navy">{layer.name}</p>
                  <p className="text-xs text-px-muted leading-relaxed">{layer.detail}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[var(--border)]">
                    {layer.tech.map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Key principles */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { label: 'Multi-tenant', value: 'Every query scoped to businessId' },
                { label: 'Async processing', value: 'BullMQ + background workers' },
                { label: 'Semantic search', value: 'pgvector + 1536-dim embeddings' },
              ].map((p) => (
                <div key={p.label} className="p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]">
                  <p className="text-xs font-bold text-px-teal uppercase tracking-wider">{p.label}</p>
                  <p className="text-xs text-px-navy mt-1">{p.value}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
