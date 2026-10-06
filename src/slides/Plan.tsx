import Slide from '../components/slide/Slide'

const parts = [
  { title: 'Context & problem', detail: 'Why recruitment needs clearer decisions' },
  { title: 'Methodology & requirements', detail: 'How I organized and defined the project' },
  { title: 'The PEAXIS platform', detail: 'The candidate and recruiter journey' },
  { title: 'Architecture, AI & production', detail: 'How the system works and stays reliable' },
  { title: 'Results, perspectives & live demo', detail: 'What exists today and what comes next' },
]

export default function Plan() {
  return (
    <Slide
      section="Introduction"
      title={<>Presentation <span className="gradient-text-teal">plan</span></>}
      lead="From the recruitment problem to a working product."
    >
      <ol className="flex h-full flex-col justify-center pb-2">
        {parts.map(({ title, detail }, index) => (
          <li key={title} className="flex items-center gap-8 border-t border-black/10 px-2 py-[18px] last:border-b">
            <span className="w-12 shrink-0 font-mono text-[22px] font-bold text-[#029090]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="w-[480px] shrink-0 text-[27px] font-bold leading-tight tracking-[-0.01em] text-px-navy">{title}</p>
            <p className="border-l border-px-teal/25 pl-6 text-[18px] leading-snug text-px-muted">{detail}</p>
          </li>
        ))}
      </ol>
    </Slide>
  )
}
