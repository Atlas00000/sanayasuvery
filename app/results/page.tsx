"use client"

import { useEffect, useState, Suspense } from "react"
import { motion } from "framer-motion"
import { Sparkles, Download, Share2, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingParticles } from "@/components/floating-particles"
import { ProfileCard } from "@/components/profile-card"
import { RecommendationCard } from "@/components/recommendation-card"
import { generateFragranceProfile } from "@/lib/generate-profile"

function ResultsContent() {
  const searchParams = useSearchParams()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true)
      try {
        // Get answers from URL params
        const answers = {
          vibe: searchParams.get("q1") || "",
          occasions: searchParams.get("q2")?.split(",") || [],
          scentFamily: searchParams.get("q3") || "",
          intensity: searchParams.get("q4") || "",
          budget: searchParams.get("q5") || "",
        }

        // Generate profile using AI
        const generatedProfile = await generateFragranceProfile(answers)
        setProfile(generatedProfile)
      } catch (error) {
        console.error("[v0] Error generating profile:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [searchParams])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 font-serif text-xl text-muted-foreground">Creating your personalized profile...</p>
        </motion.div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-xl text-muted-foreground">Unable to generate profile. Please try again.</p>
          <Link href="/survey" className="mt-4 inline-block text-primary hover:underline">
            Retake Survey
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 px-4 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-8 max-w-5xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Start Over
          </Link>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
            >
              <Share2 className="h-4 w-4" />
              Share
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
            >
              <Download className="h-4 w-4" />
              Save
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-12 max-w-5xl text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-accent" />
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Your Scent Profile</span>
        </div>
        <h1 className="text-balance font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
          {profile.profileName}
        </h1>
        <p className="text-pretty mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{profile.description}</p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-auto mb-12 max-w-5xl"
      >
        <ProfileCard profile={profile} />
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto max-w-5xl"
      >
        <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">Your Perfect Matches</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.recommendations.map((rec: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <RecommendationCard recommendation={rec} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mx-auto mt-16 max-w-5xl text-center"
      >
        <div className="rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-sm">
          <h3 className="font-serif text-2xl font-bold text-foreground">Ready to find your signature scent?</h3>
          <p className="mt-3 text-muted-foreground">
            Visit our store or contact us to explore these fragrances in person
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-shadow hover:shadow-primary/50"
            >
              Visit Store
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-primary bg-transparent px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        }
      >
        <ResultsContent />
      </Suspense>
    </main>
  )
}
