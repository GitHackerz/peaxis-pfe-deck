import { motion } from 'framer-motion'

const orbs = [
  {
    color: 'rgba(0, 184, 179, 0.10)',
    size: 700,
    initial: { x: '-15%', y: '-10%' },
    animate: { x: ['-15%', '10%', '-15%'], y: ['-10%', '15%', '-10%'] },
    duration: 20,
  },
  {
    color: 'rgba(0, 184, 179, 0.07)',
    size: 550,
    initial: { x: '60%', y: '40%' },
    animate: { x: ['60%', '40%', '60%'], y: ['40%', '10%', '40%'] },
    duration: 25,
  },
  {
    color: 'rgba(0, 135, 248, 0.06)',
    size: 450,
    initial: { x: '30%', y: '65%' },
    animate: { x: ['30%', '50%', '30%'], y: ['65%', '40%', '65%'] },
    duration: 30,
  },
]

export default function LightAurora() {
  return (
    <div
      data-aurora
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(100px)',
            left: '0',
            top: '0',
            translateX: orb.initial.x,
            translateY: orb.initial.y,
          }}
          animate={{
            translateX: orb.animate.x,
            translateY: orb.animate.y,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'mirror',
          }}
        />
      ))}
    </div>
  )
}
