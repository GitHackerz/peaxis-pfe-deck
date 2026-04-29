import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, GitBranch, Key, ShieldCheck, Users } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const reqs = [
  {
    icon: <ShieldCheck size={18} />,
    id: 'FR-01',
    title: 'Authentication & Security',
    items: ['Email/password with Argon2 hashing', 'OAuth2: Google + LinkedIn', 'JWT access (15m) + refresh (7d)', 'Rate limiting: 1000 req/60s'],
    color: '#00B8B3',
  },
  {
    icon: <Users size={18} />,
    id: 'FR-02',
    title: 'Multi-Tenant Architecture',
    items: ['Business-scoped data isolation', 'X-Business-ID header enforcement', 'User ↔ Business join table', 'Unique business slug routing'],
    color: '#00B8B3',
  },
  {
    icon: <Key size={18} />,
    id: 'FR-03',
    title: 'Roles & Permissions',
    items: ['Plan-based feature gating', 'Free / Starter / Pro / Enterprise tiers', 'JwtAuthGuard + PlanGuard', 'Business member roles'],
    color: '#00B8B3',
  },
  {
    icon: <Briefcase size={18} />,
    id: 'FR-04',
    title: 'Job Management',
    items: ['Full CRUD with rich filters', 'Semantic search via pgvector', 'Auto embedding generation', 'Type, location, salary, skills filters'],
    color: '#00B8B3',
  },
  {
    icon: <GitBranch size={18} />,
    id: 'FR-05',
    title: 'Application Pipeline',
    items: ['6-stage: Applied→Screening→Interview→Offer→Hired/Rejected', 'Stage transition history', 'AI scoring at application time', 'Recruiter kanban view'],
    color: '#00B8B3',
  },
]

export default function FuncReqCore({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Functional Requirements" number="4" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            Core platform <GradientText variant="teal">requirements</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-xl">
            FR-01 through FR-05 cover the foundational platform capabilities required for a production-grade SaaS recruitment system.
          </motion.p>
        </motion.div>

        {/* Requirements grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {reqs.map((r, i) => (
            <AnimatePresence key={r.id}>
              {step >= Math.floor(i / 2) + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                  className={i === 4 ? 'col-span-2 md:col-span-1' : ''}
                >
                  <Card variant="elevated" className="p-4 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${r.color}15`, color: r.color, border: `1px solid ${r.color}25` }}
                      >
                        {r.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-px-muted">{r.id}</span>
                        <p className="text-xs font-bold text-px-navy leading-tight">{r.title}</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {r.items.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-[11px] text-px-muted">
                          <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: r.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  )
}
