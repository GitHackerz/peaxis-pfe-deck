import { animate } from 'framer-motion'
import { useEffect, useState } from 'react'

const INSTANT = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('export') === 'true'

/** Counts from 0 to `to` when `run` becomes true. Export/PDF renders the final value immediately. */
export default function CountUp({ to, run, format = (n) => String(n) }: { to: number; run: boolean; format?: (n: number) => string }) {
  const [v, setV] = useState(INSTANT ? to : 0)
  useEffect(() => {
    if (INSTANT) { setV(to); return }
    if (!run) { setV(0); return }
    const c = animate(0, to, { duration: 1.3, ease: [0.22, 1, 0.36, 1], onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [run, to])
  return <>{format(v)}</>
}
