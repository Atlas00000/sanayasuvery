"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Clock, Flower2 } from "lucide-react"

type ProfileCardProps = {
  profile: {
    personality: string
    scentNotes: string[]
    bestFor: string[]
    intensity: string
  }
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Personality */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="glow-soft rounded-3xl border-2 border-secondary bg-card p-6 shadow-lg transition-all hover:shadow-xl hover:border-primary/50"
      >
        <div className="mb-4 flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20"
          >
            <Heart className="h-5 w-5 text-primary" />
          </motion.div>
          <h3 className="font-serif text-xl font-bold text-foreground">Your Personality</h3>
        </div>
        <p className="text-pretty leading-relaxed text-muted-foreground">{profile.personality}</p>
      </motion.div>

      {/* Intensity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="glow-soft rounded-3xl border-2 border-secondary bg-card p-6 shadow-lg transition-all hover:shadow-xl hover:border-primary/50"
      >
        <div className="mb-4 flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20"
          >
            <Sparkles className="h-5 w-5 text-accent" />
          </motion.div>
          <h3 className="font-serif text-xl font-bold text-foreground">Intensity Level</h3>
        </div>
        <p className="text-pretty leading-relaxed text-muted-foreground">{profile.intensity}</p>
      </motion.div>

      {/* Scent Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="glow-soft rounded-3xl border-2 border-secondary bg-card p-6 shadow-lg transition-all hover:shadow-xl hover:border-primary/50"
      >
        <div className="mb-4 flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a5b8]/20"
          >
            <Flower2 className="h-5 w-5 text-[#d4a5b8]" />
          </motion.div>
          <h3 className="font-serif text-xl font-bold text-foreground">Your Scent Notes</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.scentNotes.map((note, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground border border-primary/20"
            >
              {note}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Best For */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="glow-soft rounded-3xl border-2 border-secondary bg-card p-6 shadow-lg transition-all hover:shadow-xl hover:border-primary/50"
      >
        <div className="mb-4 flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a67388]/20"
          >
            <Clock className="h-5 w-5 text-[#a67388]" />
          </motion.div>
          <h3 className="font-serif text-xl font-bold text-foreground">Best For</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.bestFor.map((occasion, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground border border-primary/20"
            >
              {occasion}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
