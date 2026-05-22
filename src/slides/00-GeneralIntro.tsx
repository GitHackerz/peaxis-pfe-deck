import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  {
    number: '01',
    title: 'Hiring Fragmentation',
    body: 'SMEs juggle 5+ disconnected tools (spreadsheets, calendars, job boards) with no unified operational layer.',
    color: '#00B8B3',
  },
  {
    number: '02',
    title: 'Legacy ATS Failure',
    body: 'Reliance on rigid keyword matching creates flat databases with filters, missing non-standard CVs.',
    color: '#FE595A',
  },
  {
    number: '03',
    title: 'Candidate Friction',
    body: 'Candidates apply into opaque black boxes. Lacks feedback, transparency, and skill-gap visibility.',
    color: '#374151',
  },
  {
    number: '04',
    title: 'The Intelligence Gap',
    body: 'Consequential decisions made without explainable metrics. AI used as marketing rather than core infrastructure.',
    color: '#6B7280',
  },
]

export default function GeneralIntro({ step }: Props) {
  return (
    <div className="slide-root">
      {/* Subtle background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 40%, rgba(0,184,179,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Introduction & Context" number="1" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Why <GradientText variant="teal">PEAXIS?</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-2xl">
            Recruitment does not need another tool — it needs an integrated operating system.
          </motion.p>
        </motion.div>

        {/* Four pillars grid */}
        <div className="grid grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <AnimatePresence key={pillar.number}>
              {step >= i + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl border border-[var(--border)] p-5 shadow-sm flex flex-col gap-3"
                >
                  {/* Number + title */}
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-black tabular-nums px-2.5 py-1 rounded-full"
                      style={{ background: `${pillar.color}15`, color: pillar.color }}
                    >
                      {pillar.number}
                    </span>
                    <h3
                      className="text-base font-extrabold tracking-tight"
                      style={{ color: pillar.color }}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Accent line */}
                  <div
                    className="h-[2px] w-10 rounded-full"
                    style={{ background: `${pillar.color}40` }}
                  />

                  {/* Body */}
                  <p className="text-sm text-px-muted leading-relaxed">{pillar.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Core thesis — visible after all pillars */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.25)] text-sm"
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0 bg-px-teal" />
              <p className="text-px-navy">
                <strong>Core thesis:</strong>{' '}
                PEAXIS unifies business infrastructure, recruiter execution, candidate experience, and AI intelligence
                into a single modular ecosystem — replacing the fragmented stack with an{' '}
                <span className="font-semibold text-px-teal">AI-powered Hiring Operating System</span>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom teal line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, transparent)' }} />
    </div>
  )
}
