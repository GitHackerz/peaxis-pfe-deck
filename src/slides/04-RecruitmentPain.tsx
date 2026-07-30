import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, Clock, Search, UserX } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const stats = [
  { value: '42 days', label: 'Average time-to-hire', sub: 'SHRM 2024', color: '#FE595A' },
  { value: '75%', label: 'Recruiters overloaded', sub: 'LinkedIn Talent Report', color: '#001027' },
  { value: '60%', label: 'Candidates report no feedback', sub: 'Indeed Survey 2023', color: '#6B7280' },
]

const pains = [
  {
    icon: <Clock size={22} />,
    title: 'Manual screening',
    color: '#FE595A',
  },
  {
    icon: <Search size={22} />,
    title: 'Keyword-based ATS',
    color: '#001027',
  },
  {
    icon: <AlertTriangle size={22} />,
    title: 'Inconsistent evaluation',
    color: '#6B7280',
  },
  {
    icon: <UserX size={22} />,
    title: 'Candidate experience',
    color: '#374151',
  },
]

export default function RecruitmentPain({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Recruitment Context" number="3" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Current recruitment <GradientText variant="coral">challenges</GradientText>
          </motion.h2>
        </motion.div>

        {/* Stats row */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-3 gap-3"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-4 rounded-2xl text-center border"
                  style={{ background: `${s.color}10`, borderColor: `${s.color}25` }}
                >
                  <div className="text-4xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-sm font-semibold text-px-navy mt-1">{s.label}</div>
                  <div className="text-xs text-px-muted mt-0.5">{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pain cards */}
        <AnimatePresence>
          {step >= 2 && (
            <div className="grid grid-cols-4 gap-3">
              {pains.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card variant="elevated" className="p-4 h-full flex flex-col gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}25` }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <p className="text-base font-bold text-px-navy mb-1">{p.title}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Bottom insight with regional relevance */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#FFF0F0] border border-[rgba(254,89,90,0.2)]">
                <div className="w-1 h-8 rounded-full flex-shrink-0 bg-[#FE595A]" />
                <p className="text-sm text-px-navy">
                  <strong>Cost of a bad hire:</strong> averages <strong>$14.9K</strong>; strong candidates can accept competing offers within days.
                </p>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border" style={{ background: '#F3F4F6', borderColor: 'rgba(0,0,0,0.07)' }}>
                <div className="w-1 h-8 rounded-full flex-shrink-0 bg-[#6B7280]" />
                <p className="text-sm text-px-navy">
                  <strong>Engineering response:</strong> keep screening responsive, make every score reviewable, and keep candidates informed.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
