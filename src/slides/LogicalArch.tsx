import { Bot, Cloud, Cpu, Database, HardDrive, Layers, Users } from 'lucide-react'
import type { ReactNode } from 'react'
import Reveal from '../components/slide/Reveal'
import Slide from '../components/slide/Slide'
import type { SlideProps } from './registry'

function Layer({ tag, tone, children, className = '' }: { tag: string; tone: string; children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl border bg-white/80 p-4 ${className}`} style={{ borderColor: tone }}>
      <span className="absolute -top-3 left-4 rounded-md px-2.5 py-0.5 text-[13px] font-bold uppercase tracking-wider text-white" style={{ background: tone }}>{tag}</span>
      {children}
    </div>
  )
}
const Box = ({ icon, title, sub, dark }: { icon: ReactNode; title: string; sub?: string; dark?: boolean }) => (
  <div className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 ${dark ? 'bg-px-navy text-white' : 'bg-white ring-1 ring-black/10'}`}>
    <span className="text-px-teal">{icon}</span>
    <div><p className="text-[17px] font-extrabold leading-tight">{title}</p>{sub && <p className={`text-[13px] leading-tight ${dark ? 'text-white/70' : 'text-px-muted'}`}>{sub}</p>}</div>
  </div>
)
const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-1.5">{items.map((c) => <span key={c} className="rounded-md bg-px-teal-lt px-2 py-1 text-[14px] font-semibold text-[#0B7F7B]">{c}</span>)}</div>
)
const Link = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`absolute flex items-center justify-center text-center text-[13px] font-semibold leading-tight text-px-navy ${className}`}>{children}</div>
)

/** Logical view: layers, responsibilities and the protocols between them (technology-independent flow). */
export default function LogicalArch({ step }: SlideProps) {
  return (
    <Slide section="Architecture" title={<><span className="gradient-text-teal">Logical</span> architecture</>}>
      <div className="relative mx-auto h-[430px] w-[1120px]">
        {/* Client layer */}
        <Reveal show className="absolute left-0 top-3 h-[372px] w-[185px]">
          <Layer tag="Client layer" tone="#6B7280" className="h-full">
            <div className="mt-3 flex h-full flex-col justify-around pb-4">
              <Box icon={<Users size={22} />} title="Candidates" sub="PEAXIS Jobs" />
              <Box icon={<Users size={22} />} title="Recruiters" sub="PEAXIS Hire" />
              <Box icon={<Users size={22} />} title="Visitors" sub="Public site" />
            </div>
          </Layer>
        </Reveal>
        {/* Application layer */}
        <Reveal show={step >= 1} className="absolute left-[270px] top-3 h-[200px] w-[560px]">
          <Layer tag="Application layer" tone="#E5484D" className="h-full">
            <div className="mt-2 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3"><Box icon={<Layers size={22} />} title="Web platform" sub="Next.js" /><Box dark icon={<Cpu size={22} />} title="API" sub="NestJS · rules & security" /></div>
              <Chips items={['Auth', 'Jobs', 'Applications', 'Interviews', 'Billing', 'Files', 'Notifications']} />
              <div className="text-[14px] text-px-muted"><b className="text-px-navy">Worker</b> (BullMQ): runs long tasks outside the request</div>
            </div>
          </Layer>
        </Reveal>
        {/* AI layer */}
        <Reveal show={step >= 3} className="absolute left-[270px] top-[248px] h-[142px] w-[560px]">
          <Layer tag="AI layer" tone="#029090" className="h-full">
            <div className="mt-2 grid grid-cols-[1fr_170px] gap-3">
              <div className="flex flex-col gap-2.5"><Box icon={<Bot size={22} />} title="AI service" sub="FastAPI · inference only" /><Chips items={['CV parsing', 'Evidence', 'Embeddings', 'Drafts']} /></div>
              <Box icon={<Cloud size={22} />} title="Gemini" sub="External LLM provider" />
            </div>
          </Layer>
        </Reveal>
        {/* Data layer */}
        <Reveal show={step >= 2} className="absolute left-[930px] top-3 h-[372px] w-[190px]">
          <Layer tag="Data layer" tone="#3B6FD4" className="h-full">
            <div className="mt-3 flex h-full flex-col justify-around pb-4">
              <Box icon={<Database size={22} />} title="PostgreSQL" sub="+ pgvector" />
              <Box icon={<Database size={22} />} title="Redis" sub="Queue · cache" />
              <Box icon={<HardDrive size={22} />} title="File storage" sub="CVs · private" />
            </div>
          </Layer>
        </Reveal>

        <svg className="absolute inset-0 pointer-events-none" width="1120" height="430" fill="none">
          <defs><marker id="lh" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto"><path d="M2 2L12 7L2 12" stroke="#4B5563" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></marker></defs>
          <g stroke="#4B5563" strokeWidth="2.5" markerEnd="url(#lh)">
            <line x1="185" y1="110" x2="270" y2="110" style={{ opacity: step >= 1 ? 1 : 0, transition: 'opacity .4s' }} />
            <line x1="830" y1="110" x2="930" y2="110" style={{ opacity: step >= 2 ? 1 : 0, transition: 'opacity .4s' }} />
            <line x1="550" y1="203" x2="550" y2="248" style={{ opacity: step >= 3 ? 1 : 0, transition: 'opacity .4s' }} />
          </g>
        </svg>
        <Link className="left-[185px] top-[70px] w-[85px]">HTTPS<br />REST · JWT</Link>
        <Link className="left-[830px] top-[70px] w-[100px]">SQL<br />Prisma</Link>
        <Reveal show={step >= 3} className="absolute left-[566px] top-[217px] rounded bg-[#F8FAFC] px-2 text-[13px] font-semibold text-px-navy">Internal call · service secret</Reveal>
        <Reveal show={step >= 4} className="absolute bottom-0 left-0 right-0 text-center text-[19px] font-semibold text-px-navy">
          The API is the single authority: the AI layer never touches the data layer.
        </Reveal>
      </div>
    </Slide>
  )
}
