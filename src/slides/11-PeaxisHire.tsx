import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, Brain, CalendarDays, CheckSquare, Edit, FileText, Kanban, MessageSquare, Shield, Users, Zap } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const sections = [
  {
    title: 'Workspace & Pipeline',
    color: '#00B8B3',
    items: [
      { icon: <Edit size={16} />, label: 'Job Workspace', desc: 'Central hub for pipeline, analytics, and job configurations.' },
      { icon: <Kanban size={16} />, label: 'Pipeline Kanban', desc: 'Drag-and-drop applicant tracking with inline AI scoring.' },
      { icon: <Users size={16} />, label: 'Candidate Drawer', desc: 'Slide-in panel for full profile review without leaving context.' },
      { icon: <FileText size={16} />, label: 'Offer Management', desc: 'Standardised drafts with automated scheduling and sign-offs.' },
    ],
  },
  {
    title: 'Recruiter Intelligence',
    color: '#009E9A',
    items: [
      { icon: <Zap size={16} />, label: 'AI Match Scoring', desc: '0–100 deterministic overlap score mapping required vs candidate skills.' },
      { icon: <Brain size={16} />, label: 'Hiring Copilot', desc: 'Automated candidate summary cards, risk flags, and interview questions.' },
      { icon: <BarChart3 size={16} />, label: 'Decision Analytics', desc: 'Recruiter-facing funnel metrics, conversion tracking, and SLA status.' },
      { icon: <Brain size={16} />, label: 'Skill Gap Tool', desc: 'Visual gap analysis highlighting candidate strengths and weaknesses.' },
    ],
  },
  {
    title: 'Collaboration & Flow',
    color: '#001027',
    items: [
      { icon: <CalendarDays size={16} />, label: 'Interview Scheduler', desc: 'Dynamic scheduling with automatic calendar slots.' },
      { icon: <CheckSquare size={16} />, label: 'Team Approvals', desc: 'Role-based access controls for collaborative feedback loops.' },
      { icon: <MessageSquare size={16} />, label: 'Activity & Notes', desc: 'Internal chat logs and decision histories on applicant records.' },
      { icon: <Shield size={16} />, label: 'Candidate Profiles', desc: 'Encrypted candidate-controlled resumes and private portfolios.' },
    ],
  },
]

export default function PeaxisHire({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-4">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS Hire</GradientText> — Recruiter Execution
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted">
            Core ATS platform. Centralising recruitment workflows and decisions into one AI-assisted environment.
          </motion.p>
        </motion.div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-3 gap-4 min-h-[360px]">
          {sections.map((sec, colIdx) => (
            <AnimatePresence key={sec.title}>
              {step >= colIdx + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="bg-white rounded-xl border border-[var(--border)] p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 border-b pb-2">
                    <div className="w-1.5 h-4 rounded-full" style={{ background: sec.color }} />
                    <h3 className="text-sm font-bold text-px-navy">{sec.title}</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {sec.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex gap-2.5 items-start">
                        <div className="w-7 h-7 rounded bg-[#E6FAF9] flex items-center justify-center flex-shrink-0 text-px-teal mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-px-navy">{item.label}</p>
                          <p className="text-[10px] text-px-muted leading-tight mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Strategic Value Card (reveals on step 4) */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1.5 h-6 rounded bg-[#00B8B3] flex-shrink-0" />
              <p className="text-xs text-px-navy">
                <strong>Strategic Value:</strong> PEAXIS Hire consolidates scattered communication, candidate tracking, and evaluation histories into one structured and audit-ready Recruiter interface.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
