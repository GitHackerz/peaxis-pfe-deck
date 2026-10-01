import { SLIDE_REGISTRY } from '../slides'

export const SLIDES = SLIDE_REGISTRY
export const MAIN_SLIDE_COUNT = SLIDES.filter((s) => !s.appendix).length
