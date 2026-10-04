import { motion } from 'framer-motion'
import { CalendarCheck, Check, X } from 'lucide-react'
import { AppWindow, Avatar, Chip, EXAMPLE_REQUIREMENTS, ScoreRing, StatusMark } from './ui'

interface Cand { id: string; name: string; headline: string; score: number; reviewed?: boolean; chip?: string }

const COLUMNS: { id: string; label: string; cands: Cand[] }[] = [
  { id: 'applied', label: 'Applied', cands: [
    { id: 'karim', name: 'Karim Haddad', headline: 'Full-stack developer', score: 62 },
    { id: 'omar', name: 'Omar Chaabane', headline: 'Backend developer', score: 71 },
  ] },
  { id: 'screening', label: 'Screening', cands: [
    { id: 'amine', name: 'Amine Benali', headline: 'Backend engineer · 4 yrs', score: 85 },
    { id: 'sarah', name: 'Sarah Mansour', headline: 'DevOps engineer', score: 78, reviewed: true },
  ] },
  { id: 'interview', label: 'Interview', cands: [{ id: 'lina', name: 'Lina Gharbi', headline: 'Backend engineer', score: 90, reviewed: true }] },
  { id: 'offer', label: 'Offer', cands: [] },
]

function CandidateCard({ c, active, dim }: { c: Cand; active?: boolean; dim?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: dim ? 0.55 : 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`rounded-lg border bg-white p-3 ${active ? 'border-a-primary ring-2 ring-a-primary/25' : 'border-a-border'}`}
    >
      <div className="flex items-start gap-2.5">
        <Avatar name={c.name} size={34} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold leading-5">{c.name}</p>
          <p className="truncate text-[13px] leading-5 text-a-mfg">{c.headline}</p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between border-t border-a-border pt-2 text-[13px]">
        <span className="text-a-mfg">Alignment <b className="text-a-fg">{c.score}%</b></span>
        {c.reviewed && <span className="flex items-center gap-1 text-a-ok"><Check size={13} strokeWidth={3} />Reviewed</span>}
      </div>
      {c.chip && <div className="mt-2"><Chip tone="info"><CalendarCheck size={13} />{c.chip}</Chip></div>}
    </motion.div>
  )
}

/** step: 0 board · 1 candidate highlighted · 2 drawer open · 3 interview scheduled */
export default function HireBoard({ step, className = '' }: { step: number; className?: string }) {
  const moved = step >= 3
  const drawerOpen = step === 2
  const cols = COLUMNS.map((col) => ({
    ...col,
    cands: col.cands.filter((c) => !(moved && c.id === 'amine')).concat(moved && col.id === 'interview' ? [{ ...COLUMNS[1].cands[0], chip: 'Interview · Thu 10:00' }] : []),
  }))
  return (
    <AppWindow url="northwind.peaxis.com/pipeline" className={className}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-a-border bg-white px-5 py-3">
          <div><p className="text-[18px] font-bold leading-tight">Backend Engineer</p><p className="text-[13px] text-a-mfg">Pipeline · 6 candidates</p></div>
          <div className="flex gap-2"><Chip tone="primary">Kanban</Chip><Chip>List</Chip></div>
        </div>
        <div className="grid flex-1 grid-cols-4 gap-3 p-4">
          {cols.map((col) => (
            <div key={col.id} className="flex flex-col gap-2.5 rounded-xl bg-a-muted/70 p-2.5">
              <div className="flex items-center justify-between px-1 text-[14px] font-semibold"><span>{col.label}</span><span className="text-a-mfg">{col.cands.length}</span></div>
              {col.cands.map((c) => <CandidateCard key={c.id} c={c} active={c.id === 'amine' && step >= 1} dim={drawerOpen && c.id !== 'amine'} />)}
            </div>
          ))}
        </div>

        <motion.aside
          initial={false}
          animate={{ x: drawerOpen ? 0 : 520, opacity: drawerOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 right-0 top-0 flex w-[520px] flex-col border-l border-a-border bg-white shadow-[-12px_0_30px_-12px_rgba(0,16,39,0.25)]"
        >
          <div className="flex items-center gap-3 border-b border-a-border px-4 py-2">
            <Avatar name="Amine Benali" size={40} />
            <div className="flex-1"><p className="text-[18px] font-bold leading-tight">Amine Benali</p><p className="text-[13px] text-a-mfg">Backend engineer · 4 years · Tunis</p></div>
            <ScoreRing value={85} size={50} stroke={5} />
            <X size={18} className="text-a-mfg" />
          </div>
          <div className="flex-1 overflow-hidden px-4 py-2">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-a-mfg">Requirements · linked to CV evidence</p>
            <div className="flex flex-col gap-1">
              {EXAMPLE_REQUIREMENTS.map((r) => (
                <div key={r.label} className="flex items-center gap-3 rounded-lg border border-a-border px-3 py-0.5">
                  <div className="min-w-0 flex-1"><p className="text-[14px] font-semibold leading-5">{r.label}</p><p className="truncate text-[12px] italic text-a-mfg">{r.evidence}</p></div>
                  <StatusMark status={r.status} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-a-border p-2.5">
            <div className="flex-1 rounded-lg bg-a-primary py-2 text-center text-[15px] font-semibold text-white">Schedule interview</div>
            <div className="rounded-lg border border-a-border px-4 py-2 text-[15px] font-medium">Move stage</div>
            <div className="rounded-lg border border-a-border px-4 py-2 text-[15px] font-medium text-a-bad">Reject</div>
          </div>
        </motion.aside>
      </div>
    </AppWindow>
  )
}
