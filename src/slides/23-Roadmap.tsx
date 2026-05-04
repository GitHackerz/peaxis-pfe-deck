import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

type Status = 'done' | 'active' | 'planned'

const roadmap: { label: string; items: { text: string; status: Status }[] }[] = [
  {
    label: 'Phase 1 — Core Platform (Done)',
    items: [
      { text: 'NestJS API with 14 modules', status: 'done' },
      { text: 'Multi-tenant auth + OAuth2', status: 'done' },
      { text: 'Application pipeline (6 stages)', status: 'done' },
      { text: 'Job CRUD + semantic search', status: 'done' },
      { text: 'Stripe billing integration', status: 'done' },
    ],
  },
  {
    label: 'Phase 2 — AI Layer (Done)',
    items: [
      { text: 'FastAPI AI microservice', status: 'done' },
      { text: 'CV parsing + match scoring', status: 'done' },
      { text: 'Hiring Copilot + JD Generator', status: 'done' },
      { text: 'BullMQ embedding pipeline', status: 'done' },
      { text: 'Redis 3-layer caching', status: 'done' },
    ],
  },
  {
    label: 'Phase 3 — Frontends (Done)',
    items: [
      { text: 'PEAXIS Hire recruiter dashboard', status: 'done' },
      { text: 'PEAXIS Jobs candidate portal', status: 'done' },
      { text: 'Job Workspace with tabs + drawer', status: 'done' },
      { text: 'Analytics dashboard', status: 'done' },
      { text: 'Interview scheduling', status: 'done' },
    ],
  },
  {
    label: 'Phase 4 — Near-term (Realistic)',
    items: [
      { text: 'Email notification system', status: 'active' },
      { text: 'GDPR compliance toolkit', status: 'planned' },
      { text: 'API rate limiting per plan', status: 'planned' },
      { text: 'End-to-end Playwright tests', status: 'planned' },
      { text: 'Candidate referral engine', status: 'planned' },
    ],
  },
  {
    label: 'Phase 5 — Long-term (Visionary)',
    items: [
      { text: 'Video interview + AI scoring', status: 'planned' },
      { text: 'Mobile-first candidate app', status: 'planned' },
      { text: 'Predictive attrition modeling', status: 'planned' },
      { text: 'Multi-region deployment', status: 'planned' },
      { text: 'Enterprise SSO + audit logs', status: 'planned' },
    ],
  },
]

const statusColor: Record<Status, { bg: string; text: string; label: string }> = {
  done:    { bg: '#E6FAF9', text: '#009E9A', label: 'Done' },
  active:  { bg: '#F3F4F6', text: '#001027', label: 'In Progress' },
  planned: { bg: '#F3F4F6', text: '#6B7280', label: 'Planned' },
}

export default function Roadmap({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Results" number="11" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Product <GradientText variant="teal">roadmap</GradientText>
          </motion.h2>
        </motion.div>

        {/* Roadmap phases */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-5 gap-3"
            >
              {roadmap.map((phase, pi) => (
                <motion.div
                  key={phase.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: pi * 0.1 }}
                  className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden"
                >
                  {/* Phase header */}
                  <div
                    className="px-3 py-2 border-b border-[var(--border)]"
                    style={{ background: pi >= 3 ? '#F8FAFC' : '#E6FAF9' }}
                  >
                    <p className="text-xs font-bold" style={{ color: pi >= 3 ? '#6B7280' : '#009E9A' }}>
                      {phase.label}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="p-2 flex flex-col gap-1.5">
                    {phase.items.map((item) => {
                      const sc = statusColor[item.status]
                      return (
                        <div key={item.text} className="flex items-center gap-1.5">
                          <div
                            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold"
                            style={{ background: sc.bg, color: sc.text }}
                          >
                            {item.status === 'done' ? '✓' : item.status === 'active' ? '→' : '○'}
                          </div>
                          <span className="text-xs text-px-navy leading-tight">{item.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-4"
            >
              {Object.entries(statusColor).map(([key, val]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded flex-shrink-0" style={{ background: val.bg, border: `1px solid ${val.text}40` }} />
                  <span className="text-xs text-px-muted">{val.label}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
