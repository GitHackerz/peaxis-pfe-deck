import type { SlideDef } from './registry'
import { DomainDetail, MatchDetail, MonitoringDetail, ProdDetail, QueueDetail, SecurityDetail, TestingDetail } from './Appendix'
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
import HumanAI from './HumanAI'
import JobsExperience from './JobsExperience'
import Landscape from './Landscape'
import LogicalArch from './LogicalArch'
import MethodQuality from './MethodQuality'
import Monitoring from './Monitoring'
import Perspectives from './Perspectives'
import PfeToProduct from './PfeToProduct'
import Pillars from './Pillars'
import PlatformOverview from './PlatformOverview'
import ProductionArch from './ProductionArch'
import Questions from './Questions'
import WhyMatch from './WhyMatch'

/** Single source of truth for slide order, labels and reveal-step counts. */
export const SLIDE_REGISTRY: SlideDef[] = [
  { id: 'cover', label: 'Cover', section: 'Introduction', steps: 0, component: Cover, hideBrand: true },
  { id: 'context', label: 'Context', section: 'Context', steps: 2, component: Context },
  { id: 'digital-era', label: 'Recruitment today', section: 'Problem', steps: 2, component: DigitalEra },
  { id: 'challenges', label: 'Challenges', section: 'Problem', steps: 3, component: Challenges },
  { id: 'landscape', label: 'Landscape', section: 'Problem', steps: 1, component: Landscape },
  { id: 'gap', label: 'Objective', section: 'Problem', steps: 1, component: Gap },
  { id: 'method', label: 'Method & quality', section: 'Method', steps: 1, component: MethodQuality },
  { id: 'functional', label: 'Requirements', section: 'Method', steps: 2, component: FunctionalReq },
  { id: 'platform', label: 'Platform', section: 'Solution', steps: 1, component: PlatformOverview },
  { id: 'jobs', label: 'PEAXIS Jobs', section: 'Solution', steps: 3, component: JobsExperience },
  { id: 'hire', label: 'PEAXIS Hire', section: 'Solution', steps: 3, component: HireExperience },
  { id: 'architecture', label: 'Architecture', section: 'Engineering', steps: 4, component: LogicalArch },
  { id: 'cv', label: 'CV understanding', section: 'Engineering', steps: 3, component: CvUnderstanding },
  { id: 'match', label: 'Why it matches', section: 'Engineering', steps: 4, component: WhyMatch },
  { id: 'human-ai', label: 'Human-controlled AI', section: 'Engineering', steps: 2, component: HumanAI },
  { id: 'production', label: 'Production', section: 'Production', steps: 3, component: ProductionArch },
  { id: 'pillars', label: 'Security & reliability', section: 'Production', steps: 4, component: Pillars },
  { id: 'monitoring', label: 'Monitoring', section: 'Production', steps: 4, component: Monitoring },
  { id: 'pfe-to-product', label: 'PFE to product', section: 'Production', steps: 2, component: PfeToProduct },
  { id: 'perspectives', label: 'Perspectives', section: 'Perspectives', steps: 2, component: Perspectives },
  { id: 'demo', label: 'LIVE DEMO', section: 'Demo', steps: 1, component: Demo },
  { id: 'conclusion', label: 'Conclusion', section: 'Conclusion', steps: 3, component: Conclusion },
  { id: 'questions', label: 'Questions', section: 'Questions', steps: 0, component: Questions },
  { id: 'a-prod', label: 'Backup: infrastructure', section: 'Backup', steps: 0, component: ProdDetail, appendix: true },
  { id: 'a-monitoring', label: 'Backup: monitoring', section: 'Backup', steps: 0, component: MonitoringDetail, appendix: true },
  { id: 'a-security', label: 'Backup: security', section: 'Backup', steps: 0, component: SecurityDetail, appendix: true },
  { id: 'a-match', label: 'Backup: assessment', section: 'Backup', steps: 0, component: MatchDetail, appendix: true },
  { id: 'a-queue', label: 'Backup: async work', section: 'Backup', steps: 0, component: QueueDetail, appendix: true },
  { id: 'a-domain', label: 'Backup: data model', section: 'Backup', steps: 0, component: DomainDetail, appendix: true },
  { id: 'a-testing', label: 'Backup: testing', section: 'Backup', steps: 0, component: TestingDetail, appendix: true },
]
