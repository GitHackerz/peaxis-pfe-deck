import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE } from '../../lib/animations'

interface RevealProps {
  show: boolean
  children: ReactNode
  className?: string
  delay?: number
  /** Direction content travels from while appearing. */
  from?: 'up' | 'left' | 'right' | 'none'
}

const OFFSET = {
  up: { x: 0, y: 16 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Progressive reveal that always reserves its layout space, so a slide never
 * "jumps" between clicks and the final state is identical to the export state.
 */
export default function Reveal({ show, children, className = '', delay = 0, from = 'up' }: RevealProps) {
  const o = OFFSET[from]
  return (
    <motion.div
      className={className}
      initial={false}
      animate={show ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: o.x, y: o.y }}
      transition={{ duration: 0.45, ease: EASE, delay: show ? delay : 0 }}
      style={{ pointerEvents: show ? undefined : 'none' }}
      aria-hidden={!show}
    >
      {children}
    </motion.div>
  )
}
