# PEAXIS Professional PFE Redesign Guide

This pass corrects the previous over-minimal direction. The deck should feel like a professional engineering defense: simple enough to present from, but not empty. Each slide keeps visible technical anchors and moves only long explanations into speech.

## Design Rules Used

- Keep one main idea per slide.
- Keep a short objective sentence when it helps academic clarity.
- Prefer diagrams, tables, and grouped cards over paragraphs.
- Keep 3-5 visible technical anchors on most slides.
- Preserve the PEAXIS light visual identity, logos, typography, and color system.
- Avoid the ultra-minimal keynote style when the jury needs engineering evidence.

## Per-Slide Redesign Direction

| # | Slide | Remove | Keep visible | Cleaner layout | Speaker focus |
|---:|---|---|---|---|---|
| 1 | Cover | Extra explanation. | Title, author, school/company, core tech. | Branded centered cover. | Introduce project identity and scope. |
| 2 | Plan | Long agenda narration. | Six defense sections. | 2x3 plan cards. | Explain the talk structure. |
| 3 | Why PEAXIS | Repeated motivation. | Three reasons for the product. | Pillars/cards. | Connect recruitment pain to product need. |
| 4 | Prospecter | Marketing detail. | Company context and engineering environment. | Three concise cards. | Establish real-world context. |
| 5 | Internship | Long role biography. | Mission, responsibilities, contribution. | Timeline/ownership cards. | Explain your role clearly. |
| 6 | Recruitment Pain | Long paragraphs. | Volume, delay, bias, mismatch. | Problem cards with numbers. | Explain recruitment bottlenecks. |
| 7 | ATS Limits | Dense comparison text. | Keyword limits, weak matching, poor transparency. | Comparison table. | Explain why existing ATS tools are insufficient. |
| 8 | Market Gap | Market prose. | Local SaaS, semantic AI, explainability. | Gap cards. | Position PEAXIS technically. |
| 9 | Methodology | Excess process text. | Requirements, design, build, validate. | Lifecycle flow. | Show engineering discipline. |
| 10 | Functional I | Overlong requirements. | Auth, teams, jobs, pipeline, billing. | Requirement cards. | Explain platform foundation. |
| 11 | Functional II | AI feature paragraphs. | Parse, score, explain, recommend, generate. | AI feature cards. | Explain AI scope. |
| 12 | NFRs | Repeated architecture details. | Security, performance, scalability, explainability, modularity. | Quality attribute grid. | Show production quality bar. |
| 13 | Solution | Long product pitch. | Core, Hire, Jobs. | Three product modules. | Explain ecosystem division. |
| 14 | Core | Feature paragraphs. | Tenants, RBAC, billing, settings. | Governance cards. | Explain administration layer. |
| 15 | Hire | Dense ATS copy. | Pipeline, candidates, interviews, analytics. | Recruiter workflow cards. | Explain recruiter workspace. |
| 16 | Jobs | Candidate prose. | Search, apply, match, recommend. | Candidate journey cards. | Explain candidate-facing flow. |
| 17 | AI Brain | Generic AI claims. | Extract, score, explain. | Three-part AI diagram. | Introduce AI service role. |
| 18 | Stack | Too many badges. | Next.js, NestJS, FastAPI, PostgreSQL, Redis, BullMQ. | Layer cards. | Explain stack responsibility by layer. |
| 19 | Logical Architecture | Replace only if unreadable. | Existing diagram and layer labels. | Image-first diagram slide. | Walk through logical layers. |
| 20 | Physical Architecture | Replace only if unreadable. | Existing deployment diagram. | Image-first diagram slide. | Explain deployment/runtime topology. |
| 21 | Architecture Decisions | Long tradeoff paragraphs. | Choice, reason, tradeoff. | 3x2 decision cards. | Justify major architecture choices. |
| 22 | AI Pipeline | Long workflow prose. | CV -> validation -> queue -> AI -> score -> dashboard. | Flow diagram plus sync/async callout. | Explain where queues improve UX. |
| 23 | Hybrid AI | Too much theory. | LLM, algorithm, persistence. | Three responsibility cards plus pipeline. | Explain why AI and rules are separated. |
| 24 | Scoring | Formula paragraph. | 70/20/10 weights and output fields. | Weight cards plus formula callout. | Explain reproducibility. |
| 25 | Explainability | Long example text. | Score, matched, missing, reasoning, summary. | Candidate result mockup. | Explain recruiter trust. |
| 26 | Multi-Tenant | Security prose. | JWT, RBAC, businessId, scoped Prisma query. | Request isolation flow. | Explain SaaS tenant isolation. |
| 27 | Background Processing | Queue explanation paragraph. | Frontend, API, Queue, Worker, AI, DB. | Flow plus four benefits. | Explain no-wait UX and retryability. |
| 28 | Caching | TTL paragraphs. | CV cache, AI cache, embedding cache. | Cache cards with TTLs. | Explain cost and latency reduction. |
| 29 | Security | Long layer descriptions. | JWT, refresh, OAuth, Argon2, RBAC, rate limit, secrets, OWASP. | 4x2 control grid. | Explain layered security. |
| 30 | Database | Full ERD detail. | Business, jobs, applications, candidates, AI results. | Relationship flow plus index/vector/audit cards. | Explain relational + vector design. |
| 31 | REST API | Endpoint list overload. | Controller, DTO, Guard, Service, Prisma. | Request pipeline flow plus 3 examples. | Explain backend maintainability. |
| 32 | AI Routing | Model rationale paragraphs. | Feature, model route, reason. | Compact table. | Explain model selection and cost control. |
| 33 | Performance | Too many optimization claims. | Server components, Redis, BullMQ, indexes, parallel fetching, workers. | Six optimization cards. | Explain scalability mechanisms. |
| 34 | Challenges | Long challenge narrative. | Challenge, solution, outcome. | 3-column table. | Demonstrate engineering maturity. |
| 35 | Metrics | Marketing language. | Modules, APIs, DB models, AI features, queues, embeddings. | KPI grid. | Show technical scale. |
| 36 | Deployment | Dense runtime text. | NGINX, apps, API, workers, FastAPI, DB. | Deployment flow plus scaling cards. | Explain container boundaries. |
| 37 | Roadmap | Product wishlist. | RAG, agents, MCP, realtime, calendar, email AI, analytics, recommendations. | Technical roadmap cards. | Show architecture evolution. |
| 38 | Conclusion | Closing paragraph. | Production SaaS, multi-tenant, AI-powered, explainable, scalable. | Three cards plus concise close. | Summarize engineering value. |
| 39 | Thank You | Extra recap. | Thank you and questions. | Branded closing slide. | Pause and invite questions. |

## Speaker Guidance

Use the slide as a visual contract. Read only the title and one anchor aloud, then explain the reasoning verbally. For technical slides, use this rhythm:

1. Name the engineering problem.
2. Point to the diagram/table.
3. Explain the tradeoff.
4. End with the outcome.

This keeps the deck professional for a PFE jury without turning it back into a report on slides.
