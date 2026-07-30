# PEAXIS — Full 20-minute defense pitch

**Format:** 15 minutes presentation + 5 minutes live demo.  
**Key message:** PEAXIS turns CV information into **evidence a recruiter can inspect**, rather than an opaque AI ranking.

Use this as a speaking script. Do not try to read every word; keep the meaning and make it sound like you.

---

## 0:00–0:50 — Opening / Cover

Imagine two candidates applying for the same job. An AI system gives one candidate a score of 82 and the other 61.

But when the recruiter asks: *Why? What evidence supports this result? Can I trust it?* — many systems cannot answer clearly.

This is the problem I wanted to solve with **PEAXIS**: using AI to assist recruitment without turning hiring into an opaque black box.

Good morning. My name is **Mohamed Habib Allah Bibani**, and today I will present PEAXIS, my end-of-studies project.

The central idea is simple: **AI should provide evidence, not just ranking; the recruiter keeps the final decision.**

To show how I turned this idea into a working system, let me first briefly set the context.

---

## 0:50–1:10 — Agenda / Presentation Plan

In this presentation, I will first explain the recruitment problem and the gap I identified. Then I will introduce the PEAXIS solution.

After that, I will show a short live demo. Finally, I will explain the architecture and the most important technical contribution: the evidence-based matching engine.

The main message to keep in mind during the presentation is: **evidence, not opaque ranking.**

Before looking at the recruitment problem itself, I will briefly explain the engineering environment that shaped the project.

---

## 1:10–1:50 — Internship Host / Prospecter

This project was developed during my internship at Prospecter, an AI-powered B2B sales prospecting company.

At Prospecter, I was exposed to production engineering practices such as multi-tenant SaaS design, LLM integration, Redis caching, and background workers. These practices influenced the architecture of PEAXIS.

However, PEAXIS is an independent project with a different business domain: recruitment. I used the same engineering mindset, but designed the platform and the AI workflow specifically for hiring.

That leads to the real-world problem the project addresses.

---

## 1:50–2:40 — Recruitment Problem / Challenges

Recruitment teams face a difficult workflow. They receive many CVs, compare candidates with job requirements, move applications through a pipeline, and need to make defensible decisions.

Traditional ATS systems are good at storing applications and tracking status. But they often do not help recruiters understand how a candidate actually matches a specific requirement.

At the same time, using a generative AI model directly for ranking creates another risk: the result may be hard to explain, inconsistent, or difficult to audit.

So the problem is not simply “how can we score candidates?” The real question is: **how can we create a useful assessment that remains explainable, controllable, and reliable?**

This is also the gap that guided the PEAXIS product design.

---

## 2:40–3:15 — Market Gap / Objective

This led to the objective of PEAXIS.

PEAXIS combines a candidate-facing job portal, a recruiter workspace, and an AI-assisted assessment workflow. But the assessment is not an autonomous hiring decision.

The platform decomposes the result into individual requirements. For each requirement, the recruiter can see supporting evidence, missing evidence, and the verification state. This makes the score reviewable instead of mysterious.

Let me show how that idea is organized in the actual product.

---

## 3:15–3:55 — Solution Overview

The solution has three main modules.

First, **PEAXIS Core** manages identity, business context, roles, and access controls.

Second, **PEAXIS Jobs** is the candidate side. Candidates can discover jobs, submit a CV, and complete their profile.

Third, **PEAXIS Hire** is the recruiter workspace. Recruiters can follow the pipeline and inspect an assessment for a candidate in relation to a job.

These modules share one platform API and one controlled AI workflow.

Among these modules, PEAXIS Hire is where the central promise becomes visible to the recruiter.

---

## 3:55–4:20 — PEAXIS Hire / Before Demo

For the recruiter, the most important screen is the assessment view.

Instead of seeing only a score such as 72 out of 100, the recruiter can inspect the requirements behind that score. They can see what evidence was found in the candidate profile, what is missing, and whether a claim is verified.

I will now show this flow in the application. The goal of the demo is not to show every feature. It is to demonstrate one complete story: from CV to reviewable assessment.

---

# 4:20–9:20 — Live Demo — 5 minutes

## Demo opening

I will follow one candidate applying for one job. This keeps the flow clear and shows where AI is used and where human review remains necessary.

## Step 1 — Candidate experience (about 1 minute)

Start from PEAXIS Jobs.

Here, the candidate can browse available jobs and open a job description. When the candidate applies, they upload a CV.

The CV is not immediately turned into a hiring decision. First, the system validates the uploaded file and sends the parsing work to the asynchronous AI workflow.

The output is structured candidate information, such as experience, skills, education, and other relevant facts. The candidate can review and confirm this information.

This is important because the platform begins with structured and reviewable data, rather than treating the raw CV as an unexplained black box.

## Step 2 — Recruiter pipeline (about 1 minute)

Now I switch to PEAXIS Hire.

The recruiter sees candidates in the application pipeline. From here, they can open the candidate profile and view the assessment related to this specific job.

The assessment is processed asynchronously. This means the recruiter’s request is not blocked while the AI service works. The platform shows the state of the work, including pending, completed, retry, or failure states.

## Step 3 — Evidence assessment (about 2 minutes)

This is the core feature of PEAXIS.

For each job requirement, the system displays an evaluation. For example, if a role requires a specific skill or a minimum amount of experience, the recruiter can inspect the evidence that supports the evaluation.

The important point is that the LLM does not make the final hiring decision. The model can help classify a cited part of the candidate evidence. Then backend rules determine the satisfaction state, verification state, weight, and final score.

So if the system says that a candidate partially satisfies a requirement, the recruiter can ask: “What evidence was used?” The system can answer that question using the cited candidate information.

If evidence is absent or unclear, the system can show a gap or a verification state instead of pretending to know the answer.

## Step 4 — Close the demo (about 1 minute)

The final score is therefore not an opaque AI opinion. It is a deterministic calculation based on explicit requirements and evidence states.

The recruiter remains responsible for the final decision. PEAXIS provides an auditable recommendation and a structured review process; it does not autonomously hire or reject people.

Now that you have seen the recruiter-facing result, I will explain the technical design that makes this result traceable and reliable.

---

## 9:20–10:15 — Logical Architecture

The architecture separates business authority from AI inference.

The frontend applications communicate with the NestJS platform API. NestJS owns authentication, tenant context, business records, application data, and deterministic business rules.

The AI service is implemented with FastAPI. It performs bounded tasks such as CV parsing, embedding, and evidence classification.

PostgreSQL is the source of truth. It stores application data, evidence records, assessment snapshots, and final evaluations. Redis and BullMQ support queues, locks, and background processing.

This separation means the AI service does not directly control platform data or hiring decisions.

With these boundaries in place, we can now follow the lifecycle of a CV through the system.

---

## 10:15–11:05 — AI Pipeline / CV Parsing

The workflow begins when a candidate uploads a CV.

The platform applies file validation and stores the work as a durable AI task. A dedicated worker then executes the task outside the HTTP request path.

The AI service extracts structured information. After that, the candidate profile can be confirmed and prepared as evidence for matching.

This asynchronous design is important for reliability. AI calls can be slow or fail temporarily, so the API should not wait synchronously for a model response. The queue, worker, and durable work state make failures visible and retryable.

Once the evidence is prepared, the question becomes: how is it transformed into an assessment?

---

## 11:05–12:35 — Evidence Matching Engine

The evidence matching engine is the main technical contribution of the project.

First, a recruiter defines or confirms job requirements. Candidate information is represented as structured evidence claims and evidence chunks.

When an assessment is requested, the platform tries to find direct evidence. If direct evidence is not enough, it can retrieve relevant candidate chunks using vector search. The model can then classify only the bounded, cited evidence it receives.

But the backend remains in control. NestJS applies the deterministic rule logic: requirement weights, experience calculations, satisfaction states, and verification states.

This prevents an opaque system where a model produces a final score without a clear explanation.

The next slide makes this decision logic explicit.

---

## 12:35–13:25 — Scoring and Explainability

The final alignment score is a deterministic calculation.

Each requirement has a weight and an evaluation state. A satisfied requirement receives full value, a partially satisfied one receives partial value, and unsupported states receive no value. The final score is the weighted result of these evaluations.

For every assessment, the platform retains the input snapshot, each requirement evaluation, cited evidence, gaps, and verification state.

Therefore, the score is not only a number. It has an audit trail that a recruiter can inspect.

Of course, an explainable algorithm also needs reliable processing, security, and verification.

---

## 13:25–14:05 — Reliability, Security, and Verification

For reliability, AI work runs through BullMQ and a dedicated worker. This prevents long parsing and assessment operations from blocking user requests.

For security, the platform uses authentication, business-scoped data, file validation, rate limits, and an internal secret for the AI service boundary.

I also included automated checks across unit tests, service-level tests, end-to-end scenarios, and the delivery pipeline.

I want to be precise about the scope: I implemented the workflow and the verification mechanisms, but I do not claim a measured model-accuracy rate, fairness result, or production-scale SLA without a dedicated evaluation protocol.

This distinction between what is delivered and what still needs validation brings me to the conclusion.

---

## 14:05–15:00 — Conclusion / Roadmap

To conclude, PEAXIS is a full-stack, multi-tenant recruitment platform with a candidate portal, recruiter workspace, asynchronous AI processing, and an evidence-based matching engine.

The key result is not simply the use of an LLM. The key result is the engineering boundary around it: the LLM assists with bounded inference, backend rules produce the evaluation, and the recruiter remains responsible for the hiring decision.

The next steps are to harden the access-control boundaries, add measured evaluation for accuracy and fairness, and strengthen operational monitoring before expanding AI capabilities.

My final message is: **PEAXIS shows that AI-assisted recruitment can be useful and innovative without becoming opaque or autonomous. It provides evidence, not just ranking.**

Thank you. I am ready for your questions.

---

## Short answers for likely jury questions

### Does the AI make the hiring decision?

No. The AI performs bounded inference such as parsing or classifying cited evidence. The backend applies deterministic rules, and the recruiter makes the final decision.

### Why use an LLM instead of only keywords?

Keywords miss context. The LLM helps interpret a bounded cited piece of candidate evidence, but it is not allowed to produce an unexplained final hiring decision.

### Why use a queue and worker?

CV parsing and assessment can take time or fail temporarily. A queue makes the work durable, retryable, and non-blocking for the user request.

### How do you explain the score?

The score is calculated from explicit job requirements, weights, and satisfaction states. Each evaluation retains cited evidence, gaps, and a verification state.

### What would you improve next?

I would first strengthen authorization boundaries and audit coverage, then add a measured accuracy and fairness evaluation protocol, observability, and operational performance testing.
