# PEAXIS Deployment Architecture

Source diagram for the platform's deployment/container architecture. This
replaces the earlier React Flow prototype — this file is the single source
of truth going forward.

- **Edit here**: this is plain Mermaid syntax, no build step required.
- **Preview in VS Code**: open this file and run "Markdown: Open Preview"
  (or install the "Markdown Preview Mermaid Support" extension if the block
  doesn't render).
- **Redesign in Figma**: paste the code block into the
  [Mermaid Live Editor](https://mermaid.live), export as SVG, then drag the
  SVG into a Figma file — it imports as fully editable vector layers/groups.
- **Legend**: solid blue = synchronous (HTTP/SQL/Redis calls), dashed violet
  = asynchronous (queue-driven), thick amber = external managed API call.
  No frontend app talks to Gemini directly — all AI work is routed through
  Core API → BullMQ Worker → FastAPI.

Rendered preview (regenerate after editing the source below, see
"Regenerating the preview image" at the bottom):

![PEAXIS Deployment Architecture](./architecture-deployment.svg)

```mermaid
flowchart TB
  subgraph Internet["🌐 Internet — Public network"]
    subgraph UsersLayer["Users"]
      direction LR
      recruiters(["👤 Recruiters"])
      candidates(["👤 Candidates"])
      visitors(["🌍 Public Visitors"])
    end
  end

  subgraph Docker["🐳 Docker Compose — Internal network"]
    subgraph FrontendLayer["Frontend Layer"]
      direction LR
      landing["PEAXIS Landing<br/>Marketing site<br/>Next.js"]
      jobsApp["PEAXIS Jobs<br/>Candidate portal<br/>Next.js"]
      hireApp["PEAXIS Hire<br/>Recruiter workspace<br/>Next.js"]
    end

    subgraph AppLayer["Application Layer"]
      direction LR
      nestjs["NestJS Core API<br/>Business logic · REST<br/>⚡ Synchronous"]
      bullmq["BullMQ Worker<br/>Background job processor<br/>🔄 Asynchronous"]
    end

    subgraph AILayer["AI Layer"]
      fastapi["FastAPI AI Service<br/>RAG · embeddings · matching<br/>🔄 Asynchronous"]
    end

    subgraph DataLayer["Data Layer"]
      direction LR
      postgres[("PostgreSQL + pgvector<br/>System of record")]
      redis[("Redis<br/>Cache & queue backing store")]
      blob[("Azure Blob Storage<br/>CVs & uploaded files")]
    end
  end

  subgraph External["☁️ External Managed Services — Third-party"]
    gemini["Gemini<br/>Managed LLM API"]
  end

  recruiters -->|HTTPS| hireApp
  candidates -->|HTTPS| jobsApp
  visitors -->|HTTPS| landing

  landing -->|REST| nestjs
  jobsApp -->|REST| nestjs
  hireApp -->|REST| nestjs

  nestjs -->|SQL| postgres
  nestjs -->|Redis| redis
  nestjs -->|HTTPS| blob
  nestjs -.->|Queue| bullmq

  bullmq -.->|Queue| redis
  bullmq -.->|REST| fastapi
  bullmq -.->|SQL| postgres
  bullmq -.->|HTTPS| blob

  fastapi ==>|LLM API| gemini

  %% ---- container styling ----
  classDef boundary fill:#f8fafc,stroke:#94a3b8,stroke-width:1.5px,color:#334155,font-weight:600
  classDef layer fill:#ffffff,stroke:#cbd5e1,stroke-width:1px,stroke-dasharray:4 3,color:#475569,font-weight:600
  class Internet,Docker,External boundary
  class UsersLayer,FrontendLayer,AppLayer,AILayer,DataLayer layer

  %% ---- node styling (accent per component role) ----
  classDef slate fill:#f1f5f9,stroke:#64748b,stroke-width:1.5px,color:#0f172a
  classDef blue fill:#eff6ff,stroke:#3b82f6,stroke-width:1.5px,color:#1e3a8a
  classDef teal fill:#f0fdfa,stroke:#14b8a6,stroke-width:1.5px,color:#134e4a
  classDef indigo fill:#eef2ff,stroke:#6366f1,stroke-width:1.5px,color:#312e81
  classDef violet fill:#f5f3ff,stroke:#8b5cf6,stroke-width:1.5px,color:#4c1d95
  classDef emerald fill:#ecfdf5,stroke:#10b981,stroke-width:1.5px,color:#064e3b
  classDef rose fill:#fff1f2,stroke:#f43f5e,stroke-width:1.5px,color:#881337
  classDef amber fill:#fffbeb,stroke:#f59e0b,stroke-width:1.5px,color:#78350f

  class recruiters blue
  class candidates teal
  class visitors slate
  class landing slate
  class jobsApp teal
  class hireApp blue
  class nestjs indigo
  class bullmq violet
  class fastapi emerald
  class postgres blue
  class redis rose
  class blob amber
  class gemini amber

  %% ---- edge styling: sync (blue solid) / async (violet dashed) / external (amber thick) ----
  linkStyle 0,1,2,3,4,5,6,7,8 stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
  linkStyle 9,10,11,12,13 stroke:#8b5cf6,stroke-width:2px,color:#4c1d95
  linkStyle 14 stroke:#f59e0b,stroke-width:3px,color:#78350f
```

## Regenerating the preview image

The `.svg`/`.png` files next to this doc are pre-rendered snapshots for quick
viewing — they are NOT the source of truth, the Mermaid code block above is.
After editing the diagram, regenerate them with
[`@mermaid-js/mermaid-cli`](https://github.com/mermaid-js/mermaid-cli):

```bash
# 1. extract the ```mermaid block above into a standalone .mmd file, then:
npx @mermaid-js/mermaid-cli -i architecture-deployment.mmd -o architecture-deployment.svg -b white
npx @mermaid-js/mermaid-cli -i architecture-deployment.mmd -o architecture-deployment.png -b white --scale 3
```

