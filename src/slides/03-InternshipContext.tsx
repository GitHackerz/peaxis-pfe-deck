import { AnimatePresence, motion } from 'framer-motion'
import { Brain, Code2, Layers } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const contributions = [
  {
    icon: <Layers size={20} />,
    area: 'Full-Stack Architecture',
    items: ['NestJS API — 14 feature modules', 'Next.js Core + Hire + Jobs + Landing', 'Multi-tenant data model with full isolation'],
    color: '#00B8B3',
  },
  {
    icon: <Brain size={20} />,
    area: 'AI Integration',
    items: ['FastAPI AI microservice', 'CV parsing + match scoring engine', 'Hiring Copilot · JD Generator · Bias Check'],
    color: '#374151',
  },
  {
    icon: <Code2 size={20} />,
    area: 'Platform Engineering',
    items: ['Docker multi-stage deployment', 'pgvector semantic search', 'Stripe billing + Webhook integration'],
    color: '#374151',
  },
]

export default function InternshipContext({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Internship Context" number="2" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Building <GradientText variant="teal">PEAXIS</GradientText> at Production Scale
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-2xl">
            Internship at Prospecter — serving concurrently as <strong className="text-px-navy">Technical Lead &amp; Software Engineer</strong>. PEAXIS is an independent product conceived, architected, and built entirely as the internship project.
          </motion.p>
        </motion.div>

        {/* Context note */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[var(--border)]"
            >
              <p className="text-sm text-px-muted leading-relaxed">
                <strong className="text-px-navy">PEAXIS</strong> is not a Prospecter product. It is a separate AI recruitment SaaS ecosystem independently designed and built during the internship period — combining academic engineering rigour with real production-grade software development practices.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Timeline strip */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[var(--border)] shadow-sm"
            >
              <div className="flex items-center justify-center gap-3 flex-1 overflow-x-auto">
                {[
                  { date: 'Dec 22', label: 'Kickoff · Prospecter', color: '#00B8B3' },
                  { date: 'Jan', label: 'Architecture design', color: '#374151' },
                  { date: 'Feb', label: 'Core API + Auth', color: '#374151' },
                  { date: 'Mar', label: 'AI service + pipeline', color: '#374151' },
                  { date: 'Apr', label: 'Frontends + billing', color: '#374151' },
                  { date: 'May', label: 'Integration + polish', color: '#009E9A' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-1.5 flex-shrink-0">
                    {i > 0 && <div className="w-6 h-[1px] bg-gray-200" />}
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: m.color }} />
                      <span className="text-xs font-bold text-px-navy">{m.date}</span>
                      <span className="text-xs text-px-muted whitespace-nowrap">{m.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contribution areas */}
        <AnimatePresence>
          {step >= 2 && (
            <div className="grid grid-cols-3 gap-4">
              {contributions.map((c, i) => (
                <motion.div
                  key={c.area}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card variant="elevated" className="p-4 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}
                      >
                        {c.icon}
                      </div>
                      <p className="text-base font-bold text-px-navy">{c.area}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {c.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-px-muted">
                          <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: c.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Role badge */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Badge variant="teal">Technical Lead</Badge>
              <Badge variant="navy">Software Engineer</Badge>
              <Badge variant="gray">AI Integration</Badge>
              <Badge variant="outline">Platform Architect</Badge>
              <Badge variant="outline">Solo Contributor</Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
