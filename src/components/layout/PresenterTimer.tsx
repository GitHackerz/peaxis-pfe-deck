import { useEffect, useState } from 'react'

/** Press T to show/hide a presenter clock, R to restart it. Targets 15:00 for the talk (demo not counted). */
export default function PresenterTimer() {
  const [on, setOn] = useState(false)
  const [start, setStart] = useState(() => Date.now())
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 't' || e.key === 'T') { setStart(Date.now()); setNow(Date.now()); setOn((v) => !v) }
      if ((e.key === 'r' || e.key === 'R') && on) { setStart(Date.now()); setNow(Date.now()) }
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [on])

  useEffect(() => {
    if (!on) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [on])

  if (!on) return null
  const s = Math.floor((now - start) / 1000)
  const label = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
  return (
    <div className={`fixed bottom-3 right-16 z-50 rounded-md px-3 py-1 font-mono text-[14px] tabular-nums ${s > 900 ? 'bg-[#FEC849] text-px-navy' : 'bg-px-navy/85 text-white'}`}>{label}</div>
  )
}
