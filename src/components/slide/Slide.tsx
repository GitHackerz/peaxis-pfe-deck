import type { ReactNode } from 'react'

interface SlideProps {
  section: string
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
  /** Small source label shown bottom-right (external statistics only). */
  source?: string
  /** Content alignment of the header block. */
  align?: 'left' | 'center'
}

/** Standard slide frame: section eyebrow, one large title, one content region. */
export default function Slide({ section, title, lead, children, source, align = 'left' }: SlideProps) {
  const center = align === 'center'
  return (
    <div className="slide-root flex flex-col" style={{ padding: '92px 80px 60px' }}>
      <header className={`flex flex-col gap-2 ${center ? 'items-center text-center' : ''}`}>
        <span className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.2em] text-[#029090]"><span className="h-[2px] w-8 bg-px-teal" />{section}</span>
        <h2 className="text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-px-navy">{title}</h2>
        {lead && <p className="mt-1 max-w-[900px] text-[22px] leading-snug text-px-muted">{lead}</p>}
      </header>
      <div className="relative mt-6 min-h-0 flex-1">{children}</div>
      {source && (
        <p className="absolute bottom-[18px] right-[80px] max-w-[700px] text-right text-[12.5px] text-px-muted">
          {source}
        </p>
      )}
    </div>
  )
}

/** The one sentence the jury should remember. */
export function Takeaway({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-stretch gap-4 ${className}`}>
      <div className="w-[4px] shrink-0 rounded-full bg-px-teal" />
      <p className="text-[24px] font-semibold leading-snug text-px-navy">{children}</p>
    </div>
  )
}
