import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { loadingExit, logoReveal } from '../../lib/animations'
import Logo from './Logo'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'logo' | 'done'>('logo')

  useEffect(() => {
    const t = setTimeout(() => setPhase('done'), 1800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (phase === 'done') {
      const t = setTimeout(onComplete, 700)
      return () => clearTimeout(t)
    }
  }, [phase, onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-px-bg"
          variants={loadingExit}
          initial="visible"
          exit="exit"
        >
          <motion.div variants={logoReveal} initial="hidden" animate="visible">
            <Logo height={48} />
          </motion.div>
          {/* Caption removed per request */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 w-32 h-[2px] rounded-full origin-left"
            style={{ background: 'linear-gradient(90deg, #00B8B3, #009E9A)' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
