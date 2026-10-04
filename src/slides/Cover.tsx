import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import HireBoard from '../components/product/HireBoard'
import { Chip, ScoreRing } from '../components/product/ui'
import Badge from '../components/ui/Badge'
import { EASE, fadeUp, stagger } from '../lib/animations'

const float = (d: number) => ({ animate: { y: [0, -9, 0] }, transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: d } })

export default function Cover() {
  return (
    <div className="slide-root">
      <div className="pointer-events-none absolute right-0 top-10 h-[760px] w-[560px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,184,179,0.16) 0%, transparent 65%)' }} />
      <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 flex h-full w-[560px] flex-col justify-center gap-4 pl-[80px] pt-6">
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <Badge variant="teal" size="md">ESPRIT · 2026</Badge>
          <Badge variant="gray" size="md">Final Year Project</Badge>
        </motion.div>
        <motion.img variants={fadeUp} src="/peaxis-logo.png" alt="PEAXIS" style={{ height: 72, width: 'auto', alignSelf: 'flex-start' }} />
        <motion.h1 variants={fadeUp} className="max-w-[420px] text-[42px] font-extrabold leading-[1.08] tracking-tight text-px-navy">AI-Powered Recruitment Platform</motion.h1>
        <motion.p variants={fadeUp} className="text-[21px] leading-snug text-px-muted">From job discovery to evidence-based hiring decisions.</motion.p>
        <motion.div variants={fadeUp} className="my-1 h-[3px] w-16 rounded-full bg-px-teal" />
        <motion.div variants={fadeUp}>
          <p className="text-[21px] font-bold text-px-navy">BIBANI Mohamed Habib Allah</p>
          <p className="text-[14px] text-px-muted">École Supérieure Privée d'Ingénierie et de Technologie — ESPRIT</p>
        </motion.div>
        <motion.div variants={fadeUp} className="flex gap-8 text-[15px]">
          <div><p className="text-[11px] font-bold uppercase tracking-widest text-[#029090]">Academic supervisor</p><p className="font-semibold">Mme Olfa Mannai</p></div>
          <div><p className="text-[11px] font-bold uppercase tracking-widest text-px-muted">Company supervisor</p><p className="font-semibold">Mr. Fedi Naimi</p></div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        className="absolute right-[24px] top-[160px] h-[400px] w-[600px]"
      >
        {/* Clip wrapper: the unscaled 1000px board box must not widen the layout (it shrank the exported PDF). */}
        <div className="absolute inset-0 overflow-hidden" style={{ perspective: 1400 }}>
          <div className="absolute left-0 top-6" style={{ width: 1000, height: 560, zoom: 0.58, transform: 'rotateY(-9deg) rotateX(3deg)' }}>
            <HireBoard step={2} className="h-full w-full" />
          </div>
        </div>
        <motion.div {...float(0)} className="absolute -left-10 bottom-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[0_18px_40px_-12px_rgba(0,16,39,0.35)] ring-1 ring-black/5">
          <ScoreRing value={85} size={64} stroke={7} />
          <div className="font-app"><p className="text-[15px] font-bold">Why 85%?</p><p className="text-[12px] text-a-mfg">traced to CV evidence</p></div>
        </motion.div>
        <motion.div {...float(1.2)} className="font-app absolute -top-2 right-2 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-[0_18px_40px_-12px_rgba(0,16,39,0.35)] ring-1 ring-black/5">
          <Check size={18} className="text-a-ok" strokeWidth={3} /><span className="text-[15px] font-semibold">NestJS</span><Chip tone="ok">Satisfied</Chip>
        </motion.div>
      </motion.div>
    </div>
  )
}
