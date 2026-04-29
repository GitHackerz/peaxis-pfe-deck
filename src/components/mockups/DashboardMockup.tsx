/**
 * DashboardMockup — Analytics dashboard overview
 * Recreated from peaxis-hire/src/components/dashboard/
 */

const metrics = [
  { label: 'Active Jobs',      value: '12',   trend: '+3',   color: '#00B8B3' },
  { label: 'Total Candidates', value: '248',  trend: '+31',  color: '#001027' },
  { label: 'Avg AI Score',     value: '74%',  trend: '+6%',  color: '#00B8B3', ai: true },
  { label: 'Hired This Month', value: '8',    trend: '+23%', color: '#009E9A' },
]

const funnelStages = [
  { name: 'Applied',   count: 248, color: '#00B8B3', pct: 100 },
  { name: 'Screening', count: 142, color: '#6B7280', pct: 57  },
  { name: 'Interview', count: 67,  color: '#374151', pct: 27  },
  { name: 'Offer',     count: 18,  color: '#FE595A', pct: 7   },
  { name: 'Hired',     count: 8,   color: '#009E9A', pct: 3   },
]

const insights = [
  { text: '3 candidates are "Strong Match" for Senior React Dev', color: '#00B8B3' },
  { text: 'Product Designer role has 47% below-avg AI scores',    color: '#FE595A' },
  { text: 'Time-to-hire improved 12% vs last month',              color: '#374151' },
]

export default function DashboardMockup({ compact = false }: { compact?: boolean }) {
  const f = compact ? 9 : 10
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-[rgba(0,0,0,0.08)] bg-[#F8FAFC] p-3">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-[#001027]" style={{ fontSize: f + 2 }}>Hiring Dashboard</span>
        <span className="px-2 py-0.5 rounded-full text-[#009E9A] bg-[#E6FAF9] font-semibold" style={{ fontSize: f - 1 }}>
          ✦ AI Active
        </span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-4 gap-1.5">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white rounded-xl border border-[rgba(0,0,0,0.06)] p-2.5 flex flex-col gap-1">
            {m.ai && <span style={{ fontSize: 8, color: '#00B8B3' }}>✦ AI</span>}
            <div className="font-extrabold" style={{ fontSize: f + 8, color: m.color, lineHeight: 1 }}>{m.value}</div>
            <div style={{ fontSize: f - 1, color: '#6B7280' }}>{m.label}</div>
            <div className="font-semibold" style={{ fontSize: f - 1, color: '#059669' }}>↑ {m.trend}</div>
          </div>
        ))}
      </div>

      {/* Pipeline funnel */}
      <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.06)] p-3">
        <div className="font-bold text-[#001027] mb-2" style={{ fontSize: f }}>Pipeline Funnel</div>
        <div className="flex flex-col gap-1">
          {funnelStages.map((s) => (
            <div key={s.name} className="flex items-center gap-2">
              <span style={{ fontSize: f - 1, color: '#6B7280', width: 56, flexShrink: 0 }}>{s.name}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
              </div>
              <span className="font-semibold" style={{ fontSize: f - 1, color: '#001027', width: 24, textAlign: 'right', flexShrink: 0 }}>
                {s.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="rounded-xl border p-3" style={{ borderColor: 'rgba(0,184,179,0.2)', background: 'rgba(0,184,179,0.04)' }}>
        <div className="flex items-center gap-1.5 mb-2">
          <span style={{ fontSize: 10, color: '#00B8B3' }}>✦</span>
          <span className="font-bold text-[#001027]" style={{ fontSize: f }}>AI Insights</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {insights.map((ins, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1" style={{ background: ins.color }} />
              <span style={{ fontSize: f - 1, color: '#374151' }}>{ins.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
