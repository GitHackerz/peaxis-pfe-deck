import { Briefcase, Users } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const shared = ['Identity', 'Organizations', 'Permissions', 'Files', 'Billing', 'AI']

export default function PlatformOverview({ step }: SlideProps) {
  return (
    <Slide section="Solution" title={<><span className="gradient-text-teal">PEAXIS</span>: two experiences, one platform</>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="grid grid-cols-2 gap-8">
          <Reveal show={step >= 0} from="left" className="rounded-xl bg-white p-8 border border-black/10">
            <Briefcase size={34} className="text-px-teal" />
            <p className="mt-3 text-[38px] font-extrabold text-px-navy">PEAXIS Jobs</p>
            <p className="mt-1 text-[24px] font-semibold text-[#029090]">For candidates</p>
            <p className="mt-3 text-[19px] text-px-muted">Discover jobs · profile from CV · apply · track</p>
          </Reveal>
          <Reveal show={step >= 0} from="right" delay={0.1} className="rounded-xl border border-black/10 bg-white p-8">
            <Users size={34} className="text-px-teal" />
            <p className="mt-3 text-[38px] font-extrabold text-px-navy">PEAXIS Hire</p>
            <p className="mt-1 text-[24px] font-semibold text-[#029090]">For hiring teams</p>
            <p className="mt-3 text-[19px] text-px-muted">Jobs · pipeline · evidence · interviews · AI assistance</p>
          </Reveal>
        </div>
        <Reveal show={step >= 1} className="flex flex-col gap-3">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-px-muted">Shared platform</p>
          <div className="flex items-center justify-between border-y border-black/15 px-2 py-4">
            {shared.map((s) => <span key={s} className="text-[20px] font-semibold text-px-navy">{s}</span>)}
          </div>
        </Reveal>
      </div>
    </Slide>
  )
}
