# PEAXIS Pitch Script

## 1 · Cover (25 s)

**85%.**

One number can be enough to move a candidate forward — or leave them behind.

But what does that number actually mean?

Good morning, distinguished members of the jury, my supervisor, and everyone present today. Thank you for being here.

Today I'm presenting PEAXIS, my final year project: an AI recruitment platform. Let me start with a short story.

## 2 · Story 1: Meet Amine (18 s)

*Clicks: the offer appears, the CV flies to it, "…and waits".*

To begin, I'd like to take you through a brief story.

Meet Amine, a backend engineer looking for a new opportunity.

He finds a job offer that seems to match his experience, submits his CV, and waits.

## 3 · Story 2: The recruiter's side (15 s)

*Clicks: Amine's application comes forward, the 85% appears, the decision.*

On the recruiter's side, next to Amine's name, one number appears: **85% match.**

The recruiter now has to decide whether Amine should move forward.

## 4 · Story 3: The questions (20 s)

*Clicks: one question per click, each one pointing at the 85%.*

But before making that decision, several questions remain:

- **Why 85%?**
- Which parts of his CV led to this result?
- **What does he actually match?**
- And what might the system have misunderstood?

Keep those questions in mind.

## 5 · Story 4: The real question (15 s)

*Click: the 85% is crossed out, then the question appears.*

Because the real question is not whether the result is 85%.

**The real question is:**

**Can we trust a number if we don't understand how we got there?**

Throughout this presentation, we'll follow Amine's journey, and eventually come back to that 85%.

But first, let me show you how this presentation is organized.

## 6 · Plan (25 s)

Here is how the next minutes are organized.

I'll start with the context and the problem: why recruitment needs clearer decisions.

Then how I organized the project, and what the platform has to do.

Then the platform itself, through the eyes of a candidate and a recruiter.

Then the architecture, the AI, and how it runs in production.

And I'll finish with where PEAXIS stands today, what comes next, and a live demo.

Let's start with the context.

## 7 · Context (35 s)

I built PEAXIS during my final year project at Prospecter, a company that builds an AI product for B2B prospecting. It's based in Doha, Qatar, and I worked there full time as a software engineer.

That environment mixed three things: AI, software, and running a real product in production.

My work covered the same three areas: the application, the AI, and the infrastructure.

I built PEAXIS independently, from the architecture to the deployment, with guidance from my supervisors, Mme Olfa Mannai and Mr. Fedi Naimi. Thank you both for your support.

So, why did I choose recruitment?

## 8 · Recruitment today (40 s)

Let's look at hiring from both sides.

A candidate sends a CV, and waits. A recruiter receives applications, reads them, compares profiles, and organizes interviews.

When applications grow, this work becomes hard to manage.

The numbers on this slide give the context. According to SHRM, it takes about a month and a half to fill a role. And according to LinkedIn, 37% of recruiting teams are already trying generative AI.

AI can help with the workload. But a hiring decision still needs a reason that people can understand.

And that creates three problems.

## 9 · Challenges (25 s)

First, manual work. Reading and comparing CVs takes a lot of time.

Second, scattered tools. The CV is in one place, the discussion is in email, and the interview is in a calendar.

Third, unclear AI results. A score appears, but the recruiter can't see why.

These are the three problems I wanted PEAXIS to solve.

But recruitment tools already exist. So where does PEAXIS fit?

## 10 · Existing solutions (45 s)

Of course, I'm not the first. Let me show four tools that companies use today. *(Click once per row.)*

LinkedIn Recruiter, with its Hiring Assistant, is strong at sourcing: finding candidates in a huge network. PEAXIS starts after the application, with evidence for each requirement.

Greenhouse is a mature enterprise ATS, with structured hiring and AI answers linked to sources. It's the closest to my philosophy. My choice is a lighter product, with evidence in every candidate review.

Ashby is an all-in-one suite: ATS, CRM, scheduling, analytics, and AI everywhere. PEAXIS is narrower on purpose: it's centered on explainable assessment.

Workable is an easy ATS for small companies, with paid plans starting around 299 dollars a month. PEAXIS has a free entry plan, and billing in local currency, the Tunisian dinar.

So I'm not saying "nobody has AI in recruitment". My focus is different: one journey from candidate to recruiter, with every AI result linked to evidence.

That focus became my project question.

## 11 · Objective (25 s)

My question was simple: how can AI make recruitment more efficient, while keeping decisions understandable?

I split it into four goals. Bring the workflow together. Understand the candidate's information. Assist the recruiter. And keep the human in control.

That last goal shaped the whole platform.

Now, how did I organize the work to reach it?

## 12 · Methodology (25 s)

I used Scrum, adapted to working alone.

I had a backlog, and I worked in sprints. Each sprint had to produce something that works, followed by a review and a retrospective.

I tracked epics and checklists in the repository, and automated checks verified every change.

Then I started with the users: what does each one need to do?

## 13 · Functional requirements (30 s)

For the candidate, the journey is: find a job, apply, and follow the application.

For the recruiter: publish a role, review candidates, and organize interviews.

And underneath, every company needs its own workspace, its own permissions, private files, and billing.

So the requirements cover the journey you see, and the services you don't see.

But these features also have to work well.

## 14 · Non-functional requirements (30 s)

A CV is personal data, so security matters.

An application must survive a failure, so reliability matters.

The platform also needs speed, room to grow, and code I can maintain.

And because AI is involved, explainability is a requirement from day one.

I'll show you how each one shaped the implementation.

Now, let's meet the product.

## 15 · Platform (20 s)

PEAXIS has two experiences on one platform.

PEAXIS Jobs is for candidates. PEAXIS Hire is for hiring teams.

Behind both, they share the same services: identity, organizations, permissions, files, billing, and AI.

Let's follow Amine, a fictional candidate, and start with PEAXIS Jobs.

## 16 · PEAXIS Jobs (45 s)

Amine is looking for a backend engineering job.

He searches, opens a position, and reads the requirements.

Then he applies with his CV. The platform reads the CV and fills his profile, so he doesn't retype everything.

After that, he can follow his application, stage by stage.

These screens use fictional data, to show the journey.

For Amine it's simple: he finds the job, applies, and always knows where he stands.

Now let's see the same application from the recruiter's side.

## 17 · PEAXIS Hire (55 s)

The recruiter sees candidates in a pipeline: applied, screening, interview, and offer.

Let's open Amine's profile.

Here is the 85% from my opening question. And now we can look behind it.

Each requirement is linked to evidence from his CV.

Look at Kubernetes. It says "needs verification". That's not a rejection. It's something to check during the interview.

The recruiter reviews the evidence, schedules the interview, and moves Amine forward.

This is the key idea: AI supports the review, and the recruiter takes the action.

To make this work, I needed a clear architecture.

## 18 · Logical architecture (55 s)

Think of the system as four layers.

At the top, the users: candidates, recruiters, and visitors.

Then the application layer: the Next.js web platform, the NestJS API with the business rules, and a worker for long tasks.

Then the data layer: PostgreSQL, Redis, and private file storage.

And the AI layer: a FastAPI service that calls Gemini.

One rule matters most: the API is the only authority. The AI service processes what it receives, but it has no direct access to the database.

That's the logic. Now, how did I deploy it?

## 19 · Physical architecture (40 s)

A request first goes through Cloudflare, then Caddy on the application server. That server runs the web, API, worker, and AI containers.

PostgreSQL and Redis run on a separate data server. The two servers talk through a private WireGuard connection.

Files stay in private storage, and the database backups are stored offsite.

The main point: the database is never exposed to the Internet.

Now let's follow what happens when Amine clicks "Apply".

## 20 · What happens when a candidate applies (45 s)

*Each click moves Amine's application one step. The last click breaks the AI step.*

First, the platform saves the application, and its event, in one transaction. It also records the work to do.

A worker picks up that work from the queue. The AI helps classify the evidence, and the platform rules calculate the alignment.

Then the result is ready for the recruiter.

But what if the AI service is down?

*(small pause)*

Amine's application is still saved. The work is retried later.

Applying never depends on the AI finishing.

Let's look closer at how a CV becomes usable information.

## 21 · How PEAXIS understands a CV (40 s)

A CV is just a document. The platform needs a structured profile.

First, it extracts the text. Then AI organizes it: experience, skills, education.

Then comes the important step: the result is checked against the source text.

Because a nicely written AI answer is not enough. Every piece of information must connect back to the CV.

Now we can compare this profile with the job.

## 22 · Why 85%? (55 s)

And now we can answer the first question: "Why 85%?"

On the left, the job requirements. In the middle, the evidence from the CV. On the right, the status of each requirement.

AI helps find and classify the evidence. Then the platform applies clear rules to calculate the score.

Must-have requirements weigh more. And a missing must-have caps the score.

The 85% here is an illustration. It's not a probability that Amine will succeed in the job.

What matters is that the recruiter can see what supports the result, and what still needs checking.

So who decides in the end?

## 23 · Human-controlled AI (20 s)

AI can parse, summarize, explain, recommend, and draft.

The recruiter controls the requirements, the interviews, the stage changes, the rejections, and the offers.

**Show the evidence. Let the human decide.**

But to use this in real life, the system must also be reliable.

## 24 · Security and reliability (40 s)

Each company's data must be protected. So access is checked on every request, and files stay private.

Each application must be kept. So background work is durable, and it can be retried.

As the load grows, the services are separated, so I can scale the workers alone.

At this scale, I didn't need Kubernetes. I chose clear service boundaries, and an infrastructure I can operate.

These choices protect the same journey we just followed with Amine.

I also needed a safe way to ship changes.

## 25 · Testing and delivery (30 s)

*Each click moves a change one gate further, from commit to rollback-ready.*

Every change goes through seven automated CI jobs: lint and type checks, tests, migration and end-to-end checks, and security scans.

The repository has more than 1,400 tests.

Images are built and scanned. The deployment is gated. And I can roll back to the previous release.

So there are checks before anything reaches the product.

After the deployment, I need to know how the system behaves.

## 26 · Monitoring (25 s)

Grafana Alloy collects metrics and logs from the servers, and sends them to Grafana Cloud.

I follow the API, the queues, the worker heartbeat, the database, Redis, and the backups, with dashboards, alerts, and synthetic checks.

My next step: verify the alert delivery at every release.

So, where does PEAXIS stand today?

## 27 · From project to product (35 s)

PEAXIS started as my final year project. Today it's deployed in production, and the first client companies are starting to test it.

The engineering numbers: more than 1,400 tests, 27 backend modules, seven CI jobs, and 68 out of 68 checks passed at the first production deployment.

These numbers describe the engineering. User validation has just begun, and I'm not claiming measured hiring results yet.

So what comes next?

## 28 · Perspectives (25 s)

First, I want to deepen PEAXIS Hire: team collaboration, scorecards, communication, and a copilot linked to its sources. And enterprise readiness.

Later, PEAXIS HR could extend the product beyond recruitment.

These are future directions. Today, my focus is the recruitment platform you just saw.

Now, enough slides. Let me show it live.

## 29 · Live demo (5 min)

> **Before you start:** use the fictional demo account, and prepare one candidate that is already processed.

We followed Amine on the slides. Now I'll show the same journey live: apply as a candidate, then review the evidence as a recruiter.

The demo profile may have a different name or score. Point to what is really on the screen.

**Candidate (1 min 50 s):** search for a job, open it, show the requirements, apply with a CV, show the saved application. 

> Say: "Here are the requirements. I apply with my CV. The application is saved, and I can follow its progress."

**Recruiter (2 min 40 s):** open the pipeline and the candidate, check the evidence of one requirement, show the alignment, then schedule an interview or move the stage. 

> Say: "Now I'm the recruiter. Let's check one requirement against its evidence. This is what supports the assessment. I can use it to prepare the interview and move the candidate forward."

**Back to the slides (30 s):** finish at five minutes. Don't open billing, settings, or admin.

**If the AI is slow:** "The application is saved. The AI runs in the background. While it finishes, I'll show a profile that is already processed." Then switch to the prepared candidate, and say it's a separate example.

**If the app is down:** "The live app isn't available right now. I'll use the illustrated journey from the slides to show the same steps." Go back to slides 16 and 17, and say they are illustrated screens.

Let me finish by going back to our first question.

## 30 · Conclusion (30 s)

At the beginning I asked: would you invite a candidate with an 85% match?

Now we have something better than a number: the evidence behind it.

That's what I built with PEAXIS: one recruitment platform, explainable AI, and the engineering to run it in production.

**Show the evidence. Let the human decide.**

Thank you to the jury, and to everyone here, for your attention. I'm happy to answer your questions.

## 31 · Questions

Breathe. Let the person finish the question. Give the short answer first, then explain if needed.

If you need a moment: "Let me think about that for a second."

If you don't know: "I haven't verified that yet. I would check…" and say how.
