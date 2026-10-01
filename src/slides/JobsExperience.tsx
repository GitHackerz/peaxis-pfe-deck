import { ChevronRight } from 'lucide-react'
import JobsJourney, { JOBS_SCENE_LABELS } from '../components/product/JobsJourney'
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
        <div className="flex items-center gap-3">
          {JOBS_SCENE_LABELS.map((l, i) => (
            <div key={l} className="flex items-center gap-3">
              <span className={`rounded-full px-5 py-1.5 text-[19px] font-bold transition-colors ${i === step ? 'bg-px-teal text-white' : i < step ? 'bg-px-teal-lt text-[#029090]' : 'bg-black/5 text-px-muted'}`}>
                {i + 1} · {l}
              </span>
              {i < 3 && <ChevronRight size={20} className="text-px-muted" />}
            </div>
          ))}
        </div>
        <JobsJourney scene={step} className="min-h-0 flex-1" />
      </div>
    </Slide>
  )
}
