export interface SurveyOption {
  id: string
  title: string
  description: string
  weight: {
    oud: number
    amber: number
    floral: number
    gourmand: number
  }
  details?: string
}

export interface SurveyQuestion {
  id: string
  question: string
  description: string
  options: SurveyOption[]
}

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "mood",
    question: "When you wear perfume, how do you want to feel?",
    description: "Perfume isn't just a fragrance. It's a mood, a memory, a story, a signature.",
    options: [
      {
        id: "elegant-romantic",
        title: "Elegant & Romantic",
        description: "Sophisticated, graceful, and alluring",
        weight: { oud: 0.3, amber: 0.7, floral: 0.5, gourmand: 0.2 },
        details: "Best For: Special occasions, dates, formal events",
      },
      {
        id: "fresh-clean",
        title: "Fresh & Clean",
        description: "Light, airy, and effortlessly beautiful",
        weight: { oud: 0.1, amber: 0.2, floral: 0.8, gourmand: 0.1 },
        details: "Best For: Daily wear, office, daytime activities",
      },
      {
        id: "bold-mysterious",
        title: "Bold & Mysterious",
        description: "Confident, intriguing, and unforgettable",
        weight: { oud: 0.8, amber: 0.4, floral: 0.2, gourmand: 0.3 },
        details: "Best For: Evening events, making an impression, standing out",
      },
      {
        id: "sweet-playful",
        title: "Sweet & Playful",
        description: "Fun, charming, and full of joy",
        weight: { oud: 0.1, amber: 0.3, floral: 0.4, gourmand: 0.7 },
        details: "Best For: Casual outings, social gatherings, everyday joy",
      },
    ],
  },
  {
    id: "fragrance-type",
    question: "Which type of fragrances do you naturally love?",
    description: "The crave of perfumes affects how we feel about ourselves.",
    options: [
      {
        id: "oud-rich",
        title: "Oud & Rich",
        description: "Deep, complex, and luxurious",
        weight: { oud: 0.9, amber: 0.3, floral: 0.1, gourmand: 0.2 },
        details: "Notes: Oud, sandalwood, musk, leather",
      },
      {
        id: "fruity-floral",
        title: "Fruity & Floral",
        description: "Fresh, beautiful, and natural",
        weight: { oud: 0.1, amber: 0.2, floral: 0.8, gourmand: 0.3 },
        details: "Notes: Rose, jasmine, citrus, berries",
      },
      {
        id: "sweet-gourmand",
        title: "Sweet & Gourmand",
        description: "Vanilla, caramel, candy-like",
        weight: { oud: 0.1, amber: 0.4, floral: 0.2, gourmand: 0.8 },
        details: "Notes: Vanilla, chocolate, coffee, honey",
      },
      {
        id: "woody-musky",
        title: "Woody & Musky",
        description: "Warm, sophisticated, and grounding",
        weight: { oud: 0.6, amber: 0.7, floral: 0.2, gourmand: 0.3 },
        details: "Notes: Cedarwood, vetiver, amber, musk",
      },
    ],
  },
  {
    id: "occasion",
    question: "When do you wear perfume most often?",
    description: "Allow us walk with you on your scent discovery journey.",
    options: [
      {
        id: "daily",
        title: "Daily (work/school)",
        description: "Everyday elegance and confidence",
        weight: { oud: 0.2, amber: 0.5, floral: 0.6, gourmand: 0.3 },
        details: "Intensity: Light to moderate",
      },
      {
        id: "nights-out",
        title: "Nights Out & Events",
        description: "Special occasions and memorable moments",
        weight: { oud: 0.7, amber: 0.6, floral: 0.4, gourmand: 0.5 },
        details: "Intensity: Moderate to strong",
      },
      {
        id: "special-occasions",
        title: "Special Occasions",
        description: "Only for the most important moments",
        weight: { oud: 0.8, amber: 0.8, floral: 0.3, gourmand: 0.4 },
        details: "Intensity: Strong, long-lasting",
      },
      {
        id: "collector",
        title: "All the Time (A Collector)",
        description: "I love exploring different scents",
        weight: { oud: 0.6, amber: 0.6, floral: 0.6, gourmand: 0.6 },
        details: "Intensity: Mixed range",
      },
    ],
  },
  {
    id: "personal-style",
    question: "How would you describe your personal style?",
    description: "Your scent should reflect who you are.",
    options: [
      {
        id: "classic-timeless",
        title: "Classic & Timeless",
        description: "Elegant, refined, and sophisticated",
        weight: { oud: 0.4, amber: 0.7, floral: 0.5, gourmand: 0.3 },
        details: "Fashion Profile: Tailored, polished, quality over trends",
      },
      {
        id: "modern-trendy",
        title: "Modern & Trendy",
        description: "Contemporary, fresh, and innovative",
        weight: { oud: 0.3, amber: 0.4, floral: 0.7, gourmand: 0.5 },
        details: "Fashion Profile: On-trend, experimental, style-conscious",
      },
      {
        id: "bohemian",
        title: "Bohemian & Free-spirited",
        description: "Creative, artistic, and unconventional",
        weight: { oud: 0.6, amber: 0.5, floral: 0.6, gourmand: 0.4 },
        details: "Fashion Profile: Eclectic, creative, boundary-pushing",
      },
      {
        id: "minimalist",
        title: "Minimalist & Clean",
        description: "Simple, pure, and understated",
        weight: { oud: 0.2, amber: 0.3, floral: 0.8, gourmand: 0.2 },
        details: "Fashion Profile: Clean lines, neutral tones, quality basics",
      },
    ],
  },
  {
    id: "intensity",
    question: "What intensity do you prefer?",
    description: "Some like to make a statement, others prefer subtle elegance.",
    options: [
      {
        id: "subtle",
        title: "Subtle & Intimate",
        description: "Close to the skin, personal",
        weight: { oud: 0.2, amber: 0.4, floral: 0.6, gourmand: 0.3 },
        details: "Longevity: 4-6 hours",
      },
      {
        id: "moderate",
        title: "Moderate & Balanced",
        description: "Noticeable but not overwhelming",
        weight: { oud: 0.5, amber: 0.6, floral: 0.7, gourmand: 0.5 },
        details: "Longevity: 6-8 hours",
      },
      {
        id: "bold",
        title: "Bold & Confident",
        description: "Makes a statement, unforgettable",
        weight: { oud: 0.8, amber: 0.7, floral: 0.4, gourmand: 0.6 },
        details: "Longevity: 8-12+ hours",
      },
      {
        id: "versatile",
        title: "Versatile & Adaptable",
        description: "Works for any occasion",
        weight: { oud: 0.4, amber: 0.6, floral: 0.6, gourmand: 0.5 },
        details: "Longevity: 6-10 hours",
      },
    ],
  },
]

export interface SurveyAnswer {
  questionId: string
  optionId: string
  weight: {
    oud: number
    amber: number
    floral: number
    gourmand: number
  }
}

export function calculateScentProfile(answers: SurveyAnswer[]) {
  const totals = { oud: 0, amber: 0, floral: 0, gourmand: 0 }

  answers.forEach((answer) => {
    totals.oud += answer.weight.oud
    totals.amber += answer.weight.amber
    totals.floral += answer.weight.floral
    totals.gourmand += answer.weight.gourmand
  })

  const sum = totals.oud + totals.amber + totals.floral + totals.gourmand

  return {
    oud: Math.round((totals.oud / sum) * 100),
    amber: Math.round((totals.amber / sum) * 100),
    floral: Math.round((totals.floral / sum) * 100),
    gourmand: Math.round((totals.gourmand / sum) * 100),
  }
}
