/**
 * ExportView — Playwright-native PDF export rendering surface.
 * Renders all 26 slides stacked vertically, each at exactly 1280×720px.
 * MotionConfig reducedMotion="always" skips animations → all content fully visible.
 */
import { MotionConfig } from 'framer-motion'
import type { ComponentType } from 'react'
import { useEffect } from 'react'
import { SLIDE_COMPONENTS } from './App'
import { SLIDES } from './lib/slides-data'

type SlideProps = { step: number }

export default function ExportView() {
  useEffect(() => {
    document.body.classList.add('export-mode')
    document.documentElement.classList.add('export-mode')
    document.body.style.width = '1280px'
    document.body.style.height = 'auto'
    document.body.style.overflow = 'visible'
    document.documentElement.style.width = '1280px'
    document.documentElement.style.height = 'auto'
    document.documentElement.style.overflow = 'visible'
    const root = document.getElementById('root')
    if (root) {
      root.style.width = '1280px'
      root.style.height = 'auto'
      root.style.overflow = 'visible'
    }
    return () => {
      document.body.classList.remove('export-mode')
      document.documentElement.classList.remove('export-mode')
      document.body.style.cssText = ''
      document.documentElement.style.cssText = ''
      const r = document.getElementById('root')
      if (r) r.style.cssText = ''
    }
  }, [])

  return (
    <MotionConfig reducedMotion="always">
      <div id="export-deck">
        {SLIDES.map((slide, index) => {
          const SlideComp = SLIDE_COMPONENTS[index] as ComponentType<SlideProps>
          const finalStep = slide.steps
          return (
            <div key={slide.id} className="export-page">
              {/* Export background */}
              <div className="export-bg" aria-hidden="true" />
              <SlideComp step={finalStep} />
            </div>
          )
        })}
      </div>
    </MotionConfig>
  )
}
