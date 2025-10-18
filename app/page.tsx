"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, Clock, Heart, Star, Shield, Flower2, TrendingUp, Wand2, Leaf } from "lucide-react"
import Link from "next/link"
import { FloatingParticles } from "@/components/floating-particles"
import { AnimatedBackground } from "@/components/animated-background"
import { MagneticButton } from "@/components/magnetic-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ShimmerText } from "@/components/shimmer-text"
import { CartButton } from "@/components/cart-button"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingParticles />

      {/* Cart Button - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed right-4 top-4 z-50 sm:right-8 sm:top-8"
      >
        <CartButton />
      </motion.div>

      {/* Hero Section */}
      <motion.section style={{ opacity, scale }} className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="mx-auto max-w-5xl text-center">
          {/* Floating Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 left-10 text-[#d4a5b8]/20"
          >
            <Flower2 className="h-32 w-32" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 right-20 text-[#c68fa8]/20"
          >
            <Sparkles className="h-24 w-24" />
          </motion.div>

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-accent/30 bg-accent/10 px-6 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Premium Fragrance Experience</span>
          </motion.div>

          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-9xl">
              <ShimmerText>Sanaya's Scents</ShimmerText>
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 flex items-center justify-center gap-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent"
              />
              <p className="font-script text-3xl text-accent sm:text-4xl">Luxury Fragrances, Powered by AI</p>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 px-2"
          >
            <h2 className="text-balance font-serif text-3xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Perfect Scent</span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-pretty mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-xl md:text-2xl"
            >
              Answer a few quick questions and we'll help you find your perfect fragrance match. Your scent is your
              story, and we're here to help you tell it.
            </motion.p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-4"
          >
            <FeaturePill icon={<Clock className="h-5 w-5" />} text="2-3 minutes" delay={0} />
            <FeaturePill icon={<Heart className="h-5 w-5" />} text="5 simple questions" delay={0.1} />
            <FeaturePill icon={<Sparkles className="h-5 w-5" />} text="AI-powered recommendations" delay={0.2} />
            <FeaturePill icon={<Shield className="h-5 w-5" />} text="100% Personalized" delay={0.3} />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full px-4"
          >
            <Link href="/survey" className="block w-full sm:inline-block sm:w-auto">
              <MagneticButton className="glow-soft group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b87f97] to-primary bg-size-200 bg-pos-0 px-8 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:bg-pos-100 hover:shadow-primary/60 sm:px-16 sm:py-6 sm:text-xl lg:text-2xl">
                <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                  <Wand2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="whitespace-nowrap">Start Your Journey</span>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#a67388] via-[#c68fa8] to-[#d4a5b8]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </MagneticButton>
            </Link>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              No signup required • Free forever
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="relative z-10 px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">Why Us</span>
              <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                The Sanaya <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Difference</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <BenefitCard
                icon={<Wand2 className="h-8 w-8" />}
                title="AI-Powered Matching"
                description="Our proprietary algorithm analyzes thousands of data points to find your perfect scent match with unprecedented accuracy."
                delay={0}
              />
              <BenefitCard
                icon={<Shield className="h-8 w-8" />}
                title="100% Authentic"
                description="Every fragrance in our collection is guaranteed authentic, sourced directly from luxury brands worldwide."
                delay={0.1}
              />
              <BenefitCard
                icon={<Star className="h-8 w-8" />}
                title="Expert Curation"
                description="Our fragrance experts hand-pick every scent, ensuring only the finest additions to our exclusive collection."
                delay={0.2}
              />
              <BenefitCard
                icon={<Heart className="h-8 w-8" />}
                title="Personalized Experience"
                description="Your journey is unique. We tailor every recommendation to your individual preferences and lifestyle."
                delay={0.3}
              />
              <BenefitCard
                icon={<TrendingUp className="h-8 w-8" />}
                title="Constantly Updated"
                description="Our AI learns and improves with every survey, ensuring better matches and discovering new trends."
                delay={0.4}
              />
              <BenefitCard
                icon={<Leaf className="h-8 w-8" />}
                title="Sustainable Luxury"
                description="We partner with brands committed to sustainable practices without compromising on luxury quality."
                delay={0.5}
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mission Statement */}
      <ScrollReveal delay={0.2}>
        <section className="relative z-10 px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2rem] border-2 border-primary/20 bg-gradient-to-br from-card/90 via-card/80 to-primary/10 p-12 backdrop-blur-lg shadow-2xl"
            >
              {/* Decorative corner elements */}
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mb-6 inline-block"
                >
                  <Sparkles className="h-12 w-12 text-accent" />
                </motion.div>
                <p className="text-pretty font-serif text-2xl leading-relaxed text-card-foreground sm:text-3xl lg:text-4xl">
                  <span className="font-script text-5xl text-accent">"</span>
                  Perfume isn't just a fragrance. It's a mood, a memory, a story, a signature. The crave of perfumes is
                  not just because of its availability but rather, often times it affects how we feel about ourselves,
                  drives confidence and in situations gives a boost of support. Allow us walk with you on your scent
                  discovery journey.
                  <span className="font-script text-5xl text-accent">"</span>
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                  <p className="font-script text-xl text-accent">Sanaya's Promise</p>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}

function FeaturePill({ icon, text, delay }: { icon: React.ReactNode; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + delay, duration: 0.4 }}
      whileHover={{ scale: 1.1, y: -4 }}
      className="group flex items-center gap-3 rounded-full border-2 border-secondary bg-gradient-to-br from-card to-card/80 px-6 py-3 shadow-lg backdrop-blur-sm transition-all hover:border-primary hover:shadow-xl"
    >
      <motion.span
        className="text-accent"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.span>
      <span className="font-semibold text-card-foreground">{text}</span>
    </motion.div>
  )
}

function BenefitCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border-2 border-secondary bg-gradient-to-br from-card via-card/95 to-primary/5 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-primary hover:shadow-2xl"
    >
      <motion.div
        className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 text-primary"
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="mb-3 font-serif text-xl font-bold text-foreground">{title}</h3>
      <p className="leading-relaxed text-muted-foreground">{description}</p>
      
      <motion.div
        className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/5 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  )
}
