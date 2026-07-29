import { AnimatePresence, motion } from 'framer-motion'
import { CreditCard, ShieldCheck, Users } from 'lucide-react'
import Badge from '../components/ui/Badge'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const pillars = [
  { icon: <ShieldCheck size={20} />, title: 'Identity & Access', desc: 'Authentication, tenant isolation, and role-based permissions.' },
  { icon: <CreditCard size={20} />, title: 'Billing & Plans', desc: 'Subscription management through Stripe.' },
  { icon: <Users size={20} />, title: 'Team & Governance', desc: 'Seats, settings, and account-level policy.' },
]

export default function PeaxisCore({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Proposed Solution" number="6" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            <GradientText variant="teal">PEAXIS Core</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-px-muted max-w-2xl">
            The shared business foundation every module relies on.
          </motion.p>
        </motion.div>

        {/* Responsibility pillars */}
        <AnimatePresence>
          {step >= 1 && (
            <div className="grid grid-cols-3 gap-4">
              {pillars.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="flex flex-col gap-3 p-5 rounded-xl bg-white border border-[var(--border)]"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E6FAF9] flex items-center justify-center text-px-teal flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-px-navy">{f.title}</p>
                    <p className="text-sm text-px-muted leading-snug mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Business value */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1 h-6 rounded-full bg-px-teal flex-shrink-0" />
              <p className="text-sm text-px-navy">
                One control center for tenancy, access, and billing across every module.
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
