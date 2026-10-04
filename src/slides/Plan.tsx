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
      <ol className="flex h-full flex-col justify-center gap-3 pb-2">
        {parts.map(({ title, detail }, index) => (
          <li key={title} className="flex items-center gap-6 rounded-xl border border-black/5 bg-white/75 px-6 py-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-px-teal-lt font-mono text-[20px] font-bold text-[#029090]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="w-[480px] shrink-0 text-[24px] font-bold leading-tight text-px-navy">{title}</p>
            <p className="border-l border-px-teal/25 pl-6 text-[18px] leading-snug text-px-muted">{detail}</p>
          </li>
        ))}
      </ol>
    </Slide>
  )
}
