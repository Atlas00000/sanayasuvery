"use server"

import { generateFragranceProfile as matchProducts } from "./matching-algorithm"

type SurveyAnswers = {
  vibe: string
  occasions: string[]
  scentFamily: string
  intensity: string
  budget: string
}

export async function generateFragranceProfile(answers: SurveyAnswers) {
  try {
    // Use our sophisticated matching algorithm with real product database
    const profile = matchProducts(answers)
    return profile
  } catch (error) {
    console.error("[Sanaya] Error generating profile:", error)

    // Return a fallback in case of unexpected errors
    throw new Error("Unable to generate your personalized profile. Please try again.")
  }
}
