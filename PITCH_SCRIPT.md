# PEAXIS Pitch Script

**The story in one line:** *"Why 85%?" Every AI score needs evidence, and PEAXIS shows it.*
**Thread to keep all the way:** Amina (the candidate) → the recruiter → "Why 85%?" → back to it in the conclusion.
**Timing:** about 14 min 40 s of slides + 5 min live demo.

## 1 · Cover (55 s)

Good morning, members of the jury, my supervisors, and everyone joining us today. Thank you for being here.

Before I introduce my final year project, let me ask you to imagine something.

You're hiring a backend engineer. Your company uses a modern ATS, powered by AI, to find the best match for your requirements.

The tool shows you a candidate: **85% match**.

Would you invite her to an interview?

My first question would be: **"Why 85%?"**

Which skills does her CV really support? What still needs checking?

That question is the heart of **PEAXIS**, the AI recruitment platform I built: **show the evidence, and let the human decide**.

Let me quickly show you how this presentation is organized.

## 2 · Plan (25 s)

Here is how the next minutes are organized.

I'll start with the **context and the problem**: why recruitment needs clearer decisions.

Then **how I organized the project**, and what the platform has to do.

Then the **platform itself**, through the eyes of a candidate and a recruiter.

Then the **architecture, the AI, and how it runs in production**.

And I'll finish with **where PEAXIS stands today, what comes next, and a live demo**.

Let's start with the context.

## 3 · Context (35 s)

I built PEAXIS during my final year project at **Prospecter**, a company that builds an AI product for B2B prospecting. It's based in Doha, Qatar, and I worked there full time as a software engineer.

That environment mixed three things: AI, software, and running a real product in production.

My work covered the same three areas: **the application, the AI, and the infrastructure**.

I built PEAXIS independently, from the architecture to the deployment, with guidance from my supervisors, **Mme Olfa Mannai and Mr. Fedi Naimi**. Thank you both for your support.

So, why did I choose recruitment?

## 4 · Recruitment today (40 s)

Let's look at hiring from both sides.

A candidate sends a CV, and waits. A recruiter receives applications, reads them, compares profiles, and organizes interviews.

When applications grow, this work becomes hard to manage.

The numbers on this slide give the context. According to SHRM, it takes **about a month and a half** to fill a role. And according to LinkedIn, **37%** of recruiting teams are already trying generative AI.

AI can help with the workload. But a hiring decision still needs a reason that people can understand.

And that creates three problems.

## 5 · Challenges (25 s)

First, **manual work**. Reading and comparing CVs takes a lot of time.

Second, **scattered tools**. The CV is in one place, the discussion is in email, and the interview is in a calendar.

Third, **unclear AI results**. A score appears, but the recruiter can't see why.

These are the three problems I wanted PEAXIS to solve.

But recruitment tools already exist. So where does PEAXIS fit?

## 6 · Landscape (30 s)

Job platforms help companies **reach candidates**. Applicant tracking systems, the ATS, help **organize the hiring process**. AI tools help **process information faster**.

And many platforms already combine these.

So I'm not saying "nobody has AI in recruitment". My focus is different: **one recruitment journey, where every AI result is linked to evidence**.

When a recruiter sees an assessment, they should be able to ask "why?", and check the source.

That focus became my project question.

## 7 · Objective (25 s)

My question was simple: **how can AI make recruitment more efficient, while keeping decisions understandable?**

I split it into four goals. Bring the workflow together. Understand the candidate's information. Assist the recruiter. And **keep the human in control**.

That last goal shaped the whole platform.

Now, how did I organize the work to reach it?

## 8 · Methodology (25 s)

I used **Scrum, adapted to working alone**.

I had a backlog, and I worked in sprints. Each sprint had to produce something that works, followed by a review and a retrospective.

I tracked epics and checklists in the repository, and automated checks verified every change.

Then I started with the users: what does each one need to do?

## 9 · Functional requirements (30 s)

For the candidate, the journey is: **find a job, apply, and follow the application**.

For the recruiter: **publish a role, review candidates, and organize interviews**.

And underneath, every company needs its own workspace, its own permissions, private files, and billing.

So the requirements cover the journey you see, and the services you don't see.

But these features also have to work well.

## 10 · Non-functional requirements (30 s)

A CV is personal data, so **security** matters.

An application must survive a failure, so **reliability** matters.

The platform also needs speed, room to grow, and code I can maintain.

And because AI is involved, **explainability** is a requirement from day one.

I'll show you how each one shaped the implementation.

Now, let's meet the product.

## 11 · Platform (20 s)

PEAXIS has **two experiences on one platform**.

**PEAXIS Jobs** is for candidates. **PEAXIS Hire** is for hiring teams.

Behind both, they share the same services: identity, organizations, permissions, files, billing, and AI.

Let's follow Amina, a fictional candidate, and start with PEAXIS Jobs.

## 12 · PEAXIS Jobs (45 s)

Amina is looking for a backend engineering job.

She searches, opens a position, and reads the requirements.

Then she **applies with her CV**. The platform reads the CV and fills her profile, so she doesn't retype everything.

After that, she can **follow her application, stage by stage**.

These screens use fictional data, to show the journey.

For Amina it's simple: she finds the job, applies, and always knows where she stands.

Now let's see the same application from the recruiter's side.

## 13 · PEAXIS Hire (55 s)

The recruiter sees candidates in a pipeline: applied, screening, interview, and offer.

Let's open Amina's profile.

Here is the **85%** from my opening question. And now we can look behind it.

Each requirement is linked to **evidence from her CV**.

Look at Kubernetes. It says **"needs verification"**. That's not a rejection. It's something to check during the interview.

The recruiter reviews the evidence, schedules the interview, and moves Amina forward.

This is the key idea: **AI supports the review, and the recruiter takes the action**.

To make this work, I needed a clear architecture.

## 14 · Logical architecture (55 s)

Think of the system as four layers.

At the top, the **users**: candidates, recruiters, and visitors.

Then the **application layer**: the Next.js web platform, the NestJS API with the business rules, and a worker for long tasks.

Then the **data layer**: PostgreSQL, Redis, and private file storage.

And the **AI layer**: a FastAPI service that calls Gemini.

One rule matters most: **the API is the only authority**. The AI service processes what it receives, but it has no direct access to the database.

That's the logic. Now, how did I deploy it?

## 15 · Physical architecture (40 s)

A request first goes through **Cloudflare**, then Caddy on the application server. That server runs the web, API, worker, and AI containers.

PostgreSQL and Redis run on a **separate data server**. The two servers talk through a **private WireGuard connection**.

Files stay in private storage, and the database backups are stored offsite.

The main point: **the database is never exposed to the Internet**.

Now let's follow what happens when Amina clicks "Apply".

## 16 · What happens when a candidate applies (45 s)

First, the platform **saves the application, and its event, in one transaction**. It also records the work to do.

A worker picks up that work from the queue. The AI helps classify the evidence, and the platform rules calculate the alignment.

Then the result is ready for the recruiter.

But what if the AI service is down?

*(small pause)*

**Amina's application is still saved.** The work is retried later.

Applying never depends on the AI finishing.

Let's look closer at how a CV becomes usable information.

## 17 · How PEAXIS understands a CV (40 s)

A CV is just a document. The platform needs a structured profile.

First, it **extracts the text**. Then AI organizes it: experience, skills, education.

Then comes the important step: the result is **checked against the source text**.

Because a nicely written AI answer is not enough. Every piece of information must connect back to the CV.

Now we can compare this profile with the job.

## 18 · Why does this candidate match? (55 s)

And now we can answer the first question: **"Why 85%?"**

On the left, the job requirements. In the middle, the evidence from the CV. On the right, the status of each requirement.

AI helps **find and classify the evidence**. Then the platform applies **clear rules** to calculate the score.

Must-have requirements weigh more. And a missing must-have caps the score.

The 85% here is an illustration. It's not a probability that Amina will succeed in the job.

What matters is that the recruiter can see what supports the result, and what still needs checking.

So who decides in the end?

## 19 · Human-controlled AI (20 s)

AI can parse, summarize, explain, recommend, and draft.

The recruiter controls the requirements, the interviews, the stage changes, the rejections, and the offers.

**Show the evidence. Let the human decide.**

But to use this in real life, the system must also be reliable.

## 20 · Security and reliability (40 s)

Each company's data must be protected. So access is checked on every request, and files stay private.

Each application must be kept. So background work is durable, and it can be retried.

As the load grows, the services are separated, so I can scale the workers alone.

At this scale, I didn't need Kubernetes. I chose **clear service boundaries**, and an infrastructure I can operate.

These choices protect the same journey we just followed with Amina.

I also needed a safe way to ship changes.

## 21 · Testing and delivery (30 s)

Every change goes through **seven automated CI jobs**: lint and type checks, tests, migration and end-to-end checks, and security scans.

The repository has **more than 1,400 tests**.

Images are built and scanned. The deployment is gated. And I can roll back to the previous release.

So there are checks before anything reaches the product.

After the deployment, I need to know how the system behaves.

## 22 · Monitoring (25 s)

**Grafana Alloy** collects metrics and logs from the servers, and sends them to **Grafana Cloud**.

I follow the API, the queues, the worker heartbeat, the database, Redis, and the backups, with dashboards, alerts, and synthetic checks.

My next step: **verify the alert delivery at every release**.

So, where does PEAXIS stand today?

## 23 · From project to product (35 s)

PEAXIS started as my final year project. Today it's **deployed in production**, and the first client companies are starting to test it.

The engineering numbers: **more than 1,400 tests, 27 backend modules, seven CI jobs**, and **68 out of 68 checks** passed at the first production deployment.

These numbers describe the engineering. **User validation has just begun**, and I'm not claiming measured hiring results yet.

So what comes next?

## 24 · Perspectives (25 s)

First, I want to deepen **PEAXIS Hire**: team collaboration, scorecards, communication, and a copilot linked to its sources. And enterprise readiness.

Later, **PEAXIS HR** could extend the product beyond recruitment.

These are future directions. Today, my focus is the recruitment platform you just saw.

Now, enough slides. Let me show it live.

## 25 · Live demo (5 min)

Before you start: use the fictional demo account, and prepare one candidate that is already processed.

We followed Amina on the slides. Now I'll show the same journey live: **apply as a candidate, then review the evidence as a recruiter**.

The demo profile may have a different name or score. Point to what is really on the screen.

**Candidate (1 min 50 s):** search for a job, open it, show the requirements, apply with a CV, show the saved application.
Say: "Here are the requirements. I apply with my CV. The application is saved, and I can follow its progress."

**Recruiter (2 min 40 s):** open the pipeline and the candidate, check the evidence of one requirement, show the alignment, then schedule an interview or move the stage.
Say: "Now I'm the recruiter. Let's check one requirement against its evidence. This is what supports the assessment. I can use it to prepare the interview and move the candidate forward."

**Back to the slides (30 s):** finish at five minutes. Don't open billing, settings, or admin.

If the AI is slow: "The application is saved. The AI runs in the background. While it finishes, I'll show a profile that is already processed." Then switch to the prepared candidate, and say it's a separate example.

If the app is down: "The live app isn't available right now. I'll use the illustrated journey from the slides to show the same steps." Go back to slides 12 and 13, and say they are illustrated screens.

Let me finish by going back to our first question.

## 26 · Conclusion (30 s)

At the beginning I asked: **would you invite a candidate with an 85% match?**

Now we have something better than a number: **the evidence behind it**.

That's what I built with PEAXIS: **one recruitment platform, explainable AI, and the engineering to run it in production**.

**Show the evidence. Let the human decide.**

Thank you to the jury, and to everyone here, for your attention. I'm happy to answer your questions.

## 27 · Questions

Breathe. Let the person finish the question. Give the short answer first, then explain if needed.

If you need a moment: **"Let me think about that for a second."**

If you don't know: **"I haven't verified that yet. I would check…"** and say how.

---

## Easier opening if you feel nervous (30–35 s)

Use this instead of the long cover opening, then go to slide 2.

Good morning, members of the jury, my supervisors, and everyone here. Thank you for joining us.

I'm Habib, and my final year project is **PEAXIS**, an AI recruitment platform.

Imagine an AI tool tells you a candidate is an **85% match**. My question is simple: **why?**

PEAXIS helps the recruiter see the evidence behind the result, and make the decision.

First, let me show you how this presentation is organized.

## Your memory map

Remember **five parts**, not 27 speeches:

| Part | Slides | Question you answer | Memory cue |
|---|---|---|---|
| The reason | 1–7 | Why did I build this? | "Why 85%?" |
| The plan | 8–10 | How did I organize the work? | Method and requirements |
| The journey | 11–13 | What do users do? | Amina applies, recruiter reviews |
| The engineering | 14–22 | How does it work and keep running? | Save, explain, protect |
| The result | 23–27 | What exists today? | Product, demo, evidence |

**If you lose your place:** look at the slide, say its main idea in one sentence, then say the last sentence of the slide to move on. Don't try to recover what you missed.

**Practice in three passes:**
1. Read the script aloud once. Change any word you would never say.
2. Present with the slides only. Open the script only when you're stuck.
3. Time everything with the demo. Keep the opening question, the Kubernetes example, and the closing callback.

**Learn the opening and the closing by heart.** For the middle, learn the order of ideas.

## Cheat sheet: jury questions

| Question | Short answer |
|---|---|
| Why not Greenhouse or Ashby? | They already use AI. My focus is a connected journey, with assessments linked to evidence. *(slide 6)* |
| Is the score reliable? | It measures evidence coverage, not hiring probability. The rules are deterministic and versioned. *(slide 18; `B` → assessment)* |
| Does it prove the candidate has the skill? | No. The CV gives evidence to review. Unclear points get verified, for example in the interview. *(slides 13, 18)* |
| What if the AI provider is down? | The application is saved, the work is retried, failures are visible. *(slide 16)* |
| How is company data isolated? | Every request is checked against the user's organization and permissions. *(slide 20; `B` → security)* |
| What do you use for monitoring? | Grafana Alloy sends metrics and logs to Grafana Cloud. *(slide 22; `B` → monitoring)* |
| Do you have clients? | It's deployed, and the first companies are starting to test it. Validation is early. *(slide 23)* |
| Why not Kubernetes? | Not needed at this scale. Services are separated so they can grow alone. *(slide 20)* |
| Where do the numbers come from? | The repository and the deployment evidence (slide 23 footer). |
| What did you build yourself? | The application, the AI integration, and the deployment, with supervisor guidance. *(slide 3)* |

## If you run long

Keep every slide, but shorten these first:
1. **Slide 8:** "I used Scrum adapted to working alone: sprints, reviews, automated checks."
2. **Slide 10:** "The key qualities are security, reliability, performance, scalability, explainability, and maintainability. I'll show them next."
3. **Slide 11:** "Jobs is for candidates, Hire is for recruiters, one platform."
4. **Slide 19:** "AI assists. The recruiter decides."
5. **Slide 22:** "Grafana Alloy and Grafana Cloud monitor the platform."

Keep the demo at five minutes. Skip billing, settings, and admin.
