import { Play } from 'lucide-react'

export default function Demo() {
  return (
    <div className="slide-root flex flex-col items-center justify-center text-center">
      <span className="flex h-24 w-24 items-center justify-center rounded-full bg-px-teal"><Play size={42} fill="#001027" className="text-px-navy" /></span>
      <p className="mt-8 flex items-center gap-3 text-[15px] font-bold uppercase tracking-[0.2em] text-[#029090]"><span className="h-[2px] w-8 bg-px-teal" />Live demo<span className="h-[2px] w-8 bg-px-teal" /></p>
      <h2 className="mt-3 text-[84px] font-bold leading-none tracking-[-0.03em] text-px-navy">PEAXIS in action</h2>
    </div>
  )
}
