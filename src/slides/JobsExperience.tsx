import JobsJourney, { JOBS_SCENE_LABELS } from '../components/product/JobsJourney'
import { Avatar } from '../components/product/ui'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

export default function JobsExperience({ step }: SlideProps) {
  return (
    <Slide
      section="Solution"
      title={<><span className="gradient-text-teal">PEAXIS Jobs</span>: the candidate experience</>}
      source="Reconstructed from the PEAXIS interface · fictitious data"
    >
      <div className="flex h-full flex-col gap-3 pb-4">
        <div className="font-app absolute -top-[58px] right-0 flex items-center gap-2 rounded-full border border-black/10 bg-white py-1 pl-1 pr-4 text-[15px] font-semibold"><Avatar name="Amine Benali" size={30} />Following Amine</div>
        <div className="flex items-center gap-9">
          {JOBS_SCENE_LABELS.map((l, i) => (
            <div key={l} className="flex items-center gap-3">
              <span className={`border-b-[3px] pb-1 text-[19px] font-bold transition-colors ${i === step ? 'border-px-teal text-px-navy' : i < step ? 'border-px-teal/40 text-px-navy/70' : 'border-transparent text-px-muted'}`}>
                <span className="mr-2 font-mono text-[15px] text-[#029090]">{String(i + 1).padStart(2, '0')}</span>{l}
              </span>
            </div>
          ))}
        </div>
        <JobsJourney scene={step} className="min-h-0 flex-1" />
      </div>
    </Slide>
  )
}
