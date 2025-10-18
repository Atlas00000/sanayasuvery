"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#c68fa8]/30 to-[#eac7c7]/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-[#d6b17e]/30 to-[#f4e3d7]/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-gradient-to-tr from-[#eac7c7]/25 to-[#faf6f3]/30 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -60, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 8,
        }}
        className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-tl from-[#a67388]/20 to-[#c68fa8]/15 blur-3xl"
      />
    </div>
  )
}
