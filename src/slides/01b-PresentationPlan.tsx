import { motion } from 'framer-motion'
import Card from '../components/ui/Card'
import GradientText from '../components/ui/GradientText'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props {
  step: number
}

const planSections = [
  { num: '01', title: 'Introduction & Context', detail: 'Internship context at Prospecter, role background, and PFE goals.' },
  { num: '02', title: 'Problem Analysis', detail: 'Recruitment bottlenecks, legacy ATS constraints, and market comparisons.' },
  { num: '03', title: 'Methodology & Requirements', detail: 'Software engineering lifecycle, functional goals, and SLA constraints.' },
  { num: '04', title: 'Proposed Solution', detail: 'PEAXIS ecosystem overview: Core governance, Hire ATS, and Jobs portal.' },
  { num: '05', title: 'Architecture & Technologies', detail: 'Logical layers, physical containerisation, and multi-tenant data model.' },
  { num: '06', title: 'Results & Future Work', detail: 'Implementation achievements, roadmap milestones, and defense wrap-up.' },
]

export default function PresentationPlan({ step: _step }: Props) {
  return (
    <div className="slide-root">
      {/* Visual background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(0,184,179,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-6">
        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1">
          <motion.div variants={fadeUp}>
            <SectionTag section="Introduction & Context" number="1" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight text-px-navy">
            Presentation <GradientText variant="teal">Plan</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-xl">
            A comprehensive roadmap of the engineering defense.
          </motion.p>
        </motion.div>

        {/* 2x3 Grid layout */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {planSections.map((sec) => (
            <motion.div key={sec.num} variants={fadeUp}>
              <Card variant="elevated" className="p-5 h-full flex flex-col gap-3 border-l-4 border-[#00B8B3]">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black tabular-nums px-2.5 py-1 rounded-full bg-[#E6FAF9] text-[#00B8B3]">
                    {sec.num}
                  </span>
                  <h3 className="text-base font-extrabold tracking-tight text-px-navy">
                    {sec.title}
                  </h3>
                </div>
                <p className="text-xs text-px-muted leading-relaxed">
                  {sec.detail}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom geometric decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #00B8B3, transparent)' }} />
    </div>
  )
}
