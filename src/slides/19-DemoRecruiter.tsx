import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import WorkspaceMockup from '../components/mockups/WorkspaceMockup'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const features = [
  { label: 'Job Workspace', desc: 'All job-related data in one tabbed view — no page hops' },
  { label: 'Pipeline Kanban', desc: 'Drag-and-drop stage management with AI scores on every card' },
  { label: 'Candidate Drawer', desc: 'Slide-in panel reveals AI insights without leaving the pipeline' },
  { label: 'Inline Job Edit', desc: 'Edit job details within the workspace — router.refresh() on save' },
]

export default function DemoRecruiter({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Product Demo" number="10" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Demo: <GradientText variant="teal">Recruiter Dashboard</GradientText>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-[1fr_220px] gap-5 items-start">

          {/* Main screenshot */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55 }}
              >
                <WorkspaceMockup />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feature list */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-2"
              >
                {features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="p-3 rounded-xl bg-white border border-[var(--border)]"
                  >
                    <p className="text-xs font-bold text-px-navy mb-0.5">{f.label}</p>
                    <p className="text-[10px] text-px-muted">{f.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Key UX rule */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)] text-xs"
            >
              <div className="w-1 h-8 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-px-muted">
                <strong className="text-px-navy">UX principle:</strong>{' '}
                Candidate card click <em>never navigates</em> — it opens the CandidateDrawer (slide-in panel). "View Full Profile" inside the drawer navigates. One action, clear intent.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
