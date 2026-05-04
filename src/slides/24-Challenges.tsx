import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const challenges = [
  {
    num: '01',
    title: 'Multi-tenant data isolation at scale',
    challenge: 'Every query, guard, and background job must be scoped to a businessId without leaking data between tenants.',
    resolution: 'X-Business-ID header enforced at controller level. PrismaService always receives businessId from the guard. BullMQ jobs include businessId in payload.',
    color: '#001027',
    lesson: 'Design security boundaries first — retrofitting scoping is 10× harder.',
  },
  {
    num: '02',
    title: 'AI explainability vs. LLM cost',
    challenge: 'Deterministic scoring is cheap but limited. LLM scoring is rich but expensive and non-reproducible at scale.',
    resolution: 'Hybrid approach: deterministic skill-overlap for the score (reproducible, zero cost), Gemini Flash for the explanation text (low cost, high quality, cached 24h).',
    color: '#001027',
    lesson: 'Separate "what" (deterministic) from "why" (LLM). Cache aggressively.',
  },
  {
    num: '03',
    title: 'Frontend state vs. server freshness',
    challenge: 'Next.js server components cache aggressively. After inline edits (job form, stage moves), UI must reflect the updated state without full navigation.',
    resolution: 'Server actions call router.refresh() after mutations — triggers server component re-fetch without navigation. Client components own transient state only.',
    color: '#001027',
    lesson: 'Understand Next.js cache invalidation deeply before building complex workspaces.',
  },
]

export default function Challenges({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Conclusion" number="12" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Challenges & <GradientText variant="teal">lessons learned</GradientText>
          </motion.h2>
        </motion.div>

        {/* Challenge cards */}
        <div className="flex flex-col gap-3">
          {challenges.map((c, i) => (
            <AnimatePresence key={c.num}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 p-4 rounded-2xl bg-white border border-[var(--border)] shadow-sm"
                >
                  {/* Number */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold flex-shrink-0"
                    style={{ background: c.color }}
                  >
                    {c.num}
                  </div>

                  {/* Content */}
                  <div className="flex-1 grid grid-cols-[1fr_1fr_200px] gap-4">
                    <div>
                      <p className="text-sm font-bold text-px-muted uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-base font-bold text-px-navy mb-1">{c.title}</p>
                      <p className="text-sm text-px-muted leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-px-muted uppercase tracking-wider mb-1">Resolution</p>
                      <p className="text-sm text-px-muted leading-relaxed">{c.resolution}</p>
                    </div>
                    <div
                      className="p-3 rounded-xl border"
                      style={{ background: `${c.color}08`, borderColor: `${c.color}25` }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: c.color }}>Key lesson</p>
                      <p className="text-xs text-px-muted italic leading-relaxed">{c.lesson}</p>
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
