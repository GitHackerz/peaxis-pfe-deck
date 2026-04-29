import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, Clock, UserX } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const stats = [
  { value: '42 days', label: 'Average time-to-hire', sub: 'SHRM 2024', color: '#FE595A' },
  { value: '75%', label: 'Recruiters overwhelmed by CV volume', sub: 'LinkedIn Talent Report', color: '#001027' },
  { value: '60%', label: 'Candidates ghost after poor UX', sub: 'Indeed Survey 2023', color: '#6B7280' },
]

const pains = [
  {
    icon: <Clock size={20} />,
    title: 'Screening bottleneck',
    body: 'Recruiters spend 23 hours per week manually reviewing CVs. 80% of that time is wasted on unqualified applications.',
    color: '#FE595A',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Bias & inconsistency',
    body: 'Manual screening introduces unconscious bias and inconsistent evaluation criteria across reviewers and hiring rounds.',
    color: '#001027',
  },
  {
    icon: <UserX size={20} />,
    title: 'Candidate friction',
    body: 'Long applications, no feedback, and opaque processes cause top talent to abandon their candidacies before completion.',
    color: '#6B7280',
  },
]

export default function RecruitmentPain({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="The Problem" number="3" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Recruitment is <GradientText variant="coral">broken</GradientText> at every layer
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            The hiring process hasn't fundamentally changed in 20 years. Time, money, and talent are wasted at every step.
          </motion.p>
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
                  <div className="text-3xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs font-semibold text-px-navy mt-1">{s.label}</div>
                  <div className="text-[10px] text-px-muted mt-0.5">{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pain cards */}
        <AnimatePresence>
          {step >= 2 && (
            <div className="grid grid-cols-3 gap-3">
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
                      <p className="text-sm font-bold text-px-navy mb-1">{p.title}</p>
                      <p className="text-xs text-px-muted leading-relaxed">{p.body}</p>
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
                <p className="text-xs text-px-navy">
                  <strong>Global impact:</strong> companies lose an average of <strong>$14,900</strong> per bad hire, while top candidates accept competing offers in under 10 days.
                </p>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border" style={{ background: '#F3F4F6', borderColor: 'rgba(0,0,0,0.07)' }}>
                <div className="w-1 h-8 rounded-full flex-shrink-0 bg-[#6B7280]" />
                <p className="text-xs text-px-navy">
                  <strong>Regional context:</strong> In Tunisia &amp; North Africa, growing SMEs rely on spreadsheets and informal networks — modern ATS adoption remains critically low among early-stage companies.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
