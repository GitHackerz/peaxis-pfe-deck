import { AnimatePresence, motion } from 'framer-motion'
import { CreditCard, KeyRound, Settings, Shield, Users } from 'lucide-react'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const features = [
  { icon: <KeyRound size={18} />, title: 'Authentication & Security', desc: 'JWT RS256 with Google/LinkedIn OAuth for secure access' },
  { icon: <Shield size={18} />, title: 'Multi-Tenant Isolation', desc: 'Complete data isolation per organization via businessId scoping' },
  { icon: <Users size={18} />, title: 'Role-Based Access', desc: 'Owner, Admin, Recruiter, Viewer roles with fine-grained permissions' },
  { icon: <CreditCard size={18} />, title: 'Billing & Subscriptions', desc: 'Stripe integration with automatic subscription and webhook automation' },
  { icon: <Settings size={18} />, title: 'Team Management', desc: 'Invite team members, manage seats, org settings, and preferences' },
  { icon: <Users size={18} />, title: 'Account Governance', desc: 'Centralized user management, activity logs, and security policies' },
]

export default function PeaxisCore({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Solution" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS Core</GradientText> — Business Operations
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            Central business infrastructure and governance platform. Authentication, multi-tenant management, billing, and team operations — one unified control center.
          </motion.p>
        </motion.div>

        {/* Feature grid: 6 cards */}
        <AnimatePresence>
          {step >= 1 && (
            <div className="grid grid-cols-6 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  className="flex flex-col gap-2.5 p-4 rounded-xl bg-white border border-[var(--border)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-px-navy">{f.title}</p>
                    <p className="text-xs text-px-muted leading-snug">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Strategic value */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1 h-6 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-xs text-px-navy">
                <strong>Strategic Value:</strong> PEAXIS Core transforms fragmented administrative operations into one unified business control center for teams of any size.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech badges */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Badge variant="teal">JWT RS256</Badge>
              <Badge variant="navy">Multi-Tenant</Badge>
              <Badge variant="teal">Stripe Billing</Badge>
              <Badge variant="outline">Role-Based Access</Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
