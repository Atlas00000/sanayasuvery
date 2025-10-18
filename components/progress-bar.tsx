"use client"

import { motion } from "framer-motion"

type ProgressBarProps = {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary/50">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#c68fa8] via-[#d4a5b8] to-[#d6b17e] shadow-lg shadow-primary/30"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </motion.div>
    </div>
  )
}
