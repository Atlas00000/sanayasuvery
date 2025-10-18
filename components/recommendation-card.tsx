"use client"

import { motion } from "framer-motion"
import { Sparkles, TrendingUp, Clock, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type RecommendationCardProps = {
  recommendation: {
    name: string
    brand: string
    collection?: string
    description: string
    notes: string[]
    matchScore: number
    priceRange: string
    image?: string
    longevity?: string
    projection?: string
    whyItMatches?: string
    bestFor?: string[]
    availability?: string
    rank?: number
    productId?: string
  }
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glow-soft group relative overflow-hidden rounded-3xl border-2 border-secondary bg-card shadow-lg transition-all hover:shadow-2xl hover:border-primary/50"
    >
      {/* Match Score Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-sm font-bold text-accent-foreground shadow-lg glow-gold"
      >
        <TrendingUp className="h-3 w-3" />
        {recommendation.matchScore}% Match
      </motion.div>

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#f4e3d7] to-[#eac7c7]">
        {recommendation.image ? (
          <>
            <Image
              src={recommendation.image}
              alt={recommendation.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-16 w-16 text-[#d6b17e]/60" />
            </motion.div>
          </div>
        )}

        {/* Rank Badge */}
        {recommendation.rank && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute left-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg"
          >
            <span className="font-serif text-xl font-bold text-white">#{recommendation.rank}</span>
          </motion.div>
        )}

        {/* Availability Badge */}
        {recommendation.availability === "Limited Edition" && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-4 left-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg"
          >
            Limited Edition
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Collection Badge */}
        {recommendation.collection && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
          >
            {recommendation.collection}
          </motion.div>
        )}

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-3 font-serif text-2xl font-bold text-foreground"
        >
          {recommendation.name}
        </motion.h3>

        {/* Why It Matches */}
        {recommendation.whyItMatches && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 rounded-lg bg-accent/10 p-3"
          >
            <p className="text-xs font-medium text-accent">
              <strong>Why it's perfect for you:</strong> {recommendation.whyItMatches}
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-pretty mb-4 text-sm leading-relaxed text-muted-foreground"
        >
          {recommendation.description}
        </motion.p>

        {/* Performance Stats */}
        {(recommendation.longevity || recommendation.projection) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 flex gap-4"
          >
            {recommendation.longevity && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4 text-accent" />
                <span>{recommendation.longevity}</span>
              </div>
            )}
            {recommendation.projection && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Zap className="h-4 w-4 text-accent" />
                <span>{recommendation.projection}</span>
              </div>
            )}
          </motion.div>
        )}

        {/* Notes */}
        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Key Notes</p>
          <div className="flex flex-wrap gap-1.5">
            {recommendation.notes.map((note, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground border border-primary/20"
              >
                {note}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Best For */}
        {recommendation.bestFor && recommendation.bestFor.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Best For</p>
            <ul className="space-y-1">
              {recommendation.bestFor.map((item, index) => (
                <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between border-t-2 border-secondary pt-4">
          <div>
            <p className="text-xs text-muted-foreground">Price</p>
            <span className="font-serif text-lg font-bold text-foreground">{recommendation.priceRange}</span>
          </div>
          {recommendation.productId ? (
            <Link href={`/products/${recommendation.productId}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-soft rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                View Details
              </motion.button>
            </Link>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-soft rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              View Details
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
