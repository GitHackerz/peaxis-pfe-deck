import { AnimatePresence, motion } from 'framer-motion'
import { Award, Search, Upload } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  {
    title: 'Job Discovery',
    color: '#00B8B3',
    icon: <Search size={20} />,
    desc: 'Semantic search and filters surface roles beyond keyword matching.',
  },
  {
    title: 'Application UX',
    color: '#009E9A',
    icon: <Upload size={20} />,
    desc: 'AI CV parsing pre-fills profiles for a low-friction apply flow.',
  },
  {
    title: 'AI Matching & Insights',
    color: '#001027',
    icon: <Award size={20} />,
    desc: 'Skill-gap feedback and alerts help candidates target the right roles.',
  },
]

export default function PeaxisJobs({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="navy">PEAXIS Jobs</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted">
            The candidate portal for discovery, matching, and low-friction applications.
          </motion.p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-3 gap-4">
          {pillars.map((sec, colIdx) => (
            <AnimatePresence key={sec.title}>
              {step >= colIdx + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="bg-white rounded-xl border border-[var(--border)] p-5 flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${sec.color}1A`, color: sec.color }}>
                    {sec.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-px-navy">{sec.title}</h3>
                  <p className="text-sm text-px-muted leading-snug">{sec.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Business value */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1.5 h-6 rounded bg-[#00B8B3] flex-shrink-0" />
              <p className="text-sm text-px-navy">
                Replaces opaque applications with clear matching insights and faster apply flows.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
