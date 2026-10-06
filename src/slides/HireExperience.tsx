import HireBoard from '../components/product/HireBoard'
import { Avatar } from '../components/product/ui'
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
        <div className="font-app absolute -top-[58px] right-0 flex items-center gap-2 rounded-full border border-black/10 bg-white py-1 pl-1 pr-4 text-[15px] font-semibold"><Avatar name="Amine Benali" size={30} />Following Amine</div>
        <HireBoard step={step} className="h-full" />
      </div>
    </Slide>
  )
}
