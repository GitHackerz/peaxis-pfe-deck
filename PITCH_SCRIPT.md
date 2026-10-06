# PEAXIS Pitch Script

**Timing:** the talk (everything except the live demo and questions) takes about **12:55** at a calm pace (about 130 words per minute, including the pauses for each click). Never go past 15:00. The live demo is separate: **5:00**.

**Checkpoints** (press `T` on slide 1 to start the timer): the story ends (slide 5) by **1:55** · Existing solutions (slide 10) by **4:45** · Hire (slide 17) by **8:05** · Why 85%? (slide 21) by **10:50** · Perspectives (slide 25) by **12:25**, then the demo.

**If you are more than 30 seconds late at a checkpoint:** say one sentence instead of three on the Methodology, Functional requirements, Platform and Monitoring slides.

## 1 · Cover (35 s)

**85%.**

One number can move a candidate forward, or leave them behind.

But what does that number actually mean?

Good morning to the jury and everyone here. Thank you for being here.

Today I present PEAXIS, my final year project: an AI recruitment platform, supervised by Mme Olfa Mannai and Mr. Fedi Naimi, whom I thank for their support. Let me start with a short story.

## 2 · Story 1: Meet Amine (20 s)

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

## 5 · Story 4: The real question (25 s)

*Click: the 85% is crossed out, then the question appears.*

Because the real question is not whether the result is 85%.

**The real question is:**

**Can we trust a number if we don't understand how we got there?**

Throughout this presentation, we'll follow Amine's journey, and eventually come back to that 85%.

But first, let me show you how this presentation is organized.

## 6 · Plan (30 s)

Here is how the presentation is organized.

First, the context and the problem. Then my method, and what the platform must do.

Then the platform itself, through a candidate and a recruiter. Then the architecture, the AI, and the production side.

And finally, results, next steps, and a live demo.

Let's start with the context.

## 7 · Context (25 s)

I built PEAXIS during my final year project at Prospecter, an AI company based in Doha, Qatar, where I worked full time as a software engineer.

My work covered three areas: the application, the AI, and the infrastructure.

I built PEAXIS independently, from the architecture to the deployment.

So, why recruitment?

## 8 · Recruitment today (40 s)

Let's look at hiring from both sides.

A candidate sends a CV and waits. A recruiter receives applications, reads them, compares profiles, and organizes interviews.

When applications grow, this becomes hard to manage.

According to SHRM, it takes about a month and a half to fill a role. And according to LinkedIn, 37% of recruiting teams already try generative AI.

AI can help. But a hiring decision still needs a reason people can understand.

That creates three problems.

## 9 · Challenges (25 s)

First, manual work: reading and comparing CVs takes time.

Second, scattered tools: the CV, the emails, and the calendar live in different places.

Third, unclear AI results: a score appears, but the recruiter can't see why.

These are the problems I wanted PEAXIS to solve. But tools already exist, so where does PEAXIS fit?

## 10 · Existing solutions (50 s)

Of course, I'm not the first. Here are four tools companies use today. *(Click once per row.)*

LinkedIn Recruiter is strong at sourcing. PEAXIS starts after the application, with evidence per requirement.

Greenhouse is a mature enterprise ATS with AI linked to sources. It's the closest to my philosophy. My choice: a lighter product.

Ashby is an all-in-one suite. PEAXIS is narrower on purpose.

Workable is an easy ATS from about 299 dollars a month. PEAXIS has a free plan, and local billing in dinars.

So my focus: one journey from candidate to recruiter, with every AI result linked to evidence. That became my project question.

## 11 · Objective (25 s)

My question: how can AI make recruitment more efficient, while keeping decisions understandable?

Four goals: bring the workflow together, understand the candidate's information, assist the recruiter, and keep the human in control.

That last goal shaped the whole platform. Now, how did I organize the work?

## 12 · Methodology (25 s)

I used Scrum, adapted to working alone.

I had a backlog and worked in sprints, each followed by a review and a retrospective. Epics and checklists were tracked in the repository, and automated checks verified every change.

Then I started with the users: what does each one need to do?

## 13 · Functional requirements (20 s)

For the candidate: find a job, apply, and follow the application.

For the recruiter: publish a role, review candidates, and organize interviews.

Underneath, each company needs its own workspace, permissions, private files, and billing.

But these features also have to work well.

## 14 · Non-functional requirements (35 s)

Four qualities guided the design.

Security: a CV is personal data, so each company's data is isolated and files stay private.

Reliability: an application must survive a failure, so background work is durable and can be retried.

Scalability: the platform needs room to grow, so services are separated and workers can scale alone.

And explainability: because AI is involved, every result is linked to evidence.

Now, let's meet the product.

## 15 · Platform (20 s)

PEAXIS has two experiences on one platform.

PEAXIS Jobs is for candidates. PEAXIS Hire is for hiring teams.

Behind both, they share the same services: identity, organizations, permissions, files, billing, and AI.

Let's follow Amine, a fictional candidate, and start with PEAXIS Jobs.

## 16 · PEAXIS Jobs (30 s)

Amine is looking for a backend engineering job. He searches, opens a position, and reads the requirements.

Then he applies with his CV, and the platform fills his profile, so he doesn't retype everything.

After that, he follows his application, stage by stage. These screens use fictional data.

Now let's see the same application from the recruiter's side.

## 17 · PEAXIS Hire (45 s)

The recruiter sees candidates in a pipeline: applied, screening, interview, and offer.

Let's open Amine's profile. Here is the 85% from my opening question, and now we can look behind it.

Each requirement is linked to evidence from his CV. Look at Kubernetes: it says "needs verification". That's not a rejection, it's something to check in the interview.

The recruiter reviews the evidence, schedules the interview, and moves Amine forward. AI supports the review, and the recruiter takes the action.

To make this work, I needed a clear architecture.

## 18 · Logical architecture (40 s)

Think of the system as four layers.

The users: candidates, recruiters, and visitors.

The application layer: the Next.js web platform, the NestJS API with the business rules, and a worker for long tasks.

The data layer: PostgreSQL, Redis, and private file storage.

And the AI layer: a FastAPI service that calls Gemini.

One rule matters most: the API is the only authority. The AI service has no direct access to the database.

Now, how did I deploy it?

## 19 · Physical architecture (30 s)

A request goes through Cloudflare, then Caddy on the application server, which runs the web, API, worker, and AI containers.

PostgreSQL and Redis run on a separate data server, connected through a private WireGuard link.

Files stay in private storage, and backups are stored offsite. The database is never exposed to the Internet.

Now let's look at the AI, starting with the CV.

## 20 · How PEAXIS understands a CV (30 s)

A CV is just a document. The platform needs a structured profile.

First, it extracts the text. Then AI organizes it: experience, skills, education.

Then comes the important step: the result is checked against the source text.

Because a nicely written AI answer is not enough. Every piece of information must connect back to the CV.

Now we can compare this profile with the job.

## 21 · Why 85%? (65 s)

And now we can answer the first question: "Why 85%?"

On the left, the job requirements. In the middle, the evidence from the CV. On the right, the status of each requirement.

AI helps find and classify the evidence. Then the platform applies clear rules to calculate the score. Must-have requirements weigh more, and a missing must-have caps the score.

The 85% here is an illustration, not a probability that Amine will succeed. What matters is that the recruiter can see what supports the result, and what still needs checking.

So who decides in the end? The recruiter does. AI assists, and the human controls the requirements, the interviews, the stage changes, the rejections, and the offers.

**Show the evidence. Let the human decide.**

Now, how do I ship this safely?

## 22 · Testing and delivery (25 s)

*Each click moves a change one gate further, from commit to rollback-ready.*

Every change goes through seven automated CI jobs: lint and types, tests, migrations and end-to-end checks, and security scans. The repository has more than 1,400 tests.

Images are built and scanned, the deployment is gated, and I can roll back.

After the deployment, I need to know how the system behaves.

## 23 · Monitoring (25 s)

Grafana Alloy collects metrics and logs from the servers and sends them to Grafana Cloud.

I follow the API, the queues, the worker heartbeat, the database, Redis, and the backups, with dashboards, alerts, and synthetic checks. My next step: verify alert delivery at every release.

So, where does PEAXIS stand today?

## 24 · From project to product (20 s)

PEAXIS started as my final year project. Today it's deployed in production, and the first client companies are starting to test it.

User validation has just begun, and I'm not claiming measured hiring results yet.

So what comes next?

## 25 · Perspectives (25 s)

First, I want to deepen PEAXIS Hire: team collaboration, scorecards, communication, and a copilot linked to its sources. And enterprise readiness.

Later, PEAXIS HR could extend the product beyond recruitment.

These are future directions. Today, my focus is the recruitment platform you just saw.

Now, enough slides. Let me show it live.

## 26 · Live demo (5 min)

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

## 27 · Conclusion (30 s)

At the beginning I asked: would you invite a candidate with an 85% match?

Now we have something better than a number: the evidence behind it.

That's what I built: one recruitment platform, explainable AI, and the engineering to run it in production.

**Show the evidence. Let the human decide.**

Thank you for your attention. I'm happy to answer your questions.

## 28 · Questions

Breathe. Let the person finish the question. Give the short answer first, then explain if needed.

If you need a moment: "Let me think about that for a second."

If you don't know: "I haven't verified that yet. I would check…" and say how.
