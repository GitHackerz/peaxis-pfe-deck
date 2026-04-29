import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import ScreenshotFrame from '../components/ui/ScreenshotFrame'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const aiCapabilities = [
  { name: 'Match Scoring', desc: 'Deterministic skill-overlap → 0–100 score with matched/missing skills + plain-language explanation', color: '#00B8B3' },
  { name: 'CV Parsing', desc: 'Gemini 2.5-flash → structured JSON profile from PDF/DOCX/TXT in under 3 seconds', color: '#0087F8' },
  { name: 'Hiring Copilot', desc: '4 functions: candidate summary, interview questions, risk flags, suggest next action', color: '#6D28D9' },
  { name: 'JD Generator', desc: 'Structured job description with bias-checking prompt and optional skill suggestions', color: '#FEC849' },
]

export default function DemoAI({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Product Demo" number="10" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Demo: <GradientText variant="teal">AI Engine</GradientText>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-[1fr_240px] gap-5 items-start">

          {/* Capability list */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-2"
              >
                {aiCapabilities.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[var(--border)]"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: c.color }}
                    />
                    <div>
                      <p className="text-xs font-bold text-px-navy">{c.name}</p>
                      <p className="text-[10px] text-px-muted leading-relaxed">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI score mockup + screenshot */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-3"
              >
                {/* Inline AI score widget mockup */}
                <div className="p-4 rounded-2xl bg-white border border-[rgba(0,184,179,0.25)] shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-[#E6FAF9] flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1l1.3 2.6L10 4.3l-2 1.9.5 2.8L6 7.6 3.5 9l.5-2.8L2 4.3l2.7-.7L6 1z" fill="#00B8B3" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-px-navy">AI Match Score</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-extrabold text-px-teal">82</span>
                    <span className="text-sm text-px-muted">/100</span>
                    <span className="ml-auto text-[10px] font-semibold text-[#00B8B3] bg-[#E6FAF9] px-2 py-0.5 rounded-full">Strong Match</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full mb-3">
                    <div className="h-full rounded-full" style={{ width: '82%', background: 'linear-gradient(90deg, #00B8B3, #44C4F6)' }} />
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['React', 'TypeScript', 'Node.js'].map((s) => (
                      <span key={s} className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[#E6FAF9] text-[#009E9A]">{s} ✓</span>
                    ))}
                    {['GraphQL'].map((s) => (
                      <span key={s} className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[#FFF0F0] text-[#E03E3F]">{s} ✗</span>
                    ))}
                  </div>
                  <p className="text-[9px] text-px-muted italic">"Strong React + TS background. GraphQL gap is trainable given existing Node.js depth."</p>
                </div>

                <ScreenshotFrame
                  src="/screenshots/ai-insight.png"
                  alt="AI Insight Panel"
                  caption="Insight panel in Candidate Drawer"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Explainability rule */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)] text-xs"
            >
              <div className="w-1 h-8 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-px-muted">
                <strong className="text-px-navy">Design rule:</strong>{' '}
                Every AI score must expose: numeric value · label (Strong/Good/Fair/Weak) · matched skills (teal chips) · missing skills (coral chips) · plain-language explanation. No silent black boxes.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
