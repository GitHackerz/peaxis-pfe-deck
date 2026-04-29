import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import TechBadge from '../components/ui/TechBadge'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const layers = [
  {
    name: 'Frontend Layer',
    color: '#374151',
    bg: '#F9FAFB',
    border: 'rgba(55,65,81,0.15)',
    tech: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    details: [
      { label: 'PEAXIS Hire', desc: 'Recruiter dashboard — port 3000, Bun runtime' },
      { label: 'PEAXIS Jobs', desc: 'Candidate portal — port 3001, Bun runtime' },
      { label: 'Rendering', desc: 'Server components fetch → client components own state' },
    ],
  },
  {
    name: 'API Layer',
    color: '#374151',
    bg: '#F9FAFB',
    border: 'rgba(55,65,81,0.15)',
    tech: ['NestJS', 'TypeScript', 'Prisma', 'JWT'],
    details: [
      { label: 'Core API', desc: '14 modules — port 4000, single source of truth' },
      { label: 'Auth', desc: 'JWT RS256 + Passport OAuth2 (Google, LinkedIn)' },
      { label: 'Queue', desc: 'BullMQ workers for embeddings + AI scoring' },
    ],
  },
  {
    name: 'Database Layer',
    color: '#00B8B3',
    bg: '#E6FAF9',
    border: 'rgba(0,184,179,0.2)',
    tech: ['PostgreSQL', 'pgvector', 'Prisma'],
    details: [
      { label: 'PostgreSQL', desc: 'Primary datastore — all persistent data' },
      { label: 'pgvector', desc: '1536-dim embeddings for semantic search' },
      { label: 'Redis', desc: 'Cache + BullMQ queue backend' },
    ],
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
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Frontend & API <GradientText variant="teal">stack</GradientText>
          </motion.h2>
        </motion.div>

        {/* Layer cards */}
        <div className="flex flex-col gap-3">
          {layers.map((layer, i) => (
            <AnimatePresence key={layer.name}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 p-4 rounded-2xl border"
                  style={{ background: layer.bg, borderColor: layer.border }}
                >
                  {/* Layer label */}
                  <div
                    className="w-28 flex-shrink-0 text-xs font-bold rounded-lg py-2 px-3 text-center"
                    style={{ background: `${layer.color}20`, color: layer.color }}
                  >
                    {layer.name}
                  </div>

                  {/* Details */}
                  <div className="flex-1 grid grid-cols-3 gap-3">
                    {layer.details.map((d) => (
                      <div key={d.label}>
                        <p className="text-xs font-bold text-px-navy">{d.label}</p>
                        <p className="text-[10px] text-px-muted leading-relaxed">{d.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 justify-end flex-shrink-0 max-w-[200px]">
                    {layer.tech.map((t) => (
                      <TechBadge key={t} name={t} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Argon2 + Rate limit callout */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { label: 'Password hashing', value: 'Argon2id', color: '#00B8B3' },
                { label: 'Session tokens', value: 'JWT HS256 · 15m / 7d', color: '#374151' },
                { label: 'Rate limiting', value: '1000 req / 60s global', color: '#374151' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[var(--border)]">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <div>
                    <p className="text-[10px] text-px-muted">{s.label}</p>
                    <p className="text-xs font-bold text-px-navy font-mono">{s.value}</p>
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
