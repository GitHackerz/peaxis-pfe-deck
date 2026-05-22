import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, Brain, Calendar, Upload, UserCheck } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const reqs = [
  {
    icon: <Brain size={20} />,
    id: 'FR-06',
    title: 'AI Match Scoring',
    items: ['Deterministic skill-overlap engine', 'Score 0–100 with explanation', 'Strengths & weaknesses breakdown'],
    color: '#00B8B3',
  },
  {
    icon: <Upload size={20} />,
    id: 'FR-07',
    title: 'CV Parsing',
    items: ['PDF / DOCX / TXT support', 'Gemini 2.5-flash extraction', 'Auto pre-fills candidate profile'],
    color: '#00B8B3',
  },
  {
    icon: <UserCheck size={20} />,
    id: 'FR-08',
    title: 'Candidate Onboarding',
    items: ['Anonymous apply-with-CV flow', 'Profile completeness scoring', 'Semantic embedding generation'],
    color: '#00B8B3',
  },
  {
    icon: <Calendar size={20} />,
    id: 'FR-09',
    title: 'Interview Scheduling',
    items: ['Interview CRUD with type flags', 'Linked to application record', 'Interviewer assignment & tracking'],
    color: '#00B8B3',
  },
  {
    icon: <BarChart3 size={20} />,
    id: 'FR-10',
    title: 'Analytics Dashboard',
    items: ['Pipeline funnel metrics', 'Score distribution charts', 'Time-to-hire tracking'],
    color: '#00B8B3',
  },
]

export default function FuncReqAI({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Methodology & Requirements" number="3" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            AI & analytics <GradientText variant="teal">requirements</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-xl">
            FR-06 to FR-10: the intelligence layer — PEAXIS's core differentiator above traditional ATS tools.
          </motion.p>
        </motion.div>

        {/* Requirements grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {reqs.map((r, i) => (
            <AnimatePresence key={r.id}>
              {step >= Math.floor(i / 2) + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                  className={i === 4 ? 'col-span-2 md:col-span-1' : ''}
                >
                  <Card variant="elevated" className="p-4 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${r.color}15`, color: r.color, border: `1px solid ${r.color}25` }}
                      >
                        {r.icon}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-px-muted">{r.id}</span>
                        <p className="text-base font-bold text-px-navy leading-tight">{r.title}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {r.items.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-sm text-px-muted">
                          <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: r.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  )
}
