import { AnimatePresence, motion } from 'framer-motion'
import { BarChart2, Bot, Building2, Target, Zap } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeRight, fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  {
    icon: <Bot size={18} />,
    title: 'AI SDR Engine',
    body: 'Autonomous AI sales development rep — qualifies leads, drafts outreach, and orchestrates follow-up sequences at scale.',
    color: '#00B8B3',
    bg: '#E6FAF9',
  },
  {
    icon: <Target size={18} />,
    title: 'Lead Intelligence',
    body: 'Enriches prospect data with firmographics, intent signals, and behavioural triggers to prioritise highest-value targets.',
    color: '#374151',
    bg: '#F3F4F6',
  },
  {
    icon: <Zap size={18} />,
    title: 'Outbound Automation',
    body: 'Multi-channel sequences (email, LinkedIn) with LLM personalisation — zero manual copy-paste prospecting.',
    color: '#374151',
    bg: '#F3F4F6',
  },
  {
    icon: <BarChart2 size={18} />,
    title: 'Pipeline Analytics',
    body: 'Real-time conversion tracking, A/B testing for messaging, and CRM-sync to close the loop from prospect to revenue.',
    color: '#374151',
    bg: '#F3F4F6',
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
            <GradientText variant="teal">Prospecter</GradientText> — Internship Host Company
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            An AI-powered B2B sales prospecting platform — automating outbound pipeline generation for growth-stage companies through autonomous AI SDR technology.
          </motion.p>
        </motion.div>

        {/* Mission strip */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-[#E6FAF9] to-[#F8FAFC] border border-[rgba(0,184,179,0.15)]"
            >
              <div className="w-1 h-14 rounded-full flex-shrink-0 mt-0.5" style={{ background: '#00B8B3' }} />
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xs font-bold text-px-teal uppercase tracking-widest mb-0.5">Mission</p>
                  <p className="text-sm font-semibold text-px-navy">
                    Replace manual sales prospecting with a fully autonomous AI SDR — enabling B2B companies to scale outbound revenue generation without scaling headcount.
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {['AI / LLM', 'B2B SaaS', 'Sales Automation', 'Outbound GTM'].map((tag) => (
                    <Badge key={tag} variant="teal" size="sm">{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Four product pillars */}
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

        {/* Strategic bridge */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-3 p-4 rounded-xl border"
              style={{ background: '#F3F4F6', borderColor: 'rgba(0,0,0,0.07)' }}
            >
              <Building2 size={16} className="flex-shrink-0 mt-0.5 text-px-muted" />
              <p className="text-xs text-px-muted leading-relaxed">
                <span className="font-bold text-px-navy">Strategic context — </span>
                Although Prospecter specialises in AI-powered sales prospecting, its product and engineering environment — LLM pipelines, multi-tenant SaaS, background workers, Redis caching — provided the architectural foundation for developing PEAXIS as a next-generation HR technology platform during this internship.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
