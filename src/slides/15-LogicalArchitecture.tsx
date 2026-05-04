import { AnimatePresence, motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const footerNotes = [
  'Single Source of Truth — NestJS API owns all persistent state',
  'AI-Native Design — stateless AI layer returns results, never writes directly',
  'Modular SaaS Architecture — each layer has a single, clear responsibility',
]

export default function LogicalArch({ step }: Props) {
  return (
    <div className="slide-root">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,184,179,0.05) 0%, transparent 55%)' }}
      />

      {/* Full-height column — fills the slide's padded area */}
      <div
        className="relative z-10 w-full flex flex-col gap-3 px-4"
        style={{ height: 'calc(100vh - 130px)', maxWidth: '1100px' }}
      >
        {/* Compact header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-shrink-0 flex flex-col gap-0.5">
          <motion.div variants={fadeUp}>
            <SectionTag section="Architecture" number="8" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">Logical</GradientText> Architecture
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xs text-px-muted">
            4-layer design · Client → Application → AI Intelligence → Data
          </motion.p>
        </motion.div>

        {/* Image — flex-1 so it fills all remaining vertical space */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 min-h-0 rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg bg-white"
            >
              <img
                src="/arch-log.png"
                alt="PEAXIS Logical Architecture"
                className="w-full h-full object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer notes */}
        <div className="flex-shrink-0 flex flex-wrap gap-2">
          {footerNotes.map((note, i) => (
            <AnimatePresence key={note}>
              {step >= i + 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--border)] shadow-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-px-teal" />
                  <span className="text-xs text-px-muted font-medium">{note}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, transparent)' }} />
    </div>
  )
}
