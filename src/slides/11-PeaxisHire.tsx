import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, Brain, Edit, Kanban } from 'lucide-react'
import WorkspaceMockup from '../components/mockups/WorkspaceMockup'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const features = [
  { icon: <Kanban size={14} />, label: 'Pipeline Kanban', desc: 'Drag-and-drop stage management with AI scores visible on every card' },
  { icon: <Brain size={14} />, label: 'AI Insight Panel', desc: 'Match score, matched/missing skills, AI explanation per candidate' },
  { icon: <BarChart3 size={14} />, label: 'Job Analytics', desc: 'Funnel metrics, score distributions, time-to-stage per job' },
  { icon: <Edit size={14} />, label: 'Inline Editing', desc: 'Edit job details inline without leaving the workspace — no navigation' },
]

export default function PeaxisHire({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Solution" number="6" />
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
              <GradientText variant="teal">PEAXIS Hire</GradientText> — Recruiter Dashboard
            </h2>
            <Badge variant="navy" size="sm">Next.js 16</Badge>
          </motion.div>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            The workspace where recruiters live. Every hiring decision powered by AI, every action one click away.
          </motion.p>
        </motion.div>

        {/* Two-column: features + screenshot */}
        <div className="grid grid-cols-[240px_1fr] gap-6 items-start">

          {/* Feature list */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2"
              >
                {features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[var(--border)]"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0 mt-0.5">
                      {f.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-px-navy">{f.label}</p>
                      <p className="text-xs text-px-muted leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Screenshot */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
              >
                <WorkspaceMockup />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Key metric */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1 h-8 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-xs text-px-navy">
                <strong>Architecture:</strong> Server components fetch all data in parallel (Promise.all). Client components own interactive state only.
                Candidate card click opens a slide-in <strong>CandidateDrawer</strong> — never navigates away.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
