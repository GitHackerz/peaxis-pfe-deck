/** PEAXIS wordmark — inline SVG to avoid external file dependency */
interface LogoProps {
  height?: number
  /** 'color' = teal+navy (default), 'white' = all white (for dark slides) */
  variant?: 'color' | 'white'
}

export default function Logo({ height = 28, variant = 'color' }: LogoProps) {
  const teal = variant === 'white' ? '#FFFFFF' : '#00B8B3'
  const navy = variant === 'white' ? '#FFFFFF' : '#001027'

  return (
    <svg
      viewBox="0 0 160 36"
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* P */}
      <text x="0" y="28" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="30" fill={navy}>
        P
      </text>
      {/* EAXIS */}
      <text x="18" y="28" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="30" fill={navy}>
        EAXIS
      </text>
      {/* Teal dot accent */}
      <circle cx="152" cy="6" r="4" fill={teal} />
    </svg>
  )
}
