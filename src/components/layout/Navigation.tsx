import { useState } from 'react'
import { SLIDES } from '../../lib/slides-data'

interface NavigationProps {
  slideIndex: number
  totalSlides: number
  goTo: (index: number) => void
  goPrev: () => void
  goNext: () => void
}

export default function Navigation({
  slideIndex,
  totalSlides: _totalSlides,
  goTo,
  goPrev,
  goNext,
}: NavigationProps) {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div
      data-navigation
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2"
    >
      {/* Up */}
      <button
        onClick={goPrev}
        className="w-7 h-7 rounded-full flex items-center justify-center text-px-muted hover:text-px-teal hover:bg-px-teal/10 transition-colors"
        aria-label="Previous slide"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot nav */}
      <div className="flex flex-col gap-[6px]">
        {SLIDES.map((slide, i) => {
          const isActive = i === slideIndex
          return (
            <div key={slide.id} className="relative flex items-center">
              {/* Tooltip */}
              {hoveredDot === i && (
                <div className="absolute right-8 whitespace-nowrap bg-px-navy text-white text-[10px] font-medium px-2 py-1 rounded-md pointer-events-none">
                  {slide.label}
                </div>
              )}
              <button
                onClick={() => goTo(i)}
                onMouseEnter={() => setHoveredDot(i)}
                onMouseLeave={() => setHoveredDot(null)}
                className="transition-all duration-200"
                aria-label={slide.label}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:  isActive ? 8 : 5,
                    height: isActive ? 8 : 5,
                    background: isActive
                      ? '#00B8B3'
                      : 'rgba(0,0,0,0.2)',
                    boxShadow: isActive
                      ? '0 0 6px rgba(0,184,179,0.5)'
                      : 'none',
                  }}
                />
              </button>
            </div>
          )
        })}
      </div>

      {/* Down */}
      <button
        onClick={goNext}
        className="w-7 h-7 rounded-full flex items-center justify-center text-px-muted hover:text-px-teal hover:bg-px-teal/10 transition-colors"
        aria-label="Next slide"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Fullscreen */}
      <button
        onClick={toggleFullscreen}
        className="mt-2 w-7 h-7 rounded-full flex items-center justify-center text-px-muted hover:text-px-teal hover:bg-px-teal/10 transition-colors"
        aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      >
        {isFullscreen ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4 1v3H1M8 1v3h3M4 11v-3H1M8 11v-3h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 4V1h3M8 1h3v3M11 8v3H8M4 11H1V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  )
}
