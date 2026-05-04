import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import TechBadge from '../components/ui/TechBadge'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const aiFeatures = [
  { name: 'CV Parsing',       model: 'Gemini 2.5-flash', color: '#00B8B3', reason: 'Fast structured JSON, low cost' },
  { name: 'Match Scoring',    model: 'Deterministic',    color: '#374151', reason: 'Reproducible, explainable, no LLM needed' },
  { name: 'JD Generation',    model: 'Gemini 2.5-flash', color: '#374151', reason: 'Structured output + bias checking' },
  { name: 'Hiring Copilot',   model: 'Gemini 2.5-flash', color: '#374151', reason: 'Summaries, risk flags, interview Qs' },
  { name: 'Cover Letters',    model: 'GPT-4.1-mini',     color: '#374151', reason: 'Higher creative quality' },
  { name: 'Embeddings',       model: 'text-embedding-3-small', color: '#374151', reason: '1536-dim, cost-effective' },
]

const infra = [
  { name: 'FastAPI', role: 'AI service — stateless, Python 3.12+, Pydantic schemas' },
  { name: 'Redis', role: '3-layer cache: embeddings 7d · CV parse 30d · results 24h' },
  { name: 'BullMQ', role: 'Background queue for embeddings, scoring, analysis jobs' },
  { name: 'Docker', role: 'Dev + prod compose files, multi-stage Dockerfiles' },
  { name: 'Stripe', role: 'Subscription billing with webhook event handling' },
]

export default function AIInfraStack({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Technologies" number="7" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            AI & infrastructure <GradientText variant="teal">stack</GradientText>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-[1fr_280px] gap-5">

          {/* LLM routing table */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm"
              >
                <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[var(--border)] grid grid-cols-[1fr_160px_1fr]">
                  <span className="text-xs font-bold text-px-muted uppercase tracking-wider">AI Feature</span>
                  <span className="text-xs font-bold text-px-muted uppercase tracking-wider">Model</span>
                  <span className="text-xs font-bold text-px-muted uppercase tracking-wider">Why</span>
                </div>
                {aiFeatures.map((f, i) => (
                  <motion.div
                    key={f.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className="grid grid-cols-[1fr_160px_1fr] px-4 py-2.5 border-b border-[var(--border)] last:border-b-0 hover:bg-[#F8FAFC] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.color }} />
                      <span className="text-sm font-medium text-px-navy">{f.name}</span>
                    </div>
                    <span className="text-sm font-mono text-px-muted">{f.model}</span>
                    <span className="text-sm text-px-muted">{f.reason}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Infra stack */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-2"
              >
                <p className="text-sm font-bold text-px-navy mb-1">Infrastructure</p>
                {infra.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[var(--border)]"
                  >
                    <TechBadge name={t.name} />
                    <p className="text-sm text-px-muted leading-relaxed">{t.role}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cache strategy */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)] text-sm"
            >
              <div className="w-1 h-8 rounded-full bg-px-teal flex-shrink-0" />
              <div>
                <span className="font-bold text-px-navy">Redis Cache-first strategy: </span>
                <span className="text-px-muted">sha256(model+input) key → hit avoids LLM call entirely. Embeddings cached 7 days, CV parses 30 days, general AI results 24 hours.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
