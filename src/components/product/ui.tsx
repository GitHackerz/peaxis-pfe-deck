import { motion } from 'framer-motion'
import { Check, CircleHelp } from 'lucide-react'
import type { ReactNode } from 'react'

/** Browser chrome around reconstructed PEAXIS product screens (fictitious data only). */
export function AppWindow({ url, children, className = '', style }: { url: string; children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`font-app relative overflow-hidden rounded-xl bg-a-bg text-a-fg shadow-[0_24px_60px_-20px_rgba(0,16,39,0.35)] ring-1 ring-black/10 ${className}`} style={style}>
      <div className="flex h-9 items-center gap-2 border-b border-a-border bg-white px-4">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-4 rounded-md bg-a-muted px-3 py-0.5 text-[13px] text-a-mfg">{url}</span>
      </div>
      <div className="relative h-[calc(100%-2.25rem)]">{children}</div>
    </div>
  )
}

const AVATAR_TONES = ['bg-[#DDF5F3] text-[#0B7F7B]', 'bg-[#E0ECFB] text-[#1D4E89]', 'bg-[#FDE9D9] text-[#9A4A12]', 'bg-[#EADFFB] text-[#5B33A8]']

export function Avatar({ name, size = 36, tone }: { name: string; size?: number; tone?: number }) {
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('')
  const t = AVATAR_TONES[(tone ?? name.length) % AVATAR_TONES.length]
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full font-semibold ${t}`} style={{ width: size, height: size, fontSize: size * 0.38 }}>
      {initials}
    </span>
  )
}

export type Tone = 'ok' | 'warn' | 'info' | 'muted' | 'primary' | 'bad'
const TONES: Record<Tone, string> = {
  ok: 'bg-a-ok-s text-a-ok',
  warn: 'bg-a-warn-s text-a-warn',
  info: 'bg-a-info-s text-a-info',
  muted: 'bg-a-muted text-a-mfg',
  primary: 'bg-a-accent text-a-primary',
  bad: 'bg-a-bad-s text-a-bad',
}

export function Chip({ tone = 'muted', children, className = '' }: { tone?: Tone; children: ReactNode; className?: string }) {
  return <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-[3px] text-[13px] font-medium ${TONES[tone]} ${className}`}>{children}</span>
}

export function ScoreRing({ value, size = 64, stroke = 7, label }: { value: number; size?: number; stroke?: number; label?: string }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E2E8F0" strokeWidth={stroke} />
        <motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#029090" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: c * (1 - value / 100) }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="font-bold" style={{ fontSize: size * 0.3 }}>{value}%</span>
        {label && <span className="mt-0.5 text-a-mfg" style={{ fontSize: Math.max(10, size * 0.14) }}>{label}</span>}
      </div>
    </div>
  )
}

export type Satisfaction = 'SATISFIED' | 'VERIFY'

export function StatusMark({ status }: { status: Satisfaction }) {
  return status === 'SATISFIED' ? (
    <Chip tone="ok"><Check size={14} strokeWidth={3} /> Satisfied</Chip>
  ) : (
    <Chip tone="warn"><CircleHelp size={14} strokeWidth={2.5} /> Needs verification</Chip>
  )
}

/** Example evidence used consistently across the Hire drawer and the matching slide. */
export const EXAMPLE_REQUIREMENTS: { label: string; badge: string; status: Satisfaction; evidence: string }[] = [
  { label: 'NestJS', badge: 'Required', status: 'SATISFIED', evidence: '“Built REST APIs with NestJS…”' },
  { label: 'PostgreSQL', badge: 'Required', status: 'SATISFIED', evidence: '“Designed PostgreSQL schemas…”' },
  { label: 'Docker', badge: 'Required', status: 'SATISFIED', evidence: '“Containerized services with Docker…”' },
  { label: '3+ years backend', badge: 'Required', status: 'SATISFIED', evidence: '“Backend engineer, 2021 – 2025”' },
  { label: 'Kubernetes', badge: 'Nice to have', status: 'VERIFY', evidence: 'No evidence found in the CV' },
]
