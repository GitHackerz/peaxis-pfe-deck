import { Cloud, Database, DatabaseBackup, Globe, HardDrive, ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

function Node({ title, sub, tone = 'plain', icon, className = '' }: { title: string; sub?: string; tone?: 'plain' | 'navy' | 'teal'; icon?: ReactNode; className?: string }) {
  const cls = tone === 'navy' ? 'bg-px-teal-lt ring-2 ring-px-teal' : tone === 'teal' ? 'bg-px-teal-lt ring-1 ring-px-teal/40' : 'bg-white border border-black/10'
  return (
    <div className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 ${cls} ${className}`}>
      {icon && <span className="text-px-teal">{icon}</span>}
      <div><p className="text-[17px] font-extrabold leading-tight">{title}</p>{sub && <p className={`text-[13px] leading-tight text-px-muted`}>{sub}</p>}</div>
    </div>
  )
}
const Tag = ({ children }: { children: ReactNode }) => <span className="absolute -top-3 left-4 rounded-md bg-px-navy px-2.5 py-0.5 text-[13px] font-bold uppercase tracking-wider text-white">{children}</span>
const L = ({ x, y, w = 110, children, show = true }: { x: number; y: number; w?: number; children: ReactNode; show?: boolean }) => (
  <div className="absolute text-center text-[13px] font-semibold leading-tight text-px-navy transition-opacity duration-300" style={{ left: x, top: y, width: w, opacity: show ? 1 : 0 }}>{children}</div>
)

/** Physical view: deployment nodes, what runs on them and how they are connected. */
export default function ProductionArch({ step }: SlideProps) {
  const line = (x1: number, y1: number, x2: number, y2: number, at: number, dashed = false) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4B5563" strokeWidth="2.5" strokeDasharray={dashed ? '7 6' : undefined} markerEnd="url(#ph)" style={{ opacity: step >= at ? 1 : 0, transition: 'opacity .4s' }} />
  )
  return (
    <Slide section="Architecture" title={<><span className="gradient-text-teal">Physical</span> architecture</>}>
      <div className="relative mx-auto h-[430px] w-[1120px]">
        <svg className="pointer-events-none absolute inset-0" width="1120" height="430" fill="none">
          <defs><marker id="ph" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto"><path d="M2 2L12 7L2 12" stroke="#4B5563" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
          {line(100, 120, 150, 120, 0)}
          {line(270, 120, 330, 120, 0)}
          {line(680, 120, 790, 120, 1, true)}
          {line(500, 270, 500, 330, 2)}
          {line(955, 262, 955, 330, 2)}
        </svg>

        <Reveal show className="absolute left-0 top-[90px] w-[100px]"><Node title="Internet" sub="Users" icon={<Globe size={20} />} className="flex-col text-center !gap-1" /></Reveal>
        <Reveal show className="absolute left-[150px] top-[80px] w-[120px]"><Node title="Cloudflare" sub="DNS · edge TLS" icon={<ShieldCheck size={20} />} className="flex-col text-center !gap-1" /></Reveal>
        <L x={100} y={96} w={50}>HTTPS</L>
        <L x={270} y={96} w={60}>HTTPS</L>

        {/* Application server */}
        <Reveal show className="absolute left-[330px] top-[20px] h-[250px] w-[350px]">
          <div className="relative h-full rounded-xl border-2 border-px-navy bg-white/80 p-4">
            <Tag>Application server</Tag>
            <Node tone="navy" title="Caddy reverse proxy" sub="Docker containers · only public entry" className="mt-2" />
            <div className="mt-2.5 grid grid-cols-3 gap-2">
              <Node title="Web" sub="Next.js" /><Node title="Admin" sub="Next.js" /><Node title="API" sub="NestJS" />
              <Node title="Worker" sub="BullMQ" /><Node title="AI" sub="FastAPI" /><Node title="ClamAV" sub="Malware scan" />
            </div>
          </div>
        </Reveal>

        {/* Data server */}
        <Reveal show={step >= 1} className="absolute left-[790px] top-[20px] h-[242px] w-[330px]">
          <div className="relative h-full rounded-xl border-2 border-px-teal bg-white/80 p-4">
            <Tag>Data server</Tag>
            <div className="mt-3 flex flex-col gap-2.5">
              <Node tone="teal" title="PostgreSQL + pgvector" sub="Authoritative data" icon={<Database size={22} />} />
              <Node tone="teal" title="Redis" sub="Job queue · cache" icon={<Database size={22} />} />
            </div>
            <p className="mt-3 text-[13px] text-px-muted">Reachable only over the private network; never exposed to the Internet</p>
          </div>
        </Reveal>
        <L x={680} y={74} w={110} show={step >= 1}>WireGuard<br />private network</L>

        {/* Managed services */}
        <Reveal show={step >= 2} className="absolute left-[330px] top-[330px] w-[190px]"><Node title="Object storage" sub="Private · S3 API · files" icon={<HardDrive size={22} />} /></Reveal>
        <Reveal show={step >= 2} className="absolute left-[545px] top-[330px] w-[175px]"><Node title="AI provider" sub="Gemini API · HTTPS" icon={<Cloud size={22} />} /></Reveal>
        <Reveal show={step >= 2} className="absolute left-[790px] top-[330px] w-[330px]"><Node title="Offsite backup storage" sub="WAL archive + nightly encrypted dumps" icon={<DatabaseBackup size={22} />} /></Reveal>
        <Reveal show={step >= 3} className="absolute bottom-0 left-0 right-0 text-center text-[19px] font-semibold text-px-navy">
          The public application and the data layer are separated; the database and cache are never exposed to the Internet.
        </Reveal>
      </div>
    </Slide>
  )
}
