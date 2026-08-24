# PEAXIS — 20-Minute Oral Defense Pitch

**Core message:** **Evidence, not opaque ranking.**

---

# Slide 1 — PEAXIS · 00:00–00:45

**Pitch**

“Imagine a recruiter opening two applications for the same role. One candidate receives **82**. The other receives **61**.

At first glance, the higher score seems obvious. [Pause]

But then the recruiter asks one simple question: **why?** What evidence produced this recommendation? Is it a skill, relevant experience, or an answer that nobody can inspect?

That question is the starting point of PEAXIS: an AI-assisted recruitment platform built around **evidence, not opaque ranking**.

My name is Habib, and I will show how PEAXIS keeps AI useful while keeping the hiring decision human and reviewable.

To answer that question clearly, I will take you from the recruitment problem to the system that makes each assessment traceable.”

---

# Slide 2 — Presentation Plan · 00:45–01:05

**Pitch**

“I will first establish the recruitment problem and the gap it creates. Then I will introduce PEAXIS and its user-facing modules.

After that, I will focus on the engineering contribution: the architecture, the asynchronous AI runtime, the evidence-matching algorithm, and the safeguards that keep the system credible.

Before discussing the system, let us look at the recruitment environment.”

---

# Slide 3 — Recruitment in the Digital Era · 01:05–01:30

**Pitch**

“Recruitment is becoming more digital while application volume, recruiter workload, candidate expectations, and AI adoption are increasing.

So the challenge is no longer only how to process CVs faster. It is how to process them at scale **without losing the reasoning behind the decision**.

That pressure appears in a few concrete challenges.”

---

# Slide 4 — Recruitment Challenges · 01:30–02:05

**Pitch**

“The market context is clear: average time-to-hire is **42 days**. **75%** of recruiters report overload. **60%** of candidates report no feedback. And a bad hire averages **14.9 thousand dollars**.

These are not PEAXIS performance claims. They describe the problem space. [Pause]

For this project, they become engineering requirements: responsive processing, reviewable assessments, and a better candidate journey.

This work was developed in a setting where production-minded engineering practices mattered.”

---

# Slide 5 — Internship Context · 02:05–02:25

**Pitch**

“This project was completed during my final-year internship at Prospecter, an AI-powered B2B SaaS platform.

The experience informed the engineering discipline behind PEAXIS: full-stack delivery, AI workflows, queues, and tenant-aware design. PEAXIS itself remains an independent recruitment product.

With that foundation, I compared existing approaches before defining the gap.”

---

# Slide 6 — Competitive Analysis · 02:25–02:55

**Pitch**

“This comparison is a positioning view, not a claim that established platforms have no ATS or AI capability.

The intended difference in PEAXIS is the combination of an implemented candidate portal, recruitment workflow, and evidence-based assessment in one SME-oriented product.

The question is not ‘does a score exist?’ [Pause] The question is: **can the recruiter inspect what supports it?**

That leads to the market gap PEAXIS addresses.”

---

# Slide 7 — Market Gap · 02:55–03:20

**Pitch**

“The gap is not simply another place to store applications. It is an integrated workflow that connects applications, AI assistance, and recruiter accountability.

PEAXIS brings together candidate experience, recruiter workflow, durable operations, and **evidence-first assessment**—while preserving human authority.

To build that responsibly, I first organized the delivery process and requirements.”

---

# Slide 8 — Engineering Methodology · 03:20–03:45

**Pitch**

“I used Scrum to organize short delivery sprints and Kanban to track the backlog, work in progress, and completed work.

Each cycle followed the same logic: plan, build and test, review, then improve. The platform foundation came before the AI layer.

That foundation starts with the non-negotiable recruitment workflow.”

---

# Slide 9 — Core Functional Requirements · 03:45–04:05

**Pitch**

“The core capabilities are authentication, business context, roles, job management, and application stages.

These are not secondary details. AI becomes useful only when the underlying workflow is reliable and the business context is controlled.

Once that workflow exists, AI can assist at carefully defined points.”

---

# Slide 10 — AI Functional Requirements · 04:05–04:25

**Pitch**

“The delivered AI capabilities are CV parsing, evidence matching, explainable review, and reliable background processing.

The boundary matters: AI prepares and classifies evidence. It does **not** make a hiring decision. I also do not present interview scheduling or analytics as delivered features.

The same precision applies to the non-functional requirements.”

---

# Slide 11 — Non-Functional Requirements · 04:25–04:50

**Pitch**

“Security, tenant boundaries, modularity, asynchronous processing, explicit failure states, and explainability are first-class design properties.

They guide the implementation. They are not a substitute for measured production-scale SLAs, which remain a future validation step.

With the requirements established, here is the product structure that implements them.”

---

# Slide 12 — PEAXIS Overview · 04:50–05:15

**Pitch**

“PEAXIS is organized into three user-facing modules on one controlled platform.

**Core** manages the business foundation. **Hire** is the recruiter workspace. **Jobs** is the candidate portal.

They share the same controlled workflow and AI boundaries rather than operating as isolated tools.

Let us start with the layer that makes the product a SaaS platform.”

---

# Slide 13 — PEAXIS Core · 05:15–05:35

**Pitch**

“Core is the SaaS control layer. It manages identity, membership, entitlements, and business context.

This tenant-aware foundation allows the other modules to operate within a defined organizational boundary.

On top of that foundation, recruiters work in PEAXIS Hire.”

---

# Slide 14 — PEAXIS Hire · 05:35–05:55

**Pitch**

“Hire gives recruiters the application pipeline and the assessment workspace.

The important difference is that the recruiter does not receive only a score. They can inspect cited evidence, identified gaps, and verification states before making their own decision.

The other side of the same workflow is the candidate journey.”

---

# Slide 15 — PEAXIS Jobs · 05:55–06:15

**Pitch**

“Jobs supports the candidate journey: discovering a role, submitting a CV, completing a profile, and following progress.

That profile later becomes grounded evidence for assessment. At this stage, it is evidence preparation—not an automatic hiring decision.

Before going deeper into the runtime, I want to make the ownership boundaries explicit.”

---

# Slide 16 — AI Ownership Boundaries · 06:15–06:40

**Pitch**

“PEAXIS separates responsibility deliberately.

NestJS owns authorization, tenant scope, business records, deterministic assessment rules, and persistence. A dedicated worker executes durable AI work and retries. FastAPI performs parsing, embeddings, citation-bound classification, and supported content generation.

PostgreSQL with pgvector is authoritative for records, snapshots, and vectors. Redis with BullMQ carries queues, locks, heartbeats, and non-authoritative caches.

In one sentence: **AI infers; the platform owns rules and records; recruiters decide.**

Those boundaries are implemented through four technology layers.”

---

# Slide 17 — Tech Stack: Four Layers · 06:40–07:05

**Pitch**

“The frontend layer uses specialized Next.js applications for Core, Hire, Jobs, Admin, and Landing, sharing React, Tailwind, and TypeScript patterns.

The platform API is NestJS with Prisma, JWT, and TypeScript. FastAPI provides stateless inference. PostgreSQL is the authoritative data store; pgvector supports retrieval; Redis and BullMQ support asynchronous work.

The value of this stack is not the number of technologies. It is the clarity of responsibility.

Now I will show how those layers connect logically.”

---

# Slide 18 — Logical Architecture · 07:05–07:40

**Pitch**

“Read this diagram from left to right.

The client applications—PEAXIS Hire, PEAXIS Jobs, and the landing experience—communicate with the NestJS Core API. The API owns modules such as authentication, jobs, applications, billing, analytics, and BullMQ queue management.

Below it, FastAPI provides the AI services: CV parsing, match scoring support, hiring copilot support, and job-description generation. On the right, PostgreSQL with PGVector, Prisma, Redis, and blob storage provide the data layer.

The browser never calls the AI provider directly. The API remains the control point.

The logical view explains responsibility; the physical view explains deployment separation.”

---

# Slide 19 — Physical Architecture · 07:40–08:15

**Pitch**

“Here, the same system is shown as deployable components.

Users access the frontend applications. The application layer contains the API Core and BullMQ workers. The AI intelligence layer contains the AI service and its external Gemini provider. PostgreSQL, Redis, and blob storage sit in the data and storage layer.

Web applications and the API publish host ports. The worker, FastAPI, PostgreSQL, and Redis communicate inside the service network. This keeps slow AI work away from the user-facing request path.

These boundaries come from several explicit architecture decisions.”

---

# Slide 20 — Architecture Decisions · 08:15–08:50

**Pitch**

“I selected a modular monolith to keep the domain cohesive without unnecessary distributed complexity.

FastAPI isolates the Python AI stack from core API load. Specialized Next.js applications serve the platform, recruiter, candidate, administration, and landing experiences. PostgreSQL supports relational workflows with strong consistency, while Prisma manages access to it.

BullMQ moves heavy AI work outside the request lifecycle. pgvector supports retrieval for job discovery and cited evidence—it is **not** the authoritative candidate-scoring engine.

The next slide follows one AI request through that architecture.”

---

# Slide 21 — AI Runtime Architecture · 08:50–09:35

**Pitch**

“The request begins in a web application and reaches NestJS. NestJS validates and authorizes it, then writes an **AiWorkItem** in PostgreSQL.

BullMQ delivers the task to a dedicated worker. The worker calls FastAPI for inference, then persists the result and updates the durable state: pending, processing, completed, or failed.

This separation matters because parsing, embeddings, and classification can take seconds or fail temporarily. The HTTP request is accepted quickly; the long-running work is durable, retryable, observable, and non-blocking.

A CV parsing request is the clearest example of this runtime in action.”

---

# Slide 22 — CV Parsing Pipeline · 09:35–10:30

**Pitch**

“First, NestJS validates the file type, size, signature, and checksum. It creates a **ResumeParse** record and queues **PARSE_CV**.

FastAPI extracts native PDF, DOCX, or TXT text. Google Vision OCR is an optional fallback only for poor PDFs.

Gemini **3.5 Flash** returns strict structured JSON at temperature zero: skills, experience, education, languages, and citations. The output is grounded against the original CV text. Unsupported facts and invalid fields are rejected; warnings, extraction method, model metadata, and output are stored in PostgreSQL.

The candidate then confirms the structured profile. Only then do we build evidence claims, chunks, and embeddings. This produces **evidence, not a score**.

Once the CV is represented as evidence, the question becomes how a job requirement is evaluated.”

---

# Slide 23 — Evidence-Based Matching Engine · 10:30–11:35

**Pitch**

“The recruiter first confirms the job requirements. PEAXIS represents the parsed CV as **CandidateEvidenceClaim** records and evidence chunks.

NestJS tries deterministic matching first: normalized text, token matching, stem matching, and relevant experience-month calculation.

Only if direct evidence is missing does the system use **gemini-embedding-001** to create a **768-dimension** vector. PGVector searches only that candidate’s chunks and returns at most **eight** cited results.

Gemini then classifies only the supplied citations as direct, related, transferable, ambiguous, or none. It cannot invent a qualification. [Pause]

NestJS owns the final requirement evaluation. The recruiter owns the hiring decision.

That flow produces a result only through explicit state rules and a deterministic formula.”

---

# Slide 24 — How Matching Is Computed · 11:35–12:40

**Pitch**

“The assessment uses explicit states.

A mandatory requirement with no evidence becomes **REQUIRES_VERIFICATION**. A preferred requirement with no evidence is **UNKNOWN**. Evidence with unmet years becomes **PARTIALLY_SATISFIED**. Evidence that satisfies the policy becomes **SATISFIED**.

The current GENERAL:v1 score is deterministic: it is the rounded sum of weight times state value times evidence credit, divided by the total weight.

Required requirements weigh **0.55**, experience **0.25**, and preferred requirements **0.10**. SATISFIED contributes **100**; PARTIALLY_SATISFIED contributes **60**; other states contribute zero. Transferable evidence receives partial credit at **0.60**.

PGVector similarity retrieves citations. It does **not** rank candidates. The current ranking score is this same alignment score; there is no separate opaque cosine ranking.

Because the assessment is built from these records, the result can be explained end to end.”

---

# Slide 25 — Explainable AI · 12:40–13:35

**Pitch**

“Every score traces a requirement back to cited candidate evidence.

The lifecycle is: recruiter-confirmed requirement, candidate evidence, optional retrieved chunks, stored evidence assessment, requirement evaluation, alignment score, recruiter review, and audit trail.

The LLM can classify supplied citations. NestJS applies the scoring and verification rules. The recruiter review is stored.

One limitation remains explicit: score-changing override effects are not yet part of a versioned scoring policy. That is future work, not a claim of completion.

Traceability is useful only if the underlying tenant context is also controlled.”

---

# Slide 26 — Multi-Tenant Architecture · 13:35–14:15

**Pitch**

“PEAXIS uses membership and business context to scope protected platform flows and domain records.

This means the system is designed around request-level organizational boundaries rather than a shared, unscoped workflow.

However, I do not present tenant isolation as absolute. Candidate recommendation visibility has a known access-control gap that needs remediation before production. Naming that limitation is part of the design review.

The same transparent approach applies to reliability of the AI work itself.”

---

# Slide 27 — Background Processing · 14:15–15:10

**Pitch**

“PostgreSQL owns the work state. BullMQ delivers execution to the worker.

The lifecycle is: **AiWorkItem** in PostgreSQL, dispatch to the queue, worker claim and execution, FastAPI inference, then persisted result and status.

Worker attempts and availability are persisted in PostgreSQL; BullMQ jobs use one delivery attempt. On start and every **30 seconds**, the worker reconciles stale queued or pending work.

After configured retries, work, generated content, and assessments can enter an explicit failed state.

One limit is explicit: there is no dedicated dead-letter queue implemented.

Reliability must sit alongside security controls and their remaining gaps.”

---

# Slide 28 — Security Architecture · 15:10–15:55

**Pitch**

“The implemented controls include JWT-based authenticated API access, active tenant membership in protected flows, business-scoped domain records, rate limits, file size, MIME, extension, and signature checks, plus a service secret for internal FastAPI calls.

Two areas need explicit attention. Raw CV content is sent to the provider for inference. And candidate recommendation visibility needs remediation.

Before production, active membership must be enforced for generated content, and provider retention, consent, PII classification, and redaction policy must be formalized.

Those controls and decisions are reflected in the data model itself.”

---

# Slide 29 — AI Data Model · 15:55–16:30

**Pitch**

“PostgreSQL stores the evidence trail.

On the candidate side, the path is ResumeParse, confirmed parsed profile, EvidenceClaim, EvidenceChunk, and optional vector(768) support.

On the assessment side, a requirement definition and AiWorkItem lead to an EvidenceAssessment with its input snapshot and score, then RequirementEvaluation with state and citation.

PostgreSQL owns workflow state, candidate facts, assessment snapshots, and retries. Vectors belong to evidence chunks for retrieval; no whole-candidate embedding drives the final score.

Stale-chunk cleanup and an ANN vector index remain roadmap items.

The API is the contract that protects this state from the client side.”

---

# Slide 30 — REST API Design · 16:30–17:00

**Pitch**

“The REST API is responsible for guards, contracts, business services, persistence, and work dispatch.

It validates the request and applies authorization and business rules before writing authoritative state. Derived AI work is then dispatched asynchronously rather than being executed inside the request itself.

That keeps the API deterministic and keeps the inference boundary explicit.

Inside the inference boundary, each model has a narrowly defined role.”

---

# Slide 31 — AI Models by Use Case · 17:00–17:35

**Pitch**

“PEAXIS uses a Gemini-only model path.

Gemini **3.5 Flash** produces strict structured CV JSON and classifies supplied citations only. **gemini-embedding-001** creates **768-dimensional** vectors for semantic retrieval with pgvector. Google Vision OCR is a fallback for poor PDFs.

The final **0 to 100** calculation is not an LLM output. It is deterministic NestJS and PostgreSQL logic.

So the model extracts or classifies evidence; the backend calculates the result.

The next question is how the architecture keeps this workflow responsive without claiming instant AI.”

---

# Slide 32 — Performance Optimizations · 17:35–18:10

**Pitch**

“The performance approach is architectural, not a claim that the model is instantly fast.

Redis reuses bounded parse, embedding, and selected-generation results, but never becomes the source of truth. BullMQ moves slow inference out of HTTP requests. Hybrid job search merges PostgreSQL full-text results with pgvector semantic results.

Evidence retrieval is candidate-scoped and returns only a small cited set. The provider client retries transient failures. If query embedding fails, public job search still returns keyword results with a degraded status.

A known limit remains: pgvector is enabled, but the baseline migration does not create an ANN vector index.

These choices came directly from the technical challenges encountered during implementation.”

---

# Slide 33 — Technical Challenges & Solutions · 18:10–18:45

**Pitch**

“The main challenges were latency, CV reliability, grounding, explainability, provider outage, and access control.

The responses are durable work and retries; file gates, quality checks, and optional OCR; citation-bound classification; persisted snapshots, evaluations, and citations; and explicit failure states.

The candidate recommendation visibility gap is documented before production. That is deliberate: engineering quality includes making unresolved risks visible, not hiding them behind the successful path.

For that reason, the roadmap starts with hardening—not with adding more AI features.”

---

# Slide 34 — Roadmap & Future Work · 18:45–19:25

**Pitch**

“The near-term priorities are access control, atomic delivery through a transactional outbox pattern, and an explicit versioned reviewer-override policy.

Mid-term work covers FinOps reconciliation for chargeable AI calls, centralized prompt construction with tests for user-controlled inputs, and vector lifecycle management before introducing an ANN index.

Longer term, expansion should remain governed through tenant-authorized NestJS contracts, alongside formal provider retention, PII classification, consent, and operational redaction policies.

The direction is clear: harden the delivered system before widening AI capability.

That brings me back to the question from the opening.”

---

# Slide 35 — Conclusion · 19:25–19:50

**Pitch**

“At the beginning, I asked what a recruiter should see behind a recommendation.

PEAXIS delivers a candidate portal, a recruiter workspace, asynchronous AI processing, and an evidence-based assessment engine.

Its contribution is the boundary around AI: Gemini helps interpret bounded evidence; deterministic backend rules calculate the assessment; and the recruiter retains authority.

PEAXIS is therefore an auditable evidence pipeline—not an autonomous hiring system.

Thank you for your attention.”

---

# Slide 36 — Thank You · 19:50–20:00

**Pitch**

“Thank you for your attention. I am ready for your questions.”

**Pause**

[Pause] [Smile] Look across the jury before taking the first question.

---

## Q&A anchors

**Does AI hire candidates?**  
“No. AI parses, retrieves, and classifies bounded evidence. NestJS applies deterministic assessment rules, and the recruiter makes the hiring decision.”

**What about accuracy or fairness?**  
“I implemented a reviewable assessment pipeline. I do not claim measured model accuracy, fairness, latency, throughput, or recruitment improvement until a controlled evaluation is performed on a representative dataset.”

**Why not use vector similarity as the ranking?**  
“Vectors retrieve candidate-scoped citations when direct evidence is missing. They do not make the final decision. The alignment score comes from explicit requirement states, weights, and evidence credit.”
