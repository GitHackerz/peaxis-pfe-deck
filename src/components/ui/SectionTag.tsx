interface SectionTagProps {
  section: string
  number?: string | number
}

export default function SectionTag({ section, number }: SectionTagProps) {
  return (
    <div className="inline-flex items-center gap-2">
      {number && (
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #00B8B3, #44C4F6)' }}
        >
          {number}
        </span>
      )}
      <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--teal)]">
        {section}
      </span>
    </div>
  )
}
