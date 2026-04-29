import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import { cinemaEntrance, fadeUp } from '../lib/animations'

interface Props { step: number }

const summary = [
  { label: 'Problem solved', value: 'AI-powered hiring with full explainability + end-to-end platform — addressing SME recruitment inefficiencies in Tunisia & globally' },
  { label: 'Tech stack', value: 'Next.js · NestJS · FastAPI · PostgreSQL + pgvector · Redis · BullMQ · Gemini · Stripe' },
  { label: 'Architecture', value: '4 microservices · Multi-tenant SaaS · Queue-based AI pipeline · Cache-first strategy' },
  { label: 'Delivered', value: '14 API modules · 60+ endpoints · 6 AI features · 4 Docker services · Production-ready' },
  { label: 'Internship context', value: 'Developed independently during 6-month internship at Prospecter · SaaS & AI architecture principles transferred from sales to HR tech domain' },
]

export default function Conclusion({ step: _step }: Props) {
  return (
    <div className="slide-root">
      {/* Subtle teal wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(0,184,179,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-7">
        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
          <Badge variant="teal" size="lg">PFE Defense · ESPRIT · 2026</Badge>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={cinemaEntrance}
          initial="hidden"
          animate="visible"
          className="text-5xl font-extrabold leading-[1.1] tracking-tight text-px-navy"
        >
          Thank you
          <br />
          <GradientText variant="teal">Questions welcome</GradientText>
        </motion.h1>

        {/* Summary table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-white rounded-2xl border border-[var(--border)] shadow-sm overflow-hidden text-left"
        >
          {summary.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-[160px_1fr] border-b border-[var(--border)] last:border-b-0 hover:bg-[#F8FAFC] transition-colors"
            >
              <div className="px-4 py-3 text-xs font-bold text-px-teal uppercase tracking-wider border-r border-[var(--border)]">
                {s.label}
              </div>
              <div className="px-4 py-3 text-xs text-px-muted">
                {s.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-1"
        >
          <p className="text-base font-bold text-px-navy">BIBANI Mohamed Habib Allah</p>
          <p className="text-sm text-px-muted">École Supérieure Privée d'Ingénierie et de Technologie — ESPRIT</p>
          <p className="text-xs text-px-teal font-medium mt-1">Internship at Prospecter · AI Sales SaaS → AI Hiring Platform</p>
        </motion.div>

        {/* Bottom teal bar */}
        <div className="w-16 h-[3px] rounded-full bg-[#00B8B3]" />
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, transparent)' }} />
    </div>
  )
}
