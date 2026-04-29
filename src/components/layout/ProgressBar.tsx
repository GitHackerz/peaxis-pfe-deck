export default function ProgressBar({
  slideIndex,
  totalSlides,
}: {
  slideIndex: number
  totalSlides: number
}) {
  const pct = ((slideIndex + 1) / totalSlides) * 100

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-black/5">
      <div
        className="h-full transition-all duration-500 ease-out"
        style={{
          width: `${pct}%`,
          background: 'linear-gradient(90deg, #00B8B3, #44C4F6)',
        }}
      />
    </div>
  )
}
