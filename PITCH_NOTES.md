# PEAXIS PFE Defense: Pitch Notes (15 min talk + 5 min live demo)

**Controls.** `→` / `Space` / `Enter` = next reveal, then next slide · `←` = back · `Home` / `End` · `F` fullscreen · **`B` jumps to the backup slides**. Footer dots show reveal progress. Skipping reveals is always safe.

**Time budget (talk = 15:00).** Slides 1–22 are the timed deck; slide 21 is the live demo (5:00, not counted); slide 22 closes the session. Backup slides B1–B7 come after Questions and are never presented unless asked.

| # | Slide | Time | | # | Slide | Time |
|---|---|---|---|---|---|---|
| 1 | Cover | 0:20 | | 12 | Architecture | 1:00 |
| 2 | Context | 0:40 | | 13 | CV understanding | 0:55 |
| 3 | Recruitment today | 0:45 | | 14 | Why it matches | 1:10 |
| 4 | Challenges | 0:30 | | 15 | Human-controlled AI | 0:25 |
| 5 | Landscape | 0:35 | | 16 | Production | 0:50 |
| 6 | Objective | 0:25 | | 17 | Security & reliability | 0:55 |
| 7 | Method & quality | 0:30 | | 18 | Monitoring | 0:40 |
| 8 | Requirements | 0:30 | | 19 | PFE → product | 0:35 |
| 9 | Platform | 0:25 | | 20 | Perspectives | 0:35 |
| 10 | PEAXIS Jobs | 0:50 | | 21 | **Live demo** | 5:00 + 0:10 intro |
| 11 | PEAXIS Hire | 1:10 | | 22 | Conclusion + Questions | 0:30 |

Talk total ≈ 15:00. **If you run long, cut in this order:** slide 8 (say one sentence), slide 9, slide 7, slide 15 (merge into 14).

---

## 1. Cover (0:20)
**Message:** An AI-powered recruitment platform, from job discovery to evidence-based decisions.
Good morning. I present PEAXIS, my final year project. Thank you Mme Mannai and Mr. Naimi. *→ First, the context.*

## 2. Context (0:40)
**Message:** Built inside a real AI product company, as an independent product.
*Reveals:* (1) my three hats; (2) takeaway.
Prospecter builds an AI B2B platform: LLM workflows, multi-tenant SaaS, background workers, which is exactly the engineering PEAXIS needed. I wore three hats: software, AI and platform engineering, taking one product from architecture to production. *→ Now the problem.*

## 3. Recruitment today (0:45)
**Message:** More volume means slower decisions; AI helps, but needs trust.
*Reveals:* (1) time-to-fill; (2) AI adoption + takeaway.
More applications, more screening, more coordination, slower decisions, worse candidate experience. SHRM: a median of about a month and a half to fill a role. LinkedIn: 37% of recruiting organizations already use or test generative AI. But hiring needs trust and human oversight. *→ Concretely, three challenges.*

## 4. Challenges (0:30)
**Message:** Recruiters need less effort *and* understandable results.
*Reveals:* workload → fragmentation → decision clarity → takeaway.
Manual workload; tools scattered across spreadsheets, email and calendars; and opaque scores nobody can explain. *→ The market is moving too.*

## 5. Landscape (0:35)
**Message:** Everyone optimizes something; PEAXIS optimizes evidence.
*Reveals:* (1) PEAXIS.
Job platforms optimize reach. Established ATS optimize process. AI tools optimize speed. And yes, major ATS vendors now ship AI, so "ATS plus AI" is not my claim. PEAXIS focuses on evidence: one journey where every AI result is traceable and the human decides. *→ That is my project question.*

## 6. Objective (0:25)
**Message:** AI efficiency without a black box.
*Reveals:* (1) four objectives.
How can AI make recruitment more efficient without turning hiring into a black box? Centralize the workflow, understand candidate evidence, assist with AI, keep humans in control. *→ How I worked.*

## 7. Method & quality (0:30)
**Message:** Built like a product from day one.
*Reveals:* (1) six quality requirements.
Plan, build, test, review, improve, with a backlog, sprints and continuous validation. And six quality requirements from the start: security, reliability, performance, scalability, explainability, maintainability. They come back later with real answers. *→ What users need.*

## 8. Requirements (0:30)
**Message:** Needs grouped by who has them.
*Reveals:* candidate → recruiter → platform.
Candidates discover, apply, follow. Recruiters create jobs, run the pipeline, review evidence, interview, use AI help. The platform provides organizations, roles, billing, files, notifications. *→ The solution.*

## 9. Platform (0:25)
**Message:** Two experiences, one platform.
*Reveals:* (1) shared platform strip.
PEAXIS Jobs for candidates, PEAXIS Hire for hiring teams, on shared identity, organizations, permissions, files, billing and AI. Don't list services. *→ Candidate first.*

## 10. PEAXIS Jobs (0:50)
**Message:** Discover, apply with a CV, always know where you stand.
*Reveals:* (1) job details; (2) apply; (3) track.
*Start:* searching and filtering jobs. *(1)* Clear requirements. *(2)* Apply with the CV, profile prefilled. *(3)* Track each stage. Real interface patterns, fictitious data. *→ The recruiter side.*

## 11. PEAXIS Hire (1:10)
**Message:** Pipeline, evidence and next action in one workspace.
*Reveals:* (1) candidate highlighted; (2) drawer with evidence; (3) interview scheduled, candidate moves.
*Start:* a Kanban from Applied to Offer. *(1)* I open Amina. *(2)* Each requirement is linked to evidence from her CV. Kubernetes is "needs verification", not rejection. *(3)* The recruiter schedules the interview and she moves forward. *→ How does it work underneath?*

## 12. Architecture (1:00)
**Message:** The API is the single authority; AI only does inference.
*Reveals:* (1) web; (2) API; (3) database, worker, storage; (4) AI + model.
*(1)* Users use the Next.js platform. *(2)* It talks to the NestJS API: rules, security, orchestration. *(3)* The API owns PostgreSQL and hands long work to a worker through Redis and BullMQ; files are private. *(4)* The worker calls the FastAPI AI service, which calls Gemini. The AI never touches business data. *→ Let me zoom into the AI.*

## 13. CV understanding (0:55)
**Message:** AI structures the CV; PEAXIS checks it against the source.
*Reveals:* (1) extraction; (2) structured profile; (3) validated.
Extract the content, let AI structure role, experience, skills, education, then check each piece against the source text. PEAXIS does not blindly trust generated output. *(If asked: scanned PDFs have an optional OCR path, off by default.)* *→ Then the job match.*

## 14. Why it matches (1:10)
**Message:** Every result can be traced back to evidence.
*Reveals:* (1) requirements; (2) evidence; (3) assessment; (4) alignment.
Job requirements, CV evidence for each, a status per requirement, then the alignment: 85% in this illustrative example. AI helps retrieve and classify the evidence; the platform applies the final rules. *(Backup B4: weights and caps.)* *→ So who decides?*

## 15. Human-controlled AI (0:25)
**Message:** AI supports recruiter judgment; it does not replace it.
*Reveals:* (1) humans; (2) statement.
AI parses, retrieves, summarizes, recommends, explains, drafts. Humans control requirements, stage changes, interviews, rejection, offers and the decision. *→ Is it only a prototype? No.*

## 16. Production (0:50)
**Message:** Public application and data layer are separated.
*Reveals:* (1) private network + data server; (2) storage + backups; (3) takeaway.
Cloudflare in front, an application server with web, API, worker and AI, and a separate data server with PostgreSQL and Redis reachable only over a private network. Files in private object storage, database backed up offsite. *→ And beyond the diagram?*

## 17. Security & reliability (0:55)
**Message:** Designed to be secure, recoverable and able to grow.
*Reveals:* security → reliability → scalability → operations → takeaway.
Security: organization isolation, secure access, private data, protected infrastructure. Reliability: durable background work, events saved with the business change, an AI outage never loses an application. Scalability: separated services, long AI work off the request path, workers that grow independently. No Kubernetes at today's scale, clear boundaries for growth. *→ And we can watch it run.*

## 18. Monitoring (0:40)
**Message:** We can see what the system is doing.
*Reveals:* (1) Grafana Alloy; (2) Grafana Cloud; (3) what we watch; (4) honesty line.
Each server runs a Grafana Alloy agent that ships metrics and logs to Grafana Cloud: Prometheus, Loki, dashboards, alerts, synthetic checks. We watch servers, API and AI, the queue and worker heartbeat, database, Redis and backups. It is configured as code and bounded so it cannot block the app. Honest next step: verify alert delivery at each release. *→ So where does PEAXIS stand?*

## 19. PFE → product (0:35)
**Message:** Not built only for the defense.
*Reveals:* (1) achievements; (2) closing line.
Final year project, engineered product, deployed in production, first client companies starting to test, feedback next. No traction numbers claimed: validation has just begun. *→ What comes next?*

## 20. Perspectives (0:35)
**Message:** Deepen Hire, then PEAXIS HR.
*Reveals:* (1) PEAXIS HR (future); (2) closing line.
Direction one: Hire becomes a complete ATS: collaboration and scorecards, a communication hub, a source-linked copilot, enterprise readiness. Direction two, clearly future: PEAXIS HR, beyond hiring. Possible areas, not commitments. *→ Let me show it live.*

## 21. LIVE DEMO (5:00)
*Reveal:* (1) recruiter lane. Intro 10 s: "A candidate applies; a recruiter understands the evidence."
**Script (5 min). Demo account + fictitious CV only.**
1. **0:00 Candidate:** jobs page, search, open the target job (30 s).
2. Show requirements, **Apply** with the CV, submit (60 s).
3. Candidate's application list: status "Applied" (20 s).
4. **1:50 Recruiter:** employer workspace, open the job's pipeline (30 s).
5. Open the new candidate: requirement-by-requirement evidence and alignment (90 s). Say: "AI retrieved the evidence, the rules produced the status."
6. Schedule an interview / move stage (40 s).
7. **STOP** at ~5:00. No billing, settings, admin or analytics unless asked.
**Fallbacks:** if AI scoring is slow, say "it runs in the background, by design" and use a pre-applied candidate. Pre-flight: confirm AI processing is enabled in the demo environment.

## 22. Conclusion + Questions (0:30)
Three ideas: one platform; explainable AI that assists rather than replaces; production engineering. "What started as a final year project has evolved into a production SaaS platform designed to solve a real recruitment problem." Then go to the Questions slide.

---

## Backup slides (press `B`): use only if asked
B1 Infrastructure · B2 Monitoring stack · B3 Security controls · B4 Assessment algorithm · B5 Async processing & failure · B6 Data model · B7 Testing & delivery.

| Likely question | Answer |
|---|---|
| Why not Greenhouse or Ashby? | Slide 5: I don't claim to be the only AI ATS; evidence-first, one journey, SME-accessible. |
| Is the score reliable? | B4: deterministic rules over cited evidence; it measures evidence coverage, not hiring probability. |
| AI provider down? | B5: durable work, applications never fail, FAILED state visible. |
| Tenant isolation? | B3: the API resolves the owning organization and checks membership on every request. |
| What do you monitor with? | B2: Grafana Alloy → Grafana Cloud (Prometheus, Loki, alerts, synthetics). |
| Do you have clients? | Slide 19: deployed, first validation starting, no numbers claimed. |
| Why not Kubernetes? | Slide 17: right-sized for today, clear service boundaries. |
