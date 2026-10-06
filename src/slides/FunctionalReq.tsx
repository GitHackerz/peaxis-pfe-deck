import { Check } from 'lucide-react'
import FocusNote from '../components/slide/FocusNote'
import Slide from '../components/slide/Slide'
import { IS_EXPORT } from '../lib/mode'
import type { SlideProps } from './registry'

const cols = [
  { who: 'Candidate', items: ['Discover jobs', 'Build a profile from a CV', 'Apply in a few clicks', 'Follow every application'], note: 'Candidates find roles, build a profile from their CV, apply and follow the status of each application.' },
  { who: 'Recruiter', items: ['Create and publish jobs', 'Manage candidates', 'Run the hiring pipeline', 'Review evidence', 'Schedule interviews', 'Use AI assistance'], note: 'Recruiters publish jobs, run the pipeline, review evidence, schedule interviews and get AI help they can review.' },
  { who: 'Platform', items: ['Multi-tenant organizations', 'Roles and access', 'Billing and entitlements', 'Protected files', 'Notifications'], note: 'Each company is an isolated organization, with roles, plans and entitlements, private files and notifications.' },
]

export default function FunctionalReq({ step }: SlideProps) {
  return (
    <Slide section="Requirements" title={<>Functional <span className="gradient-text-teal">requirements</span></>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="grid grid-cols-3 gap-10">
          {cols.map(({ who, items }, i) => {
            const dim = !IS_EXPORT && step > 0 && step !== i + 1
            return (
              <div key={who} className={`flex flex-col gap-3 border-t-[3px] pt-4 transition-all duration-300 ${step === i + 1 ? 'border-px-teal' : 'border-px-teal/60'} ${dim ? 'opacity-30' : ''}`}>
                <p className="text-[30px] font-extrabold text-px-navy">{who}</p>
                <ul className="flex flex-col gap-2.5">
                  {items.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[21px] leading-snug text-px-navy"><Check size={22} className="mt-0.5 shrink-0 text-px-teal" strokeWidth={3} /> {t}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="h-[84px]">{step > 0 && <FocusNote id={step} title={cols[step - 1].who} text={cols[step - 1].note} />}</div>
      </div>
    </Slide>
  )
}
