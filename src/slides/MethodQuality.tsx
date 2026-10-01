import { ChevronRight, Eye, Gauge, Lock, Maximize2, RefreshCw, Wrench } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

const phases = ['Plan', 'Build', 'Test', 'Review', 'Improve']
const quality = [
  { icon: Lock, n: 'Security' }, { icon: RefreshCw, n: 'Reliability' }, { icon: Gauge, n: 'Performance' },
  { icon: Maximize2, n: 'Scalability' }, { icon: Eye, n: 'Explainability' }, { icon: Wrench, n: 'Maintainability' },
]

export default function MethodQuality({ step }: SlideProps) {
  return (
    <Slide section="Method" title={<>Built like a <span className="gradient-text-teal">product</span>, not a prototype</>}>
      <div className="flex h-full flex-col justify-evenly pb-2">
        <Reveal show className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            {phases.map((p, i) => (
              <div key={p} className="flex items-center gap-3">
                <div className={`flex w-[150px] justify-center rounded-2xl py-4 text-[26px] font-extrabold ${i === 0 ? 'bg-px-navy text-white' : 'bg-white shadow-sm ring-1 ring-black/5'}`}>{p}</div>
                {i < 4 && <ChevronRight size={26} className="text-px-teal" />}
              </div>
            ))}
          </div>
          <p className="text-[18px] text-px-muted">Backlog · sprints · incremental delivery · continuous validation</p>
        </Reveal>
        <Reveal show={step >= 1} className="flex flex-col gap-3">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-px-muted">Six quality requirements from day one</p>
          <div className="grid grid-cols-6 gap-4">
            {quality.map(({ icon: Icon, n }) => (
              <div key={n} className="flex flex-col items-center gap-2 rounded-2xl bg-px-teal-lt py-5 text-center"><Icon size={30} className="text-[#029090]" /><span className="text-[17px] font-bold">{n}</span></div>
            ))}
          </div>
        </Reveal>
      </div>
    </Slide>
  )
}
