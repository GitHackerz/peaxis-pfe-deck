import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Database, Globe, Lock, RefreshCcw, Server } from 'lucide-react'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const containers = [
  { icon: <Server size={19} />, title: 'API', tag: 'nestjs · container', tone: 'navy' },
  { icon: <RefreshCcw size={19} />, title: 'Worker', tag: 'api-worker · container', tone: 'navy' },
  { icon: <BrainCircuit size={19} />, title: 'AI Service', tag: 'fastapi · container', tone: 'coral' },
  { icon: <Database size={19} />, title: 'Data', tag: 'postgres · redis', tone: 'teal' },
] as const

const toneClasses: Record<string, string> = {
  teal: 'bg-[#E6FAF9] border-[rgba(0,184,179,0.3)]',
  navy: 'bg-[#EEF2F7] border-[rgba(0,16,39,0.14)]',
  coral: 'bg-[#FFF0F0] border-[rgba(254,89,90,0.28)]',
}

function Box({ node, visible, dashedInner }: { node: (typeof containers)[number]; visible: boolean; dashedInner?: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative w-[140px]">
          <div className={`w-full rounded-xl border p-3 flex flex-col items-center gap-1.5 ${toneClasses[node.tone]} ${dashedInner ? 'ring-2 ring-dashed ring-[rgba(254,89,90,0.4)] ring-offset-2' : ''}`}>
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[var(--border)]">{node.icon}</div>
            <p className="text-sm font-extrabold text-px-navy">{node.title}</p>
            <p className="text-[10px] font-mono text-px-muted">{node.tag}</p>
          </div>
          {dashedInner && (
            <p className="mt-1 text-center text-[10px] font-bold text-[#D63E3F] flex items-center justify-center gap-1"><Lock size={10} />no DB credentials</p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function PhysicalArch({ step }: Props) {
  return <div className="slide-root">
    <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-0.5">
        <motion.div variants={fadeUp}><SectionTag section="Architecture & Technologies" number="7" /></motion.div>
        <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-px-navy"><GradientText variant="teal">Physical</GradientText> Architecture</motion.h2>
        <motion.p variants={fadeUp} className="text-xs text-px-muted">Docker Compose isolates request handling, async execution, inference, and state behind a private network.</motion.p>
      </motion.div>

      <div className="flex items-center justify-center gap-2">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-1.5 w-[140px]">
              <div className="w-full rounded-xl border border-[rgba(0,16,39,0.14)] bg-white p-3 flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center border border-[var(--border)]"><Globe size={19} /></div>
                <p className="text-sm font-extrabold text-px-navy">Web apps</p>
                <p className="text-[10px] font-mono text-px-muted">next.js · public</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>{step >= 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><ArrowRight size={20} className="text-px-teal" /></motion.div>}</AnimatePresence>

        <div className="relative rounded-xl border-2 border-dashed border-[rgba(0,16,39,0.2)] px-5 py-5 flex items-start gap-3">
          <span className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold uppercase tracking-wide text-px-muted">Docker network · internal only</span>
          <Box node={containers[0]} visible={step >= 2} />
          <AnimatePresence>{step >= 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-4"><ArrowRight size={18} className="text-px-teal" /></motion.div>}</AnimatePresence>
          <Box node={containers[1]} visible={step >= 3} />
          <AnimatePresence>{step >= 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-4"><ArrowRight size={18} className="text-px-teal" /></motion.div>}</AnimatePresence>
          <Box node={containers[2]} visible={step >= 3} dashedInner />
          <AnimatePresence>{step >= 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-4"><ArrowRight size={18} className="text-px-teal" /></motion.div>}</AnimatePresence>
          <Box node={containers[3]} visible={step >= 3} />
        </div>
      </div>

      <AnimatePresence>
        {step >= 3 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-px-muted text-center">
            Only web applications are publicly reachable; API, worker, AI service, and data containers communicate over the internal Docker network.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  </div>
}
