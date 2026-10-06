import { Eye, Gauge, Lock, Maximize2, RefreshCw, Wrench } from 'lucide-react'
import FocusNote from '../components/slide/FocusNote'
import Slide from '../components/slide/Slide'
import { IS_EXPORT } from '../lib/mode'
import type { SlideProps } from './registry'

const items = [
  { icon: Lock, n: 'Security', req: 'Data isolated per organization', note: 'Every request is checked against the user\'s organization membership. Admins need MFA, and files are private and malware-scanned.' },
  { icon: RefreshCw, n: 'Reliability', req: 'No loss of business data', note: 'Business changes and their events are saved together, so an AI or Redis outage never loses an application. Backups are in place.' },
  { icon: Gauge, n: 'Performance', req: 'Responsive screens', note: 'CV parsing and assessment run in a background worker, so pages stay fast while AI works.' },
  { icon: Maximize2, n: 'Scalability', req: 'Grow with usage', note: 'Web, API, worker and AI are separate services, so each can grow independently.' },
  { icon: Eye, n: 'Explainability', req: 'Results can be justified', note: 'Each requirement result links to a quote in the CV, and scores come from deterministic, versioned rules.' },
  { icon: Wrench, n: 'Maintainability', req: 'Easy to evolve safely', note: 'Typed code, automated tests and CI, and documented architecture decisions.' },
]

export default function NonFunctional({ step }: SlideProps) {
  return (
    <Slide section="Requirements" title={<>Non-functional <span className="gradient-text-teal">requirements</span></>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          {items.map(({ icon: Icon, n, req }, i) => {
            const active = step === i + 1
            const dim = !IS_EXPORT && step > 0 && !active
            return (
              <div key={n} className={`flex flex-col gap-1 border-t-[3px] px-1 pb-5 pt-4 transition-all duration-300 ${active ? 'border-px-teal' : 'border-black/15'} ${dim ? 'opacity-30' : ''}`}>
                <Icon size={26} className="text-px-teal" />
                <p className="text-[26px] font-bold">{n}</p>
                <p className="text-[18px] text-px-muted">{req}</p>
              </div>
            )
          })}
        </div>
        <FocusNote id={step} title={step > 0 ? items[step - 1].n : undefined} text={step > 0 ? items[step - 1].note : undefined} />
      </div>
    </Slide>
  )
}
