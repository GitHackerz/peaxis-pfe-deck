import { AnimatePresence, motion } from 'framer-motion'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

export default function PhysicalArch({ step }: Props) {
  return <div className="slide-root">
    <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-3">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-0.5">
        <motion.div variants={fadeUp}><SectionTag section="Architecture & Technologies" number="7" /></motion.div>
        <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-px-navy"><span className="text-px-teal">Physical</span> Architecture</motion.h2>
        <motion.p variants={fadeUp} className="text-xs text-px-muted">Deployment topology for web apps, platform services, AI inference, and storage. Gemini or Azure OpenAI is configured at startup.</motion.p>
      </motion.div>

      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-1 items-center justify-center min-h-0"
          >
            <img
              src="/arch-phys.png"
              alt="Physical architecture showing users, frontend applications, platform services, AI services, and data storage"
              className="w-full max-w-[910px] max-h-[470px] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
}
