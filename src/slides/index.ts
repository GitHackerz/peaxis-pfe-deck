import type { SlideDef } from './registry'
import Challenges from './Challenges'
import Conclusion from './Conclusion'
import Context from './Context'
import Cover from './Cover'
import CvUnderstanding from './CvUnderstanding'
import Demo from './Demo'
import DigitalEra from './DigitalEra'
import FunctionalReq from './FunctionalReq'
import Gap from './Gap'
import HireExperience from './HireExperience'
import JobsExperience from './JobsExperience'
import Landscape from './Landscape'
import LogicalArch from './LogicalArch'
import Methodology from './Methodology'
import Monitoring from './Monitoring'
import NonFunctional from './NonFunctional'
import Delivery from './Delivery'
import Perspectives from './Perspectives'
import StoryMeet from './StoryMeet'
import StoryRecruiter from './StoryRecruiter'
import StoryQuestions from './StoryQuestions'
import StoryReal from './StoryReal'
import Plan from './Plan'
import PfeToProduct from './PfeToProduct'
import PlatformOverview from './PlatformOverview'
import ProductionArch from './ProductionArch'
import Questions from './Questions'
import WhyMatch from './WhyMatch'

/** Single source of truth for slide order, labels and reveal-step counts. */
export const SLIDE_REGISTRY: SlideDef[] = [
  { id: 'cover', label: 'Cover', section: 'Introduction', steps: 0, component: Cover, hideBrand: true },
  { id: 'story-1', label: 'Story: Meet Amine', section: 'Story', steps: 3, component: StoryMeet },
  { id: 'story-2', label: 'Story: The recruiter', section: 'Story', steps: 3, component: StoryRecruiter },
  { id: 'story-3', label: 'Story: Questions', section: 'Story', steps: 4, component: StoryQuestions },
  { id: 'story-4', label: 'Story: The real question', section: 'Story', steps: 1, component: StoryReal },
  { id: 'plan', label: 'Presentation plan', section: 'Introduction', steps: 0, component: Plan },
  { id: 'context', label: 'Context', section: 'Context', steps: 1, component: Context },
  { id: 'digital-era', label: 'Recruitment today', section: 'Problem', steps: 2, component: DigitalEra },
  { id: 'challenges', label: 'Challenges', section: 'Problem', steps: 2, component: Challenges },
  { id: 'landscape', label: 'Existing solutions', section: 'Problem', steps: 4, component: Landscape },
  { id: 'gap', label: 'Objective', section: 'Objective', steps: 1, component: Gap },
  { id: 'method', label: 'Methodology', section: 'Methodology', steps: 2, component: Methodology },
  { id: 'functional', label: 'Functional requirements', section: 'Requirements', steps: 3, component: FunctionalReq },
  { id: 'nfr', label: 'Non-functional requirements', section: 'Requirements', steps: 4, component: NonFunctional },
  { id: 'platform', label: 'Platform', section: 'Solution', steps: 1, component: PlatformOverview },
  { id: 'jobs', label: 'PEAXIS Jobs', section: 'Solution', steps: 3, component: JobsExperience },
  { id: 'hire', label: 'PEAXIS Hire', section: 'Solution', steps: 3, component: HireExperience },
  { id: 'architecture', label: 'Logical architecture', section: 'Architecture', steps: 4, component: LogicalArch },
  { id: 'production', label: 'Physical architecture', section: 'Architecture', steps: 3, component: ProductionArch },
  { id: 'cv', label: 'CV understanding', section: 'AI', steps: 3, component: CvUnderstanding },
  { id: 'match', label: 'Why it matches', section: 'AI', steps: 4, component: WhyMatch },
  { id: 'delivery', label: 'Testing & delivery', section: 'Production', steps: 4, component: Delivery },
  { id: 'monitoring', label: 'Monitoring', section: 'Production', steps: 3, component: Monitoring },
  { id: 'pfe-to-product', label: 'PFE to product', section: 'Production', steps: 1, component: PfeToProduct },
  { id: 'perspectives', label: 'Perspectives', section: 'Perspectives', steps: 1, component: Perspectives },
  { id: 'demo', label: 'LIVE DEMO', section: 'Demo', steps: 0, component: Demo },
  { id: 'conclusion', label: 'Conclusion', section: 'Conclusion', steps: 3, component: Conclusion },
  { id: 'questions', label: 'Questions', section: 'Questions', steps: 0, component: Questions },
]
