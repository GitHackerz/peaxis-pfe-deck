import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import GridBackground from './components/background/GridBackground'
import LightAurora from './components/background/LightAurora'
import LoadingScreen from './components/layout/LoadingScreen'
import Navigation from './components/layout/Navigation'
import PresenterTimer from './components/layout/PresenterTimer'
import ProgressBar from './components/layout/ProgressBar'
import ExportView from './ExportView'
import { usePresentation } from './hooks/usePresentation'
import { slideVariants } from './lib/animations'
import { MAIN_SLIDE_COUNT, SLIDES } from './lib/slides-data'

const STAGE_W = 1280
const STAGE_H = 720

function useStageScale() {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return scale
}

export default function App() {
  const params = new URLSearchParams(window.location.search)
  return params.get('export') === 'true' ? <ExportView /> : <PresentationApp />
}

/** Logos + footer shared by every slide (rendered inside the 16:9 stage). */
export function StageChrome({ index, step }: { index: number; step: number }) {
  const def = SLIDES[index]
  const mainNo = SLIDES.slice(0, index + 1).filter((s) => !s.appendix).length
  const appendixNo = SLIDES.slice(0, index + 1).filter((s) => s.appendix).length
  const label = def.appendix
    ? `Backup A${appendixNo}`
    : `${String(mainNo).padStart(2, '0')} / ${MAIN_SLIDE_COUNT}`
  return (
    <>
      <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-10 pt-5 pointer-events-none">
        <span><img src="/prospecter-logo.png" alt="Prospecter" style={{ height: 32, width: 'auto' }} /></span>
        {!def.hideBrand && <span><img src="/peaxis-logo.png" alt="PEAXIS" style={{ height: 28, width: 'auto' }} /></span>}
        <span><img src="/esprit-logo.png" alt="ESPRIT" style={{ height: 32, width: 'auto' }} /></span>
      </div>
      <div className={`absolute bottom-[18px] left-[80px] z-40 flex items-center gap-3 text-[12.5px] font-mono tabular-nums text-px-muted`}>
        <span>{label}</span>
        <span className="opacity-40">·</span>
        <span className="uppercase tracking-widest">{def.section}</span>
        {def.steps > 0 && (
          <span className="flex gap-1 pl-2" aria-hidden>
            {Array.from({ length: def.steps + 1 }).map((_, i) => (
              <span key={i} className={`h-[5px] w-[5px] rounded-full ${i <= step ? 'bg-px-teal' : 'bg-black/15'}`} />
            ))}
          </span>
        )}
      </div>
    </>
  )
}

function PresentationApp() {
  const [isLoading, setIsLoading] = useState(true)
  const state = usePresentation()
  const scale = useStageScale()

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, input, [data-no-nav]')) return
      if (e.clientX < window.innerWidth * 0.2) state.goPrev()
      else state.goNext()
    },
    [state],
  )

  const SlideComponent = SLIDES[state.slideIndex].component

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}</AnimatePresence>
      <LightAurora />
      <GridBackground />

      {!isLoading && (
        <div className="fixed inset-0 overflow-hidden" onClick={handleClick}>
          <PresenterTimer />
          <ProgressBar slideIndex={state.slideIndex} totalSlides={state.totalSlides} />
          <div className="stage" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={state.slideIndex}
                variants={slideVariants}
                initial="enter"
                animate="visible"
                exit="exit"
                className="absolute inset-0"
              >
                <SlideComponent step={state.step} />
              </motion.div>
            </AnimatePresence>
            <StageChrome index={state.slideIndex} step={state.step} />
          </div>
          <Navigation
            slideIndex={state.slideIndex}
            totalSlides={state.totalSlides}
            goTo={state.goTo}
            goPrev={state.goPrev}
            goNext={state.goNext}
          />
        </div>
      )}
    </>
  )
}
