import { AnimatePresence, motion } from 'framer-motion'
import { Brain, Building2, Layers, Users } from 'lucide-react'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { cinemaEntrance, fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  {
    icon: <Layers size={22} />,
    name: 'PEAXIS Core',
    sub: 'API Layer',
    desc: 'NestJS REST API — single source of truth. Auth, billing, multi-tenant, all data owned here.',
    color: '#001027',
    grad: '#001027',
  },
  {
    icon: <Building2 size={22} />,
    name: 'PEAXIS Hire',
    sub: 'Recruiter Dashboard',
    desc: 'Next.js SPA — pipeline Kanban, AI insights panel, job management, analytics.',
    color: '#001027',
    grad: '#001027',
  },
  {
    icon: <Users size={22} />,
    name: 'PEAXIS Jobs',
    sub: 'Candidate Portal',
    desc: 'Next.js SPA — semantic job search, CV upload & parse, application tracking.',
    color: '#001027',
    grad: '#001027',
  },
  {
    icon: <Brain size={22} />,
    name: 'AI Brain',
    sub: 'FastAPI Service',
    desc: 'Stateless Python service — CV parsing, match scoring, copilot, JD generation.',
    color: '#001027',
    grad: '#001027',
  },
]

export default function SolutionOverview({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-3">
          <motion.div variants={fadeUp}>
            <SectionTag section="The Solution" number="6" />
          </motion.div>
          <motion.h2 variants={cinemaEntrance} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS</GradientText> — Integrated AI Hiring Operating System
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            Four deeply integrated products that replace the fragmented stack every recruiter tolerates today — built on SaaS architecture principles refined at Prospecter.
          </motion.p>
        </motion.div>

        {/* Four pillars */}
        <AnimatePresence>
          {step >= 1 && (
            <div className="grid grid-cols-4 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 32, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow h-full">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: p.grad }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-px-muted mb-0.5">{p.sub}</p>
                      <p className="text-sm font-extrabold text-px-navy">{p.name}</p>
                    </div>
                    <p className="text-xs text-px-muted leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                <span className="text-xs font-semibold text-px-teal">All four products share a single Prisma → PostgreSQL data layer</span>
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
