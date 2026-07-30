/* Slide registry — defines step counts and labels */
export interface SlideConfig {
  id: string
  steps: number   // 0 = static; N = N progressive step reveals
  label: string   // short human label for nav tooltip
  section?: string // section name for section dividers
  isDivider?: boolean
}

export const SLIDES: SlideConfig[] = [
  // §1 Introduction
  { id: 'cover',               steps: 0, label: 'Cover'          },
  { id: 'presentation-plan',   steps: 0, label: 'Plan'           },
  // §2 Industry & Problem
  { id: 'industry-context',    steps: 5, label: 'Industry'       },
  { id: 'company-overview',    steps: 3, label: 'Prospecter'     },
  // §3 Internship
  { id: 'internship-context',  steps: 2, label: 'Internship'     },
  { id: 'recruitment-challenges', steps: 3, label: 'Problem'     },
  // §4 Existing Solutions & Gap
  { id: 'market-gap',          steps: 3, label: 'Market Gap'     },
  // §5 Methodology & Requirements
  { id: 'methodology',         steps: 2, label: 'Methodology'    },
  { id: 'func-req-core',       steps: 5, label: 'Func. Req. I'   },
  { id: 'func-req-ai',         steps: 4, label: 'Func. Req. II'  },
  { id: 'nfr',                 steps: 6, label: 'NFRs'           },
  // §6 Proposed Solution
  { id: 'solution-overview',   steps: 4, label: 'Overview'       },
  { id: 'peaxis-core',         steps: 3, label: 'Core Platform'  },
  { id: 'peaxis-hire',         steps: 4, label: 'Hire ATS'       },
  { id: 'peaxis-jobs',         steps: 4, label: 'Jobs Portal'    },
  { id: 'peaxis-ai-brain',     steps: 3, label: 'AI Brain'       },
  // §7 Architecture & Technologies
  { id: 'frontend-api-stack',  steps: 5, label: 'Tech Stack'     },
  { id: 'logical-arch',        steps: 5, label: 'Logical Arch.'  },
  { id: 'physical-arch',       steps: 3, label: 'Physical Arch.' },
  // §8 Engineering Deep Dive
  { id: 'architecture-decisions', steps: 4, label: 'Decisions'      },
  { id: 'ai-runtime',             steps: 3, label: 'AI Runtime'     },
  { id: 'cv-parsing',             steps: 3, label: 'CV Parsing'     },
  { id: 'matching-engine',        steps: 3, label: 'Matching'       },
  { id: 'matching-algorithm',     steps: 3, label: 'Score Algorithm' },
  { id: 'explainable-ai',         steps: 3, label: 'Explainability' },
  { id: 'implementation-status',  steps: 3, label: 'Status'         },
  { id: 'background-processing',  steps: 3, label: 'Background'     },
  { id: 'security-arch',          steps: 4, label: 'Security'       },
  { id: 'database-design',        steps: 3, label: 'Database'       },
  { id: 'verification-evidence',  steps: 3, label: 'Verification'   },
  { id: 'ai-model-routing',       steps: 4, label: 'AI Routing'     },
  { id: 'performance-optim',      steps: 4, label: 'Performance'    },
  { id: 'technical-challenges',   steps: 3, label: 'Challenges'     },
  // §9 Roadmap
  { id: 'technical-roadmap',      steps: 3, label: 'Roadmap'        },
  // §10 Results & Conclusion
  { id: 'conclusion',          steps: 4, label: 'Conclusion'     },
  // Thank you
  { id: 'thank-you',           steps: 0, label: 'Thanks'          },
]

export const SLIDE_COUNT = SLIDES.length

