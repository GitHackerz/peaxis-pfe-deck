import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import { cinemaEntrance, fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

export default function Cover({ step: _step }: Props) {
  return (
    <div className="slide-root">
      {/* Teal accent orb behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0,184,179,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center gap-5 max-w-4xl w-full"
      >
        {/* Top badges row */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap justify-center">
          <Badge variant="teal" size="md">Final Year Project — PFE</Badge>
          <Badge variant="gray" size="md">ESPRIT · 2026</Badge>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={cinemaEntrance}
          className="text-6xl font-extrabold leading-[1.06] tracking-tight"
        >
          <GradientText variant="teal">PEAXIS</GradientText>
          <br />
          <span className="text-px-navy">An AI-Powered Hiring</span>
          <br />
          <span className="text-px-navy">Operating System</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="w-16 h-[3px] rounded-full"
          style={{ background: 'linear-gradient(90deg, #00B8B3, #44C4F6)' }}
        />

        {/* Student info */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-1">
          <p className="text-lg font-bold text-px-navy">BIBANI Mohamed Habib Allah</p>
          <p className="text-sm text-px-muted">
            École Supérieure Privée d'Ingénierie et de Technologie — ESPRIT
          </p>
        </motion.div>

        {/* Role tag */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--border)] shadow-sm"
        >
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#00B8B3' }}
          />
          <span className="text-sm font-medium text-px-navy">Full-Stack Engineer · AI Integration · Platform Architect</span>
        </motion.div>

        {/* Bottom row: tech tags */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mt-1">
          {['Next.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Gemini', 'Docker'].map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-px-muted px-2.5 py-1 rounded-full bg-white border border-[var(--border)]"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom geometric decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, #44C4F6, transparent)' }} />
    </div>
  )
}
