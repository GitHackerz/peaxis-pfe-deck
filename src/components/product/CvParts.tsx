import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Chip } from './ui'

const mark = (on: boolean) => (on ? 'rounded bg-px-teal/20 px-0.5 underline decoration-px-teal decoration-2 underline-offset-2' : '')

/** Realistic fictitious résumé. `scan` draws the extraction sweep, `evidence` highlights grounded phrases. */
export function CvDocument({ scan, evidence }: { scan: boolean; evidence: boolean }) {
  return (
    <div className="font-app relative h-full w-full overflow-hidden rounded-lg bg-white p-5 text-a-fg shadow-[0_20px_50px_-20px_rgba(0,16,39,0.4)] ring-1 ring-black/10">
      <p className="text-[22px] font-bold leading-tight">AMINA BENALI</p>
      <p className="text-[15px] text-a-mfg">Backend Engineer · Tunis</p>
      <hr className="my-2 border-a-border" />
      <p className="text-[12px] font-bold uppercase tracking-widest text-a-mfg">Experience</p>
      <p className="mt-1 text-[15px] font-semibold">Backend Engineer · Northwind, <span className={mark(evidence)}>2021 – 2025</span></p>
      <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[14px] leading-snug">
        <li>Built REST APIs with <span className={mark(evidence)}>NestJS</span> serving 40k users</li>
        <li>Designed <span className={mark(evidence)}>PostgreSQL</span> schemas and migrations</li>
        <li>Containerized services with <span className={mark(evidence)}>Docker</span></li>
      </ul>
      <p className="mt-2.5 text-[12px] font-bold uppercase tracking-widest text-a-mfg">Skills</p>
      <p className="mt-1 text-[14px]">TypeScript, NestJS, PostgreSQL, Docker, CI/CD</p>
      <p className="mt-2.5 text-[12px] font-bold uppercase tracking-widest text-a-mfg">Education</p>
      <p className="mt-1 text-[14px]">Software Engineering degree, 2021</p>
      {scan && (
        <motion.div
          className="absolute left-0 right-0 h-[56px] bg-gradient-to-b from-transparent via-px-teal/25 to-transparent"
          initial={{ top: -56 }}
          animate={{ top: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      )}
    </div>
  )
}

export function StructuredProfile({ validated }: { validated: boolean }) {
  const row = (label: string, body: React.ReactNode) => (
    <div className="flex items-start gap-3 border-b border-a-border py-2.5 last:border-0">
      <span className="w-24 shrink-0 pt-0.5 text-[12px] font-bold uppercase tracking-wider text-a-mfg">{label}</span>
      <div className="flex-1 text-[16px] font-semibold">{body}</div>
      {validated && <Check size={18} className="mt-0.5 shrink-0 text-a-ok" strokeWidth={3} />}
    </div>
  )
  return (
    <div className="font-app h-full w-full rounded-lg bg-white p-6 text-a-fg shadow-[0_20px_50px_-20px_rgba(0,16,39,0.4)] ring-1 ring-black/10">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[18px] font-bold">Candidate profile</p>
        {validated ? <Chip tone="ok"><Check size={14} strokeWidth={3} />Checked against source</Chip> : <Chip tone="info">Structured by AI</Chip>}
      </div>
      {row('Role', 'Backend Engineer')}
      {row('Experience', <>Northwind · 2021 – 2025 <span className="font-normal text-a-mfg">(4 years)</span></>)}
      {row('Skills', <div className="flex flex-wrap gap-1.5">{['NestJS', 'PostgreSQL', 'Docker', 'TypeScript'].map((s) => <Chip key={s} tone="primary">{s}</Chip>)}</div>)}
      {row('Education', 'Software Engineering · 2021')}
    </div>
  )
}
