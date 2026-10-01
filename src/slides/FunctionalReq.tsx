import { Check } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const cols = [
  { who: 'Candidate', items: ['Discover jobs', 'Build a profile from a CV', 'Apply in a few clicks', 'Follow every application'] },
  { who: 'Recruiter', items: ['Create and publish jobs', 'Manage candidates', 'Run the hiring pipeline', 'Review evidence', 'Schedule interviews', 'Use AI assistance'] },
  { who: 'Platform', items: ['Multi-tenant organizations', 'Roles and access', 'Billing and entitlements', 'Protected files', 'Notifications'] },
]

export default function FunctionalReq({ step }: SlideProps) {
  return (
    <Slide section="Method & requirements" title={<>What each user <span className="gradient-text-teal">needs to do</span></>}>
      <div className="grid h-full grid-cols-3 gap-10 pb-2">
        {cols.map(({ who, items }, i) => (
          <Reveal key={who} show={step >= i} className="flex flex-col gap-4 border-t-[3px] border-px-teal pt-4">
            <p className="text-[30px] font-extrabold text-px-navy">{who}</p>
            <ul className="flex flex-col gap-3">
              {items.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[23px] leading-snug text-px-navy">
                  <Check size={22} className="mt-0.5 shrink-0 text-px-teal" strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}
