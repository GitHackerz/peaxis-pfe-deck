import { useCallback, useEffect, useState } from 'react'
import { SLIDES } from '../lib/slides-data'

export interface PresentationState {
  slideIndex: number
  step: number
  totalSlides: number
  goNext: () => void
  goPrev: () => void
  goTo: (index: number) => void
}

interface Position { slide: number; step: number }

/**
 * Click/keyboard model: every press first advances the current slide's reveal
 * steps, then moves to the next slide. Going backwards lands on the fully
 * revealed previous slide so the presenter never sees a half-empty slide.
 */
export function usePresentation(): PresentationState {
  const [pos, setPos] = useState<Position>({ slide: 0, step: 0 })

  const goNext = useCallback(() => {
    setPos((p) => {
      if (p.step < SLIDES[p.slide].steps) return { slide: p.slide, step: p.step + 1 }
      if (p.slide < SLIDES.length - 1) return { slide: p.slide + 1, step: 0 }
      return p
    })
  }, [])

  const goPrev = useCallback(() => {
    setPos((p) => {
      if (p.step > 0) return { slide: p.slide, step: p.step - 1 }
      if (p.slide > 0) return { slide: p.slide - 1, step: SLIDES[p.slide - 1].steps }
      return p
    })
  }, [])

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) setPos({ slide: index, step: 0 })
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case 'Enter':
        case ' ':
          e.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault()
          goPrev()
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(SLIDES.length - 1)
          break
        case 'b':
        case 'B': {
          const first = SLIDES.findIndex((x) => x.appendix)
          if (first >= 0) goTo(first)
          break
        }
        case 'f':
        case 'F':
          if (!document.fullscreenElement) void document.documentElement.requestFullscreen()
          else void document.exitFullscreen()
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev, goTo])

  return { slideIndex: pos.slide, step: pos.step, totalSlides: SLIDES.length, goNext, goPrev, goTo }
}
