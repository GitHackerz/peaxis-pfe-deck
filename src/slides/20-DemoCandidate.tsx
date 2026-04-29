import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import ScreenshotFrame from '../components/ui/ScreenshotFrame'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const flowSteps = [
  { label: '1. Discover', desc: 'Candidate finds job via semantic search', color: '#00B8B3' },
  { label: '2. Upload CV', desc: 'PDF/DOCX uploaded to public endpoint', color: '#0087F8' },
  { label: '3. AI Parse', desc: 'Gemini extracts structured profile data', color: '#6D28D9' },
  { label: '4. Pre-fill', desc: 'Application form auto-filled from CV', color: '#FEC849' },
  { label: '5. Apply', desc: 'Application created + AI score computed', color: '#34D399' },
  { label: '6. Track', desc: 'Real-time pipeline stage visibility', color: '#FE595A' },
]

export default function DemoCandidate({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Product Demo" number="10" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Demo: <GradientText variant="navy">Candidate Flow</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            From job discovery to application tracking — designed to feel effortless.
          </motion.p>
        </motion.div>

        {/* Flow steps */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-6 gap-2"
            >
              {flowSteps.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)` }}
                  >
                    {i + 1}
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="absolute mt-5 ml-10 w-full h-[1px]" style={{ background: `${s.color}30` }} />
                  )}
                  <p className="text-[10px] font-bold text-px-navy">{s.label}</p>
                  <p className="text-[9px] text-px-muted leading-snug">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Screenshot */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ScreenshotFrame
                src="/screenshots/jobs-portal.png"
                alt="PEAXIS Jobs — Candidate Portal"
                caption="Job Feed + Application Tracker — candidate sees real-time pipeline progress"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* CV parsing callout */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F3FF] border border-[rgba(109,40,217,0.2)] text-xs"
            >
              <div className="w-1 h-8 rounded-full bg-[#6D28D9] flex-shrink-0" />
              <p className="text-px-muted">
                <strong className="text-px-navy">CV parsing:</strong>{' '}
                sha256(model + text) cache key → Redis (30d TTL). Identical CVs never re-parsed. Gemini 2.5-flash returns
                {' '}<code className="font-mono bg-gray-100 px-1 rounded">name, email, phone, skills[], experience[], education[], summary</code>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
