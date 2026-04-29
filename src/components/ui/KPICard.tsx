interface KPICardProps {
  value: string
  label: string
  sublabel?: string
  color?: 'teal' | 'coral' | 'yellow' | 'navy'
}

const colorMap = {
  teal:   { value: '#00B8B3', bg: '#E6FAF9', border: 'rgba(0,184,179,0.2)' },
  coral:  { value: '#FE595A', bg: '#FFF0F0', border: 'rgba(254,89,90,0.2)' },
  yellow: { value: '#B78300', bg: '#FFFBEB', border: 'rgba(254,200,73,0.3)' },
  navy:   { value: '#001027', bg: '#F0F4F8', border: 'rgba(0,16,39,0.1)' },
}

export default function KPICard({ value, label, sublabel, color = 'teal' }: KPICardProps) {
  const c = colorMap[color]
  return (
    <div
      className="flex flex-col items-center justify-center p-5 rounded-2xl text-center"
      style={{ background: c.bg, border: `1px solid ${c.border}` }}
    >
      <div
        className="text-4xl font-extrabold leading-none tracking-tight"
        style={{ color: c.value }}
      >
        {value}
      </div>
      <div className="mt-2 text-xs font-semibold text-[var(--navy)] leading-snug">{label}</div>
      {sublabel && (
        <div className="mt-1 text-[10px] text-[var(--muted)]">{sublabel}</div>
      )}
    </div>
  )
}
