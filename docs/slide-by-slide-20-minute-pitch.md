# PEAXIS — Slide-by-slide 20-minute defense pitch

**Timing:** 15 minutes of slides + 5 minutes live demo.  
**One message to repeat:** **Evidence, not opaque ranking.**

This guide follows the deck **in its exact current order**. Do not read every card. For each slide, deliver the short script, then use the final sentence as your transition to the next slide.

## Important — the problem KPIs

The original problem slide contains these figures. Keep them visible and say them aloud:

- **42 days** average time-to-hire — SHRM 2024
- **75%** of recruiters overloaded — LinkedIn Talent Report
- **60%** of candidates report no feedback — Indeed Survey 2023
- **$14.9K** average cost of a bad hire

They are not product KPIs; they establish why the problem matters. Do **not** invent PEAXIS performance metrics such as accuracy, time saved, or hiring improvement unless you have measured them.

---

## Part 1 — Why PEAXIS exists · 0:00–3:55

### Slide 1 — Cover · 0:00–0:45

“Imagine two candidates applying for the same job. An AI system gives one candidate a score of 82 and the other 61. But when the recruiter asks: *why, what evidence supports this result, and can I trust it?* many systems cannot answer clearly.

This is the problem I wanted to solve with PEAXIS: using AI to assist recruitment without turning hiring into an opaque black box.

Good morning. My name is **Mohamed Habib Allah Bibani**, and today I will present PEAXIS, my end-of-studies project. The central idea is simple: AI should provide evidence, not just ranking; the recruiter keeps the final decision.”

**Transition:** “Let me show you the story of the project in the next 20 minutes.”

### Slide 2 — Presentation Plan · 0:45–1:00

“I will start with the recruitment problem and its impact. Then I will introduce PEAXIS, demonstrate the complete flow in five minutes, and finally explain the engineering decisions that make the AI result traceable.”

**Transition:** “Before the problem, one quick word about the environment in which this project was developed.”

### Slide 3 — Recruitment in the Digital Era · 1:00–1:20

“Recruitment is under pressure from four directions: more applications, the same recruiter capacity, higher candidate expectations, and increasing demand for AI support. So the challenge is no longer just storing CVs; it is making decisions at scale without losing trust.”

**Transition:** “This engineering context was reinforced during my internship.”

### Slide 4 — Prospecter, Internship Host · 1:20–1:40

“My internship host, Prospecter, is an AI-powered B2B outbound platform. Its use of LLM workflows, multi-tenant design, Redis, and background workers informed the engineering approach behind PEAXIS.”

**Transition:** “I reused the engineering discipline, but applied it to a very different and more sensitive domain: hiring.”

### Slide 5 — Internship Context · 1:40–1:55

“PEAXIS is an independent product. During the internship, I worked with full-stack patterns, AI integration, and platform engineering. This project applies these ideas to a recruitment workflow where explainability is essential.”

**Transition:** “So what makes recruitment a serious engineering problem?”

### Slide 6 — Current Recruitment Challenges · 1:55–2:45

“The scale of the problem is visible in these KPIs: average time-to-hire is **42 days**; **75%** of recruiters report overload; and **60%** of candidates report receiving no feedback. The impact of a bad hiring decision can average **$14.9K**.

Behind these figures are four failures: manual screening does not scale, keyword filters miss context, evaluations can be inconsistent, and candidate experience suffers.

For PEAXIS, these are not just business symptoms. They became engineering requirements: keep the system responsive, make every score reviewable, and keep candidates informed.”

**Transition:** “Existing tools solve parts of this workflow, but the central gap remains.”

### Slide 7 — Market Gap · 2:45–3:15

“The gap is an integrated system that combines evidence, human authority, and durable AI operations. PEAXIS connects the candidate journey, recruiter workflow, and assessment logic in one auditable platform.”

**Transition:** “To build that platform methodically, I followed this process.”

### Slide 8 — Engineering Methodology · 3:15–3:35

“I progressed from problem analysis, to requirements and architecture, then MVP delivery, AI integration, and verification. The key principle was incremental delivery: validate the platform foundation before adding AI.”

**Transition:** “These are the capabilities that came out of that process.”

### Slide 9 — Core Platform Requirements · 3:35–3:50

“The platform foundation covers authentication, business context, roles, job management, and application stages. These capabilities make the recruitment workflow usable before AI is introduced.”

**Transition:** “The next requirements are where the AI contribution begins.”

### Slide 10 — AI Workflow Requirements · 3:50–4:10

“The AI workflow must parse CVs, build candidate evidence, calculate alignment, show cited strengths and gaps, and process work reliably in the background. I deliberately do not present interview scheduling or analytics as delivered functionality.”

**Transition:** “With these requirements defined, here is the product architecture.”

---

## Part 2 — The product and live proof · 4:10–9:20

### Slide 11 — Quality Attributes · 4:10–4:30

“The solution also needed operational qualities: security, asynchronous work, explicit failure states, explainability, and modularity. These are implementation properties, not unmeasured production SLAs.”

**Transition:** “Now I can introduce the product itself.”

### Slide 12 — Solution Overview · 4:30–4:50

“PEAXIS has three modules. Core controls identity and business context. Jobs supports candidates. Hire supports recruiters. They share one platform API and one bounded AI workflow.”

**Transition:** “Let me quickly position each module, then I will show the most important flow live.”

### Slide 13 — PEAXIS Core · 4:50–5:00

“Core owns authentication, access, business settings, and feature entitlements. It is the control layer shared by the other modules.”

**Transition:** “On top of this foundation sits the recruiter workspace.”

### Slide 14 — PEAXIS Hire · 5:00–5:15

“PEAXIS Hire gives the recruiter a pipeline and, more importantly, an evidence assessment view. A recruiter can inspect the score, the cited evidence, gaps, and verification state.”

**Transition:** “The other side of the same workflow is the candidate experience.”

### Slide 15 — PEAXIS Jobs · 5:15–5:30

“PEAXIS Jobs lets candidates discover jobs, submit a CV, complete a structured profile, and follow application status. This supplies the evidence that the recruiter later reviews.”

**Transition:** “Now I will show this end-to-end flow in the real application.”

### Live demo — 5:30–10:30 · 5 minutes

#### Demo step 1 — Candidate entry · 5:30–6:25

“I will use one candidate and one job. The candidate discovers a role and uploads a CV. The file is validated and parsing is started asynchronously. At this point, no autonomous hiring decision has been made.”

#### Demo step 2 — Structured candidate data · 6:25–7:10

“The CV is converted into structured candidate information. This is evidence preparation: experience, skills, and profile facts are made available for later review.”

#### Demo step 3 — Recruiter workspace · 7:10–8:00

“Now I switch to the recruiter view. The recruiter sees the candidate in the job pipeline and opens the candidate assessment.”

#### Demo step 4 — Evidence assessment · 8:00–9:45

“This is the main contribution. For each requirement, the system shows the evaluation and the evidence used. A recruiter can see a cited proof, a gap, or a verification state.

The AI does not decide who to hire. It helps classify bounded evidence. The backend applies the deterministic scoring rules, and the recruiter makes the final decision.”

#### Demo step 5 — Close · 9:45–10:30

“The final score is therefore not an unexplained AI opinion. It is a reviewable result based on explicit requirements and evidence. Now that you have seen the user outcome, I will explain the engineering design behind it.”

---

## Part 3 — How the system works · 10:30–14:25

### Slide 16 — AI Ownership Boundaries · 10:30–10:45

“This slide captures the main architectural rule: NestJS owns business rules and records; FastAPI performs inference; the recruiter retains hiring authority.”

**Transition:** “The implementation is organised across four technology layers.”

### Slide 17 — Tech Stack · 10:45–11:00

“The frontend is specialised into product applications. NestJS and Prisma implement the platform. FastAPI provides the inference boundary. PostgreSQL, pgvector, Redis, and BullMQ provide durable data, retrieval, caching, and background execution.”

**Transition:** “These technologies matter because they enforce clear responsibilities.”

### Slide 18 — Logical Architecture · 11:00–11:25

“The client talks to the platform API, not directly to an AI model. The API controls authorization and data. FastAPI handles bounded AI tasks. PostgreSQL remains the source of truth.”

**Transition:** “The physical deployment follows the same separation.”

### Slide 19 — Physical Architecture · 11:25–11:40

“The web apps, API, worker, AI service, database, and queue infrastructure are separated. This makes each responsibility deployable and observable independently.”

**Transition:** “The key architectural decisions appear when a CV enters this system.”

### Slide 20 — Architecture Decisions · 11:40–11:55

“I selected a modular API, a separate inference service, durable queue processing, PostgreSQL as the source of truth, and pgvector only as retrieval support. These choices keep the model inside a controlled boundary.”

**Transition:** “Let us follow a real AI task from its entry point.”

### Slide 21 — End-to-End AI Runtime · 11:55–12:15

“The API validates the request and creates durable work. The worker executes it. FastAPI returns structured inference. The platform stores the result and exposes its status. The user request never waits for the whole AI operation.”

**Transition:** “The first concrete AI task is CV parsing.”

### Slide 22 — CV Parsing Pipeline · 12:15–12:30

“The CV passes file validation, asynchronous parsing, structured extraction, and profile confirmation. Only then is it prepared as candidate evidence.”

**Transition:** “Prepared evidence is useful only if we can match it to a requirement in a controlled way.”

### Slide 23 — Evidence-Based Matching Engine · 12:30–13:05

“A recruiter requirement is linked to candidate claims and evidence. If necessary, vector retrieval finds relevant cited chunks. The model can classify the bounded citation, but backend rules determine satisfaction, verification, and alignment.”

**Transition:** “This leads directly to the scoring model.”

### Slide 24 — Matching Algorithm · 13:05–13:25

“The final score is deterministic: requirements have weights, each has a satisfaction state, and the weighted calculation produces the alignment score. There is no separate opaque cosine score deciding the ranking.”

**Transition:** “And because the score is deterministic, it can be explained.”

### Slide 25 — Explainable AI · 13:25–13:40

“Each assessment stores its input snapshot, requirement evaluations, cited evidence, gaps, and verification states. This is the audit trail behind the score.”

**Transition:** “An explainable design also has to be honest about what is complete and what still needs hardening.”

---

## Part 4 — What is proven and what comes next · 13:40–15:00

### Slide 26 — Implementation Status · 13:40–13:50

“This slide distinguishes delivered functionality from production-hardening work. I consider that distinction important: an academic project should clearly state both its achievements and its limits.”

**Transition:** “One delivered capability that supports reliability is background execution.”

### Slide 27 — Background Processing · 13:50–14:00

“PostgreSQL owns task state. BullMQ and the dedicated worker execute the work asynchronously. This makes retries and failures visible rather than hidden.”

**Transition:** “The same discipline applies to security.”

### Slide 28 — Security Architecture · 14:00–14:10

“The platform uses authentication, tenant context, file gates, rate limits, and service boundaries. The remaining hardening gaps are explicitly documented rather than ignored.”

**Transition:** “The evidence trail itself is persisted in the data model.”

### Slide 29 — AI Data Model · 14:10–14:18

“PostgreSQL stores candidate evidence, assessment snapshots, and requirement evaluations. pgvector helps retrieval, but it does not make the final decision.”

**Transition:** “I also validated the implemented paths.”

### Slide 30 — Verification Evidence · 14:18–14:26

“Verification covers unit, service, E2E, and delivery checks. I do not claim accuracy, fairness, or performance figures without a measured evaluation protocol.”

**Transition:** “The next three slides are technical detail; present them only if time allows or the jury asks.”

### Slide 31 — AI Model Routing · Reserve / 10 seconds if shown

“One provider—Gemini or Azure OpenAI—is configured at startup. There is no silent fallback.”

### Slide 32 — Performance Optimisation · Reserve / 10 seconds if shown

“The design favors bounded retrieval, cache reuse, and background processing over long synchronous AI requests.”

### Slide 33 — Technical Challenges · Reserve / 10 seconds if shown

“The main challenges were evidence quality, authorization boundaries, and operational reliability. They shaped the hardening roadmap.”

### Slide 34 — Future Technical Roadmap · 14:26–14:40

“The next step is to harden the current system before adding more AI: improve authorization coverage, observability, measured accuracy and fairness evaluation, and performance testing.”

**Transition:** “This brings me to the final result of the project.”

### Slide 35 — Conclusion · 14:40–15:00

“PEAXIS delivers a candidate portal, recruiter workspace, asynchronous AI processing, and an evidence-based assessment engine.

The real contribution is the boundary around AI: it helps interpret evidence, backend rules calculate the result, and the recruiter retains the final authority.

PEAXIS demonstrates that AI-assisted recruitment can be innovative without becoming opaque: **evidence, not opaque ranking.** Thank you.”

### Slide 36 — Thank You / Questions

“Thank you for your attention. I am ready for your questions.”

---

## If the jury asks for metrics

Use the **problem KPIs** only as market-context evidence. Be direct about product metrics:

> “I implemented and tested the workflow. I deliberately do not claim a measured recruitment improvement, model accuracy, or time saving until I run a formal evaluation protocol with a representative dataset and benchmark.”

This answer is stronger than inventing a KPI because it shows engineering honesty.
