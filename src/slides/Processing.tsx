import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const steps = [
  { t: 'Application saved', d: 'with its history and an event, in one transaction', at: 0 },
  { t: 'Work recorded', d: 'a durable work item in the database', at: 0 },
  { t: 'Worker picks it up', d: 'through the Redis queue, outside the web request', at: 1 },
  { t: 'AI classifies evidence', d: 'only on quotes the platform supplies', at: 1 },
  { t: 'Rules compute alignment', d: 'versioned, repeatable scoring', at: 2 },
  { t: 'Recruiter reviews', d: 'result shown with its evidence', at: 2 },
]

export default function Processing({ step }: SlideProps) {
  return (
    <Slide section="Architecture" title={<>What happens when a candidate <span className="gradient-text-teal">applies</span></>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="grid grid-cols-3 gap-x-6 gap-y-5">
          {steps.map(({ t, d, at }, i) => (
            <Reveal key={t} show={step >= at} delay={(i % 2) * 0.1} className={`flex items-start gap-4 rounded-2xl p-5 ${i === 3 ? 'bg-px-teal-lt ring-1 ring-px-teal/40' : 'bg-white shadow-sm ring-1 ring-black/5'}`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-px-navy text-[18px] font-bold text-white">{i + 1}</span>
              <div><p className="text-[22px] font-extrabold leading-tight">{t}</p><p className="mt-1 text-[16px] leading-snug text-px-muted">{d}</p></div>
            </Reveal>
          ))}
        </div>
        <Reveal show={step >= 3}>
          <Takeaway>If Redis or the AI provider is down, the application is still saved and the work is retried. Failures are visible, never silent.</Takeaway>
        </Reveal>
      </div>
    </Slide>
  )
}
