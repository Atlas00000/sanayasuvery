"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type Option = {
  value: string
  label: string
  description?: string
}

type QuestionCardProps = {
  question: string
  description: string
  type: "single-choice" | "multiple-choice"
  options: Option[]
  value: string | string[] | undefined
  onChange: (value: string | string[]) => void
}

export function QuestionCard({ question, description, type, options, value, onChange }: QuestionCardProps) {
  const handleOptionClick = (optionValue: string) => {
    if (type === "single-choice") {
      onChange(optionValue)
    } else {
      const currentValues = (value as string[]) || []
      if (currentValues.includes(optionValue)) {
        onChange(currentValues.filter((v) => v !== optionValue))
      } else {
        onChange([...currentValues, optionValue])
      }
    }
  }

  const isSelected = (optionValue: string) => {
    if (type === "single-choice") {
      return value === optionValue
    }
    return (value as string[])?.includes(optionValue) || false
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glow-soft rounded-3xl border-2 border-secondary bg-card/90 p-8 shadow-2xl backdrop-blur-sm sm:p-12"
    >
      {/* Question Header */}
      <div className="mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl"
        >
          {question}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-pretty text-lg text-muted-foreground"
        >
          {description}
        </motion.p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => {
          const selected = isSelected(option.value)

          return (
            <motion.button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "group relative w-full overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300",
                selected
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/20 glow-soft"
                  : "border-secondary bg-card hover:border-primary/50 hover:bg-secondary/30",
              )}
            >
              <div className="flex items-center gap-4">
                {/* Content */}
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{option.label}</div>
                  {option.description && <div className="mt-1 text-sm text-muted-foreground">{option.description}</div>}
                </div>

                {/* Check Icon */}
                <motion.div
                  animate={selected ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
                    selected ? "border-primary bg-primary" : "border-secondary bg-background",
                  )}
                >
                  {selected && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-accent/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          )
        })}
      </div>

      {/* Helper Text */}
      {type === "multiple-choice" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center font-script text-base text-muted-foreground"
        >
          You can select multiple options
        </motion.p>
      )}
    </motion.div>
  )
}
