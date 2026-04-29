import type { Variants } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const
export const EASE_IN = [0.4, 0, 1, 1] as const

/* ── Slide-level transitions ────────────────────────────────────────────── */
export const slideVariants: Variants = {
  enter: { opacity: 0, y: 24, scale: 0.985 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
  exit: {
    opacity: 0, y: -16, scale: 0.98,
    transition: { duration: 0.3, ease: EASE_IN },
  },
}

/* ── Cinema entrance (hero) ──────────────────────────────────────────────  */
export const cinemaEntrance: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 1.1, ease: EASE },
  },
}

/* ── Stagger containers ──────────────────────────────────────────────────  */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}

/* ── Item variants ────────────────────────────────────────────────────────  */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
}

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/* ── Loading-screen variants ──────────────────────────────────────────────  */
export const logoReveal: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

export const loadingExit: Variants = {
  visible: { opacity: 1 },
  exit: { opacity: 0, scale: 1.04, transition: { duration: 0.7, ease: EASE_IN } },
}

/* ── Node / architecture diagram ──────────────────────────────────────────  */
export const nodeExpand: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
}
