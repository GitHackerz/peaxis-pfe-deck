interface TechBadgeProps {
  name: string
  color?: string
  icon?: string
}

const TECH_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Next.js':      { bg: '#F3F4F6', text: '#111827', border: '#E5E7EB' },
  'NestJS':       { bg: '#FFF0F0', text: '#E0234E', border: '#FECDD3' },
  'TypeScript':   { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'PostgreSQL':   { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'Prisma':       { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'FastAPI':      { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'Python':       { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'Redis':        { bg: '#FFF0F0', text: '#DC2626', border: '#FECACA' },
  'BullMQ':       { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'Docker':       { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'Gemini':       { bg: '#E6FAF9', text: '#009E9A', border: '#99E6E4' },
  'OpenAI':       { bg: '#E6FAF9', text: '#009E9A', border: '#99E6E4' },
  'Stripe':       { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'pgvector':     { bg: '#E6FAF9', text: '#009E9A', border: '#99E6E4' },
  'Elasticsearch':{ bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'JWT':          { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'Argon2':       { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
  'Tailwind':     { bg: '#E6FAF9', text: '#009E9A', border: '#99E6E4' },
  'React':        { bg: '#E6FAF9', text: '#009E9A', border: '#99E6E4' },
  'Bun':          { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' },
}

export default function TechBadge({ name }: TechBadgeProps) {
  const colors = TECH_COLORS[name] ?? { bg: '#F3F4F6', text: '#374151', border: '#E5E7EB' }
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
      style={{
        background: colors.bg,
        color: colors.text,
        borderColor: colors.border,
      }}
    >
      {name}
    </span>
  )
}
