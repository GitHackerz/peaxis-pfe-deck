import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Rocket, ShieldCheck, Smartphone } from 'lucide-react'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

const futureItems = [
  {
    icon: <Globe size={20} />,
    title: 'Video Interview Integration',
    desc: 'Embedded video screening with AI transcription, question generation, and candidate scoring.',
    color: '#00B8B3',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'GDPR Compliance Toolkit',
    desc: 'Candidate data deletion workflows, consent management, export requests, and audit logs.',
    color: '#374151',
  },
  {
    icon: <Rocket size={20} />,
    title: 'Candidate Referral Engine',
    desc: 'Referral tracking, incentive management, and social sharing — turning every hire into a sourcing channel.',
    horizon: 'v2.1',
    color: '#374151',
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Mobile-first Candidate App',
    desc: 'React Native app for on-the-go job search, CV scan, and application tracking.',
    color: '#374151',
  },
]

const openItems = [
  'Email notification system (in progress)',
  'Elasticsearch full-text search (optional, configured)',
  'Advanced team collaboration (comments, @mentions on applications)',
  'API rate limiting per plan tier',
  'End-to-end test suite (Playwright)',
]

export default function FutureScope({ step }: Props) {
  return (
    <div className="slide-root">
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-5">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-2">
          <motion.div variants={fadeUp}>
            <SectionTag section="Conclusion" number="12" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Future <GradientText variant="teal">scope & roadmap</GradientText>
          </motion.h2>
        </motion.div>

        {/* Future features */}
        <AnimatePresence>
          {step >= 1 && (
            <div className="grid grid-cols-4 gap-3">
              {futureItems.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card variant="elevated" className="p-4 h-full flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${f.color}15`, color: f.color }}
                      >
                        {f.icon}
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${f.color}15`, color: f.color }}
                      >
                        {f.horizon}
                      </span>
                    </div>
                    <div>
                      <p className="text-base font-bold text-px-navy mb-1">{f.title}</p>
                      <p className="text-sm text-px-muted leading-relaxed">{f.desc}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Open items */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs font-bold text-px-muted uppercase tracking-wider mb-2">Open items & near-term</p>
              <div className="flex flex-wrap gap-2">
                {openItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--border)] text-sm text-px-muted"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Platform vision */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.2)]"
            >
              <div className="w-1 h-8 rounded-full flex-shrink-0 bg-[#00B8B3]" />
              <p className="text-sm text-px-muted">{' '}
                PEAXIS becomes the OS layer for every hiring team — from sourcing to onboarding. The AI brain gets smarter with every hire, the candidate experience becomes the competitive advantage, and the data moat makes PEAXIS the default choice for growing companies.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
