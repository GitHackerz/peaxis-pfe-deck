import type { ReactNode } from 'react'
import Slide from '../components/slide/Slide'

function Col({ title, items }: { title: string; items: ReactNode[] }) {
  return (
    <div className="flex flex-col gap-2.5 border-t-[3px] border-px-teal pt-3">
      <p className="text-[19px] font-extrabold uppercase tracking-wide text-[#029090]">{title}</p>
      <ul className="flex flex-col gap-2 text-[16px] leading-snug text-px-navy">
        {items.map((it, i) => <li key={i} className="flex gap-2"><span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-px-teal" /><span>{it}</span></li>)}
      </ul>
    </div>
  )
}

const B = ({ children }: { children: ReactNode }) => <b>{children}</b>

export function MonitoringDetail() {
  return (
    <Slide section="Backup · Operations" title="Monitoring stack in detail">
      <div className="grid grid-cols-3 gap-8">
        <Col title="Collection" items={[
          <><B>Grafana Alloy</B> agent on each server, configured as code in the repository.</>,
          <>Host metrics (node exporter), containers (cAdvisor), Caddy metrics, PostgreSQL and Redis exporters.</>,
          <>API and AI Prometheus metrics; BullMQ queue gauges and worker heartbeat; backup status file.</>,
          <>Selected application, Caddy, database and Redis logs.</>,
        ]} />
        <Col title="Grafana Cloud" items={[
          <>Prometheus metrics and <B>Loki</B> logs, four dashboards.</>,
          <>Alert rules: host and disk, worker, database and Redis, backups, API errors, ClamAV, email delivery, privacy deadlines.</>,
          <>Synthetic checks on the public site and API.</>,
        ]} />
        <Col title="Safety and honesty" items={[
          <>Monitoring listeners are never public; the remote-write queue is bounded so an outage cannot block the app.</>,
          <>No business identifiers are used as metric labels.</>,
          <>Alert contact points and synthetic probes are re-verified at each release: the repository alone cannot prove their live state.</>,
        ]} />
      </div>
    </Slide>
  )
}

export function SecurityDetail() {
  return (
    <Slide section="Backup · Security" title="Security controls (verified in code and docs)">
      <div className="grid grid-cols-3 gap-8">
        <Col title="Identity and access" items={[
          <>Argon2 password hashes; JWT access tokens, persisted hashed refresh tokens with rotation.</>,
          <>Google and LinkedIn sign-in; email verification.</>,
          <>Roles per organization (owner, admin, member) mapped centrally to permissions.</>,
          <>Platform admins: separate identity boundary, <B>TOTP MFA</B>, audited actions.</>,
          <>Global rate limiting, tighter on sensitive public routes.</>,
        ]} />
        <Col title="Tenant isolation" items={[
          <>Knowing an ID never grants access: the API resolves the owning organization and checks membership.</>,
          <>Employer records are read and written inside their organization context.</>,
          <>Entitlements (not plan names) gate paid features.</>,
          <>AI artifacts take their tenant from the application record, not from a client header.</>,
        ]} />
        <Col title="Files and services" items={[
          <>Uploads: allowed types only, size limit, file-signature check.</>,
          <>CVs stay quarantined until malware scan passes.</>,
          <>Candidates see their own CV; recruiters only for applications to their organization.</>,
          <>The AI service authenticates with a service secret and has no database credentials.</>,
        ]} />
      </div>
    </Slide>
  )
}

export function MatchDetail() {
  return (
    <Slide section="Backup · AI" title="Evidence assessment: how the score is computed">
      <div className="grid grid-cols-3 gap-8">
        <Col title="Evidence" items={[
          <>Recruiter-confirmed requirements per job; candidate evidence claims derived from the parsed CV.</>,
          <>Direct token match first. If none, vector search over the candidate’s own evidence chunks (distance ≤ 0.55, up to 8).</>,
          <>A narrow classifier only labels a <B>supplied</B> citation; it cannot invent one.</>,
        ]} />
        <Col title="Rules (deterministic)" items={[
          <>Per requirement: satisfied, partially satisfied, needs verification, unknown.</>,
          <>Weights: required 0.55 · experience 0.25 · nice-to-have 0.10, normalized over the present groups.</>,
          <>Transferable evidence earns 60% credit.</>,
          <>A missing mandatory requirement caps the score at 59.</>,
        ]} />
        <Col title="Traceability" items={[
          <>Assessments are snapshots with input fingerprint and scorer version.</>,
          <>Every evaluation stores its citation, constraint check and confidence.</>,
          <>Recruiters can review and waive requirements; the assessment is advisory and never changes a stage.</>,
          <>Embeddings: gemini-embedding-001, 768 dimensions, pgvector.</>,
        ]} />
      </div>
    </Slide>
  )
}

export function DomainDetail() {
  return (
    <Slide section="Backup · Data" title="Core data model">
      <div className="grid grid-cols-3 gap-8">
        <Col title="Operational core" items={[
          <>User · Business (tenant) · membership with role</>,
          <>Job: draft, published, paused, closed, archived</>,
          <>Candidate · Application with history and events</>,
          <>Interview linked to an application</>,
        ]} />
        <Col title="Application stages" items={[
          <>Applied → Screening → Interview → Offer → Hired, or Rejected</>,
          <>Stage changes are made by recruiters and recorded</>,
          <>Plans: Hire Free, Starter, Professional, Enterprise (entitlement-based)</>,
        ]} />
        <Col title="Derived AI data" items={[
          <>Requirements, evidence claims and chunks, assessments and evaluations, CV parses, generated content, work items</>,
          <>All are rebuildable and tied to their organization; stale or failed AI data never invalidates an application</>,
        ]} />
      </div>
    </Slide>
  )
}

export function TestingDetail() {
  return (
    <Slide section="Backup · Quality" title="Testing and delivery validation">
      <div className="grid grid-cols-3 gap-8">
        <Col title="Automated checks (CI)" items={[
          <>Lint and typecheck; Node unit tests; Python tests for the AI service.</>,
          <>Prisma validation and clean migration run against pgvector.</>,
          <>API end-to-end tests with Redis; browser end-to-end tests.</>,
          <>Dependency audit, secret scan (Gitleaks), image scan (Trivy).</>,
        ]} />
        <Col title="Release" items={[
          <>Deploy is a manual, gated workflow on a commit proven to be on main with green CI.</>,
          <>Four images tagged by commit, scanned, deployed by digest.</>,
          <>Backup and migration-history checks run before the schema changes.</>,
          <>Post-deploy checks of public routes, headers and CORS.</>,
        ]} />
        <Col title="Honest limits" items={[
          <>Hosted CI credits were unavailable for a period; releases then used local checks on the pushed commit.</>,
          <>Early client validation has just begun: no usage metrics are claimed.</>,
        ]} />
      </div>
    </Slide>
  )
}
