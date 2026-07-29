# PEAXIS PFE Engineering Enhancement Spec

This document accompanies the updated React deck. It captures the engineering review, new technical slide specifications, speaker notes, timing, and redundancy recommendations requested for the final defense.

## Updated Table Of Contents

1. Introduction & Context
2. Problem Analysis
3. Methodology & Requirements
4. Proposed Solution
5. Architecture & Engineering
6. Results & Close

## Updated Slide Order

1. Cover
2. Presentation Plan
3. Why PEAXIS
4. Prospecter
5. Internship Context
6. Recruitment Pain
7. ATS Limitations
8. Market Gap
9. Methodology
10. Functional Requirements I
11. Functional Requirements II
12. Non-Functional Requirements
13. Solution Overview
14. PEAXIS Core
15. PEAXIS Hire
16. PEAXIS Jobs
17. PEAXIS AI Brain
18. Tech Stack
19. Logical Architecture
20. Physical Architecture
21. Architecture Decisions
22. End-to-End AI Pipeline
23. Hybrid AI Decision Engine
24. Deterministic Match Scoring Algorithm
25. Explainable AI
26. Multi-Tenant Architecture
27. Background Processing
28. Caching Strategy
29. Security Architecture
30. Database Design
31. REST API Design
32. AI Models & Routing
33. Performance Optimizations
34. Technical Challenges & Engineering Solutions
35. Engineering Metrics
36. Deployment Architecture
37. Future Technical Roadmap
38. Conclusion
39. Thank You

## Existing Slide Review

| Existing slide | Technical depth assessment | Action |
|---|---|---|
| Cover | Clear identity slide. No technical depth needed. | Keep unchanged. |
| Presentation Plan | Needed alignment with the deeper engineering section. | Updated section 5 to "Architecture & Engineering". |
| Why PEAXIS | Good motivation. Mostly product framing. | Keep, speak briefly. |
| Prospecter | Useful business context, not an engineering slide. | Keep, avoid long product narration. |
| Internship Context | Good academic framing. | Keep. |
| Recruitment Pain | Strong problem signal. | Keep, use it to justify system requirements. |
| ATS Limitations | Good comparison slide. Risk of overlap with Market Gap. | Keep if time allows; can merge with Market Gap if defense time is reduced. |
| Market Gap | Useful market differentiation, but less engineering-heavy. | Keep short. |
| Methodology | Good process slide. | Keep. |
| Functional Requirements I | Strong scope definition. | Keep. |
| Functional Requirements II | Good AI feature requirements. | Keep. |
| Non-Functional Requirements | Good bridge into architecture. | Keep; avoid repeating details now covered in deep-dive slides. |
| Solution Overview | Clear modular product architecture. | Keep. |
| PEAXIS Core | Good domain module overview. | Keep. |
| PEAXIS Hire | Good workflow overview. | Keep. |
| PEAXIS Jobs | Good candidate-side overview. | Keep. |
| PEAXIS AI Brain | Important differentiator, but previously high-level. | Keep; new slides expand the AI internals. |
| Tech Stack | Good layer summary. | Keep; new decisions slide explains why these choices were made. |
| Logical Architecture | Good diagram, but lacks decision rationale. | Keep diagram; new slides provide rationale and data flows. |
| Physical Architecture | Good deployment context, but lacks operational explanation. | Keep diagram; new deployment slide explains runtime boundaries. |
| Conclusion | Previously mixed metrics, lessons, and roadmap. | Keep as wrap-up; technical roadmap now has its own slide. |
| Thank You | Appropriate close. | Keep unchanged. |

Unregistered demo slide files exist in the repository, but they are not part of the active slide registry. They were left out to avoid changing the scope of the defense unexpectedly.

## New Slide Specifications

### 21. Architecture Decisions

- Objective: Explain why the architecture choices were made and which alternatives were rejected.
- Layout: 3 x 2 decision cards.
- Diagram: Decision matrix with chosen approach, alternative, reason, and tradeoff.
- Key talking points: Modular monolith before microservices; separate AI service; Next.js over generic SPA; PostgreSQL over NoSQL; BullMQ over synchronous AI; pgvector over keyword-only search.
- Speaker notes: Say that each decision optimizes for delivery risk, operational complexity, and production behavior. Do not claim microservices are always worse.
- Expected jury question: "Why not full microservices?" Suggested answer: "The platform is modular, but full microservices would add distributed transactions, deployment overhead, and observability requirements before the domain stabilizes."
- Time: 45 seconds.
- Value added: Converts a technology list into an architectural argument.

### 22. End-to-End AI Pipeline

- Objective: Show how a candidate upload becomes an explainable recruiter result.
- Layout: Two-row flow diagram plus sync/async split.
- Diagram: Candidate Upload to NestJS Validation to BullMQ to FastAPI to Gemini to deterministic scoring to database to recruiter dashboard.
- Key talking points: API validates quickly; BullMQ decouples heavy AI; workers persist durable results.
- Speaker notes: Emphasize where the user waits and where the system continues in the background. Do not describe queues as magic scalability.
- Expected jury question: "What happens if the AI call fails?" Suggested answer: "The job remains durable, retries can run, and the application record is not lost."
- Time: 50 seconds.
- Value added: Explains the production workflow instead of only listing AI features.

### 23. Hybrid AI Decision Engine

- Objective: Clarify the division between LLM reasoning and deterministic scoring.
- Layout: Three responsibility cards plus decision pipeline.
- Diagram: Resume and job criteria to LLM extraction to rules engine to explainable result.
- Key talking points: LLM handles language; algorithm handles scoring; persistence stores evidence.
- Speaker notes: Say that the separation improves cost, performance, reproducibility, and reliability. Do not imply the LLM is the final authority.
- Expected jury question: "Why not let the LLM produce the score?" Suggested answer: "A pure LLM score is harder to reproduce and audit. Deterministic scoring makes the business decision stable."
- Time: 55 seconds.
- Value added: Highlights the strongest technical differentiator.

### 24. Deterministic Match Scoring Algorithm

- Objective: Make the matching formula visible and defensible.
- Layout: Four scoring stages, formula bar, output contract.
- Diagram: Required skill coverage, nice-to-have coverage, experience fit, and final score.
- Key talking points: Weighted score; normalization; component breakdown; reproducibility.
- Speaker notes: Explain that weights can be tuned, but the same normalized inputs return the same score. Do not overfit the formula as universally perfect.
- Expected jury question: "How did you choose the weights?" Suggested answer: "Required skills dominate because they represent role constraints; nice-to-have skills and experience fit refine ranking."
- Time: 50 seconds.
- Value added: Shows the project was engineered with an auditable algorithm.

### 25. Explainable AI

- Objective: Demonstrate how recruiters understand recommendations.
- Layout: Candidate AI result mock panel plus explanation evidence cards.
- Diagram: Score, matched skills, missing skills, reasoning, and summary.
- Key talking points: Recruiters can audit fit; missing skills are visible; explanations support decision-making.
- Speaker notes: Frame this as transparency, not automatic hiring. Do not say the AI replaces recruiters.
- Expected jury question: "Can recruiters challenge the AI?" Suggested answer: "Yes. The recommendation exposes score components and evidence rather than hiding the decision."
- Time: 45 seconds.
- Value added: Connects AI output to human decision trust.

### 26. Multi-Tenant Architecture

- Objective: Explain tenant isolation in a shared SaaS platform.
- Layout: Request isolation flow plus control table.
- Diagram: JWT claims to RBAC guard to businessId query scope to tenant data.
- Key talking points: Shared infrastructure; separated data; tenant-owned rows; RBAC.
- Speaker notes: Make clear that multi-tenancy is enforced at both authorization and data access levels. Do not say shared infrastructure means shared access.
- Expected jury question: "What prevents cross-tenant data access?" Suggested answer: "Tenant-owned queries are scoped by businessId after identity and role checks."
- Time: 50 seconds.
- Value added: Shows SaaS maturity beyond single-user CRUD.

### 27. Background Processing

- Objective: Explain why users never wait for AI work to complete.
- Layout: Frontend to API to queue to workers to notification flow.
- Diagram: BullMQ processing lifecycle.
- Key talking points: Durable intent; worker isolation; retry; progress visibility.
- Speaker notes: Explain that the application record is created first, then AI enrichment follows. Do not overpromise realtime completion.
- Expected jury question: "Why not process directly in the request?" Suggested answer: "AI latency and failures would degrade the interactive API path."
- Time: 45 seconds.
- Value added: Shows reliability and UX engineering.

### 28. Caching Strategy

- Objective: Explain how Redis reduces latency and model cost.
- Layout: Three cache cards plus fingerprint flow.
- Diagram: Request fingerprint to Redis lookup to persist refresh.
- Key talking points: CV parsing cache; AI response cache; embedding cache; TTLs; cost reduction.
- Speaker notes: Explain cache invalidation through stable input fingerprints and TTLs. Do not claim every AI call is cached forever.
- Expected jury question: "How do you avoid stale AI answers?" Suggested answer: "Cache keys include stable input content and route metadata, and TTLs bound reuse."
- Time: 40 seconds.
- Value added: Adds operational cost and performance thinking.

### 29. Security Architecture

- Objective: Present security as layered controls.
- Layout: 4 x 2 security layer grid.
- Diagram: Authentication, password storage, authorization, rate limiting, service secrets, OWASP controls, tenant isolation, auditability.
- Key talking points: JWT, refresh tokens, OAuth, Argon2, RBAC, rate limiting, service boundaries.
- Speaker notes: Keep this concrete and implementation-focused. Do not present security as only a checklist.
- Expected jury question: "Where are the highest-risk boundaries?" Suggested answer: "Uploads, auth endpoints, AI service calls, and tenant-owned data access."
- Time: 50 seconds.
- Value added: Demonstrates production risk awareness.

### 30. Database Design

- Objective: Show the relational model and vector extensions.
- Layout: Entity row, relationship flow, indexes/vector/audit cards.
- Diagram: Business to Jobs to Applications to AI Results.
- Key talking points: Business, users, jobs, candidates, applications, interviews, AI results, indexes, pgvector.
- Speaker notes: Explain why PostgreSQL is appropriate for workflow consistency. Do not present vector search as replacing relational modeling.
- Expected jury question: "Why not NoSQL?" Suggested answer: "The domain has strong relationships and transactions; vectors extend relational data rather than replacing it."
- Time: 55 seconds.
- Value added: Grounds the platform in data architecture.

### 31. REST API Design

- Objective: Explain clean backend module structure.
- Layout: Controller to DTO to guard to service to Prisma flow plus endpoint examples.
- Diagram: NestJS request handling pipeline.
- Key talking points: Controllers own HTTP; DTOs validate; guards enforce policy; services implement business logic; Prisma persists.
- Speaker notes: Use one endpoint example and walk through it quickly. Do not list all 60 endpoints.
- Expected jury question: "How do you keep modules maintainable?" Suggested answer: "Each module has a consistent controller, DTO, guard, service, and persistence boundary."
- Time: 45 seconds.
- Value added: Shows backend structure and maintainability.

### 32. AI Models & Routing

- Objective: Explain why different AI features use different model routes.
- Layout: Feature, model route, reason, latency, cost table.
- Diagram: Routing table for CV parsing, summaries, job description, embeddings, resume analysis.
- Key talking points: Route by task; escalate only when quality need justifies cost; cache repeated inputs.
- Speaker notes: Avoid claiming specific model versions as permanent; describe routing categories. Do not say all tasks need the strongest model.
- Expected jury question: "How do you control cost?" Suggested answer: "Fast routes handle high-volume tasks, stronger routes are reserved for quality-critical generation, and caches avoid duplicate calls."
- Time: 45 seconds.
- Value added: Shows AI system design rather than simple API usage.

### 33. Performance Optimizations

- Objective: Connect implementation choices to scalability and user experience.
- Layout: Six optimization cards plus impact summary.
- Diagram: Server Components, Redis, BullMQ, Prisma indexes, parallel fetching, workers.
- Key talking points: Less client JS; cached AI; asynchronous work; indexed data; concurrent loading.
- Speaker notes: Present these as architecture mechanisms, not unsupported benchmark claims.
- Expected jury question: "Which optimization has the biggest impact?" Suggested answer: "For AI workflows, BullMQ and caching have the largest user-visible impact because they remove model latency from the request path."
- Time: 45 seconds.
- Value added: Makes scalability concrete.

### 34. Technical Challenges & Engineering Solutions

- Objective: Demonstrate engineering maturity through solved problems.
- Layout: Challenge, root cause, solution, outcome table.
- Diagram: Six engineering challenge rows.
- Key talking points: Async AI, LLM cost, multi-tenancy, semantic search, explainability, Docker networking.
- Speaker notes: Use this slide as a reviewer-friendly summary of hard problems. Do not turn it into a feature list.
- Expected jury question: "Which challenge was hardest?" Suggested answer: "Coordinating reliable AI processing with a responsive user experience, because it required queues, workers, persistence, status, and retry behavior."
- Time: 60 seconds.
- Value added: Shows implementation learning and tradeoff handling.

### 35. Engineering Metrics

- Objective: Show technical scale without marketing language.
- Layout: KPI grid.
- Diagram: Modules, REST APIs, DB models, AI features, frontends, AI service, queues, embeddings.
- Key talking points: 15+ modules, 60+ APIs, 25+ models, 6 AI features, 3 frontends, 1 AI service, 2 queues, 1536-dim embeddings.
- Speaker notes: State that metrics support project scale, but quality comes from architecture and correctness. Do not equate line count with quality.
- Expected jury question: "How do these metrics prove production readiness?" Suggested answer: "They do not prove it alone; they show scope, while the previous slides show architecture, security, queues, isolation, and deployability."
- Time: 35 seconds.
- Value added: Gives the jury a quick technical scale snapshot.

### 36. Deployment Architecture

- Objective: Explain how the system runs in production containers.
- Layout: Two deployment flow rows plus scalability cards.
- Diagram: NGINX to Next.js apps to NestJS API to BullMQ workers to FastAPI to Redis to PostgreSQL.
- Key talking points: Containerized services, internal networking, independent scaling.
- Speaker notes: Explain the operational boundary of each container. Do not overstate Kubernetes readiness if Docker Compose is the current target.
- Expected jury question: "How would you scale it?" Suggested answer: "Scale stateless web/API services horizontally, add workers for queue throughput, and tune database/Redis separately."
- Time: 50 seconds.
- Value added: Turns physical architecture into an operational story.

### 37. Future Technical Roadmap

- Objective: Show future work as technical evolution, not product wishlisting.
- Layout: 4 x 2 roadmap cards plus foundation pills.
- Diagram: RAG, AI agents, MCP, realtime collaboration, calendar integration, email AI, analytics, recommendation engine.
- Key talking points: Current architecture supports future extensions through modular APIs, queues, vectors, and tenant isolation.
- Speaker notes: Present as technically enabled evolution. Do not pitch features disconnected from the current architecture.
- Expected jury question: "Which roadmap item is most natural next?" Suggested answer: "RAG, because the platform already has AI service boundaries, embeddings, and persistent candidate/job evidence."
- Time: 45 seconds.
- Value added: Shows architecture extensibility.

## Visual Recommendations

- Keep the existing light theme, PEAXIS teal, navy, coral, and yellow accents.
- Prefer compact flow diagrams and tables over long bullet lists.
- Keep one engineering objective per slide.
- Use the existing architecture images as anchors; avoid replacing them unless the image itself becomes outdated.
- Keep deep-dive slides to 35-60 seconds each; they are designed as defense evidence, not lecture slides.
- Avoid decorative visuals that do not carry technical information.

## Redundancy Recommendations

- If the talk must be shortened, merge "ATS Limitations" and "Market Gap" into one problem comparison slide.
- Keep "Non-Functional Requirements", but speak it as a requirements bridge; avoid repeating details later covered by security, caching, and performance slides.
- Keep "PEAXIS AI Brain" as the high-level AI module slide; the new AI pipeline, hybrid engine, scoring, and explainability slides provide the technical details.
- Keep the conclusion concise because engineering metrics and technical roadmap now have dedicated slides.
- Do not add the unregistered demo slides unless the defense includes a live demo section.

## Estimated Presentation Timing

| Section | Slides | Target time |
|---|---:|---:|
| Introduction & Context | 1-5 | 2:00 |
| Problem Analysis | 6-8 | 2:15 |
| Methodology & Requirements | 9-12 | 3:00 |
| Proposed Solution | 13-17 | 3:30 |
| Architecture & Technologies | 18-20 | 2:30 |
| Engineering Deep Dive | 21-37 | 11:30 |
| Results & Close | 38-39 | 1:15 |
| Total | 39 | 24:00 |

Recommended delivery rule: spend less time on product context and more time on the engineering deep dive. The new section is designed to answer "why this architecture", "what problem was solved", and "what tradeoff was made".
