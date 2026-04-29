interface TechBadgeProps {
  name: string
  color?: string
  icon?: string
}

const TECH_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Next.js':      { bg: '#F3F4F6', text: '#111827', border: '#E5E7EB' },
  'NestJS':       { bg: '#FFF0F0', text: '#E0234E', border: '#FECDD3' },
  'TypeScript':   { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
  'PostgreSQL':   { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  'Prisma':       { bg: '#F5F3FF', text: '#5B21B6', border: '#DDD6FE' },
  'FastAPI':      { bg: '#F0FDF4', text: '#059669', border: '#A7F3D0' },
  'Python':       { bg: '#FEF9C3', text: '#92400E', border: '#FDE68A' },
  'Redis':        { bg: '#FFF0F0', text: '#DC2626', border: '#FECACA' },
  'BullMQ':       { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA' },
  'Docker':       { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
  'Gemini':       { bg: '#E6FAF9', text: '#009E9A', border: '#99E6E4' },
  'OpenAI':       { bg: '#F0FDF4', text: '#065F46', border: '#A7F3D0' },
  'Stripe':       { bg: '#F5F3FF', text: '#6D28D9', border: '#DDD6FE' },
  'pgvector':     { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  'Elasticsearch':{ bg: '#FEF9C3', text: '#92400E', border: '#FDE68A' },
  'JWT':          { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA' },
  'Argon2':       { bg: '#F0FDF4', text: '#065F46', border: '#A7F3D0' },
  'Tailwind':     { bg: '#E6FAF9', text: '#009E9A', border: '#99E6E4' },
  'React':        { bg: '#EFF6FF', text: '#0EA5E9', border: '#BAE6FD' },
  'Bun':          { bg: '#FEF9C3', text: '#78350F', border: '#FDE68A' },
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
