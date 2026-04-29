import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'teal' | 'coral' | 'yellow' | 'ghost'
  onClick?: () => void
}

const variantClass: Record<string, string> = {
  default:  'card',
  elevated: 'card-elevated',
  teal:     'card-teal',
  coral:    'bg-[#FFF0F0] border border-[rgba(254,89,90,0.2)] rounded-[var(--radius)]',
  yellow:   'bg-[#F3F4F6] border border-[rgba(0,0,0,0.07)] rounded-[var(--radius)]',
  ghost:    'bg-transparent border border-[var(--border)] rounded-[var(--radius)]',
}

export default function Card({ children, className = '', variant = 'default', onClick }: CardProps) {
  return (
    <div className={`${variantClass[variant]} ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
