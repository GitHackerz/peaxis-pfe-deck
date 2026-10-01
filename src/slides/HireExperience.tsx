import HireBoard from '../components/product/HireBoard'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

export default function HireExperience({ step }: SlideProps) {
  return (
    <Slide
      section="Solution"
      title={<><span className="gradient-text-teal">PEAXIS Hire</span>: the recruiter workspace</>}
      source="Reconstructed from the PEAXIS interface · fictitious data"
    >
      <div className="h-full pb-4">
        <HireBoard step={step} className="h-full" />
      </div>
    </Slide>
  )
}
