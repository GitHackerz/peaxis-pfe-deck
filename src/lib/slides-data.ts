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
  { id: 'general-intro',       steps: 5, label: 'Why PEAXIS'      },
  // §2 Company
  { id: 'company-overview',    steps: 3, label: 'Prospecter'     },
  { id: 'internship-context',  steps: 3, label: 'Internship'     },
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
  { id: 'solution-overview',   steps: 4, label: 'Overview'       },
  { id: 'peaxis-core',         steps: 3, label: 'Core Platform'  },
  { id: 'peaxis-hire',         steps: 13, label: 'Hire ATS'       },
  { id: 'peaxis-jobs',         steps: 13, label: 'Jobs Portal'    },
  // §7 Technologies
  { id: 'frontend-api-stack',  steps: 5, label: 'Tech Stack'     },
  // §8 Logical Architecture
  { id: 'logical-arch',        steps: 4, label: 'Logical Arch.'  },
  // §9 Physical Architecture
  { id: 'physical-arch',       steps: 4, label: 'Physical Arch.' },
  // §10 Conclusion
  { id: 'conclusion',          steps: 5, label: 'Conclusion'     },
  // Thank you
  { id: 'thank-you',           steps: 0, label: 'Thanks'          },
]

export const SLIDE_COUNT = SLIDES.length
