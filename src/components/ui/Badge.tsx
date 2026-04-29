import type { ReactNode } from 'react'

type Variant = 'teal' | 'coral' | 'yellow' | 'navy' | 'gray' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, string> = {
  teal:    'bg-[#E6FAF9] text-[#009E9A] border border-[rgba(0,184,179,0.25)]',
  coral:   'bg-[#FFF0F0] text-[#E03E3F] border border-[rgba(254,89,90,0.25)]',
  yellow:  'bg-[#FFFBEB] text-[#B78300] border border-[rgba(254,200,73,0.35)]',
  navy:    'bg-[#001027] text-white border border-[rgba(0,16,39,0.2)]',
  gray:    'bg-gray-100 text-gray-600 border border-gray-200',
  outline: 'bg-transparent text-px-teal border border-[rgba(0,184,179,0.5)]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'text-[10px] px-2 py-0.5 font-semibold tracking-wide',
  md: 'text-xs px-3 py-1 font-semibold tracking-wide',
  lg: 'text-sm px-4 py-1.5 font-semibold tracking-wide',
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
