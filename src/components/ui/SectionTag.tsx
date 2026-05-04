interface SectionTagProps {
  section: string
  number?: string | number
}

export default function SectionTag({ section, number }: SectionTagProps) {
  return (
    <div className="inline-flex items-center gap-2">
      {number && (
        <span
          className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: '#E6FAF9', color: '#009E9A', border: '1px solid rgba(0,184,179,0.2)' }}
        >
          {number}
        </span>
      )}
      <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#009E9A' }}>
        {section}
      </span>
    </div>
  )
}
