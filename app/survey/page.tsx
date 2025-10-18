"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingParticles } from "@/components/floating-particles"
import { QuestionCard } from "@/components/question-card"
import { ProgressBar } from "@/components/progress-bar"

const questions = [
  {
    id: 1,
    question: "What's your vibe?",
    description: "Choose the personality that resonates with you most",
    type: "single-choice" as const,
    options: [
      { value: "bold", label: "Bold & Confident" },
      { value: "elegant", label: "Elegant & Sophisticated" },
      { value: "playful", label: "Playful & Energetic" },
      { value: "calm", label: "Calm & Serene" },
    ],
  },
  {
    id: 2,
    question: "When do you wear perfume?",
    description: "Select all that apply",
    type: "multiple-choice" as const,
    options: [
      { value: "daily", label: "Every day" },
      { value: "work", label: "Work/Professional settings" },
      { value: "special", label: "Special occasions" },
      { value: "evening", label: "Evening/Night out" },
      { value: "casual", label: "Casual hangouts" },
    ],
  },
  {
    id: 3,
    question: "What scent family speaks to you?",
    description: "Pick your favorite fragrance notes",
    type: "single-choice" as const,
    options: [
      { value: "floral", label: "Floral (Rose, Jasmine, Lavender)" },
      { value: "woody", label: "Woody (Sandalwood, Cedar, Oud)" },
      { value: "fresh", label: "Fresh (Citrus, Aquatic, Green)" },
      { value: "oriental", label: "Oriental (Vanilla, Amber, Spices)" },
      { value: "fruity", label: "Fruity (Berry, Peach, Apple)" },
    ],
  },
  {
    id: 4,
    question: "How intense do you like your fragrance?",
    description: "Choose your preferred strength",
    type: "single-choice" as const,
    options: [
      { value: "subtle", label: "Subtle & Light", description: "A gentle whisper" },
      { value: "moderate", label: "Moderate", description: "Noticeable but not overpowering" },
      { value: "strong", label: "Strong & Bold", description: "Make a statement" },
    ],
  },
  {
    id: 5,
    question: "What's your budget range?",
    description: "Select your preferred price point",
    type: "single-choice" as const,
    options: [
      { value: "budget", label: "Under ₦55,000", description: "Accessible luxury" },
      { value: "mid", label: "₦55,000 - ₦65,000", description: "Premium quality" },
      { value: "luxury", label: "₦65,000+", description: "High-end exclusivity" },
      { value: "any", label: "Any price", description: "Show me the best" },
    ],
  },
]

export default function SurveyPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({})
  const [direction, setDirection] = useState(1)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (questionId: number, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setDirection(1)
      setCurrentQuestion((prev) => prev + 1)
    } else {
      // Navigate to results page with answers
      const queryParams = new URLSearchParams()
      Object.entries(answers).forEach(([key, value]) => {
        queryParams.append(`q${key}`, Array.isArray(value) ? value.join(",") : value)
      })
      router.push(`/results?${queryParams.toString()}`)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setDirection(-1)
      setCurrentQuestion((prev) => prev - 1)
    } else {
      router.push("/")
    }
  }

  const currentQuestionData = questions[currentQuestion]
  const currentAnswer = answers[currentQuestionData.id]
  const isAnswered = currentAnswer !== undefined && (Array.isArray(currentAnswer) ? currentAnswer.length > 0 : true)

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="relative z-10 flex min-h-screen flex-col px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-full max-w-3xl"
        >
          <div className="mb-8 flex items-center justify-between">
            <motion.button
              onClick={handleBack}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              Question {currentQuestion + 1} of {questions.length}
            </motion.div>
          </div>

          <ProgressBar progress={progress} />
        </motion.div>

        {/* Question Card */}
        <div className="flex flex-1 items-center justify-center py-8">
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentQuestion}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <QuestionCard
                  question={currentQuestionData.question}
                  description={currentQuestionData.description}
                  type={currentQuestionData.type}
                  options={currentQuestionData.options}
                  value={currentAnswer}
                  onChange={(value) => handleAnswer(currentQuestionData.id, value)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-full max-w-3xl pb-8"
        >
          <motion.button
            onClick={handleNext}
            disabled={!isAnswered}
            whileHover={isAnswered ? { scale: 1.02 } : {}}
            whileTap={isAnswered ? { scale: 0.98 } : {}}
            animate={
              isAnswered
                ? {
                    boxShadow: [
                      "0 10px 30px rgba(155, 17, 30, 0.3)",
                      "0 10px 40px rgba(155, 17, 30, 0.5)",
                      "0 10px 30px rgba(155, 17, 30, 0.3)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="group relative w-full overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {currentQuestion === questions.length - 1 ? "See My Results" : "Continue"}
              <ArrowRight className="h-5 w-5" />
            </span>
            {isAnswered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-luxury-ruby to-luxury-dark-red"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        </motion.div>
      </div>
    </main>
  )
}
