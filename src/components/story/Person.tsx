/** Flat illustrated person used in the opening story (original vector art, no external assets). */
export default function Person({ variant, size = 240 }: { variant: 'candidate' | 'recruiter'; size?: number }) {
  const cand = variant === 'candidate'
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" role="img" aria-label={cand ? 'Candidate' : 'Recruiter'}>
      <circle cx="100" cy="100" r="96" fill={cand ? '#E6FAF9' : '#EEF1F6'} />
      <defs><clipPath id={`clip-${variant}`}><circle cx="100" cy="100" r="96" /></clipPath></defs>
      <g clipPath={`url(#clip-${variant})`}>
        {/* shoulders */}
        <path d="M18 200 C22 150 52 134 100 134 C148 134 178 150 182 200 Z" fill={cand ? '#001027' : '#029090'} />
        {/* collar */}
        <path d="M82 136 L100 160 L118 136 Z" fill="#fff" opacity="0.9" />
        {/* neck */}
        <rect x="88" y="108" width="24" height="30" rx="10" fill={cand ? '#E8B78F' : '#F1C9A5'} />
        {/* head */}
        <circle cx="100" cy="86" r="34" fill={cand ? '#E8B78F' : '#F1C9A5'} />
        {cand ? (
          <path d="M66 82 C64 52 90 44 108 48 C130 50 138 66 134 84 C128 70 118 64 100 66 C84 68 72 72 66 82 Z" fill="#1B1B2F" />
        ) : (
          <>
            <path d="M64 88 C58 52 84 42 104 44 C130 46 142 66 136 92 C132 70 120 60 100 62 C82 64 70 72 64 88 Z" fill="#3B2A20" />
            {/* glasses */}
            <g fill="none" stroke="#001027" strokeWidth="3">
              <rect x="77" y="80" width="20" height="15" rx="6" />
              <rect x="103" y="80" width="20" height="15" rx="6" />
              <path d="M97 87 H103" />
            </g>
            {/* headset */}
            <path d="M64 88 C62 54 138 54 136 88" fill="none" stroke="#FE595A" strokeWidth="5" strokeLinecap="round" />
            <rect x="58" y="86" width="9" height="20" rx="4.5" fill="#FE595A" />
          </>
        )}
        {/* eyes + smile (candidate) */}
        {cand && (
          <>
            <circle cx="88" cy="88" r="3" fill="#1B1B2F" />
            <circle cx="112" cy="88" r="3" fill="#1B1B2F" />
            <path d="M90 102 Q100 110 110 102" fill="none" stroke="#1B1B2F" strokeWidth="3" strokeLinecap="round" />
          </>
        )}
        {!cand && <path d="M92 104 Q100 109 108 104" fill="none" stroke="#3B2A20" strokeWidth="3" strokeLinecap="round" />}
      </g>
    </svg>
  )
}
