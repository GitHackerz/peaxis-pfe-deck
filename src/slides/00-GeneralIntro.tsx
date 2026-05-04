import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  {
    number: '01',
    title: 'Context',
    body: 'AI is reshaping every industry. Recruitment — still largely manual — is one of the last domains to benefit from intelligent automation.',
    color: '#00B8B3',
  },
  {
    number: '02',
    title: 'Problem Statement',
    body: 'Traditional ATS tools are keyword-driven and rigid. Hiring teams waste hours on manual screening while qualified candidates go unnoticed.',
    color: '#FE595A',
  },
  {
    number: '03',
    title: 'Objectives',
    body: 'Design and build PEAXIS — an AI-native, full-stack recruitment platform that automates scoring, surfaces explainable insights, and scales for SMEs.',
    color: '#001027',
  },
  {
    number: '04',
    title: 'Methodology',
    body: '6-month PFE internship at Prospecter. Iterative agile cycles: requirements → architecture → full-stack implementation → AI integration → deployment.',
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
            <SectionTag section="Introduction" number="1" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            General <GradientText variant="teal">Introduction</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-2xl">
            Academic framing of the project — context, problem, objectives, and methodology.
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

        {/* Footer note — visible after all pillars */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.25)] text-sm"
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0 bg-px-teal" />
              <p className="text-px-navy">
                <strong>Internship scope:</strong> 6-month PFE at{' '}
                <span className="font-semibold text-px-teal">Prospecter</span> — full-stack engineering
                and AI systems architecture, independently designed and delivered.
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
