import { useCallback, useEffect, useState } from 'react'
import { SLIDES } from '../lib/slides-data'

export interface PresentationState {
  slideIndex: number
  step: number
  totalSlides: number
  isFirst: boolean
  isLast: boolean
  goNext: () => void
  goPrev: () => void
  goTo: (index: number) => void
}

export function usePresentation(): PresentationState {
  const [slideIndex, setSlideIndex] = useState(0)
  const [step, setStep] = useState(SLIDES[0]?.steps ?? 0)

  const goNext = useCallback(() => {
    if (slideIndex < SLIDES.length - 1) {
      const nextIndex = slideIndex + 1
      setSlideIndex(nextIndex)
      setStep(SLIDES[nextIndex]?.steps ?? 0)
    }
  }, [slideIndex])

  const goPrev = useCallback(() => {
    if (slideIndex > 0) {
      const prevIndex = slideIndex - 1
      setSlideIndex(prevIndex)
      setStep(SLIDES[prevIndex]?.steps ?? 0)
    }
  }, [slideIndex])

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setSlideIndex(index)
      setStep(SLIDES[index]?.steps ?? 0)
    }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          goPrev()
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  return {
    slideIndex,
    step,
    totalSlides: SLIDES.length,
    isFirst: slideIndex === 0 && step === 0,
    isLast: slideIndex === SLIDES.length - 1,
    goNext,
    goPrev,
    goTo,
  }
}
