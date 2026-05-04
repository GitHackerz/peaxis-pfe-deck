import type { ReactNode } from 'react'

type Variant = 'teal' | 'coral' | 'yellow' | 'navy' | 'gray' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, string> = {
  teal:    'bg-[#E6FAF9] text-[#009E9A] border border-[rgba(0,184,179,0.2)]',
  coral:   'bg-[#FFF0F0] text-[#D63E3F] border border-[rgba(254,89,90,0.2)]',
  yellow:  'bg-[#F3F4F6] text-[#374151] border border-[rgba(0,0,0,0.08)]',
  navy:    'bg-[#001027] text-white border border-transparent',
  gray:    'bg-[#F3F4F6] text-[#6B7280] border border-[rgba(0,0,0,0.07)]',
  outline: 'bg-transparent text-[#009E9A] border border-[rgba(0,184,179,0.4)]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'text-xs px-2.5 py-0.5 font-semibold tracking-wide',
  md: 'text-sm px-3 py-1 font-semibold tracking-wide',
  lg: 'text-base px-4 py-1.5 font-semibold tracking-wide',
}

interface BadgeProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

export default function Badge({ children, variant = 'teal', size = 'md', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full uppercase ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  )
}
