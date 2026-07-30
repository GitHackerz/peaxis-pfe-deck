import { AnimatePresence, motion } from 'framer-motion'
import {
    Activity,
    ArrowRight,
    Braces,
    BrainCircuit,
    BriefcaseBusiness,
    CheckCircle2,
    Cpu,
    Database,
    FileText,
    Gauge,
    KeyRound,
    Layers3,
    LockKeyhole,
    RefreshCcw,
    Search,
    Server,
    ShieldCheck,
    Sparkles,
    Table2,
    UserCheck,
    Users,
    Zap,
} from 'lucide-react'
import type { ReactNode } from 'react'
import SectionTag from '../components/ui/SectionTag'
import { fadeUp, stagger } from '../lib/animations'

interface Props { step: number }

type Tone = 'teal' | 'navy' | 'coral' | 'yellow' | 'gray'

const tones: Record<Tone, { bg: string; border: string; text: string; fill: string }> = {
  teal: { bg: '#E6FAF9', border: 'rgba(0,184,179,0.24)', text: '#009E9A', fill: '#00B8B3' },
  navy: { bg: '#F3F4F6', border: 'rgba(0,16,39,0.14)', text: '#001027', fill: '#001027' },
  coral: { bg: '#FFF0F0', border: 'rgba(254,89,90,0.24)', text: '#D63E3F', fill: '#FE595A' },
  yellow: { bg: '#FFFBEB', border: 'rgba(254,200,73,0.34)', text: '#8A5A00', fill: '#FEC849' },
  gray: { bg: '#F8FAFC', border: 'rgba(0,0,0,0.08)', text: '#6B7280', fill: '#374151' },
}

interface EngineeringSlideProps {
  title: string
  accent: string
  subtitle: string
  children: ReactNode
  section?: string
  sectionNumber?: string
}

function EngineeringSlide({ title, accent, subtitle, children, section = 'Engineering Deep Dive', sectionNumber = '8' }: EngineeringSlideProps) {
  return (
    <div className="slide-root">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 74% 24%, rgba(0,184,179,0.055) 0%, transparent 56%)' }}
      />

      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col gap-4">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-1.5">
          <motion.div variants={fadeUp}>
            <SectionTag section={section} number={sectionNumber} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-tight text-px-navy">
            {title} <span className="text-px-teal">{accent}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-px-muted max-w-3xl leading-relaxed">
            {subtitle}
          </motion.p>
        </motion.div>
        {children}
      </div>
    </div>
  )
}

function Reveal({ step, at, children, className = '' }: { step: number; at: number; children: ReactNode; className?: string }) {
  return (
    <AnimatePresence>
      {step >= at && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Card({
  title,
  detail,
  icon,
  tone = 'teal',
  meta,
}: {
  title: string
  detail: string
  icon?: ReactNode
  tone?: Tone
  meta?: string
}) {
  const c = tones[tone]
  return (
    <div className="h-full rounded-xl border bg-white p-3.5 flex flex-col gap-2" style={{ borderColor: c.border }}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          {icon && (
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: c.bg, color: c.fill }}>
              {icon}
            </div>
          )}
          <p className="text-sm font-extrabold text-px-navy leading-tight">{title}</p>
        </div>
        {meta && (
          <span className="text-xs font-bold rounded-full px-2 py-0.5 flex-shrink-0" style={{ background: c.bg, color: c.text }}>
            {meta}
          </span>
        )}
      </div>
      <p className="text-sm text-px-muted leading-relaxed">{detail}</p>
    </div>
  )
}

function Pill({ children, tone = 'teal' }: { children: ReactNode; tone?: Tone }) {
  const c = tones[tone]
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold" style={{ background: c.bg, borderColor: c.border, color: c.text }}>
      {children}
    </span>
  )
}

function Flow({ items }: { items: Array<{ label: string; sub?: string; tone?: Tone; icon?: ReactNode }> }) {
  return (
    <div className="grid gap-2 items-stretch" style={{ gridTemplateColumns: `repeat(${items.length * 2 - 1}, minmax(0, auto))` }}>
      {items.map((item, index) => {
        const c = tones[item.tone ?? 'teal']
        return (
          <div key={item.label} className="contents">
            <div className="min-w-[120px] rounded-xl border bg-white p-3 text-center flex flex-col items-center justify-center gap-2" style={{ borderColor: c.border }}>
              {item.icon && <div style={{ color: c.fill }}>{item.icon}</div>}
              <p className="text-sm font-extrabold text-px-navy leading-tight">{item.label}</p>
              {item.sub && <p className="text-xs text-px-muted leading-snug">{item.sub}</p>}
            </div>
            {index < items.length - 1 && (
              <div className="flex items-center justify-center text-px-teal px-1">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function MiniTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="rounded-xl bg-white border border-[var(--border)] overflow-hidden">
      <div className="grid bg-[#F8FAFC] border-b border-[var(--border)] text-sm font-bold text-px-muted" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
        {headers.map((head) => <div key={head} className="p-3">{head}</div>)}
      </div>
      {rows.map((row) => (
        <div key={row.join('-')} className="grid border-b last:border-b-0 border-[var(--border)] text-sm" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
          {row.map((cell, index) => (
            <div key={cell} className={`p-3 leading-relaxed ${index === 0 ? 'font-extrabold text-px-navy' : 'text-px-muted'}`}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function ArchitectureDecisions({ step }: Props) {
  const decisions = [
    ['Modular monolith', 'Domain stays cohesive; less distributed complexity.', 'vs microservices'],
    ['Separate AI service', 'Python ML stack isolated from core API load.', 'FastAPI'],
    ['Specialized web apps', 'Separate experiences for platform, recruiter, candidate, administration, and landing.', 'Next.js'],
    ['PostgreSQL', 'Relational workflows with strong consistency.', 'Prisma'],
    ['BullMQ', 'Heavy AI work moves outside request lifecycle.', 'async'],
    ['pgvector', 'Retrieval for job discovery and cited evidence.', 'retrieval'],
  ]

  return (
    <EngineeringSlide
      title="Architecture"
      accent="Decisions"
      subtitle="Selected for clear responsibilities and delivery control."
    >
      <div className="grid grid-cols-3 gap-3">
        {decisions.map(([title, detail, meta], index) => (
          <Reveal key={title} step={step} at={Math.min(index + 1, 4)}>
            <Card title={title} detail={detail} meta={meta} tone={index % 2 === 0 ? 'teal' : 'navy'} />
          </Reveal>
        ))}
      </div>
    </EngineeringSlide>
  )
}

export function EndToEndAIPipeline({ step }: Props) {
  return (
    <EngineeringSlide
      title="AI Runtime"
      accent="Architecture"
      subtitle="NestJS orchestrates, FastAPI infers, and PostgreSQL is the source of truth."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Next.js', sub: 'user action', icon: <Users size={17} />, tone: 'gray' },
            { label: 'NestJS API', sub: 'policy + write', icon: <Server size={17} />, tone: 'navy' },
            { label: 'AiWorkItem', sub: 'durable state', icon: <ShieldCheck size={17} />, tone: 'navy' },
            { label: 'BullMQ', sub: 'ai-tasks queue', icon: <RefreshCcw size={17} />, tone: 'teal' },
            { label: 'Worker', sub: 'execution', icon: <Cpu size={17} />, tone: 'yellow' },
            { label: 'FastAPI', sub: 'inference only', icon: <BrainCircuit size={17} />, tone: 'coral' },
            { label: 'Provider', sub: 'Gemini or Azure', icon: <Sparkles size={17} />, tone: 'teal' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-2 gap-3 mt-3">
        <Card title="Synchronous request path" detail="Validate, authorize, persist business state, and return a processing response. Short generation or extraction helpers can call FastAPI directly." tone="navy" />
        <Card title="Asynchronous worker path" detail="Call FastAPI, persist parse/embedding/assessment outputs, and update the durable work and application state." tone="teal" />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl border border-[rgba(254,200,73,0.34)] bg-[#FFFBEB] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">Return path: the worker writes results to PostgreSQL; Redis is used for queues, locks, heartbeats, and caches—not authoritative AI state.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function CVParsingPipeline({ step }: Props) {
  return (
    <EngineeringSlide
      title="CV Parsing"
      accent="Pipeline"
      subtitle="A worker turns a validated CV into grounded, structured evidence — without blocking the candidate."
    >
      <Reveal step={step} at={1}>
        <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">1. Intake and durable parsing</p>
        <Flow
          items={[
            { label: 'Candidate upload', sub: 'public multipart request', icon: <Users size={17} />, tone: 'gray' },
            { label: 'File gate', sub: 'type, size, signature, checksum', icon: <ShieldCheck size={17} />, tone: 'navy' },
            { label: 'ResumeParse', sub: 'pending + PARSE_CV work', icon: <FileText size={17} />, tone: 'yellow' },
            { label: 'Worker + FastAPI', sub: 'extract and parse', icon: <BrainCircuit size={17} />, tone: 'coral' },
            { label: 'Parse result', sub: 'READY or NEEDS_REVIEW', icon: <CheckCircle2 size={17} />, tone: 'teal' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Extract text" detail="PDF, DOCX, and TXT use native extraction. Low-quality PDFs can use Google Vision OCR when enabled." tone="navy" meta="file layer" />
        <Card title="Structured AI" detail="FastAPI calls the active Gemini or Azure provider at temperature 0 to return strict JSON: skills, experience, education, and citations." tone="coral" meta="inference" />
        <Card title="Ground + persist" detail="Validation rejects unsupported facts. ResumeParse stores status, warnings, model metadata, and the grounded result; checksum/cache avoid duplicate work." tone="teal" meta="control" />
      </Reveal>
      <Reveal step={step} at={3} className="mt-3">
        <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">2. Candidate confirmation and retrieval preparation</p>
        <Flow
          items={[
            { label: 'Candidate confirms', sub: 'one-time claim', tone: 'gray' },
            { label: 'candidate.resumeParsed', sub: 'structured profile', tone: 'navy' },
            { label: 'Evidence claims', sub: 'source-cited facts', tone: 'coral' },
            { label: 'Evidence chunks', sub: 'retrieval units', tone: 'teal' },
            { label: 'Embeddings', sub: 'vector persistence', tone: 'yellow' },
          ]}
        />
      </Reveal>
    </EngineeringSlide>
  )
}

export function EvidenceMatchingEngine({ step }: Props) {
  return (
    <EngineeringSlide
      title="Evidence-Based"
      accent="Matching Engine"
      subtitle="Exact rules first; pgvector retrieval only when needed; the backend always owns the final decision."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Requirements', sub: 'recruiter-confirmed definitions', icon: <BriefcaseBusiness size={17} />, tone: 'gray' },
            { label: 'Candidate claims', sub: 'structured résumé facts', icon: <FileText size={17} />, tone: 'coral' },
            { label: 'Evidence assessment', sub: 'fingerprinted durable work', icon: <ShieldCheck size={17} />, tone: 'navy' },
            { label: 'Requirement evaluation', sub: 'satisfaction + verification', icon: <Gauge size={17} />, tone: 'yellow' },
            { label: 'Alignment score', sub: 'ranking uses current score', icon: <Activity size={17} />, tone: 'teal' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="1. Exact evidence" detail="NestJS normalizes requirement text, matches candidate claims, and calculates relevant experience months from CV dates." tone="navy" meta="rules first" />
        <Card title="2. Semantic fallback" detail="If direct evidence is absent, FastAPI creates a 768-dimension embedding; pgvector retrieves up to 8 candidate chunks for classification." tone="coral" meta="retrieval only" />
        <Card title="3. Deterministic decision" detail="NestJS sets satisfaction, verification, requirement weights, and the 0–100 score. The recruiter reviews the result and decides." tone="teal" meta="human authority" />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-[#FFFBEB] border border-[rgba(254,200,73,0.34)] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">The current alignment and ranking score are the same persisted calculation—not a separate opaque candidate similarity model.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function MatchingAlgorithm({ step }: Props) {
  return (
    <EngineeringSlide
      title="How Matching"
      accent="Is Computed"
      subtitle="A deterministic evidence algorithm; vectors and LLMs only retrieve or classify citations."
    >
      <Reveal step={step} at={1} className="grid grid-cols-2 gap-3">
        <Card
          title="1. Find candidate evidence"
          detail="Canonical token and simple stem matching compare each requirement with source-cited claims. The fallback searches displayable résumé summary, headline, experience, and project text. Experience requirements merge overlapping date intervals into relevant months."
          tone="navy"
          icon={<Search size={18} />}
        />
        <Card
          title="2. Use vectors only when needed"
          detail="For unresolved COMPETENCY, RESPONSIBILITY, or TOOL_SYSTEM requirements, FastAPI embeds the requirement. pgvector retrieves only this candidate’s chunks at distance ≤ 0.55 (maximum 8). The classifier sees at most 12 claims plus retrieved chunks and may cite only one supplied source."
          tone="coral"
          icon={<BrainCircuit size={18} />}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-[1.05fr_.95fr] gap-3 mt-3">
        <div className="rounded-xl border border-[rgba(0,184,179,0.24)] bg-[#E6FAF9] p-4">
          <p className="text-sm font-black text-px-navy">3. Apply deterministic requirement states</p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2 mt-3 text-sm text-px-navy">
            <p><strong>No evidence, mandatory</strong><br /><span className="text-px-muted">REQUIRES_VERIFICATION</span></p>
            <p><strong>No evidence, preferred</strong><br /><span className="text-px-muted">UNKNOWN</span></p>
            <p><strong>Evidence but years unmet</strong><br /><span className="text-px-muted">PARTIALLY_SATISFIED</span></p>
            <p><strong>Evidence + policy satisfied</strong><br /><span className="text-px-muted">SATISFIED</span></p>
          </div>
        </div>
        <div className="rounded-xl border border-[rgba(254,200,73,0.34)] bg-[#FFFBEB] p-4">
          <p className="text-sm font-black text-px-navy">4. Persist explainable results</p>
          <p className="text-sm text-px-muted leading-relaxed mt-3">An <strong className="text-px-navy">EvidenceAssessment</strong> stores input snapshots and the score. Each <strong className="text-px-navy">RequirementEvaluation</strong> retains satisfaction, constraints, and positive cited evidence.</p>
        </div>
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-white border border-[var(--border)] p-4 mt-3">
        <div className="flex items-center justify-between gap-5">
          <div>
            <p className="text-xs font-bold text-px-muted uppercase tracking-wider">Current GENERAL:v1 score</p>
            <p className="text-xl font-black text-px-navy mt-1">score = round( Σ(weight × state value × evidence credit) / Σ(weight) )</p>
          </div>
          <div className="flex flex-wrap justify-end gap-2 max-w-[430px]">
            <Pill tone="navy">required 0.55</Pill>
            <Pill tone="yellow">experience 0.25</Pill>
            <Pill>preferred 0.10</Pill>
            <Pill tone="coral">TRANSFERABLE × 0.60</Pill>
          </div>
        </div>
        <p className="text-sm text-px-muted mt-3">State value: SATISFIED = 100, PARTIALLY_SATISFIED = 60, all other states = 0. The current ranking score equals this alignment score; no separate opaque cosine ranking is used.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function ExplainableAI({ step }: Props) {
  return (
    <EngineeringSlide
      title="Explainable"
      accent="AI"
      subtitle="Each score traces a requirement to cited candidate evidence."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Requirement definition', sub: 'recruiter-confirmed', tone: 'gray' },
            { label: 'Candidate evidence', sub: 'claims + résumé facts', tone: 'coral' },
            { label: 'Retrieved evidence', sub: 'optional chunks', tone: 'teal' },
            { label: 'Evidence assessment', sub: 'stored snapshot', tone: 'navy' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="mt-3">
        <Flow
          items={[
            { label: 'Requirement evaluation', sub: 'satisfaction + verification', tone: 'yellow' },
            { label: 'Alignment / ranking', sub: 'same current score', tone: 'teal' },
            { label: 'Recruiter review', sub: 'human judgment', tone: 'navy' },
            { label: 'Audit trail', sub: 'snapshots + citations', tone: 'gray' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.24)] p-4 mt-3">
        <p className="text-lg font-black text-px-navy">The LLM can classify supplied citations; NestJS applies scoring and verification rules. Recruiter review is stored, while score-changing override policy remains future work.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function ImplementationStatus({ step }: Props) {
  return (
    <EngineeringSlide
      title="Implementation"
      accent="Status"
      subtitle="Delivered capabilities are separated from production-hardening gaps."
    >
      <Reveal step={step} at={1} className="grid grid-cols-3 gap-3">
        <Card title="CV evidence pipeline" detail="Validated uploads, durable parsing, candidate confirmation, cited claims, and persisted evidence chunks." icon={<CheckCircle2 size={18} />} tone="teal" meta="Implemented" />
        <Card title="Evidence assessment" detail="Requirement-by-requirement evaluation, deterministic alignment score, and persisted reviewable output." icon={<BrainCircuit size={18} />} tone="teal" meta="Implemented" />
        <Card title="Durable AI runtime" detail="AiWorkItem state, queue delivery, worker retries, and reconciliation keep inference off the request path." icon={<RefreshCcw size={18} />} tone="teal" meta="Implemented" />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Recommendation scope" detail="Candidate recommendation visibility needs stricter business and application constraints." icon={<ShieldCheck size={18} />} tone="coral" meta="Hardening" />
        <Card title="Review policy" detail="Reviewer decisions are stored, but override effects are not yet part of the versioned scoring policy." icon={<UserCheck size={18} />} tone="yellow" meta="Partial" />
        <Card title="Data governance" detail="Provider retention, consent, PII redaction, and stale-vector lifecycle policy are still to be formalized." icon={<LockKeyhole size={18} />} tone="coral" meta="Hardening" />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-[#F8FAFC] border border-[var(--border)] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">This distinction keeps the technical defense accurate: a working capability is not presented as a completed production assurance.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function BackgroundProcessing({ step }: Props) {
  return (
    <EngineeringSlide
      title="Background"
      accent="Processing"
      subtitle="PostgreSQL owns work state; BullMQ sends execution to the worker."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'AiWorkItem', sub: 'PostgreSQL state', icon: <Database size={17} />, tone: 'navy' },
            { label: 'Dispatch', sub: 'queue message', icon: <RefreshCcw size={17} />, tone: 'teal' },
            { label: 'Worker', sub: 'claim + execute', icon: <Cpu size={17} />, tone: 'yellow' },
            { label: 'FastAPI', sub: 'inference', icon: <BrainCircuit size={17} />, tone: 'coral' },
            { label: 'Persist', sub: 'result + status', icon: <ShieldCheck size={17} />, tone: 'navy' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="PostgreSQL controls retries" detail="Worker attempts and availability are persisted; BullMQ jobs use one delivery attempt." tone="navy" />
        <Card title="Reconciliation protects delivery" detail="The worker checks stale queued or pending work on start and every 30 seconds." tone="teal" />
        <Card title="Failure is explicit" detail="Work, generated content, and assessments can enter a failed state after configured retries." tone="yellow" />
      </Reveal>
      <Reveal step={step} at={3} className="mt-3"><Pill tone="coral">No dedicated dead-letter queue is implemented</Pill></Reveal>
    </EngineeringSlide>
  )
}

export function SecurityArchitecture({ step }: Props) {
  const controls = [
    ['JWT', 'Authenticated API access', <KeyRound size={17} />],
    ['Membership', 'Active tenant membership in protected flows', <UserCheck size={17} />],
    ['businessId', 'Tenant-scoped domain records', <BriefcaseBusiness size={17} />],
    ['Rate limits', 'Public CV and FastAPI request throttling', <Gauge size={17} />],
    ['File gates', 'Size, MIME, extension, and signature checks', <FileText size={17} />],
    ['Service secret', 'FastAPI internal-call authentication', <ShieldCheck size={17} />],
    ['Provider PII', 'Raw CV content is sent for inference', <LockKeyhole size={17} />],
    ['Visibility gap', 'Candidate recommendation access needs remediation', <CheckCircle2 size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Security"
      accent="Architecture"
      subtitle="Identity, tenant, file, and service controls — with known gaps explicit."
    >
      <div className="grid grid-cols-4 gap-3">
        {controls.map(([title, detail, icon], index) => (
          <Reveal key={title} step={step} at={Math.min(Math.floor(index / 2) + 1, 4)}>
            <Card title={title} detail={detail} icon={icon} tone={index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'navy' : 'coral'} />
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={4} className="rounded-xl bg-[#FFFBEB] border border-[rgba(254,200,73,0.34)] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">Pre-production hardening: enforce active membership for generated content and define provider retention, consent, and PII redaction policy.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function DatabaseDesign({ step }: Props) {
  return (
    <EngineeringSlide
      title="AI Data"
      accent="Model"
      subtitle="PostgreSQL stores the evidence trail; pgvector supports retrieval, not decisions."
    >
      <Reveal step={step} at={1} className="flex flex-col gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">Candidate evidence path</p>
          <Flow
            items={[
              { label: 'ResumeParse', sub: 'raw parse state', icon: <FileText size={17} />, tone: 'gray' },
              { label: 'resumeParsed', sub: 'confirmed profile', icon: <UserCheck size={17} />, tone: 'navy' },
              { label: 'Evidence claim', sub: 'source-cited fact', icon: <ShieldCheck size={17} />, tone: 'coral' },
              { label: 'Evidence chunk', sub: 'retrieval unit', icon: <Layers3 size={17} />, tone: 'teal' },
              { label: 'vector(768)', sub: 'pgvector support', icon: <Search size={17} />, tone: 'yellow' },
            ]}
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-px-navy mb-2">Assessment path</p>
          <Flow
            items={[
              { label: 'Requirement definition', sub: 'job criteria', icon: <BriefcaseBusiness size={17} />, tone: 'gray' },
              { label: 'AiWorkItem', sub: 'durable request', icon: <RefreshCcw size={17} />, tone: 'navy' },
              { label: 'EvidenceAssessment', sub: 'input snapshot + score', icon: <Database size={17} />, tone: 'teal' },
              { label: 'RequirementEvaluation', sub: 'state + citation', icon: <CheckCircle2 size={17} />, tone: 'coral' },
            ]}
          />
        </div>
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Authoritative records" detail="PostgreSQL owns workflow state, candidate facts, assessment snapshots, and retries." icon={<Database size={18} />} tone="navy" />
        <Card title="Bounded retrieval" detail="Vectors belong to candidate evidence chunks. No whole-candidate embedding drives the final score." icon={<Search size={18} />} tone="teal" />
        <Card title="Known lifecycle work" detail="Stale chunk cleanup and an ANN vector index are roadmap items, not claimed as complete." icon={<Table2 size={18} />} tone="yellow" />
      </Reveal>
    </EngineeringSlide>
  )
}

export function VerificationEvidence({ step }: Props) {
  return (
    <EngineeringSlide
      title="Verification"
      accent="Evidence"
      subtitle="Unit, service, E2E, and delivery checks; unmeasured claims stay unclaimed."
    >
      <Reveal step={step} at={1}>
        <MiniTable
          headers={['Verification layer', 'Latest evidence', 'Scope']}
          rows={[
            ['FastAPI service', '18 Python tests passed locally', 'CV parsing, provider routing, sanitization, and website-profile helpers'],
            ['Platform API', 'Unit, API E2E, and Playwright workflows are configured', 'Platform behavior and critical recruiting journeys'],
            ['Delivery pipeline', 'GitHub Actions launch-readiness workflow', 'Install, typecheck, build, tests, API E2E, and browser E2E'],
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Verified behavior" detail="Provider selection, parsing safeguards, and bounded service behavior have executable tests." icon={<CheckCircle2 size={18} />} tone="teal" />
        <Card title="Coverage to strengthen" detail="Add direct tests for EvidenceMatchingService and the AI worker, including thresholds and retry transitions." icon={<Gauge size={18} />} tone="yellow" />
        <Card title="Before defense" detail="Repair the stale CandidatesPublic unit-test setup after the RecommendationService dependency was added." icon={<Braces size={18} />} tone="coral" />
      </Reveal>
      <Reveal step={step} at={3} className="rounded-xl bg-[#FFFBEB] border border-[rgba(254,200,73,0.34)] p-4 mt-3">
        <p className="text-sm font-black text-px-navy">No model-accuracy, latency, throughput, or SLA value is claimed until it is measured on a controlled evaluation sample.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function AIModelsRouting({ step }: Props) {
  return (
    <EngineeringSlide
      title="AI Models"
      accent="by Use Case"
      subtitle="Gemini extracts or classifies evidence; deterministic backend rules calculate the final score."
    >
      <Reveal step={step} at={1}>
        <MiniTable
          headers={['Use case', 'Technology', 'Role']}
          rows={[
            ['CV parsing', 'Gemini 3.5 Flash', 'Strict structured résumé JSON'],
            ['Evidence classification', 'Gemini 3.5 Flash', 'Classify supplied citations only'],
            ['Embeddings', 'gemini-embedding-001', '768D semantic retrieval with pgvector'],
            ['OCR fallback', 'Google Vision OCR', 'Recover text from poor PDFs'],
            ['Final score', 'NestJS + PostgreSQL', 'Deterministic 0–100 calculation'],
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="flex flex-wrap gap-2 mt-3">
        <Pill>Gemini-only model path</Pill>
        <Pill tone="navy">FastAPI isolates inference</Pill>
        <Pill tone="coral">LLMs do not rank candidates</Pill>
      </Reveal>
    </EngineeringSlide>
  )
}

export function PerformanceOptimizations({ step }: Props) {
  const optimizations = [
    ['Redis cache', 'Bounded parse, embedding, and selected-generation reuse; never the source of truth.', <Database size={17} />],
    ['Durable worker', 'Slow inference happens outside HTTP requests with task-specific retry policies.', <RefreshCcw size={17} />],
    ['Hybrid job search', 'PostgreSQL full-text search merges with pgvector semantic results.', <Search size={17} />],
    ['Chunk retrieval', 'Evidence retrieval is constrained to the candidate and returns only a small cited set.', <FileText size={17} />],
    ['Provider retries', 'The inference client retries transient provider/network failures.', <Zap size={17} />],
    ['Graceful search', 'If query embedding fails, public job search returns keyword results with degraded status.', <Cpu size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Performance"
      accent="Optimizations"
      subtitle="Bounded retrieval, cache reuse, and durable work reduce synchronous AI latency."
    >
      <div className="grid grid-cols-3 gap-3">
        {optimizations.map(([title, detail, icon], index) => (
          <Reveal key={title} step={step} at={Math.min(Math.floor(index / 2) + 1, 3)}>
            <Card title={title} detail={detail} icon={icon} tone={index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'navy' : 'yellow'} />
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={4} className="rounded-xl bg-[#FFFBEB] border border-[rgba(254,200,73,0.34)] p-4 mt-3">
        <p className="text-lg font-black text-px-navy">Known limit: pgvector is enabled, but the baseline migration does not create an ANN vector index.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function TechnicalChallenges({ step }: Props) {
  return (
    <EngineeringSlide
      title="Technical Challenges"
      accent="& Solutions"
      subtitle="Safeguards and limitations remain explicit for technical review."
    >
      <Reveal step={step} at={1}>
        <MiniTable
          headers={['Challenge', 'Solution', 'Outcome']}
          rows={[
            ['AI latency', 'Durable work + worker retries', 'Responsive request path'],
            ['CV reliability', 'File gates + quality gate + optional OCR', 'READY or NEEDS_REVIEW state'],
            ['Grounding', 'Citation-bound evidence classification', 'No free-form evidence invention'],
            ['Explainability', 'Snapshots, evaluations, and citations', 'Auditable assessment trail'],
            ['Provider outage', 'Retries and explicit failure states', 'Recoverable, observable processing'],
            ['Known access gap', 'Candidate recommendation visibility needs remediation', 'Documented before production'],
          ]}
        />
      </Reveal>
    </EngineeringSlide>
  )
}

export function FutureTechnicalRoadmap({ step }: Props) {
  const nearTerm = [
    ['Access control', 'Enforce active membership for all AI-generated content and correct recommendation visibility.', <ShieldCheck size={17} />],
    ['Atomic delivery', 'Commit application and assessment work atomically with a transactional outbox pattern.', <Database size={17} />],
    ['Reviewer policy', 'Make overrides affect an explicit versioned assessment policy and explainability.', <UserCheck size={17} />],
  ] as const
  const midTerm = [
    ['FinOps coverage', 'Route every chargeable AI call through operations and credit ledger reconciliation.', <Gauge size={17} />],
    ['Prompt controls', 'Centralize prompt construction and test every user-controlled input surface.', <Braces size={17} />],
    ['Vector lifecycle', 'Add stale-chunk cleanup and measure before introducing an ANN vector index.', <Search size={17} />],
  ] as const
  const longTerm = [
    ['Governed expansion', 'Expose only supported FastAPI helpers through tenant-authorized NestJS contracts.', <BrainCircuit size={17} />],
    ['Data governance', 'Define provider retention, PII classification, consent, and operational redaction.', <LockKeyhole size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Roadmap"
      accent="& Future Work"
      subtitle="Next: harden the delivered system before widening AI capability."
      section="Roadmap"
      sectionNumber="9"
    >
      <Reveal step={step} at={1} className="flex flex-col gap-1.5">
        <p className="text-xs font-bold uppercase tracking-wider text-px-teal">Near-term</p>
        <div className="grid grid-cols-3 gap-3">
          {nearTerm.map(([title, detail, icon]) => (
            <Card key={title} title={title} detail={detail} icon={icon} tone="teal" />
          ))}
        </div>
      </Reveal>
      <Reveal step={step} at={2} className="flex flex-col gap-1.5 mt-3">
        <p className="text-xs font-bold uppercase tracking-wider text-px-navy">Mid-term</p>
        <div className="grid grid-cols-3 gap-3">
          {midTerm.map(([title, detail, icon]) => (
            <Card key={title} title={title} detail={detail} icon={icon} tone="navy" />
          ))}
        </div>
      </Reveal>
      <Reveal step={step} at={3} className="flex flex-col gap-1.5 mt-3">
        <p className="text-xs font-bold uppercase tracking-wider text-[#D63E3F]">Long-term vision</p>
        <div className="grid grid-cols-2 gap-3">
          {longTerm.map(([title, detail, icon]) => (
            <Card key={title} title={title} detail={detail} icon={icon} tone="coral" />
          ))}
        </div>
      </Reveal>
    </EngineeringSlide>
  )
}
