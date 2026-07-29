import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Database, Layers3, Server, ShieldCheck } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const nodes = [
  { icon: <Layers3 size={20} />, title: 'Frontend', role: 'Presents workflows', tone: 'teal' },
  { icon: <ShieldCheck size={20} />, title: 'API', role: 'Auth, policy, writes', tone: 'navy' },
  { icon: <Server size={20} />, title: 'Worker', role: 'Consumes AI jobs', tone: 'navy' },
  { icon: <BrainCircuit size={20} />, title: 'AI Service', role: 'Model inference', tone: 'coral' },
  { icon: <Database size={20} />, title: 'Database', role: 'Source of truth', tone: 'teal' },
] as const

const toneClasses: Record<string, string> = {
  teal: 'bg-[#E6FAF9] border-[rgba(0,184,179,0.3)] text-px-teal',
  navy: 'bg-[#EEF2F7] border-[rgba(0,16,39,0.14)] text-px-navy',
  coral: 'bg-[#FFF0F0] border-[rgba(254,89,90,0.28)] text-[#D63E3F]',
}

const links = ['HTTPS · JWT', 'Enqueue job', 'Internal call', 'Persist result']

function Node({ node, visible }: { node: (typeof nodes)[number]; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-1.5 w-[150px]"
        >
          <div className={`w-full rounded-xl border p-3 flex flex-col items-center gap-1.5 ${toneClasses[node.tone]}`}>
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[var(--border)]">{node.icon}</div>
            <p className="text-sm font-extrabold text-px-navy">{node.title}</p>
          </div>
          <p className="text-[11px] text-px-muted text-center leading-snug">{node.role}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Link({ label, visible }: { label: string; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-1 pb-6 flex-shrink-0">
          <ArrowRight size={20} className="text-px-teal" />
          <p className="text-[10px] font-bold text-px-muted uppercase tracking-wide whitespace-nowrap">{label}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function LogicalArch({ step }: Props) {
  return <div className="slide-root">
    <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-4">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-0.5">
        <motion.div variants={fadeUp}><SectionTag section="Architecture & Technologies" number="7" /></motion.div>
        <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-px-navy"><GradientText variant="teal">Logical</GradientText> Architecture</motion.h2>
        <motion.p variants={fadeUp} className="text-xs text-px-muted">Clear ownership: applications present, the API governs, the worker executes, and the AI service infers.</motion.p>
      </motion.div>

      <div className="relative rounded-2xl border border-[var(--border)] bg-white/60 p-6">
        <div className="flex items-start justify-center gap-1">
          <Node node={nodes[0]} visible={step >= 1} />
          <Link label={links[0]} visible={step >= 2} />

          <div className="relative flex items-start gap-1 rounded-xl border-2 border-dashed border-[rgba(0,16,39,0.18)] px-4 py-2">
            <span className="absolute -top-3 left-3 bg-white px-2 text-[10px] font-bold uppercase tracking-wide text-px-muted">Backend · trust boundary</span>
            <Node node={nodes[1]} visible={step >= 2} />
            <Link label={links[1]} visible={step >= 3} />
            <Node node={nodes[2]} visible={step >= 3} />
            <Link label={links[2]} visible={step >= 4} />
            <Node node={nodes[3]} visible={step >= 4} />
          </div>

          <Link label={links[3]} visible={step >= 5} />
          <Node node={nodes[4]} visible={step >= 5} />
        </div>
      </div>

      <AnimatePresence>
        {step >= 5 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-px-muted text-center">
            The API also performs direct authoritative writes for non-AI operations; the database remains the single source of truth.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  </div>
}
