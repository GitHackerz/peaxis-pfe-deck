# PEAXIS PFE Presentation: AI Engineering Alignment Audit

**Audited:** 2026-07-29  
**Authority:** [AI Engineering Handbook](../../peaxis-workspace/docs/architecture/ai-engineering-handbook.md), then the checked-in implementation.  
**Scope:** the React defense deck. This is an academic-defense audit, not a product-marketing review.

## Decision

The deck should retain its problem, product, and core-architecture sections. Its AI section needed a redesign because it previously described AI at a high level but did not teach the implemented CV-to-evidence-to-assessment path. The updated order makes the engineering contribution explicit:

**problem → solution modules → ownership and architecture → AI runtime → CV parsing → evidence assessment → explainability → operational safeguards → limitations and future hardening.**

## Slide-by-slide audit and delivery narrative

| # | Current title | Status | Problems / implementation alignment | Change and visual treatment | Speaker narrative | Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Cover | Retain | No handbook claim. | Keep minimal. | Introduce PEAXIS as the implemented multi-tenant hiring platform. | 0:20 |
| 2 | Presentation Plan | Retain | The AI engineering section was previously under-specified. | Mention the new runtime and assessment-engine segment when presenting the plan. | Set the journey: problem, solution, implementation, AI engineering, results, future work. | 0:20 |
| 3 | Industry Context | Retain | Product context, not an implementation claim. | No redesign required. | Establish the hiring context. | 0:35 |
| 4 | Recruitment Challenges | Retain | Product problem, not a handbook claim. | No redesign required. | Explain slow CV review, weak traceability, and recruiter workload. | 0:40 |
| 5 | Internship Context | Retain | Academic context, outside handbook scope. | No redesign required. | State the project setting and contribution. | 0:25 |
| 6 | Competitive Analysis | Review wording | External-product claims need independent sources; handbook cannot validate them. | Keep only sourced claims. | Position PEAXIS by its implemented differentiators, not unsupported competitor comparisons. | 0:40 |
| 7 | Market Gap | Retain | Product framing, not an executable-system assertion. | Keep concise. | Connect the gap to evidence-based hiring workflows. | 0:35 |
| 8 | Methodology | Retain | No direct handbook conflict. | Keep. | Explain iterative engineering and validation. | 0:35 |
| 9 | Functional Requirements I | Retain | Must not imply automatic hiring decisions. | Verify wording says assistance / review. | Present core hiring workflows. | 0:40 |
| 10 | Functional Requirements II | Enhance verbally | AI requirements need to distinguish inference from deterministic assessment. | Point forward to the runtime and matching slides. | Explain that AI extracts and classifies; it does not decide to hire. | 0:40 |
| 11 | Non-Functional Requirements | Review wording | Do not claim unavailable scalability, privacy policy, or security controls as complete. | Keep requirements distinct from delivered guarantees. | Explain targets versus currently implemented behavior. | 0:40 |
| 12 | Solution Overview | Retain | High-level module overview remains correct. | Keep. | Introduce Core, Hire, Jobs, and AI support surfaces. | 0:35 |
| 13 | PEAXIS Core | Retain | No handbook conflict. | Keep. | Describe the core platform role. | 0:30 |
| 14 | PEAXIS Hire | Retain | No handbook conflict. | Keep. | Describe recruiter and ATS workflows. | 0:30 |
| 15 | PEAXIS Jobs | Retain | Semantic job search is implemented; it is hybrid FTS plus vectors, not only vector search. | Clarify narration if needed. | Describe candidate-facing discovery and application initiation. | 0:30 |
| 16 | PEAXIS AI Brain | Redesigned | Persona-style “Recruiter / Candidate / Employer AI” obscured runtime ownership. | Replaced with **AI ownership boundaries**: NestJS, dedicated worker, FastAPI, PostgreSQL/pgvector, Redis/BullMQ, human authority. | “NestJS owns policy and records; FastAPI infers; recruiters decide to hire.” | 0:55 |
| 17 | Frontend & API Stack | Retain | Stack description should avoid claiming all frontends are identical; implementation has multiple apps. | Keep. | Establish the application technology base. | 0:35 |
| 18 | Logical Architecture | Partially correct | Too simplified to explain evidence assessment. | Keep as the high-level control flow; use AI runtime slide for detailed execution. | “The frontend presents; the API governs; the worker executes; inference is isolated.” | 0:45 |
| 19 | Physical Architecture | Corrected | Earlier copy implied all components were private; production Compose publishes the API and frontend host ports. | Copy now distinguishes published web/API ports from internal worker, FastAPI, PostgreSQL, and Redis services. | Explain the deployment boundary without claiming a reverse proxy that is not present. | 0:45 |
| 20 | Architecture Decisions | Retain | Correct at a high level; pgvector is retrieval infrastructure, not an authoritative candidate-scoring engine. | Keep with precise narration. | Justify modular monolith, Python isolation, PostgreSQL, BullMQ, and pgvector. | 0:55 |
| 21 | End-to-End AI Pipeline | Replaced | The former pipeline skipped the client/API/worker/provider ownership chain. | Replaced with **AI Runtime Architecture**: Next.js → NestJS API → AiWorkItem → BullMQ → Worker → FastAPI → selected provider; return path persists to PostgreSQL. | Explain synchronous acceptance versus asynchronous inference and persistence. | 1:00 |
| 22 | CV Parsing Pipeline | Added | The most important implemented candidate-intelligence workflow was missing. | New two-phase diagram: upload/file gate/ResumeParse/work/parse result; then confirmation/resumeParsed/claims/chunks/embeddings. | Explain validation, optional OCR, strict JSON validation, status states, and candidate confirmation. | 1:15 |
| 23 | Evidence-Based Matching Engine | Added | The implemented matching engine was not shown; prior slides could be misread as an opaque similarity score. | New flow: confirmed requirements → candidate claims → assessment → requirement evaluation → alignment. Three ownership panels distinguish AI, backend, and human roles. | Explain retrieval only widens cited evidence; deterministic rules calculate satisfaction and score; recruiter decides. | 1:15 |
| 24 | How Matching Is Computed | Added | The earlier matching slide explained ownership but not the actual algorithm. | New technical algorithm: token/stem match → constrained vector fallback → citation-bound classification → state rules → weighted score. | Walk the jury through the exact matching order and formula; stress that semantic retrieval never makes the decision alone. | 1:20 |
| 25 | Explainable AI | Redesigned | “Model output” was misleading: the stored requirement evaluation is a deterministic backend result. | New lifecycle: requirement definition → evidence → optional retrieval → evidence assessment → evaluation → alignment/ranking → review → audit trail. | Explain why every score is explainable and why the LLM cannot invent evidence. | 1:00 |
| 26 | Multi-Tenant Architecture | Review / retain | Membership and tenant scope are implemented widely, but the candidate recommendation visibility path is a known gap. | Retain; do not present tenant isolation as absolute until the gap is remediated. | Explain intended request-level isolation and name the limitation if questioned. | 0:45 |
| 27 | Background Processing | Redesigned | “Retries can recover” and “scale separately” were too generic; no DLQ exists. | New durable-work lifecycle shows PostgreSQL work state, dispatch, worker, FastAPI, persistence, reconciliation, and explicit failure. | Explain that PostgreSQL owns retry state and stale work is reconciled every 30 seconds. | 1:00 |
| 28 | Security Architecture | Review wording | The fast path to generated content lacks an active-membership check; providers receive raw CV content. | Retain controls, present limitations honestly, and avoid a blanket “secure SaaS” claim. | Describe controls and the outstanding authorization / PII governance work. | 0:45 |
| 29 | Database Design | Enhance verbally | AI model names should be explicit. | Mention ResumeParse, CandidateEvidenceClaim, EvidenceChunk, EvidenceAssessment, RequirementEvaluation, and AiWorkItem. | Explain PostgreSQL as the authoritative audit store and pgvector as retrieval support. | 0:55 |
| 30 | REST API Design | Retain | Correct after clarifying derived AI work is asynchronous. | Keep. | Explain API responsibility: guards, contracts, business service, persistence, work dispatch. | 0:40 |
| 31 | AI Models & Routing | Redesigned | “Route by task” suggested routing across providers. One provider is selected per deployment; no silent fallback exists. | New table distinguishes configured-provider inference from deterministic NestJS scoring. | Explain Gemini/Azure configuration, strict startup validation, and provider data exposure. | 0:55 |
| 32 | Performance Optimizations | Redesigned | General performance claims omitted the implemented search/degradation path and vector-index limit. | New slide covers Redis cache, durable worker, hybrid job search, candidate-scoped chunk retrieval, retries, and keyword fallback; calls out no ANN index. | Explain what is optimized now and what remains a measured future improvement. | 0:55 |
| 33 | Technical Challenges & Solutions | Redesigned | Previous outcome claims were too broad and hid implementation gaps. | New table maps latency, CV reliability, grounding, explainability, provider failures, and candidate visibility remediation. | Present the engineering trade-offs and the known access-control gap candidly. | 0:55 |
| 34 | Roadmap & Future Work | Redesigned | Generic roadmap did not follow from the audit. | New priorities: authorization, transactional delivery, reviewer policy, FinOps coverage, prompt controls, vector lifecycle, data governance. | Show a hardening-first roadmap rather than expanding AI features prematurely. | 0:55 |
| 35 | Conclusion | Enhance verbally | The conclusion should restate that AI supports, not decides. | Keep and close with implementation evidence. | “The contribution is an auditable evidence pipeline, not an autonomous hiring system.” | 0:35 |
| 36 | Thank You | Retain | No implementation claim. | Keep minimal. | Invite technical questions around the runtime and assessment engine. | 0:10 |

## Revised technical sequence

1. **AI ownership boundaries** — establishes accountability.
2. **Logical and physical architecture** — separates application design from deployment.
3. **Architecture decisions** — explains the selected constraints.
4. **AI Runtime Architecture** — shows synchronous versus asynchronous control flow.
5. **CV Parsing Pipeline** — turns a résumé into validated structured evidence.
6. **Evidence-Based Matching Engine** — establishes AI, backend, and human responsibility.
7. **How Matching Is Computed** — shows exact matching, vector fallback, state rules, and the score formula.
8. **Explainable AI** — shows the persisted audit lifecycle.
9. **Background Processing** — explains reliability behavior and limitations.
10. **Models, performance, security, database, API** — explains implementation properties.
11. **Challenges and roadmap** — converts known gaps into engineering priorities.

## Required jury message

PEAXIS is not an autonomous hiring system. The probabilistic layer parses, embeds, and classifies bounded evidence. The deterministic NestJS layer owns requirements, validation, satisfaction states, scoring, persistence, and traceability. The recruiter remains responsible for the final hiring decision.
