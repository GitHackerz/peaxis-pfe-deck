import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, Brain, CalendarDays, CheckSquare, Edit, FileText, Kanban, MessageSquare, Shield, Users, Zap } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const features = [
  { icon: <Kanban size={18} />, title: 'Pipeline Kanban', desc: 'Drag-drop stage management with AI scores on every candidate card' },
  { icon: <Brain size={18} />, title: 'Hiring Copilot', desc: 'AI summaries, interview questions, risk flags, skill gaps, next actions' },
  { icon: <Edit size={18} />, title: 'Job Workspace', desc: 'Unified hub: job details, pipeline, candidates, analytics, collaboration' },
  { icon: <Users size={18} />, title: 'Candidate Drawer', desc: 'Slide-in panel with full AI profile without leaving pipeline view' },
  { icon: <Shield size={18} />, title: 'Candidate Profiles', desc: 'Comprehensive profiles with CV data, skills, experience, AI insights' },
  { icon: <Zap size={18} />, title: 'AI Match Scoring', desc: '0–100 deterministic score with confidence, matched/missing skills breakdown' },
  { icon: <BarChart3 size={18} />, title: 'Job Analytics', desc: 'Funnel metrics, conversion rates, time-to-stage, score distributions' },
  { icon: <CalendarDays size={18} />, title: 'Interview Scheduling', desc: 'Calendar integration with time slots, interview tracking, coordination' },
  { icon: <Brain size={18} />, title: 'Skill Gap Analysis', desc: 'AI-generated candidate vs. job comparison with actionable insights' },
  { icon: <MessageSquare size={18} />, title: 'Activity & Notes', desc: 'Conversation history, internal notes, team feedback on candidates' },
  { icon: <CheckSquare size={18} />, title: 'Team Collaboration', desc: 'Role-based access, approvals, feedback loops for hiring decisions' },
  { icon: <FileText size={18} />, title: 'Offer Management', desc: 'Draft, customize, and send offers with automated follow-up workflows' },
]

export default function PeaxisHire({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Solution" number="3" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS Hire</GradientText> — Recruiter Execution
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            Complete ATS with AI-assisted workflows. Centralizes recruiter operations into one seamless platform from job creation to offer.
          </motion.p>
        </motion.div>

        {/* Feature grid: 12 cards (2 rows) */}
        <div className="grid grid-cols-6 gap-3">
          {features.map((f, i) => (
            <AnimatePresence key={f.title}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="flex flex-col gap-2.5 p-4 rounded-xl bg-white border border-[var(--border)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-px-navy">{f.title}</p>
                    <p className="text-xs text-px-muted leading-snug">{f.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Strategic value */}
        <AnimatePresence>
          {step >= 13 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1 h-6 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-xs text-px-navy">
                <strong>Strategic Value:</strong> PEAXIS Hire centralizes recruiter workflows into one AI-assisted execution system for faster, smarter, and more explainable hiring decisions.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
