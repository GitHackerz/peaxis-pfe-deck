import { Activity, Bell, Boxes, DatabaseBackup, FileText, Gauge, HeartPulse, Server } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const watched = [
  { icon: Server, t: 'Servers & containers', d: 'CPU, memory, disk, network' },
  { icon: Activity, t: 'API & AI service', d: 'Errors, latency, provider calls' },
  { icon: HeartPulse, t: 'Queue & worker', d: 'Backlog, failures, heartbeat' },
  { icon: DatabaseBackup, t: 'Data & backups', d: 'PostgreSQL, Redis, backup status' },
]

export default function Monitoring({ step }: SlideProps) {
  return (
    <Slide section="Production" title={<>We can see what the system is <span className="gradient-text-teal">doing</span></>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="grid grid-cols-[1fr_44px_1fr_44px_1.35fr] items-center">
          <Reveal show className="flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/10">
            <p className="text-[13px] font-bold uppercase tracking-widest text-px-muted">Collected from</p>
            <p className="text-[20px] font-bold leading-snug">Application server<br />Data server</p>
            <p className="text-[14px] leading-snug text-px-muted">node exporter · cAdvisor · Caddy · PostgreSQL & Redis exporters</p>
          </Reveal>
          <Reveal show={step >= 1} from="none" className="flex justify-center text-px-teal"><span className="text-[34px]">›</span></Reveal>
          <Reveal show={step >= 1} className="flex flex-col items-center gap-2 rounded-2xl bg-px-navy p-5 text-center text-white">
            <Boxes size={32} className="text-px-teal" />
            <p className="text-[24px] font-extrabold">Grafana Alloy</p>
            <p className="text-[15px] text-white/70">One agent per server</p>
          </Reveal>
          <Reveal show={step >= 2} from="none" className="flex justify-center text-px-teal"><span className="text-[34px]">›</span></Reveal>
          <Reveal show={step >= 2} className="flex flex-col gap-3 rounded-2xl bg-px-teal p-5 text-white">
            <p className="text-[24px] font-extrabold">Grafana Cloud</p>
            <div className="flex flex-wrap gap-2">
              {[['Prometheus', Gauge], ['Loki logs', FileText], ['Dashboards', Activity], ['Alerts', Bell]].map(([n, I]) => {
                const Icon = I as typeof Gauge
                return <span key={n as string} className="flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-[16px] font-semibold"><Icon size={16} />{n as string}</span>
              })}
            </div>
            <p className="text-[14px] text-white/85">Plus synthetic checks on the public site and API.</p>
          </Reveal>
        </div>
        <Reveal show={step >= 3} className="grid grid-cols-4 gap-6">
          {watched.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex flex-col gap-1.5 border-t-[3px] border-px-teal pt-3">
              <Icon size={26} className="text-px-teal" />
              <p className="text-[20px] font-extrabold leading-tight">{t}</p>
              <p className="text-[15px] leading-snug text-px-muted">{d}</p>
            </div>
          ))}
        </Reveal>
        <Reveal show={step >= 4}>
          <Takeaway>Monitoring is configured as code and bounded, so it can never block the app. Next hardening: verify alert delivery at every release.</Takeaway>
        </Reveal>
      </div>
    </Slide>
  )
}
