import { motion } from 'framer-motion'
import { Bookmark, Check, FileText, MapPin, Search, Upload } from 'lucide-react'
import { AppWindow, Chip } from './ui'

const JOBS = [
  { title: 'Backend Engineer', company: 'Northwind', place: 'Tunis · Hybrid', tags: ['Full-time', 'Mid–Senior'], hot: true },
  { title: 'DevOps Engineer', company: 'Lumen Labs', place: 'Remote', tags: ['Full-time', 'Senior'] },
  { title: 'Full-Stack Developer', company: 'Atlas Studio', place: 'Sfax · On-site', tags: ['Full-time', 'Junior'] },
]

function CompanyMark({ name }: { name: string }) {
  return <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-a-accent text-[18px] font-bold text-a-primary">{name[0]}</span>
}

function Discover() {
  return (
    <div className="flex h-full flex-col gap-4 p-6">
      <div className="flex gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-a-border bg-white px-4 py-3 text-[16px]"><Search size={18} className="text-a-mfg" />Backend engineer</div>
        <div className="flex w-52 items-center gap-2 rounded-lg border border-a-border bg-white px-4 py-3 text-[16px]"><MapPin size={18} className="text-a-mfg" />Tunisia</div>
        <div className="flex items-center rounded-lg bg-a-primary px-6 text-[16px] font-semibold text-white">Search</div>
      </div>
      <div className="flex gap-2"><Chip tone="primary">Full-time</Chip><Chip>Remote</Chip><Chip>Experience</Chip><Chip>Salary</Chip><Chip>Skills</Chip></div>
      <div className="flex flex-col gap-3">
        {JOBS.map((j) => (
          <div key={j.title} className={`flex items-center gap-4 rounded-xl border bg-white p-4 ${j.hot ? 'border-a-primary ring-2 ring-a-primary/20' : 'border-a-border'}`}>
            <CompanyMark name={j.company} />
            <div className="min-w-0 flex-1">
              <p className="text-[18px] font-semibold">{j.title}</p>
              <p className="text-[14px] text-a-mfg">{j.company} · {j.place}</p>
            </div>
            <div className="flex gap-2">{j.tags.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            <Bookmark size={20} className="text-a-mfg" />
          </div>
        ))}
      </div>
    </div>
  )
}

function Details() {
  return (
    <div className="grid h-full grid-cols-[1fr_270px] gap-6 p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <CompanyMark name="Northwind" />
          <div>
            <p className="text-[26px] font-bold leading-tight">Backend Engineer</p>
            <p className="text-[15px] text-a-mfg">Northwind · Tunis · Hybrid</p>
          </div>
        </div>
        <div className="flex gap-2"><Chip tone="primary">Full-time</Chip><Chip>Mid–Senior</Chip><Chip>Posted 2 days ago</Chip></div>
        <div>
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-a-mfg">Requirements</p>
          <ul className="flex flex-col gap-2 text-[16px]">
            {['NestJS', 'PostgreSQL', 'Docker', '3+ years of backend experience'].map((r) => (
              <li key={r} className="flex items-center gap-2"><Check size={16} className="text-a-primary" strokeWidth={3} />{r}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 pt-1"><div className="h-2.5 w-full rounded bg-a-muted" /><div className="h-2.5 w-11/12 rounded bg-a-muted" /><div className="h-2.5 w-3/4 rounded bg-a-muted" /></div>
      </div>
      <div className="flex h-fit flex-col gap-3 rounded-xl border border-a-border bg-white p-5">
        <div className="rounded-lg bg-a-primary py-3 text-center text-[17px] font-semibold text-white">Apply with your CV</div>
        <div className="rounded-lg border border-a-border py-3 text-center text-[16px] font-medium">Save job</div>
        <p className="text-[13px] text-a-mfg">Your profile and CV are reused: no forms to retype.</p>
      </div>
    </div>
  )
}

function Apply() {
  return (
    <div className="flex h-full items-center justify-center bg-black/[0.03] p-6">
      <div className="w-[560px] rounded-2xl border border-a-border bg-white p-6 shadow-lg">
        <p className="text-[22px] font-bold">Apply to Backend Engineer</p>
        <p className="mb-4 text-[14px] text-a-mfg">Northwind · Tunis</p>
        <div className="flex items-center gap-3 rounded-xl border border-a-border p-4">
          <FileText size={26} className="text-a-primary" />
          <div className="flex-1"><p className="text-[16px] font-semibold">cv_amine_benali.pdf</p><p className="text-[13px] text-a-mfg">Scanned and parsed · profile prefilled</p></div>
          <Chip tone="ok"><Check size={14} strokeWidth={3} />Ready</Chip>
        </div>
        <div className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-a-border p-3 text-[14px] text-a-mfg"><Upload size={16} />Replace CV</div>
        <div className="mt-5 rounded-lg bg-a-primary py-3 text-center text-[17px] font-semibold text-white">Submit application</div>
      </div>
    </div>
  )
}

const STAGES = ['Applied', 'Screening', 'Interview', 'Offer']

function Track() {
  return (
    <div className="flex h-full flex-col gap-4 p-6">
      <p className="text-[22px] font-bold">My applications</p>
      <div className="rounded-xl border border-a-border bg-white p-5">
        <div className="flex items-center gap-4">
          <CompanyMark name="Northwind" />
          <div className="flex-1"><p className="text-[18px] font-semibold">Backend Engineer</p><p className="text-[14px] text-a-mfg">Northwind · Applied today</p></div>
          <Chip tone="info">Under review</Chip>
        </div>
        <div className="mt-6 flex items-center">
          {STAGES.map((s, i) => (
            <div key={s} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-bold ${i === 0 ? 'bg-a-primary text-white' : i === 1 ? 'bg-a-accent text-a-primary ring-2 ring-a-primary' : 'bg-a-muted text-a-mfg'}`}>
                  {i === 0 ? <Check size={16} strokeWidth={3} /> : i + 1}
                </span>
                <span className={`text-[14px] ${i <= 1 ? 'font-semibold' : 'text-a-mfg'}`}>{s}</span>
              </div>
              {i < STAGES.length - 1 && <div className={`mx-2 mb-6 h-[3px] flex-1 rounded ${i === 0 ? 'bg-a-primary' : 'bg-a-border'}`} />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-xl border border-a-border bg-white p-4 opacity-70">
        <CompanyMark name="Lumen Labs" /><div className="flex-1"><p className="text-[16px] font-semibold">DevOps Engineer</p><p className="text-[13px] text-a-mfg">Lumen Labs · Applied 5 days ago</p></div><Chip tone="primary">Interview</Chip>
      </div>
    </div>
  )
}

const SCENES = [Discover, Details, Apply, Track]
export const JOBS_SCENE_LABELS = ['Discover', 'Job details', 'Apply with CV', 'Track application']

export default function JobsJourney({ scene, className = '' }: { scene: number; className?: string }) {
  return (
    <AppWindow url="peaxis.com/jobs" className={className}>
      {SCENES.map((Scene, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: scene === i ? 1 : 0, x: scene === i ? 0 : scene > i ? -20 : 20 }}
          transition={{ duration: 0.4 }}
          style={{ pointerEvents: scene === i ? 'auto' : 'none' }}
        >
          <Scene />
        </motion.div>
      ))}
    </AppWindow>
  )
}
