import { AnimatePresence, motion } from 'framer-motion'
import { Brain, Calendar, Code2, Layers } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const contributions = [
  {
    icon: <Layers size={18} />,
    area: 'Full-Stack Architecture',
    items: ['NestJS API (14 modules)', 'Next.js Hire + Jobs portals', 'Multi-tenant data model', 'BullMQ background pipeline'],
    color: '#00B8B3',
  },
  {
    icon: <Brain size={18} />,
    area: 'AI Integration',
    items: ['FastAPI AI microservice', 'CV parsing (Gemini)', 'Match scoring engine', 'Hiring Copilot', 'JD Generator'],
    color: '#0087F8',
  },
  {
    icon: <Code2 size={18} />,
    area: 'Platform Engineering',
    items: ['Docker dev + prod setup', 'Prisma schema + migrations', 'pgvector semantic search', 'Stripe billing integration'],
    color: '#6D28D9',
  },
]

export default function InternshipContext({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Internship Context" number="2" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Building PEAXIS from <GradientText variant="teal">day zero</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            A 6-month final year internship starting December 22 — sole engineer responsible for design, architecture, and full implementation.
          </motion.p>
        </motion.div>

        {/* Timeline strip */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 p-4 rounded-xl bg-white border border-[var(--border)] shadow-sm"
            >
              <Calendar size={16} className="text-px-teal flex-shrink-0" />
              <div className="flex items-center gap-3 flex-1 overflow-x-auto">
                {[
                  { date: 'Dec 22', label: 'Kickoff', color: '#00B8B3' },
                  { date: 'Jan', label: 'Architecture design', color: '#0087F8' },
                  { date: 'Feb', label: 'Core API + Auth', color: '#6D28D9' },
                  { date: 'Mar', label: 'AI service + pipeline', color: '#FEC849' },
                  { date: 'Apr', label: 'Frontends + billing', color: '#FE595A' },
                  { date: 'May', label: 'Polish + defense prep', color: '#34D399' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-1.5 flex-shrink-0">
                    {i > 0 && <div className="w-6 h-[1px] bg-gray-200" />}
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: m.color }} />
                      <span className="text-[9px] font-bold text-px-navy">{m.date}</span>
                      <span className="text-[9px] text-px-muted whitespace-nowrap">{m.label}</span>
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
                      <p className="text-sm font-bold text-px-navy">{c.area}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {c.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-px-muted">
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
              <Badge variant="teal">Full-Stack Engineer</Badge>
              <Badge variant="navy">AI Integration</Badge>
              <Badge variant="gray">Platform Architect</Badge>
              <Badge variant="outline">Solo Contributor</Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
