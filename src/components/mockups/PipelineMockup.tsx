/**
 * PipelineMockup — Simplified 6-column Kanban board
 * Recreated from peaxis-hire/src/components/pipeline/
 * Shows color-coded stages with candidate cards + AI score badges
 */

const stages = [
  { name: 'Applied',   color: '#00B8B3', count: 12, cards: [
    { name: 'Sara M.',    score: 91, flag: 'Strong Match', skills: ['React','TypeScript','Node.js'] },
    { name: 'Ahmed K.',   score: 78, flag: null,           skills: ['Vue.js','JavaScript'] },
  ]},
  { name: 'Screening', color: '#6B7280', count: 7, cards: [
    { name: 'Lina B.',    score: 85, flag: 'Strong Match', skills: ['Python','FastAPI','Redis'] },
    { name: 'Omar T.',    score: 62, flag: null,           skills: ['Django','SQL'] },
  ]},
  { name: 'Interview', color: '#374151', count: 4, cards: [
    { name: 'Youssef A.', score: 88, flag: 'Strong Match', skills: ['NestJS','TypeScript'] },
  ]},
  { name: 'Offer',     color: '#FE595A', count: 2, cards: [
    { name: 'Nour H.',    score: 94, flag: 'Strong Match', skills: ['React','Redux','TS'] },
  ]},
  { name: 'Hired',     color: '#009E9A', count: 1, cards: [
    { name: 'Tarek S.',   score: 96, flag: 'Strong Match', skills: ['Full-Stack','AI'] },
  ]},
  { name: 'Rejected',  color: '#9CA3AF', count: 3, cards: [] },
]

function scoreColor(score: number) {
  if (score >= 85) return { bg: '#E6FAF9', text: '#009E9A' }
  if (score >= 65) return { bg: '#F3F4F6', text: '#374151' }
  return { bg: '#F3F4F6', text: '#6B7280' }
}

export default function PipelineMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="flex gap-2 overflow-hidden rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F8FAFC] p-3"
      style={{ fontSize: compact ? 9 : 10 }}
    >
      {stages.map((stage) => (
        <div key={stage.name} className="flex flex-col gap-1.5" style={{ minWidth: compact ? 90 : 110, flex: 1 }}>
          {/* Column header */}
          <div className="flex items-center justify-between px-1.5 py-1 rounded-lg bg-white border border-[rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-1.5">
              <div className="w-[3px] h-3 rounded-full flex-shrink-0" style={{ background: stage.color }} />
              <span className="font-bold text-[#001027]" style={{ fontSize: compact ? 8 : 9 }}>{stage.name}</span>
            </div>
            <span className="font-bold px-1.5 py-0.5 rounded-full text-white text-[7px]" style={{ background: stage.color }}>
              {stage.count}
            </span>
          </div>

          {/* Cards */}
          {stage.cards.map((card, ci) => {
            const sc = scoreColor(card.score)
            return (
              <div key={ci} className="bg-white rounded-lg border border-[rgba(0,0,0,0.06)] p-2 shadow-sm">
                {/* Avatar + name */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                    style={{ background: stage.color, fontSize: 7 }}
                  >
                    {card.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <span className="font-bold text-[#001027] truncate">{card.name}</span>
                </div>

                {/* AI Score */}
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="text-[#00B8B3]" style={{ fontSize: 8 }}>✦</span>
                  <span
                    className="font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: sc.bg, color: sc.text, fontSize: 8 }}
                  >
                    {card.score}%
                  </span>
                  {card.flag && (
                    <span className="px-1 py-0.5 rounded-full font-semibold text-[#009E9A] bg-[#E6FAF9]" style={{ fontSize: 7 }}>
                      {card.flag}
                    </span>
                  )}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-0.5">
                  {card.skills.slice(0, 2).map(s => (
                    <span key={s} className="px-1 rounded text-[#374151] bg-gray-100" style={{ fontSize: 7 }}>{s}</span>
                  ))}
                  {card.skills.length > 2 && (
                    <span className="px-1 rounded text-[#6B7280] bg-gray-100" style={{ fontSize: 7 }}>+{card.skills.length - 2}</span>
                  )}
                </div>
              </div>
            )
          })}

          {/* Empty column placeholder */}
          {stage.cards.length === 0 && (
            <div className="rounded-lg border-2 border-dashed border-[rgba(0,0,0,0.06)] h-8 flex items-center justify-center">
              <span style={{ fontSize: 7, color: '#9CA3AF' }}>No candidates</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
