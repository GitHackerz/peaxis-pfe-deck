/**
 * ExportView — rendering surface for PDF export and visual QA.
 * Renders every slide stacked at exactly 1280×720 in its fully revealed state.
 */
import { MotionConfig } from 'framer-motion'
import { useEffect } from 'react'
import { StageChrome } from './App'
import { SLIDES } from './lib/slides-data'

/** `?step=N` renders every slide at reveal step N (capped) — used for visual QA of progressive reveals. */
const forcedStep = new URLSearchParams(window.location.search).get('step')
const stepFor = (max: number) => (forcedStep === null ? max : Math.min(Number(forcedStep), max))

export default function ExportView() {
  useEffect(() => {
    document.body.classList.add('export-mode')
    document.documentElement.classList.add('export-mode')
    for (const el of [document.body, document.documentElement, document.getElementById('root')]) {
      if (!el) continue
      el.style.width = '1280px'
      el.style.height = 'auto'
      el.style.overflow = 'visible'
    }
    return () => {
      document.body.classList.remove('export-mode')
      document.documentElement.classList.remove('export-mode')
    }
  }, [])

  return (
    <MotionConfig reducedMotion="always">
      <div id="export-deck">
        {SLIDES.map((slide, index) => {
          const SlideComp = slide.component
          return (
            <div key={slide.id} className="export-page" data-slide={slide.id}>
              <div className="export-bg" aria-hidden="true" />
              <div className="stage">
                <SlideComp step={stepFor(slide.steps)} />
                <StageChrome index={index} step={stepFor(slide.steps)} />
              </div>
            </div>
          )
        })}
      </div>
    </MotionConfig>
  )
}
