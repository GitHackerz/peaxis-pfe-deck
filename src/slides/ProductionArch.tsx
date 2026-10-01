import { ArrowRight, DatabaseBackup, Globe, HardDrive, Lock, Server, ShieldCheck } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

function Chip({ children }: { children: string }) {
  return <span className="rounded-lg bg-white/10 px-3 py-1.5 text-[18px] font-semibold text-white">{children}</span>
}

export default function ProductionArch({ step }: SlideProps) {
  return (
    <Slide section="Production" title={<>A <span className="gradient-text-teal">real production</span> deployment</>}>
      <div className="relative h-full pb-2">
        <div className="grid grid-cols-[130px_28px_165px_28px_310px_130px_310px] items-center gap-0" style={{ height: 190 }}>
          <Reveal show={step >= 0} className="flex flex-col items-center gap-2 text-px-navy"><Globe size={38} className="text-px-teal" /><span className="text-[22px] font-extrabold">Internet</span></Reveal>
          <ArrowRight className="text-px-teal" size={28} />
          <Reveal show={step >= 0} delay={0.1} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-black/10">
            <ShieldCheck size={34} className="text-px-teal" /><span className="text-[22px] font-extrabold">Cloudflare</span><span className="text-[14px] text-px-muted">DNS · edge TLS</span>
          </Reveal>
          <ArrowRight className="text-px-teal" size={28} />
          <Reveal show={step >= 0} delay={0.2} className="flex h-full flex-col gap-4 rounded-2xl bg-px-navy p-5">
            <div className="flex items-center gap-3 text-white"><Server size={28} className="text-px-teal" /><div><p className="text-[22px] font-extrabold leading-tight">Application server</p><p className="text-[14px] text-white/70">Public side</p></div></div>
            <div className="flex flex-wrap gap-2"><Chip>Web</Chip><Chip>API</Chip><Chip>Worker</Chip><Chip>AI</Chip></div>
          </Reveal>
          <Reveal show={step >= 1} className="flex flex-col items-center gap-1 px-1 text-center">
            <Lock size={26} className="text-px-teal" />
            <span className="text-[16px] font-bold leading-tight text-px-navy">Private network</span>
            <span className="h-[3px] w-full border-t-[3px] border-dashed border-px-teal" />
          </Reveal>
          <Reveal show={step >= 1} delay={0.1} className="flex h-full flex-col gap-4 rounded-2xl bg-white p-5 ring-2 ring-px-teal">
            <div className="flex items-center gap-3"><Server size={28} className="text-px-teal" /><div><p className="text-[22px] font-extrabold leading-tight">Data server</p><p className="text-[14px] text-px-muted">Not exposed to the Internet</p></div></div>
            <div className="flex flex-wrap gap-2"><span className="rounded-lg bg-px-teal-lt px-3 py-1.5 text-[18px] font-semibold text-[#0B7F7B]">PostgreSQL</span><span className="rounded-lg bg-px-teal-lt px-3 py-1.5 text-[18px] font-semibold text-[#0B7F7B]">Redis</span></div>
          </Reveal>
        </div>
        <Reveal show={step >= 2} className="absolute left-0 right-0 top-[230px] text-[19px]">
          <div className="absolute flex items-center gap-3 font-semibold text-px-navy" style={{ left: 351 }}><HardDrive size={26} className="text-px-teal" />Private object storage<span className="font-normal text-px-muted">· files</span></div>
          <div className="absolute flex items-center gap-3 font-semibold text-px-navy" style={{ left: 791 }}><DatabaseBackup size={26} className="text-px-teal" />Offsite backups<span className="font-normal text-px-muted">· database</span></div>
        </Reveal>
        <Reveal show={step >= 3} className="absolute bottom-3 left-0 right-0">
          <Takeaway>The public application and the data layer are separated. The database and cache are never exposed directly to the Internet.</Takeaway>
        </Reveal>
      </div>
    </Slide>
  )
}
