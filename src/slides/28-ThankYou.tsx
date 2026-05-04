import { motion } from 'framer-motion'
import GradientText from '../components/ui/GradientText'
import { cinemaEntrance, fadeUp } from '../lib/animations'

export default function ThankYou() {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-6">
        <motion.h1
          variants={cinemaEntrance}
          initial="hidden"
          animate="visible"
          className="text-6xl font-extrabold leading-[1.02] tracking-tight text-px-navy"
        >
          Thank you
          <br />
          <GradientText variant="teal">For your time</GradientText>
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-base text-px-muted max-w-2xl">
          Contact: BIBANI Mohamed Habib Allah — contact@peaxis.com · Questions welcome after the session.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-4">
          <div className="text-xs text-px-muted">PEAXIS — Final Year Project · ESPRIT · 2026</div>
        </motion.div>
      </div>
    </div>
  )
}
