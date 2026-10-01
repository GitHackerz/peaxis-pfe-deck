import { Bot, Cloud, Cpu, Database, Globe, HardDrive, Users } from 'lucide-react'
import type { ReactNode } from 'react'
import Reveal from '../components/slide/Reveal'
import Slide, { Takeaway } from '../components/slide/Slide'
import type { SlideProps } from './registry'

const W = 250
const H = 100
const col = (c: number) => c * 290
const row = (r: number) => r * 170

function Node({ step, at, icon, title, sub, tone = 'plain' }: { step: number; at: number; icon: ReactNode; title: string; sub: string; tone?: 'plain' | 'hot' | 'dark' }) {
  const cls = tone === 'hot' ? 'bg-px-teal text-white' : tone === 'dark' ? 'bg-px-navy text-white' : 'bg-white ring-1 ring-black/10 text-px-navy'
  return (
    <Reveal show={step >= at} className={`flex h-full items-center gap-3 rounded-2xl px-4 shadow-sm ${cls}`}>
      <span className={tone === 'plain' ? 'text-px-teal' : 'text-white'}>{icon}</span>
      <div>
        <p className="whitespace-nowrap text-[22px] font-extrabold leading-tight">{title}</p>
        <p className={`text-[15px] leading-tight ${tone === 'plain' ? 'text-px-muted' : 'text-white/80'}`}>{sub}</p>
      </div>
    </Reveal>
  )
}

type Arrow = { x1: number; y1: number; x2: number; y2: number; at: number; dashed?: boolean }
const arrows: Arrow[] = [
  { x1: col(0) + W, y1: 50, x2: col(1), y2: 50, at: 1 },
  { x1: col(1) + W, y1: 50, x2: col(2), y2: 50, at: 2 },
  { x1: col(2) + W, y1: 50, x2: col(3), y2: 50, at: 3 },
  { x1: col(2) + W / 2, y1: H, x2: col(2) + W / 2, y2: row(1), at: 3 },
  { x1: col(2) + 40, y1: H, x2: col(1) + W - 40, y2: row(1), at: 3, dashed: true },
  { x1: col(2) + W, y1: row(1) + 50, x2: col(3), y2: row(1) + 50, at: 4 },
  { x1: col(3) + W / 2, y1: row(1) + H, x2: col(3) + W / 2, y2: row(2), at: 4 },
]

function Positioned({ c, r, children }: { c: number; r: number; children: ReactNode }) {
  return <div className="absolute" style={{ left: col(c), top: row(r), width: W, height: H }}>{children}</div>
}

export default function LogicalArch({ step }: SlideProps) {
  return (
    <Slide section="Engineering" title={<>How the pieces <span className="gradient-text-teal">fit together</span></>}>
      <div className="relative mx-auto h-[440px] w-[1120px]">
        <svg className="absolute inset-0" width="1120" height="440" fill="none">
          <defs>
            <marker id="ah" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto"><path d="M2 2L12 7L2 12" stroke="#029090" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></marker>
          </defs>
          {arrows.map((a, i) => (
            <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="#029090" strokeWidth="3" strokeDasharray={a.dashed ? '6 6' : undefined} markerEnd="url(#ah)" style={{ opacity: step >= a.at ? 1 : 0, transition: 'opacity .4s' }} />
          ))}
          {arrows.map((a, i) => (
            <circle key={`d${i}`} r="5" fill="#00B8B3" style={{ opacity: step >= a.at ? 1 : 0, transition: 'opacity .4s' }}>
              <animateMotion dur="2.2s" repeatCount="indefinite" path={`M${a.x1} ${a.y1} L${a.x2} ${a.y2}`} begin={`${(i % 3) * 0.5}s`} />
            </circle>
          ))}
        </svg>
        <Positioned c={0} r={0}><Node step={step} at={0} icon={<Users size={30} />} title="Users" sub="Candidates · recruiters" /></Positioned>
        <Positioned c={1} r={0}><Node step={step} at={1} icon={<Globe size={30} />} title="Web platform" sub="Next.js · user experience" /></Positioned>
        <Positioned c={2} r={0}><Node step={step} at={2} icon={<Cpu size={30} />} title="API" sub="NestJS · rules & security" tone="dark" /></Positioned>
        <Positioned c={3} r={0}><Node step={step} at={3} icon={<Database size={30} />} title="PostgreSQL" sub="+ pgvector · source of truth" /></Positioned>
        <Positioned c={2} r={1}><Node step={step} at={3} icon={<Cpu size={30} />} title="Redis + Worker" sub="BullMQ · background work" /></Positioned>
        <Positioned c={1} r={1}><Node step={step} at={3} icon={<HardDrive size={30} />} title="File storage" sub="Private, S3-compatible" /></Positioned>
        <Positioned c={3} r={1}><Node step={step} at={4} icon={<Bot size={30} />} title="AI service" sub="FastAPI · inference only" tone="hot" /></Positioned>
        <Positioned c={3} r={2}><Node step={step} at={4} icon={<Cloud size={30} />} title="Gemini" sub="LLM + embeddings" /></Positioned>
        <Reveal show={step >= 4} className="absolute bottom-0 left-0 w-[800px]">
          <Takeaway>Browsers talk only to the API. The AI service never touches business data.</Takeaway>
        </Reveal>
      </div>
    </Slide>
  )
}
