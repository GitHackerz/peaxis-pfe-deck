import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Settings, Users } from 'lucide-react'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { cinemaEntrance, fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const modules = [
  {
    icon: <Settings size={20} />,
    name: 'PEAXIS Core',
    sub: 'Operational Backbone',
    desc: 'Central business infrastructure: auth, billing, multi-tenant governance, team roles, account management. One unified control center.',
    value: 'Business Operations',
  },
  {
    icon: <Users size={20} />,
    name: 'PEAXIS Hire',
    sub: 'Recruiter Execution',
    desc: 'Full ATS with AI assistance: pipeline Kanban, job workspace, AI match scoring, candidate summaries, interview scheduling, analytics.',
    value: 'Recruiter Execution',
  },
  {
    icon: <Building2 size={20} />,
    name: 'PEAXIS Jobs',
    sub: 'Talent Acquisition',
    desc: 'Public talent platform: semantic job search, CV upload with AI parsing, match preview, skill gap visibility, easy apply, recommendations.',
    value: 'Talent Acquisition',
  },
]

export default function SolutionOverview({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-3">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="4" />
          </motion.div>
          <motion.h2 variants={cinemaEntrance} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS</GradientText> — Modular AI Hiring Operating System
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-2xl">
            Three deeply integrated modules replacing every tool a modern hiring team tolerates today.
            One ecosystem. One data layer. Every stakeholder served.
          </motion.p>
        </motion.div>

        {/* Three modules */}
        <AnimatePresence>
          {step >= 1 && (
            <div className="grid grid-cols-3 gap-4">
              {modules.map((m, i) => {
                const isBrandColor = i % 2 === 1 ? '#00B8B3' : '#001027'
                return (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 32, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                >
                  <div
                    className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border bg-white border-[var(--border)] shadow-sm hover:shadow-md transition-shadow h-full"
                  >
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: isBrandColor }}
                    >
                      {m.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-px-muted mb-0.5">{m.sub}</p>
                      <p className="text-sm font-extrabold text-px-navy">{m.name}</p>
                    </div>
                    <p className="text-xs text-px-muted leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              )
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Stakeholder mapping */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { who: 'Business Admin', uses: 'PEAXIS Core', detail: 'Central governance — billing, team, roles, org settings' },
                { who: 'Recruiter / HR Team', uses: 'PEAXIS Hire', detail: 'AI-assisted execution — pipelines, scoring, analytics, collaboration' },
                { who: 'Candidate / Talent', uses: 'PEAXIS Jobs', detail: 'Intelligent discovery — semantic search, match preview, easy apply' },
              ].map((s, i) => (
                <motion.div
                  key={s.who}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="p-3 rounded-xl bg-white border border-[var(--border)] flex flex-col gap-1"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-px-teal">{s.who}</p>
                  <p className="text-sm font-semibold text-px-navy">{s.uses}</p>
                  <p className="text-xs text-px-muted leading-relaxed">{s.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Integration callout */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="h-[1px] flex-1 max-w-32" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3)' }} />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6FAF9] border border-[rgba(0,184,179,0.25)]">
                <div className="w-2 h-2 rounded-full bg-px-teal animate-pulse" />
                <span className="text-sm font-semibold text-px-teal">All modules share a single Prisma → PostgreSQL data layer</span>
              </div>
              <div className="h-[1px] flex-1 max-w-32" style={{ background: 'linear-gradient(90deg, #00B8B3, transparent)' }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech badges */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 flex-wrap"
            >
              {['Next.js 16', 'NestJS', 'FastAPI', 'PostgreSQL + pgvector', 'Redis', 'BullMQ', 'Gemini', 'Stripe'].map((t) => (
                <Badge key={t} variant="teal" size="sm">{t}</Badge>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
