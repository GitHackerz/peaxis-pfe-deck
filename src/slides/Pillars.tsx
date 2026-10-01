import { Activity, Lock, Network, RefreshCw } from 'lucide-react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const pillars = [
  { icon: Lock, name: 'Security', points: ['Tenant isolation: data stays within its organization', 'Secure access: hashed passwords, token sessions, MFA for platform admins', 'Private data: protected files, scanned uploads', 'Protected infrastructure: private database network, firewall'] },
  { icon: RefreshCw, name: 'Reliability', points: ['Durable background work with retries', 'Events saved with the business change', 'An AI outage never loses an application', 'Backups with a restore procedure'] },
  { icon: Network, name: 'Scalability', points: ['Web, API, worker and AI are separate', 'Long AI work stays off the request path', 'Workers can grow independently', 'Files live outside the app server'] },
  { icon: Activity, name: 'Operations', points: ['Health checks and worker heartbeat', 'Structured logs, metrics, dashboards', 'Alerting through Grafana Cloud', 'Next hardening: routine restore drills'] },
]

export default function Pillars({ step }: SlideProps) {
  return (
    <Slide section="Production" title={<>Engineered to be <span className="gradient-text-teal">secure, recoverable, operable</span></>}>
      <div className="flex h-full flex-col justify-between pb-2">
        <div className="grid grid-cols-4 gap-7">
          {pillars.map(({ icon: Icon, name, points }, i) => (
            <Reveal key={name} show={step >= i} className="flex flex-col gap-3 border-t-[3px] border-px-teal pt-4">
              <div className="flex items-center gap-3"><Icon size={28} className="text-px-teal" /><p className="text-[26px] font-extrabold">{name}</p></div>
              <ul className="flex flex-col gap-2.5 text-[17px] leading-snug text-px-navy">
                {points.map((p) => <li key={p} className="flex gap-2"><span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-px-teal" />{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal show={step >= 4}>
          <Takeaway>We did not only build features: we designed how PEAXIS stays secure, recoverable and operable. No Kubernetes needed at today's scale; clear boundaries for tomorrow's.</Takeaway>
        </Reveal>
      </div>
    </Slide>
  )
}
