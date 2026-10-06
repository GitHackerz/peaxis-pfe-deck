import { Eye, Lock, Maximize2, RefreshCw } from 'lucide-react'
import FocusNote from '../components/slide/FocusNote'
import Slide from '../components/slide/Slide'
import { IS_EXPORT } from '../lib/mode'
import type { SlideProps } from './registry'

const items = [
  { icon: Lock, n: 'Security', req: 'A CV is personal data', how: "Each company's data is isolated, access is checked on every request, files stay private." },
  { icon: RefreshCw, n: 'Reliability', req: 'An application must survive a failure', how: 'Background work is durable and retried. An AI outage never loses an application.' },
  { icon: Maximize2, n: 'Scalability', req: 'Room to grow with usage', how: 'Web, API, worker and AI are separate services, so workers can scale alone.' },
  { icon: Eye, n: 'Explainability', req: 'AI results must be justified', how: 'Every result is linked to evidence from the CV, and scored by clear rules.' },
]

export default function NonFunctional({ step }: SlideProps) {
  return (
    <Slide section="Requirements" title={<>Non-functional <span className="gradient-text-teal">requirements</span></>}>
      <div className="flex h-full flex-col items-center justify-center gap-14 pb-6">
        <div className="grid w-full grid-cols-4 gap-8">
          {items.map(({ icon: Icon, n, req }, i) => {
            const active = step === i + 1
            const dim = !IS_EXPORT && step > 0 && !active
            return (
              <div key={n} className={`flex flex-col items-center gap-3 border-t-[3px] px-2 pb-4 pt-6 text-center transition-all duration-300 ${active ? 'border-px-teal' : 'border-black/15'} ${dim ? 'opacity-30' : ''}`}>
                <span className={`flex h-20 w-20 items-center justify-center rounded-full ${active ? 'bg-px-teal text-white' : 'bg-px-teal-lt text-[#029090]'} transition-colors duration-300`}><Icon size={36} /></span>
                <p className="text-[28px] font-bold">{n}</p>
                <p className="max-w-[230px] text-[19px] leading-snug text-px-muted">{req}</p>
              </div>
            )
          })}
        </div>
        <div className="h-[80px] max-w-[860px] text-center">
          {step > 0 && <FocusNote id={step} title={items[step - 1].n} text={items[step - 1].how} center />}
        </div>
      </div>
    </Slide>
  )
}
