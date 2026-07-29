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
    GitBranch,
    KeyRound,
    Layers3,
    LockKeyhole,
    RefreshCcw,
    Route,
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
    ['Next.js apps', 'Server rendering plus rich client interactions.', '3 frontends'],
    ['PostgreSQL', 'Relational workflows with strong consistency.', 'Prisma'],
    ['BullMQ', 'Heavy AI work moves outside request lifecycle.', 'async'],
    ['pgvector', 'Retrieval for job discovery and cited evidence.', 'retrieval'],
  ]

  return (
    <EngineeringSlide
      title="Architecture"
      accent="Decisions"
      subtitle="The stack was selected for delivery risk, maintainability, and production behavior."
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
      title="End-to-End"
      accent="AI Pipeline"
      subtitle="Business data is committed first; durable AI work runs in a dedicated worker."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Application', sub: 'persisted', icon: <FileText size={17} />, tone: 'gray' },
            { label: 'AiWorkItem', sub: 'durable state', icon: <ShieldCheck size={17} />, tone: 'navy' },
            { label: 'ai-tasks', sub: 'BullMQ queue', icon: <RefreshCcw size={17} />, tone: 'teal' },
            { label: 'api-worker', sub: 'execution', icon: <Cpu size={17} />, tone: 'yellow' },
            { label: 'FastAPI', sub: 'inference only', icon: <BrainCircuit size={17} />, tone: 'coral' },
            { label: 'Assessment', sub: 'evidence + review', icon: <Gauge size={17} />, tone: 'teal' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-2 gap-3 mt-3">
        <Card title="Synchronous" detail="Authorize, persist application, create durable work, return status." tone="navy" />
        <Card title="Asynchronous" detail="Parse, classify evidence, index retrieval data, and persist derived results." tone="teal" />
      </Reveal>
    </EngineeringSlide>
  )
}

export function ExplainableAI({ step }: Props) {
  return (
    <EngineeringSlide
      title="Explainable"
      accent="AI"
      subtitle="Every recommendation is traceable to a requirement, cited evidence, and a recruiter's review — not only a score."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Requirement', sub: 'employer-defined', tone: 'gray' },
            { label: 'Evidence', sub: 'cited source', tone: 'coral' },
            { label: 'Evaluation', sub: 'model output', tone: 'teal' },
            { label: 'Review', sub: 'recruiter action', tone: 'navy' },
          ]}
        />
      </Reveal>

      <Reveal step={step} at={2} className="rounded-xl border border-[rgba(0,184,179,0.24)] bg-[#E6FAF9] p-4 mt-3">
        <p className="text-lg font-black text-px-navy">Assessment = requirement + cited evidence + evaluation + reviewer action</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <Pill>Evidence claim</Pill>
          <Pill tone="coral">Needs verification</Pill>
          <Pill tone="navy">Recruiter override</Pill>
          <Pill tone="yellow">Audit trail</Pill>
        </div>
      </Reveal>

      <Reveal step={step} at={3} className="mt-3">
        <div className="rounded-xl bg-white border border-[var(--border)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-px-muted uppercase tracking-wider">Example — Frontend Engineer requirements</p>
              <p className="text-xl font-black text-px-navy mt-1">Evidence assessment</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.24)] flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-black text-px-teal text-center px-1">READY<br />REVIEW</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Card title="Supported" detail="Evidence cites React and TypeScript project experience." tone="teal" />
            <Card title="Needs verification" detail="GraphQL and work-authorization requirements are unconfirmed." tone="coral" />
          </div>
        </div>
      </Reveal>
    </EngineeringSlide>
  )
}

export function MultiTenantArchitecture({ step }: Props) {
  return (
    <EngineeringSlide
      title="Multi-Tenant"
      accent="Architecture"
      subtitle="One shared platform, separated business data, and request-level tenant isolation."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'JWT', sub: 'identity', icon: <KeyRound size={17} />, tone: 'navy' },
            { label: 'RBAC', sub: 'permissions', icon: <UserCheck size={17} />, tone: 'teal' },
            { label: 'businessId', sub: 'scope', icon: <BriefcaseBusiness size={17} />, tone: 'yellow' },
            { label: 'Prisma', sub: 'query filter', icon: <Database size={17} />, tone: 'coral' },
            { label: 'Tenant Data', sub: 'isolated', icon: <ShieldCheck size={17} />, tone: 'gray' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="Shared infrastructure" detail="Lower operational cost." tone="navy" />
        <Card title="Separated data" detail="Tenant-owned rows are scoped." tone="teal" />
        <Card title="Role control" detail="Actions depend on user permissions." tone="coral" />
      </Reveal>
    </EngineeringSlide>
  )
}

export function BackgroundProcessing({ step }: Props) {
  return (
    <EngineeringSlide
      title="Background"
      accent="Processing"
      subtitle="BullMQ keeps AI work reliable without blocking recruiters or candidates."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Frontend', icon: <Users size={17} />, tone: 'gray' },
            { label: 'API', icon: <Server size={17} />, tone: 'navy' },
            { label: 'Queue', icon: <RefreshCcw size={17} />, tone: 'teal' },
            { label: 'Worker', icon: <Cpu size={17} />, tone: 'yellow' },
            { label: 'AI', icon: <BrainCircuit size={17} />, tone: 'coral' },
            { label: 'Database', icon: <Database size={17} />, tone: 'navy' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-4 gap-3 mt-3">
        <Card title="No waiting" detail="UI returns processing status." tone="teal" />
        <Card title="Retries" detail="Failures can recover." tone="yellow" />
        <Card title="Status" detail="Jobs are observable." tone="navy" />
        <Card title="Scale" detail="Workers scale separately." tone="coral" />
      </Reveal>
    </EngineeringSlide>
  )
}

export function SecurityArchitecture({ step }: Props) {
  const controls = [
    ['JWT', 'Access token authorization', <KeyRound size={17} />],
    ['Refresh tokens', 'Session continuity', <RefreshCcw size={17} />],
    ['OAuth', 'External login providers', <Users size={17} />],
    ['Argon2', 'Password hashing', <LockKeyhole size={17} />],
    ['RBAC', 'Role-based actions', <UserCheck size={17} />],
    ['Rate limit', 'Abuse protection', <Gauge size={17} />],
    ['Secrets', 'Service-to-service trust', <ShieldCheck size={17} />],
    ['OWASP', 'Validation and hardening', <CheckCircle2 size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Security"
      accent="Architecture"
      subtitle="Layered across identity, authorization, tenant scope, and service boundaries."
    >
      <div className="grid grid-cols-4 gap-3">
        {controls.map(([title, detail, icon], index) => (
          <Reveal key={title} step={step} at={Math.min(Math.floor(index / 2) + 1, 4)}>
            <Card title={title} detail={detail} icon={icon} tone={index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'navy' : 'coral'} />
          </Reveal>
        ))}
      </div>
    </EngineeringSlide>
  )
}

export function DatabaseDesign({ step }: Props) {
  return (
    <EngineeringSlide
      title="Database"
      accent="Design"
      subtitle="PostgreSQL models the hiring workflow, while pgvector adds semantic search."
    >
      <Reveal step={step} at={1} className="flex flex-col items-center gap-1">
        <Pill tone="navy">Business</Pill>
        <div className="w-px h-4 bg-[var(--border)]" />
        <div className="flex items-center gap-8">
          <Pill>Jobs</Pill>
          <Pill tone="coral">Candidates</Pill>
        </div>
        <div className="flex items-center gap-8">
          <div className="w-px h-4 bg-[var(--border)]" />
          <div className="w-px h-4 bg-[var(--border)]" />
        </div>
        <Pill tone="yellow">Applications</Pill>
        <div className="w-px h-4 bg-[var(--border)]" />
        <Pill>AI Results</Pill>
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-4">
        <Card title="Indexes" detail="businessId, status, relations, search keys." icon={<Table2 size={18} />} tone="teal" />
        <Card title="Vectors" detail="Retrieval support for public job search and cited evidence." icon={<Search size={18} />} tone="coral" />
        <Card title="Audit" detail="Stored AI evidence and workflow history." icon={<FileText size={18} />} tone="navy" />
      </Reveal>
    </EngineeringSlide>
  )
}

export function RESTAPIDesign({ step }: Props) {
  return (
    <EngineeringSlide
      title="REST API"
      accent="Design"
      subtitle="NestJS keeps HTTP contracts, policy, business logic, and persistence separated."
    >
      <Reveal step={step} at={1}>
        <Flow
          items={[
            { label: 'Controller', icon: <Route size={17} />, tone: 'gray' },
            { label: 'DTO', icon: <Braces size={17} />, tone: 'teal' },
            { label: 'Guard', icon: <ShieldCheck size={17} />, tone: 'coral' },
            { label: 'Service', icon: <Layers3 size={17} />, tone: 'navy' },
            { label: 'Prisma', icon: <Database size={17} />, tone: 'yellow' },
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="grid grid-cols-3 gap-3 mt-3">
        <Card title="POST /jobs" detail="Create tenant-scoped job criteria." tone="teal" />
        <Card title="POST /applications" detail="Persist an application before derived AI work begins." tone="navy" />
        <Card title="GET /applications/:id/assessment" detail="Return reviewable requirements, evidence, and evaluations." tone="coral" />
      </Reveal>
    </EngineeringSlide>
  )
}

export function AIModelsRouting({ step }: Props) {
  return (
    <EngineeringSlide
      title="AI Models"
      accent="& Routing"
      subtitle="One configured provider is selected per deployment; it never silently falls back."
    >
      <Reveal step={step} at={1}>
        <MiniTable
          headers={['Feature', 'Model route', 'Reason']}
          rows={[
            ['CV parsing', 'Gemini or Azure OpenAI', 'Structured extraction'],
            ['Evidence classification', 'Configured provider', 'Requirement-focused inference'],
            ['Generated content', 'Configured provider', 'Recruiter-reviewed artifact'],
            ['Embeddings', 'Configured deployment', 'Retrieval infrastructure'],
            ['Assessment', 'NestJS + PostgreSQL', 'Evidence and human review'],
          ]}
        />
      </Reveal>
      <Reveal step={step} at={2} className="flex flex-wrap gap-2 mt-3">
        <Pill>Route by task</Pill>
        <Pill tone="yellow">Cache repeated inputs</Pill>
        <Pill tone="navy">Control latency</Pill>
        <Pill tone="coral">Control cost</Pill>
      </Reveal>
    </EngineeringSlide>
  )
}

export function PerformanceOptimizations({ step }: Props) {
  const optimizations = [
    ['Server Components', 'Less client JavaScript', <Server size={17} />],
    ['Redis cache', 'Reuses bounded AI results; not a source of truth', <Database size={17} />],
    ['BullMQ', 'AI outside request path', <RefreshCcw size={17} />],
    ['Prisma indexes', 'Predictable DB queries', <Table2 size={17} />],
    ['Parallel fetching', 'Faster dashboards', <Zap size={17} />],
    ['Workers', 'Independent throughput', <Cpu size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Performance"
      accent="Optimizations"
      subtitle="Faster perceived speed by removing repeated work and isolating slow operations."
    >
      <div className="grid grid-cols-3 gap-3">
        {optimizations.map(([title, detail, icon], index) => (
          <Reveal key={title} step={step} at={Math.min(Math.floor(index / 2) + 1, 3)}>
            <Card title={title} detail={detail} icon={icon} tone={index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'navy' : 'yellow'} />
          </Reveal>
        ))}
      </div>
      <Reveal step={step} at={4} className="rounded-xl bg-[#E6FAF9] border border-[rgba(0,184,179,0.24)] p-4 mt-3">
        <p className="text-lg font-black text-px-navy">Goal: fast UI, reliable AI, scalable workers.</p>
      </Reveal>
    </EngineeringSlide>
  )
}

export function TechnicalChallenges({ step }: Props) {
  return (
    <EngineeringSlide
      title="Technical Challenges"
      accent="& Solutions"
      subtitle="The project required engineering choices for cost, delay, isolation, search, and deployment."
    >
      <Reveal step={step} at={1}>
        <MiniTable
          headers={['Challenge', 'Solution', 'Outcome']}
          rows={[
            ['AI delay', 'BullMQ workers', 'Responsive UX'],
            ['LLM cost', 'Redis cache', 'Lower repeat spend'],
            ['Tenant isolation', 'businessId + RBAC', 'Secure SaaS'],
            ['Keyword search', 'pgvector', 'Semantic recall'],
            ['Explainability', 'Stored evidence', 'Auditable AI'],
            ['Deployment', 'Docker boundaries', 'Reproducible runtime'],
          ]}
        />
      </Reveal>
    </EngineeringSlide>
  )
}

export function FutureTechnicalRoadmap({ step }: Props) {
  const nearTerm = [
    ['Calendar', 'Interview scheduling automation', <Activity size={17} />],
    ['Email AI', 'Candidate communication drafting', <FileText size={17} />],
    ['Analytics', 'Hiring funnel and quality metrics', <Gauge size={17} />],
  ] as const
  const midTerm = [
    ['RAG', 'Grounded answers on company and candidate data', <Search size={17} />],
    ['Realtime', 'Collaborative hiring decisions', <Users size={17} />],
    ['Recommendations', 'Smarter candidate-job ranking', <Sparkles size={17} />],
  ] as const
  const longTerm = [
    ['AI Agents', 'Guarded workflow automation', <BrainCircuit size={17} />],
    ['MCP', 'Standard tool integration for external ATS/HR systems', <GitBranch size={17} />],
  ] as const

  return (
    <EngineeringSlide
      title="Roadmap"
      accent="& Future Work"
      subtitle="Future work extends the existing architecture instead of replacing it."
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
