# PEAXIS PFE Deck: Sources and Claim Record

*Repo* = `peaxis-workspace` (read-only, inspected 2026-10-01). *External* = web source. Slide numbers refer to the current main deck order (23 slides incl. Questions); B1–B7 are backup slides.

## External sources

| Claim used | Source | Slide | Type |
| --- | --- | --- | --- |
| Median time-to-fill is about a month and a half (44 days non-executive, 45 executive) | SHRM, *2025 Recruiting Benchmarking* (shrm.org/topics-tools/research/2025-recruiting-benchmarking) | 5 | External (checked via search; figure supplied in the brief) |
| 37% of recruiting organizations are actively integrating or experimenting with generative AI (up from 27%) | LinkedIn, *Future of Recruiting 2025* | 5 | External (checked via search) |
| Teams using GenAI save about 20% of their workweek | LinkedIn, *Future of Recruiting 2025* | Pitch notes only (not on a slide) | External |
| Greenhouse, Ashby, Lever market AI features | Vendors' public positioning, per brief | 5 | External (supplied in the brief, not independently re-verified) |

**Discrepancy noted:** the brief cites "73%" of TA professionals agreeing AI will change hiring; a search of the same report returned "74%". Neither figure appears in the deck.
**Removed old claims:** "42 days SHRM 2024", "75% recruiters overloaded", "60% candidates no feedback", "$14.9K cost of a bad hire", and the old competitor checkmark matrix. None could be substantiated.

## Repository sources

| Claim used | Source file(s) | Slide |
| --- | --- | --- |
| Jobs = candidates; Hire = recruiter ATS; Admin is an internal control plane | `docs/product/overview.md`, `docs/architecture/overview.md`. *PEAXIS Core removed per your instruction; docs still use "Core" as a settings label.* | 12, 17 |
| Shared capabilities (identity, organizations, permissions, files, billing, AI) | `docs/architecture/overview.md`, `security-tenancy.md`, `billing-entitlements.md` | 12 |
| Next.js / NestJS / Prisma / FastAPI / Gemini / PostgreSQL+pgvector / Redis+BullMQ / Docker / S3-compatible storage | `docs/architecture/overview.md`, `services/ai/.env.example` (embedding model `gemini-embedding-001`, 768-d) | 16, 17, A3 |
| API is the sole authority; AI service stateless, no DB credentials | `docs/architecture/overview.md`, `security-tenancy.md` | 17, A2 |
| Cloudflare, Caddy, APP/DATA two-host split, WireGuard, loopback-only DB/Redis, firewall limited to Cloudflare ranges | `docs/architecture/overview.md` (physical deployment), `docs/engineering/operations.md` | 21, A1 |
| OVH hosting | `docker-compose.prod.ovh.yml` filename and brief | 16 |
| Private object storage; offsite backups, WAL + nightly dumps | `docs/engineering/operations.md`, `docs/operations/backup-and-recovery.md` | 21, A1 |
| Security controls: Argon2, JWT + hashed refresh tokens, OAuth, admin TOTP MFA, rate limiting, upload validation, malware quarantine (ClamAV) | `docs/architecture/security-tenancy.md` | 22, A2 |
| Tenant isolation via membership checks resolved from the protected record | `docs/architecture/security-tenancy.md` | 22, A2 |
| Durable work rows, BullMQ `ai-tasks`, worker, reconciliation, Platform Events written in the business transaction, idempotent notifications | `docs/architecture/ai-and-queues.md`, `docs/decisions/hire-adr-002-platform-events-outbox.md`, `docs/engineering/operations.md` | 22, A4 |
| Health endpoints, worker heartbeat (45 s), structured logs, Prometheus metrics | `docs/engineering/operations.md` | 17, B2 |
| Grafana Alloy agents → Grafana Cloud (Prometheus, Loki, 4 dashboards, alert rules, synthetic checks); node exporter, cAdvisor, Caddy, PostgreSQL/Redis exporters; BullMQ gauges; backup metrics; bounded queue. Alert contact points and probes are verified per release | `ops/observability/README.md`, `ops/observability/alloy/*`, `docs/engineering/operations.md` | 18, B2 |
| Restore runbook; privacy tombstone replay before traffic resumes | `docs/operations/backup-and-recovery.md` | A4 |
| Evidence-based assessment: weights 0.55/0.25/0.10 normalized over present groups, transferable credit 0.6, mandatory gap caps at 59, retrieval distance ≤ 0.55 (max 8), classifier labels only supplied citations | **Code is authoritative:** `apps/api/src/.../EvidenceMatchingService` (`score`, `GENERAL_WEIGHTS`); `docs/architecture/ai-engineering-handbook.md` §08 | 19, A3 |
| Recruiters can waive requirements (reviewer decision `WAIVE_REQUIREMENT` is applied by the scorer) | `EvidenceMatchingService.score`. *The handbook still says reviews do not affect the score; the code is newer.* | 20, A3 |
| AI is advisory; no AI path changes an application stage | `docs/architecture/ai-engineering-handbook.md` §01, §09 | 20 |
| Example 85% = required group 100 (weight .55), nice-to-have Kubernetes 0 (weight .10): (55+0)/0.65 ≈ 85 | computed from `score()` | 14, 19 |
| Pipeline stages, candidate card, drawer, job card, token palette (teal `#029090`, navy, slate, Inter) | `apps/web/src/features/pipeline/components/*`, `features/jobs/components/job-card.tsx`, `apps/web/src/styles/tokens.css` | 13, 14, 18, 19 |
| Hire direction: collaboration/scorecards, communication hub, source-linked copilot, enterprise permissions/integrations | `docs/product/peaxis-hire-implementation-roadmap.md` (Phases 2–3) | 24 |
| PEAXIS HR is deferred / not a commitment | `docs/product/overview.md` (HR is a reserved enum value without runtime) | 24 |
| CI gates, immutable digests, manual deploy and rollback, honest CI-credit limitation | `docs/engineering/production-cicd.md` | A6 |
| Methodology (backlog, epics, review checklists) | `docs/execution/*` | 9 |

## Not claimed (no evidence in the repo)
Client names, number of clients, revenue, testimonials, usage metrics, uptime figures. The statements "deployed in production" and "first client companies beginning to test" come from your brief.
