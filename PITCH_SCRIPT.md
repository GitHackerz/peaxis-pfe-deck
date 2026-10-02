# PEAXIS Pitch Script (15 min + 5 min demo)

**The whole story in one line, if you forget everything:**
*Hiring is slow and AI is a black box → PEAXIS gives recruiters AI they can trust, because every result points to evidence → and it is already a real, deployed product.*

**How to use this:** each slide has **SAY** (say it in your own words, the *bold* words are the ones to keep), the **time**, and **LINK** (the sentence that leads into the next slide). Press `→` for each click. Press `B` only if the jury asks a technical question (backup slides).

---

## 1 · Cover (15 s)
**SAY:** Good morning. I'm Habib, and today I present PEAXIS: an **AI recruitment platform**, my final year project. Thank you to my supervisors, Mme Mannai and Mr. Naimi.
**LINK:** Let me start with where this work happened.

## 2 · Context (40 s)
*Click: my three hats → last line*
**SAY:** I did this project at **Prospecter**, a company that builds an AI product. Their daily world is LLMs, multi-tenant SaaS and background jobs, which is exactly what PEAXIS needed. I worked as **three engineers in one**: software, AI and platform. I built it **alone, from architecture to production**.
**LINK:** Now, why recruitment?

## 3 · Recruitment today (45 s)
*Click: time-to-fill → AI adoption*
**SAY:** More applications mean more screening, more coordination, **slower decisions**, and a worse experience for candidates. SHRM says a job takes **about a month and a half** to fill. LinkedIn says **37%** of recruiting teams already try generative AI. AI helps, but hiring needs **trust and human oversight**.
**LINK:** So what exactly goes wrong for recruiters?

## 4 · Challenges (30 s)
*Click: one per challenge*
**SAY:** Three problems. **Too much manual work.** **Tools everywhere**: spreadsheets, email, calendars. And **no clarity**: an AI score nobody can explain.
**LINK:** Others noticed this too, so let's look at the market.

## 5 · Landscape (30 s)
*Click: PEAXIS*
**SAY:** Job platforms optimize **reach**. Classic ATS optimize **process**. AI tools optimize **speed**. And yes, big ATS now have AI too, so "ATS plus AI" is not my claim. PEAXIS focuses on **evidence**: one journey, every AI result traceable, the human decides.
**LINK:** That gives me my project question.

## 6 · Objective (25 s)
*Click: four objectives*
**SAY:** How can AI make recruitment **efficient without a black box**? Four goals: **centralize** the workflow, **understand** candidate evidence, **assist** recruiters with AI, and **keep humans in control**.
**LINK:** To reach this, I needed a method.

## 7 · Methodology (30 s)
*Click: practices → last line*
**SAY:** I used **Scrum, adapted to one person**: a product backlog, sprints, a working increment each time, then review and retrospective. Epics and checklists live in the repository, and every change passes automated checks.
**LINK:** Let me show you what the product must do.

## 8 · Functional requirements (30 s)
*Click 1-3: candidate → recruiter → platform; read the line at the bottom*
**SAY:** Candidates **discover, apply, follow**. Recruiters **publish, run the pipeline, review evidence, interview**. The platform gives each company its **own space**: roles, billing, private files.
**LINK:** And how well it must do it.

## 9 · Non-functional requirements (35 s)
*Click 1-6, one per quality*
**SAY:** Six qualities: **security**, **reliability**, **performance**, **scalability**, **explainability**, **maintainability**. Each has a concrete answer, and you will see them one by one in the next slides.
**LINK:** Now, the solution.

## 10 · Platform (20 s)
*Click: shared platform*
**SAY:** Two experiences, **one platform**. **PEAXIS Jobs** for candidates. **PEAXIS Hire** for hiring teams. Under both: identity, organizations, permissions, files, billing, AI.
**LINK:** Let's start with the candidate.

## 11 · PEAXIS Jobs (50 s)
*Click 1-3: details → apply → track*
**SAY:** A candidate **searches and filters** jobs. Opens one and sees **clear requirements**. **Applies with the CV**: the profile is filled automatically. Then **tracks** the application stage by stage. (Real interface patterns, fictitious data.)
**LINK:** On the other side, the recruiter.

## 12 · PEAXIS Hire (60 s)
*Click 1-3: highlight → drawer → interview*
**SAY:** The recruiter sees a **pipeline**: applied, screening, interview, offer. I open Amina. Each requirement is **linked to evidence from her CV**. Kubernetes says **"needs verification"**, not "rejected". The recruiter **schedules the interview** and she moves forward. The human acts, not the AI.
**LINK:** Let me show how this is built, starting with the logical view.

## 13 · Logical architecture (60 s)
*Click 1-4: application → data → AI → rule*
**SAY:** Four layers. **Client layer**: candidates, recruiters, visitors. **Application layer**: the Next.js web platform and the NestJS API, which holds the business rules, plus a worker for long tasks. **Data layer**: PostgreSQL, Redis, private file storage. **AI layer**: a FastAPI service calling Gemini. One rule: the **API is the only authority**. The AI never touches the data.
**LINK:** That's the logic. Here is where it really runs.

## 14 · Physical architecture (45 s)
*Click 1-3: data server → storage → rule*
**SAY:** Traffic comes through **Cloudflare** to the **application server**: Caddy, then web, API, worker and AI in containers. The **data server** is separate, with PostgreSQL and Redis, reached only through a **private WireGuard link**. Files are in private object storage, and the database is backed up offsite. The database is **never exposed** to the Internet.
**LINK:** Now let me follow one real action through this system.

## 15 · What happens when a candidate applies (45 s)
*Click 1-3: pairs → failure line*
**SAY:** The application is **saved with an event** in one transaction, and a **work item** is recorded. A **worker** picks it up through the queue, the **AI classifies evidence**, and **rules compute the alignment**. The recruiter sees it with its evidence. If Redis or the AI is down, the application is **still saved** and the work is **retried**.
**LINK:** Let me zoom into the AI, starting with the CV.

## 16 · How PEAXIS understands a CV (50 s)
*Click 1-3: extract → profile → validated*
**SAY:** We **extract the text**, AI **structures** it into role, experience, skills, education, then each piece is **checked against the source**. PEAXIS **doesn't blindly trust** generated output.
**LINK:** Now, how that profile is matched to a job.

## 17 · Why does this candidate match? (65 s)
*Click 1-4: requirements → evidence → assessment → score*
**SAY:** Job requirements on the left. **CV evidence** for each one in the middle. A **status** per requirement on the right. Then the alignment: **85%** here, just an example. AI helps **find and classify** the evidence, but the **platform's rules** compute the score. Must-haves weigh most, and a missing must-have caps the score. Every result **traces back to evidence**.
**LINK:** So who decides in the end?

## 18 · Human-controlled AI (20 s)
*Click 1-2*
**SAY:** **AI assists**: parse, retrieve, summarize, recommend, explain, draft. **Humans control**: requirements, stage changes, interviews, rejection, offers, the decision. AI supports the recruiter, it **never replaces** them.
**LINK:** Now, is it just a prototype? Let me show the production side.

## 19 · Security and reliability (45 s)
*Click 1-4: security → reliability → scalability → operations → line*
**SAY:** **Security**: each company's data is isolated, access is secure, files are private, the infrastructure is protected. **Reliability**: work is durable and retried, and an AI outage never loses an application. **Scalability**: services are separated, so workers can grow alone. No Kubernetes at this scale, but **clear boundaries** to grow.
**LINK:** And how do we ship changes safely?

## 20 · Testing and delivery (30 s)
*Click 1-2*
**SAY:** Every change goes through **7 automated CI jobs**: lint and types, **1,400+ tests**, migrations and end-to-end tests, secret scan, image scan. Images are built and scanned, the deploy is **gated**, and I can **roll back** to the previous release.
**LINK:** Once it runs, we need to see it.

## 21 · Monitoring (30 s)
*Click 1-4*
**SAY:** Each server runs a **Grafana Alloy** agent that sends metrics and logs to **Grafana Cloud**: dashboards, alerts, synthetic checks. We watch servers, API, queue and worker heartbeat, database, Redis and backups. Honest next step: **verify alert delivery at every release**.
**LINK:** So, where does PEAXIS stand today?

## 22 · From project to product (40 s)
*Click 1-2: numbers (they count up) → last line*
**SAY:** It started as a final year project, was **engineered as a product**, is **deployed in production**, and **first client companies are starting to test it**. The numbers: **1,400+ tests**, **27 backend modules**, **7 CI jobs**, and **68 out of 68 checks** passed at the first production deployment. I don't claim usage numbers: validation has just begun.
**LINK:** And what comes next?

## 23 · Perspectives (30 s)
*Click 1-2*
**SAY:** First, **deepen Hire** into a complete ATS: collaboration and scorecards, a communication hub, a source-linked copilot, enterprise readiness. Later, a **future** direction, **PEAXIS HR**, beyond hiring. These are ideas, not commitments.
**LINK:** Enough slides. Let me show you PEAXIS live.

## 24 · Live demo (5 min)
*Click: recruiter lane. Then switch to the app. Fictitious account only.*
**SAY first:** A candidate applies, then a recruiter understands the evidence.
1. **Candidate** (1:50): jobs page, search, open the job, show requirements, **Apply with CV**, show status "Applied".
2. **Recruiter** (2:40): open pipeline, open the new candidate, show **evidence per requirement** and the alignment, then **schedule an interview / move stage**.
3. **Stop at 5:00.** Do not open billing, settings, admin.
**If AI is slow:** "it runs in the background, by design", then use a candidate prepared earlier.
**LINK:** Back to the slides for my conclusion.

## 25 · Conclusion (25 s)
*Click 1-4*
**SAY:** Three ideas. **One platform** for the recruitment journey. **Explainable AI** that assists, not replaces. **Production engineering** for real users. What started as a final year project is now a **production SaaS** built to solve a real recruitment problem. Thank you, I'm happy to answer your questions.

## 26 · Questions
Smile, breathe, answer short. **If you don't know: say what you'd check, don't invent.**

---

## Cheat sheet: questions and where to answer
| Question | Short answer |
|---|---|
| Why not Greenhouse / Ashby? | I don't claim to be the only AI ATS. My focus: evidence, one journey, SME-friendly. *(slide 5)* |
| Is the score reliable? | It is **evidence coverage**, not hiring probability. Rules are deterministic, versioned, repeatable. *(slide 17, `B` → assessment)* |
| AI provider down? | Application is saved, work retried, failures visible. *(slide 15)* |
| How is data isolated? | Every request is checked against the user's organization membership. *(slide 19, `B` → security)* |
| What do you monitor with? | Grafana Alloy → Grafana Cloud. *(slide 21, `B` → monitoring)* |
| Do you have clients? | Deployed; first clients are starting to test; **no numbers claimed**. *(slide 22)* |
| Why not Kubernetes? | Not needed at today's scale; services already separated for growth. *(slide 19)* |
| Where do the numbers come from? | Counted from the repository and deployment evidence (footer of slide 22). |

## If you run long, cut in this order
Slide 10 (one sentence) → slide 7 (two sentences) → slide 18 (merge into 17) → slide 21.
