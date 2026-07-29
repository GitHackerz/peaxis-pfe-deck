import { AnimatePresence, motion } from 'framer-motion'
import { Brain, Code2, Layers } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const exposure = [
  {
    icon: <Layers size={20} />,
    area: 'Full-Stack Engineering',
    body: 'Production Next.js and NestJS codebases, with tenant-scoped data models.',
    color: '#00B8B3',
  },
  {
    icon: <Brain size={20} />,
    area: 'AI Integration',
    body: 'LLM pipelines for parsing, classification, and structured generation.',
    color: '#374151',
  },
  {
    icon: <Code2 size={20} />,
    area: 'Platform Engineering',
    body: 'Docker deployments, async queues, and semantic search infrastructure.',
    color: '#374151',
  },
]

export default function InternshipContext({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Internship" number="3" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Internship <GradientText variant="teal">Context</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-2xl">
            This project was carried out during an internship at <strong className="text-px-navy">Prospecter</strong>,
            an AI-powered B2B sales prospecting platform, as a Software Engineer.
          </motion.p>
        </motion.div>

        {/* Engineering exposure areas */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {exposure.map((c, i) => (
                <motion.div
                  key={c.area}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card variant="elevated" className="p-5 h-full flex flex-col gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-base font-bold text-px-navy mb-1">{c.area}</p>
                      <p className="text-sm text-px-muted leading-relaxed">{c.body}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Independence note */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[var(--border)]"
            >
              <p className="text-sm text-px-muted leading-relaxed">
                <strong className="text-px-navy">Scope:</strong> PEAXIS is an independent codebase and product,
                built with academic rigor and the production standards observed during the internship.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Role badges */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Badge variant="teal">Software Engineer</Badge>
              <Badge variant="navy">AI Integration</Badge>
              <Badge variant="outline">Solo Contributor</Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

