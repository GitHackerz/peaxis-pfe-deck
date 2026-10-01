import type { ComponentType } from 'react'

export type SlideProps = { step: number }

export interface SlideDef {
  id: string
  /** Short label for the navigation tooltip. */
  label: string
  /** Section shown in the footer. */
  section: string
  /** Number of click-to-reveal steps (0 = static). */
  steps: number
  component: ComponentType<SlideProps>
  appendix?: boolean
  /** Hide the centre PEAXIS logo (cover). */
  hideBrand?: boolean
}
