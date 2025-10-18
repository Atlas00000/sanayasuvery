"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type ShimmerTextProps = {
  children: string
  className?: string
}

export function ShimmerText({ children, className }: ShimmerTextProps) {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      initial={{ backgroundPosition: "200% center" }}
      animate={{ backgroundPosition: "-200% center" }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        backgroundImage: "linear-gradient(90deg, currentColor 0%, rgba(255,255,255,0.8) 50%, currentColor 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </motion.span>
  )
}
