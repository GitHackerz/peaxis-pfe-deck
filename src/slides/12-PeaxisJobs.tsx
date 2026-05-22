import { AnimatePresence, motion } from 'framer-motion'
import { Search, Filter, Upload, Star, Zap, TrendingUp, Bookmark, Award, ListChecks, Settings, Bell } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const sections = [
  {
    title: 'Job Discovery & Search',
    color: '#00B8B3',
    items: [
      { icon: <Search size={16} />, label: 'Semantic Job Search', desc: 'pgvector embeddings match job listings beyond simple keyword checks.' },
      { icon: <Filter size={16} />, label: 'Advanced Filters', desc: 'Refined filtering by skills, salary brackets, and remote categories.' },
      { icon: <Zap size={16} />, label: 'Job Lite Format', desc: 'Lightweight job cards optimised for fast mobile browsing.' },
      { icon: <TrendingUp size={16} />, label: 'Personalised Feed', desc: 'AI recommendations driven by candidate embedding similarity.' },
    ],
  },
  {
    title: 'Application UX',
    color: '#009E9A',
    items: [
      { icon: <Upload size={16} />, label: 'AI CV Parsing', desc: 'PDF upload dynamically populates candidate profile data.' },
      { icon: <ListChecks size={16} />, label: 'Easy Apply Flow', desc: 'One-click application submitting parsed CV and profile credentials.' },
      { icon: <ListChecks size={16} />, label: 'Pipeline Tracking', desc: 'Real-time visibility into hiring stage (Applied, Interview, Offer).' },
      { icon: <Settings size={16} />, label: 'Profile Manager', desc: 'Candidate-controlled preferences, portfolios, and skills inventory.' },
    ],
  },
  {
    title: 'AI Matching & Insights',
    color: '#001027',
    items: [
      { icon: <Star size={16} />, label: 'Match Score Preview', desc: 'AI match percentage shown to candidates before hitting apply.' },
      { icon: <Award size={16} />, label: 'Skill Gap Tool', desc: 'Highlights overlapping strengths and recommended missing skills.' },
      { icon: <Bookmark size={16} />, label: 'Job Bookmarks', desc: 'Bookmark interesting job listings to apply for later.' },
      { icon: <Bell size={16} />, label: 'Job Alerts', desc: 'Instant notifications when roles match candidate skill-sets.' },
    ],
  },
]

export default function PeaxisJobs({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-4">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="navy">PEAXIS Jobs</GradientText> — Talent Acquisition
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted">
            Candidate-facing portal. Minimising application friction and empowering job seekers with skill-gap transparency.
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
                <strong>Strategic Value:</strong> PEAXIS Jobs drives candidate acquisition by replacing opaque application forms with clear matching insights, enhancing employer talent branding.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
