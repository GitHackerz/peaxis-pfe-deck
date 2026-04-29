import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Layers, Target, Users } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeRight, fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  {
    icon: <Layers size={18} />,
    title: 'PEAXIS Core',
    body: 'NestJS REST API — central data authority, auth, billing, multi-tenant isolation',
    color: '#00B8B3',
    bg: '#E6FAF9',
  },
  {
    icon: <Building2 size={18} />,
    title: 'PEAXIS Hire',
    body: 'Next.js recruiter dashboard — pipeline Kanban, AI insights, analytics',
    color: '#0087F8',
    bg: '#EFF6FF',
  },
  {
    icon: <Users size={18} />,
    title: 'PEAXIS Jobs',
    body: 'Next.js candidate portal — job discovery, CV upload, application tracking',
    color: '#6D28D9',
    bg: '#F5F3FF',
  },
  {
    icon: <Target size={18} />,
    title: 'AI Brain',
    body: 'FastAPI service — CV parsing, match scoring, hiring copilot, JD generation',
    color: '#FE595A',
    bg: '#FFF0F0',
  },
]

export default function CompanyOverview({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Company Presentation" number="2" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight tracking-tight text-px-navy">
            What is <GradientText variant="teal">PEAXIS</GradientText>?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            A modular SaaS recruitment platform that combines AI-powered hiring intelligence with a best-in-class candidate experience — built from scratch during this PFE.
          </motion.p>
        </motion.div>

        {/* Mission strip */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#E6FAF9] to-[#F8FAFC] border border-[rgba(0,184,179,0.15)]"
            >
              <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(180deg, #00B8B3, #44C4F6)' }} />
              <div>
                <p className="text-xs font-bold text-px-teal uppercase tracking-widest mb-0.5">Mission</p>
                <p className="text-sm font-semibold text-px-navy">
                  Eliminate hiring friction for growing companies by making every recruitment decision faster, smarter, and explainable.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Four pillars */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                >
                  <Card variant="elevated" className="p-4 h-full flex flex-col gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: p.bg, color: p.color, border: `1px solid ${p.color}30` }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-px-navy mb-1">{p.title}</p>
                      <p className="text-xs text-px-muted leading-relaxed">{p.body}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sector tag */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 flex-wrap"
            >
              {['HR Tech', 'SaaS B2B', 'AI/ML', 'Recruitment Automation'].map((tag) => (
                <Badge key={tag} variant="teal" size="sm">{tag}</Badge>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
