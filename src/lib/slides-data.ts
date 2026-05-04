/* Slide registry — defines step counts and labels */
export interface SlideConfig {
  id: string
  steps: number   // 0 = static; N = N progressive step reveals
  label: string   // short human label for nav tooltip
  section?: string // section name for section dividers
  isDivider?: boolean
}

export const SLIDES: SlideConfig[] = [
  // §1 Cover
  { id: 'cover',               steps: 0, label: 'Cover'          },
  // §1b General Introduction
  { id: 'general-intro',       steps: 5, label: 'Introduction'    },
  // §2 Company
  { id: 'company-overview',    steps: 3, label: 'Company'        },
  { id: 'internship-context',  steps: 3, label: 'Context'        },
  // §3 Problem
  { id: 'recruitment-pain',    steps: 3, label: 'Problem'        },
  { id: 'ats-limitations',     steps: 4, label: 'ATS Limits'     },
  { id: 'market-gap',          steps: 3, label: 'Market Gap'     },
  // §4 Functional Requirements
  { id: 'func-req-core',       steps: 5, label: 'Func. Req. I'   },
  { id: 'func-req-ai',         steps: 4, label: 'Func. Req. II'  },
  // §5 Non-Functional Requirements
  { id: 'nfr',                 steps: 6, label: 'NFRs'           },
  // §6 Solution
  { id: 'solution-overview',   steps: 4, label: 'PEAXIS'         },
  { id: 'peaxis-hire',         steps: 4, label: 'Hire'           },
  { id: 'peaxis-jobs',         steps: 3, label: 'Jobs'           },
  // §7 Technologies
  { id: 'frontend-api-stack',  steps: 4, label: 'Frontend/API'   },
  { id: 'ai-infra-stack',      steps: 4, label: 'AI/Infra'       },
  // §8 Logical Architecture
  { id: 'logical-arch',        steps: 4, label: 'Logical Arch.'  },
  // §9 Physical Architecture
  { id: 'physical-arch',       steps: 4, label: 'Physical Arch.' },
  // §10 Demo
  { id: 'demo-recruiter',      steps: 3, label: 'Demo: Hire'     },
  { id: 'demo-candidate',      steps: 3, label: 'Demo: Jobs'     },
  { id: 'demo-ai',             steps: 3, label: 'Demo: AI'       },
  // §11 Results
  { id: 'achievements',        steps: 5, label: 'Results'        },
  { id: 'roadmap',             steps: 3, label: 'Roadmap'        },
  // §12 Conclusion
  { id: 'challenges',          steps: 3, label: 'Challenges'     },
  { id: 'future-scope',        steps: 3, label: 'Future'         },
  // Final consolidated conclusion
  { id: 'general-conclusion',  steps: 4, label: 'Conclusion'      },
  // Thank you
  { id: 'thank-you',           steps: 0, label: 'Thanks'          },
]

export const SLIDE_COUNT = SLIDES.length
