import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const capabilities = [
  {
    name: 'Match Scoring',
    desc: 'Deterministic skill-overlap → 0–100 with matched/missing skills + plain-language explanation',
    color: '#00B8B3', bg: '#E6FAF9',
  },
  {
    name: 'CV Parsing',
    desc: 'Gemini 2.5-flash → structured JSON profile from PDF/DOCX in under 3 seconds',
    color: '#374151', bg: '#F3F4F6',
  },
  {
    name: 'Hiring Copilot',
    desc: 'Candidate summary · interview questions · risk flags · next action — all in-context',
    color: '#374151', bg: '#F9FAFB',
  },
  {
    name: 'JD Generator',
    desc: 'Bias-checked job description from title + bullets, with skill requirement suggestions',
    color: '#374151', bg: '#F9FAFB',
  },
]

const matchedSkills = ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
const missingSkills = ['GraphQL', 'Docker']

export default function DemoAI({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-3">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Product Demo" number="11" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Demo: <GradientText variant="teal">AI Intelligence Layer</GradientText>
          </motion.h2>
        </motion.div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-[1fr_320px] gap-5 items-stretch">

          {/* LEFT — 2×2 capability matrix */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-2 gap-3"
              >
                {capabilities.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="p-4 rounded-2xl border flex flex-col gap-2"
                    style={{ background: c.bg, borderColor: `${c.color}25` }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: c.color }}
                      />
                      <span className="text-xs font-extrabold text-px-navy">{c.name}</span>
                    </div>
                    <p className="text-xs text-px-muted leading-relaxed">{c.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* RIGHT — unified AI decision hero card */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-2xl border overflow-hidden flex flex-col"
                style={{ borderColor: 'rgba(0,184,179,0.25)', background: 'rgba(0,184,179,0.03)' }}
              >
                {/* Card header */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[rgba(0,184,179,0.12)] bg-white/70">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,184,179,0.15)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1l1.3 2.6L10 4.3l-2 1.9.5 2.8L6 7.6 3.5 9l.5-2.8L2 4.3l2.7-.7L6 1z" fill="#00B8B3" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-px-navy">AI Decision Engine</span>
                </div>

                <div className="flex flex-col gap-3 p-4 flex-1">
                  {/* Input row */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-px-muted">Input</span>
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E6FAF9] text-[#009E9A] border border-[rgba(0,184,179,0.25)]">
                        CV (PDF)
                      </span>
                      <span className="text-xs text-px-muted flex items-center">+</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]">
                        Job Description
                      </span>
                    </div>
                  </div>

                  {/* Engine row */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-px-muted">Engine</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Parse CV', 'Embed Skills', 'pgvector Match', 'Score + Explain'].map((e, i) => (
                        <span key={e}
                          className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E6FAF9] text-[#009E9A] border border-[rgba(0,184,179,0.2)]"
                        >
                          {i > 0 && <svg width="6" height="6" viewBox="0 0 6 6" fill="none"><path d="M1 3h4M3 1l2 2-2 2" stroke="#009E9A" strokeWidth="1" strokeLinecap="round" /></svg>}
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Output — score */}
                  <div className="flex flex-col gap-2 p-3 rounded-xl bg-white border border-[rgba(0,184,179,0.2)]">
                    <span className="text-xs font-bold uppercase tracking-widest text-px-muted">Output</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-px-navy">82</span>
                      <span className="text-sm text-px-muted">/100</span>
                      <span className="ml-auto text-xs font-bold bg-[#E6FAF9] text-[#009E9A] px-2 py-0.5 rounded-full border border-[rgba(0,184,179,0.2)]">
                        Strong Match
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full">
                      <div className="h-full rounded-full" style={{ width: '82%', background: '#00B8B3' }} />
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {matchedSkills.map(s => (
                        <span key={s} className="text-xs font-semibold px-1.5 py-0.5 rounded bg-[#E6FAF9] text-[#009E9A]">{s} ✓</span>
                      ))}
                      {missingSkills.map(s => (
                        <span key={s} className="text-xs font-semibold px-1.5 py-0.5 rounded bg-[#FFF0F0] text-[#E03E3F]">{s} ✗</span>
                      ))}
                    </div>
                    <p className="text-xs text-px-muted italic leading-snug mt-1">
                      "Strong React + TS background. GraphQL gap is trainable given existing Node.js depth."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom — single design principle */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1 h-5 rounded-full bg-[#00B8B3] flex-shrink-0" />
              <p className="text-xs text-px-muted">
                <strong className="text-px-navy">Design rule:</strong>{' '}
                Every AI score exposes — numeric value · confidence label · matched skills (teal) · missing skills (coral) · plain-language explanation. No silent black boxes.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
