import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, KanbanSquare, Repeat2, UsersRound } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props {
  step: number
}

const flowSteps = [
  { label: 'Backlog' },
  { label: 'Sprint Planning' },
  { label: 'Build & Test' },
  { label: 'Review & Improve' },
]

const strategies = [
  {
    icon: <Repeat2 size={18} className="text-[#00B8B3]" />,
    title: 'Scrum Sprints',
  },
  {
    icon: <KanbanSquare size={18} className="text-[#00B8B3]" />,
    title: 'Kanban Board',
  },
  {
    icon: <CheckCircle2 size={18} className="text-[#00B8B3]" />,
    title: 'Incremental Delivery',
  },
  {
    icon: <UsersRound size={18} className="text-[#00B8B3]" />,
    title: 'Sprint Review',
  },
]

export default function Methodology({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">
        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Methodology & Requirements" number="5" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Engineering <GradientText variant="teal">Methodology</GradientText>
          </motion.h2>
        </motion.div>

        {/* Two Columns */}
        <div className="grid grid-cols-12 gap-5 items-stretch min-h-[380px]">
          {/* Left Column: Visual flow (Step >= 1) */}
          <div className="col-span-7 flex flex-col justify-center">
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-2"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">Sprint cycle</p>
                  <div className="grid grid-cols-2 gap-3">
                    {flowSteps.map((fs, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                      >
                        <Card variant="elevated" className="p-3.5 h-full relative overflow-hidden flex flex-col justify-between">
                          <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-[#E6FAF9] rounded-bl-xl text-xs font-black text-[#00B8B3]">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="text-sm font-extrabold text-px-navy pr-4 mb-0.5">{fs.label}</p>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Key Strategies (Step >= 2) */}
          <div className="col-span-5 flex flex-col justify-center">
            <AnimatePresence>
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-3"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-1">How work was managed</p>
                  <div className="flex flex-col gap-2">
                    {strategies.map((strat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex gap-3 p-3 rounded-xl bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#E6FAF9] flex items-center justify-center flex-shrink-0">
                          {strat.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-px-navy mb-0.5">{strat.title}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom geometric decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, transparent)' }} />
    </div>
  )
}
