import { motion } from 'framer-motion'

/** Description bar for click-to-focus slides; cross-fades when the focused item changes. */
export default function FocusNote({ id, title, text }: { id: number; title?: string; text?: string }) {
  return (
    <div className="flex h-[84px] items-stretch gap-4">
      <div className="w-[4px] shrink-0 rounded-full bg-px-teal" />
      <motion.div key={id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="flex flex-col justify-center">
        {text ? (
          <>
            <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#029090]">{title}</p>
            <p className="text-[22px] font-semibold leading-snug text-px-navy">{text}</p>
          </>
        ) : (
          <p className="text-[20px] text-px-muted">Click to walk through each item.</p>
        )}
      </motion.div>
    </div>
  )
}
