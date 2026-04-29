import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

// Layer definition for the logical architecture diagram
const layers = [
  {
    id: 'client',
    label: 'CLIENT LAYER',
    color: '#374151',
    bg: '#F9FAFB',
    border: 'rgba(55,65,81,0.2)',
    items: ['PEAXIS Hire\n(Next.js :3000)', 'PEAXIS Jobs\n(Next.js :3001)', 'Landing\n(Next.js)'],
    arrow: 'HTTPS / REST + JWT Bearer',
  },
  {
    id: 'api',
    label: 'API LAYER',
    color: '#374151',
    bg: '#F3F4F6',
    border: 'rgba(55,65,81,0.3)',
    items: ['NestJS API\n(:4000)', 'BullMQ Workers', 'AiClientService\n(HTTP proxy)'],
    arrow: 'HTTP + X-Service-Secret',
  },
  {
    id: 'ai',
    label: 'AI LAYER',
    color: '#00B8B3',
    bg: '#E6FAF9',
    border: 'rgba(0,184,179,0.3)',
    items: ['FastAPI\n(:8000)', 'Gemini / OpenAI\n(HTTPS)', 'Redis Cache\n(3-layer TTL)'],
    arrow: 'SQL + pgvector / Redis',
  },
  {
    id: 'data',
    label: 'DATA LAYER',
    color: '#001027',
    bg: '#F3F4F6',
    border: 'rgba(0,16,39,0.15)',
    items: ['PostgreSQL\n+ pgvector', 'Redis 7\n(queue + cache)', 'Prisma ORM'],
    arrow: null,
  },
]

export default function LogicalArch({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-4">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Logical Architecture" number="8" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            System <GradientText variant="teal">layered architecture</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xs text-px-muted">
            Each layer has a single, clear responsibility. No layer bypasses the one above it.
          </motion.p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="flex flex-col gap-1.5">
          {layers.map((layer, i) => (
            <AnimatePresence key={layer.id}>
              {step >= i + 1 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 p-3 rounded-2xl border"
                    style={{ background: layer.bg, borderColor: layer.border }}
                  >
                    {/* Layer label */}
                    <div
                      className="w-24 flex-shrink-0 py-1.5 px-2 rounded-lg text-[10px] font-bold text-center"
                      style={{ background: `${layer.color}20`, color: layer.color }}
                    >
                      {layer.label}
                    </div>

                    {/* Service boxes */}
                    <div className="flex items-center gap-2 flex-1">
                      {layer.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2">
                          {j > 0 && <div className="w-4 h-[1px]" style={{ background: `${layer.color}40` }} />}
                          <div
                            className="px-3 py-2 rounded-xl text-center border text-[10px] font-semibold whitespace-pre-line leading-tight"
                            style={{
                              background: `${layer.color}12`,
                              borderColor: `${layer.color}30`,
                              color: layer.color,
                            }}
                          >
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Arrow between layers */}
                  {layer.arrow && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 pl-28 py-0.5"
                    >
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-[1px] bg-gray-300" />
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M0 4l4 4M0 4l4-4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-mono text-px-muted">{layer.arrow}</span>
                    </motion.div>
                  )}
                </>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Design principle */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[var(--border)] text-xs"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#E6FAF9] text-px-teal flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="#00B8B3" strokeWidth="1.5" />
                  <path d="M6 4v2M6 8v.5" stroke="#00B8B3" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-px-muted">
                <strong className="text-px-navy">Key principle:</strong>{' '}
                The NestJS API is the <em>single source of truth</em>. The AI service never writes to the database — it returns results, the API persists them via Prisma.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
