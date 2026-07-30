# PEAXIS — Slide-by-slide 20-minute defense pitch

**Timing:** 15 minutes of slides + 5 minutes live demo.  
**Core message:** **Evidence, not opaque ranking.**

PEAXIS is a launch-oriented SaaS product: Tunisia first, then a MENA expansion direction. It was developed during the final-year internship, but with production-minded concerns: tenant-aware data, authorization, persistence, asynchronous processing, and explainable AI. Do not claim measured accuracy, latency, throughput, fairness, or SLAs until they are formally measured.

This is the living pitch script. It follows the **current 27-slide deck exactly** and should be updated whenever the slide order or content changes.

## Slides 1–7 — Why PEAXIS exists · 0:00–3:10

### Slide 1 — Cover · 0:00–0:40

“Imagine two candidates applying for the same role. One receives a score of 82 and the other 61. If the recruiter asks: why, what evidence supports this, and can I trust it? Many AI systems cannot answer clearly.

PEAXIS addresses this problem: AI should provide evidence, not only ranking. It is not intended to remain a classroom prototype. It is a new SaaS product being prepared for Tunisia, with a MENA expansion direction. That is why I built it with tenant-aware data, durable processing, and explainable AI.”

**Transition:** “First, here is the journey I will take you through.”

### Slide 2 — Presentation Overview · 0:40–0:55

“I will establish the recruitment problem, show PEAXIS and a live workflow, then explain the architecture and AI controls that make an assessment reviewable.”

**Transition:** “The need begins with how recruitment is changing.”

### Slide 3 — Recruitment in the Digital Era · 0:55–1:15

“Application volume, recruiter workload, candidate expectations, and AI adoption are increasing together. The challenge is no longer only processing CVs faster; it is making decisions at scale while preserving trust.”

**Transition:** “The internship environment gave me useful engineering patterns for this challenge.”

### Slide 4 — Prospecter, Internship Host · 1:15–1:35

“Prospecter is an AI-powered B2B SaaS platform. Its use of multi-tenant design, LLM workflows, Redis, and background workers informed the engineering discipline I applied to PEAXIS. PEAXIS itself remains an independent recruitment product.”

**Transition:** “I applied those practices to the more sensitive domain of hiring.”

### Slide 5 — Internship Context · 1:35–1:50

“During the internship I worked with full-stack, AI, and platform-engineering practices. I used them to build a maintainable product foundation rather than a one-time demo.”

**Transition:** “This matters because the recruitment pain is measurable.”

### Slide 6 — Recruitment Challenges · 1:50–2:35

“Average time-to-hire is **42 days**. **75%** of recruiters report overload. **60%** of candidates report no feedback. A bad hire averages **$14.9K**. These are market-context KPIs, not PEAXIS performance claims.

For PEAXIS, they translate to engineering requirements: responsive processing, reviewable results, and a better candidate experience.”

**Transition:** “Existing tools solve parts of the workflow, but the accountability gap remains.”

### Slide 7 — Market Gap · 2:35–3:10

“The gap is an integrated workflow that connects applications, AI assistance, and recruiter accountability. PEAXIS combines evidence-first assessment, human authority, and durable operations in one platform.”

## Slides 8–11 — Delivery and requirements · 3:10–4:40

### Slide 8 — Engineering Methodology

“I used Scrum to split delivery into short sprints and Kanban to track the backlog, work in progress, and completed work. Each sprint followed: plan, build and test, review, then improve. The platform foundation came before the AI layer.”

### Slide 9 — Core Functional Requirements

“The core delivered capabilities are authentication, business context, roles, job management, and application stages. AI becomes useful only when this workflow is reliable.”

### Slide 10 — AI Functional Requirements

“The delivered AI capabilities are CV parsing, evidence matching, explainable review, and reliable background processing. I do not claim interview scheduling or analytics as delivered features.”

### Slide 11 — Non-Functional Requirements

“Security, tenant boundaries, modularity, asynchronous processing, explicit failure states, and explainability are first-class design properties. Measured production-scale SLAs are a future validation step.”

**Transition:** “With the requirements defined, here is the product users interact with.”

## Slides 12–15 — Product and live proof · 4:40–6:15

### Slide 12 — PEAXIS Overview

“Core manages business foundation. Hire is the recruiter workspace. Jobs is the candidate portal. The modules share one controlled platform and AI workflow.”

### Slide 13 — PEAXIS Core

“Core is the SaaS control layer: identity, membership, entitlements, and business context. It provides the tenant-aware foundation for every module.”

### Slide 14 — PEAXIS Hire

“Hire gives recruiters a pipeline and an assessment view. The value is that a score comes with cited evidence, gaps, and verification states.”

### Slide 15 — PEAXIS Jobs

“Jobs supports the candidate journey: discover a role, submit a CV, complete a profile, and follow progress. The submitted profile later becomes grounded evidence for assessment.”

**Transition to demo:** “I will now show one candidate moving from CV upload to a recruiter-reviewable assessment.”

## Live demo — 5 minutes · 6:15–11:15

1. **Candidate upload:** “The candidate submits a CV. The platform validates the file, queues parsing, and returns a processing state; it does not block on an AI request.”
2. **Structured profile:** “The CV becomes structured skills, experience, and citations. This is evidence preparation, not an automatic hiring decision.”
3. **Recruiter workspace:** “The recruiter opens the application and the generated assessment.”
4. **Evidence assessment:** “For a requirement, show one cited proof, one evaluation state, and one gap or verification item. The recruiter can challenge the result.”
5. **Close:** “The model assists with bounded evidence; deterministic backend rules calculate the assessment; the recruiter keeps the final hiring decision.”

**Transition:** “Now that the user outcome is visible, I will explain how it is implemented.”

## Slides 16–24 — Architecture and AI engineering · 11:15–14:30

### Slide 16 — Logical Architecture

“The browser calls NestJS, never Gemini directly. NestJS owns authentication, authorization, tenant context, requirements, applications, and final business decisions. FastAPI is the isolated inference boundary. PostgreSQL is the source of truth; Redis supports queues and cache.”

### Slide 17 — Physical Architecture

“Web applications, API, worker, AI service, PostgreSQL, and Redis run as separate components. A worker can scale independently when CV volume grows, and slow AI work does not degrade the user-facing API.”

### Slide 18 — AI Runtime & Worker

“NestJS validates and authorizes the request, then writes an `AiWorkItem` in PostgreSQL. BullMQ delivers it to a dedicated worker. The worker calls FastAPI, persists the result, and updates a durable pending, processing, completed, or failed state.

The worker is necessary because parsing, embeddings, and classification can take seconds or fail temporarily. It makes work non-blocking, retryable, observable, and durable.”

### Slide 19 — CV Parsing Pipeline

“NestJS validates type, size, signature, and checksum, creates `ResumeParse`, and queues `PARSE_CV`. FastAPI extracts native PDF, DOCX, or TXT text. Google Vision OCR is an optional fallback only for poor PDFs.

Gemini **3.5 Flash** returns strict structured JSON at temperature zero: skills, experience, education, languages, and citations. The output is grounded against the original CV text. Unsupported facts and invalid fields are rejected, while warnings, extraction method, model metadata, and output are saved in PostgreSQL. This produces evidence, not a score.”

### Slide 20 — Evidence-Based Matching Engine

“The recruiter confirms the job requirements. PEAXIS turns the parsed CV into `CandidateEvidenceClaim` records and evidence chunks.

NestJS tries deterministic matching first: normalized text, token and stem matching, and relevant experience-month calculation. Only when direct evidence is missing does it use `gemini-embedding-001`, producing a 768-dimension vector. pgvector searches only that candidate’s chunks and returns at most eight cited results.

Gemini then classifies only supplied citations as direct, related, transferable, ambiguous, or none. It cannot invent a qualification. NestJS owns the final evaluation.”

### Slide 21 — How Matching Is Computed

“Mandatory with no evidence becomes `REQUIRES_VERIFICATION`; preferred with no evidence is `UNKNOWN`; evidence with unmet years is `PARTIALLY_SATISFIED`; evidence and policy satisfied is `SATISFIED`.

The final score is deterministic: required requirements weigh 0.55, experience 0.25, preferred 0.10. Satisfied contributes 100, partially satisfied 60, and other states zero. Transferable evidence receives partial credit. pgvector similarity retrieves citations; it does not rank candidates.”

### Slide 22 — AI Models by Use Case

“PEAXIS uses a Gemini-only model path. The verified configured model for CV parsing and bounded evidence classification is **Gemini 3.5 Flash**. `gemini-embedding-001` produces the 768-dimension semantic vectors. Google Vision OCR is a document-extraction fallback, not the decision engine.

The main point is: Gemini extracts and classifies evidence; NestJS and PostgreSQL calculate the final score.”

### Slide 23 — Performance Optimisations

“Performance comes from architecture, not a claim that the model is instantly fast. Redis reuses bounded parse and embedding results. BullMQ moves slow inference off the request path. Candidate-scoped chunk retrieval limits the amount of evidence processed, and provider retries handle transient failures.

One transparent limit: pgvector is enabled, but there is no ANN vector index in the current baseline migration. That is a measured optimisation step for future scale, not a claim made today.”

### Slide 24 — Technical Challenges & Solutions

“The key challenges were latency, CV reliability, grounding, explainability, and provider failures. The answers are durable workers and retries; file gates, quality checks, and optional OCR; citation-bound classification; persisted snapshots and evaluations; and explicit failure states.

I also make the remaining access-control gap explicit before production. Engineering quality means documenting what is solved and what still needs hardening.”

## Slides 25–27 — Launch path and close · 14:30–15:00

### Slide 25 — Roadmap

“Before widening AI functionality, the next priorities are authorization hardening, operational observability, measured accuracy and fairness evaluation, vector lifecycle management, and performance testing. The objective is to strengthen the existing foundation for launch.”

### Slide 26 — Conclusion

“PEAXIS delivers a candidate portal, recruiter workspace, asynchronous AI processing, and an evidence-based assessment engine. Its contribution is the boundary around AI: Gemini helps interpret evidence, backend rules calculate the result, and the recruiter retains authority.

It is a SaaS foundation aimed at Tunisia first and MENA next: **evidence, not opaque ranking.**”

### Slide 27 — Questions

“Thank you for your attention. I am ready for your questions.”

## If the jury asks for metrics

“The displayed KPIs describe the recruitment problem. I implemented and tested the workflow, but I deliberately do not claim a measured recruitment improvement, model accuracy, fairness, or time saving until I run a controlled evaluation with a representative dataset.”
