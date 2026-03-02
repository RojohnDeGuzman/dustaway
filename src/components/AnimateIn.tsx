'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

type AnimateInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
  amount?: number
  scale?: boolean
}

export function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.15,
  scale = false,
}: AnimateInProps) {
  const directions = {
    up: { y: 36, x: 0 },
    down: { y: -36, x: 0 },
    left: { x: 36, y: 0 },
    right: { x: -36, y: 0 },
  }
  const d = directions[direction]

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: d.x,
        y: d.y,
        ...(scale ? { scale: 0.97 } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale ? { scale: 1 } : {}),
      }}
      viewport={{ once, amount }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({
  children,
  className = '',
  delay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        visible: { transition: { staggerChildren: delay, delayChildren: 0.1 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.55, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
