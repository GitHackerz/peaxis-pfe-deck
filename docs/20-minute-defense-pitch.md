# PEAXIS — 20-minute defense pitch

**Target:** 15 minutes of presentation + 5 minutes of demo.  
**Core message:** PEAXIS does not let an LLM make a hiring decision. It converts CV evidence into a traceable, deterministic assessment that a recruiter can review and own.

## Your one-line opening

> "A recruiter should never have to ask: *why did the system recommend this candidate?* PEAXIS was built to answer that question with evidence."

Do not read slide text. State the claim, point at the visual, then explain only the detail the jury needs.

## Run of show

| Time | Slides to show | What you say | Transition |
|---|---|---|---|
| 0:00–0:35 | Cover | "Recruitment teams receive many CVs, but ranking people is not enough. They need a result they can inspect and justify." | "That is the problem PEAXIS addresses." |
| 0:35–0:55 | The story in 20 minutes | "I will show the problem, the product, a short demo, then the engineering choices that make the AI reviewable." | "First, the setting." |
| 0:55–1:35 | Prospecter + Internship Context | "This work was completed during my internship at Prospecter. I transferred production ideas—modular services, queues, and tenant-aware design—into an independent PEAXIS product." | "The product focus changed, but the engineering discipline remained." |
| 1:35–2:35 | Recruitment Challenges + Market Gap | "The issue is not only finding candidates. It is explaining the match, keeping the recruiter in control, and processing CVs reliably." | "So I designed PEAXIS around evidence, not opaque ranking." |
| 2:35–3:20 | Solution Overview | "PEAXIS has three roles: Core controls access and business context; Jobs supports candidates; Hire gives recruiters the assessment workspace." | "The important promise is what the recruiter sees." |
| 3:20–4:05 | PEAXIS Hire | "The recruiter sees the pipeline, opens a profile, and can inspect score, evidence, gaps, and verification state." | "Let me show this instead of describing it." |
| 4:05–9:05 | **Live demo — 5 min** | Follow the demo script below. | "Now that you have seen the outcome, here is how I made it reliable." |
| 9:05–10:00 | Logical Architecture | "The browser never calls the AI provider directly. NestJS owns authorisation, business records, and rules. FastAPI performs bounded inference. PostgreSQL stores the evidence trail." | "This separation is the foundation for control." |
| 10:00–10:45 | End-to-End AI Pipeline | "A CV enters through file gates, becomes a queued task, is parsed, then confirmed and prepared as evidence. Long AI work stays out of the request path." | "The central question is how the score is produced." |
| 10:45–12:10 | Evidence Matching Engine + Matching Algorithm | "The LLM does not choose who to hire. It can classify a cited piece of evidence. The backend applies deterministic requirements, weights, satisfaction states, and the final alignment score." | "That gives us explainability instead of an opaque similarity number." |
| 12:10–12:50 | Explainable AI | "For every result, we retain the input snapshot, requirement evaluation, cited evidence, gaps, and verification state. The recruiter can challenge the result." | "But an AI feature is only credible if it is operationally reliable." |
| 12:50–13:35 | Background Processing + Security | "BullMQ and a dedicated worker provide durable, observable AI work. Authentication, tenant context, file gates, and service boundaries protect the platform." | "I also made the limits explicit." |
| 13:35–14:20 | Verification Evidence + Implementation Status | "I verified the delivered paths with unit, service, E2E, and delivery checks. I do not claim unmeasured accuracy or production-scale performance; those are clear next validation steps." | "That transparency is part of the engineering result." |
| 14:20–15:00 | Roadmap + Conclusion | "The next step is not adding more AI features. It is hardening access control, measurement, and operational safeguards. PEAXIS proves that AI-assisted recruitment can be useful without giving away human authority." | "Thank you — I am happy to take questions." |

## Demo script — 5 minutes

Keep the demo to one story, one candidate, and one job. Do not show menus or setup.

1. **0:00–0:45 — Candidate entry**
   - Open PEAXIS Jobs.
   - Show job discovery or the application form.
   - Say: "The candidate applies with a CV. The file is validated, then parsing runs asynchronously."

2. **0:45–1:30 — Structured profile**
   - Show the parsed candidate profile or confirmation flow.
   - Say: "The candidate data is converted into structured facts. This is not yet a hiring decision; it is evidence preparation."

3. **1:30–2:30 — Recruiter workspace**
   - Open the Hire pipeline and select the same candidate.
   - Say: "The recruiter sees the candidate in context of the job and can request or inspect an assessment."

4. **2:30–4:15 — Explain the assessment**
   - Open the evidence assessment panel.
   - Point to one requirement, one cited proof, and one gap or verification state.
   - Say: "This is the core contribution: the score is broken down by requirement. The AI helps classify cited evidence; the backend computes the result from explicit rules."

5. **4:15–5:00 — Close the loop**
   - Point to the final alignment score and status.
   - Say: "The recruiter remains the decision maker. PEAXIS provides a traceable recommendation, not an autonomous hiring decision."

## What to skip during the 15-minute talk

- Detailed functional-requirement cards — use them only if questioned.
- Physical architecture — show it only if the jury asks about deployment.
- Provider routing, performance optimisation, and challenge slides — reserve for Q&A.
- Every module detail — the live demo is stronger proof than feature lists.

## Delivery rules

- One message per slide; 30–60 seconds per non-demo slide.
- Use the phrase **"evidence, not opaque ranking"** at the opening, AI section, and close.
- When asked about accuracy, say: "I implemented a reviewable assessment pipeline; model accuracy and fairness require a separate measured evaluation protocol." 
- When asked whether AI hires candidates, say: "No. AI classifies bounded evidence; backend rules calculate the assessment; the recruiter decides."
- If time runs short, skip directly from Logical Architecture to Evidence Matching Engine, then conclude.
