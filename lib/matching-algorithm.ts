import { PRODUCTS, Product, formatPrice } from "./products-database"

type SurveyAnswers = {
  vibe: string
  occasions: string[]
  scentFamily: string
  intensity: string
  budget: string
}

type ScentProfile = {
  oud: number
  amber: number
  floral: number
  gourmand: number
}

type ProductMatch = {
  product: Product
  matchScore: number
  reasons: string[]
}

export function calculateScentProfile(answers: SurveyAnswers): ScentProfile {
  const weights = {
    oud: 0,
    amber: 0,
    floral: 0,
    gourmand: 0,
  }

  // Vibe contributions
  const vibeWeights: Record<string, ScentProfile> = {
    bold: { oud: 0.7, amber: 0.5, floral: 0.2, gourmand: 0.3 },
    elegant: { oud: 0.4, amber: 0.8, floral: 0.5, gourmand: 0.3 },
    playful: { oud: 0.1, amber: 0.3, floral: 0.6, gourmand: 0.7 },
    calm: { oud: 0.2, amber: 0.4, floral: 0.8, gourmand: 0.2 },
  }

  if (vibeWeights[answers.vibe]) {
    Object.keys(weights).forEach((key) => {
      weights[key as keyof ScentProfile] += vibeWeights[answers.vibe][key as keyof ScentProfile]
    })
  }

  // Scent family contributions
  const scentWeights: Record<string, ScentProfile> = {
    floral: { oud: 0.1, amber: 0.2, floral: 0.9, gourmand: 0.2 },
    woody: { oud: 0.9, amber: 0.6, floral: 0.2, gourmand: 0.2 },
    fresh: { oud: 0.1, amber: 0.2, floral: 0.8, gourmand: 0.1 },
    oriental: { oud: 0.7, amber: 0.8, floral: 0.3, gourmand: 0.4 },
    fruity: { oud: 0.1, amber: 0.3, floral: 0.7, gourmand: 0.6 },
  }

  if (scentWeights[answers.scentFamily]) {
    Object.keys(weights).forEach((key) => {
      weights[key as keyof ScentProfile] += scentWeights[answers.scentFamily][key as keyof ScentProfile] * 1.5 // Stronger weight for scent family
    })
  }

  // Occasion contributions
  const occasionWeights: Record<string, ScentProfile> = {
    daily: { oud: 0.2, amber: 0.5, floral: 0.6, gourmand: 0.3 },
    work: { oud: 0.3, amber: 0.5, floral: 0.7, gourmand: 0.2 },
    special: { oud: 0.8, amber: 0.7, floral: 0.4, gourmand: 0.4 },
    evening: { oud: 0.7, amber: 0.6, floral: 0.4, gourmand: 0.5 },
    casual: { oud: 0.2, amber: 0.4, floral: 0.7, gourmand: 0.6 },
  }

  answers.occasions.forEach((occasion) => {
    if (occasionWeights[occasion]) {
      Object.keys(weights).forEach((key) => {
        weights[key as keyof ScentProfile] += occasionWeights[occasion][key as keyof ScentProfile] * 0.5
      })
    }
  })

  // Intensity contributions
  const intensityWeights: Record<string, ScentProfile> = {
    subtle: { oud: 0.2, amber: 0.4, floral: 0.7, gourmand: 0.3 },
    moderate: { oud: 0.5, amber: 0.6, floral: 0.6, gourmand: 0.5 },
    strong: { oud: 0.8, amber: 0.7, floral: 0.3, gourmand: 0.6 },
  }

  if (intensityWeights[answers.intensity]) {
    Object.keys(weights).forEach((key) => {
      weights[key as keyof ScentProfile] += intensityWeights[answers.intensity][key as keyof ScentProfile] * 0.7
    })
  }

  // Normalize to percentages
  const total = weights.oud + weights.amber + weights.floral + weights.gourmand
  return {
    oud: Math.round((weights.oud / total) * 100),
    amber: Math.round((weights.amber / total) * 100),
    floral: Math.round((weights.floral / total) * 100),
    gourmand: Math.round((weights.gourmand / total) * 100),
  }
}

function calculateProductMatch(product: Product, answers: SurveyAnswers, profile: ScentProfile): ProductMatch {
  let score = 0
  const reasons: string[] = []

  // Calculate scent profile match (40% of total score)
  const profileMatch =
    (profile.oud * product.weights.oud +
      profile.amber * product.weights.amber +
      profile.floral * product.weights.floral +
      profile.gourmand * product.weights.gourmand) /
    100

  score += profileMatch * 40

  if (profileMatch >= 0.7) {
    reasons.push(`Excellent scent profile match (${Math.round(profileMatch * 100)}%)`)
  }

  // Vibe match (20% of total score) - MORE STRICT
  const vibeScore = product.suitability[answers.vibe as keyof typeof product.suitability] || 0
  score += vibeScore * 2

  if (vibeScore >= 8) {
    reasons.push(`Perfect for your ${answers.vibe} personality`)
  } else if (vibeScore < 5) {
    // Penalize heavily for poor vibe match
    score -= 10
  }

  // Occasion match (20% of total score) - MORE STRICT
  let occasionScore = 0
  answers.occasions.forEach((occasion) => {
    const occScore = product.suitability[occasion as keyof typeof product.suitability] || 0
    occasionScore += occScore
  })
  occasionScore = occasionScore / answers.occasions.length
  score += occasionScore * 2

  if (occasionScore >= 8) {
    reasons.push(`Ideal for ${answers.occasions.join(", ")} occasions`)
  } else if (occasionScore < 5) {
    // Penalize heavily for poor occasion match
    score -= 10
  }

  // Scent family match (10% of total score) - MORE STRICT
  const scentScore = product.suitability[answers.scentFamily as keyof typeof product.suitability] || 0
  score += scentScore

  if (scentScore >= 8) {
    reasons.push(`Strong ${answers.scentFamily} character matches your preference`)
  } else if (scentScore < 5) {
    // Penalize for poor scent family match
    score -= 5
  }

  // Intensity match (10% of total score) - MORE STRICT
  const intensityScore = product.suitability[answers.intensity as keyof typeof product.suitability] || 0
  score += intensityScore

  if (intensityScore >= 8) {
    reasons.push(`${product.projection} projection perfect for ${answers.intensity} intensity`)
  } else if (intensityScore < 5) {
    // Penalize for poor intensity match
    score -= 5
  }

  // Add specific feature reasons
  if (product.longevity.includes("12-16") || product.longevity.includes("10-14")) {
    reasons.push(`Exceptional ${product.longevity} longevity`)
  }

  if (product.featured && score >= 80) {
    reasons.push("Featured premium selection")
  }

  if (product.availability === "Limited Edition" && score >= 80) {
    reasons.push("Exclusive limited edition")
  }

  // DON'T artificially cap the score - let it range naturally
  score = Math.max(0, Math.min(100, score))

  return {
    product,
    matchScore: Math.round(score),
    reasons: reasons.slice(0, 4), // Max 4 reasons
  }
}

function getPersonalityDescription(answers: SurveyAnswers, profile: ScentProfile): {
  profileName: string
  description: string
  personality: string
} {
  const dominantNote = Object.entries(profile).reduce((a, b) => (b[1] > a[1] ? b : a))
  const dominantName = dominantNote[0].charAt(0).toUpperCase() + dominantNote[0].slice(1)

  const vibeDescriptions: Record<string, string> = {
    bold: "confident and commanding",
    elegant: "sophisticated and refined",
    playful: "joyful and expressive",
    calm: "serene and balanced",
  }

  const occasionDescriptions: Record<string, string> = {
    daily: "everyday elegance",
    work: "professional presence",
    special: "memorable moments",
    evening: "evening sophistication",
    casual: "effortless style",
  }

  const scentDescriptions: Record<string, string> = {
    floral: "romantic florals",
    woody: "deep woods and oud",
    fresh: "crisp freshness",
    oriental: "warm spices and amber",
    fruity: "vibrant fruits",
  }

  const vibe = vibeDescriptions[answers.vibe] || "unique"
  const primaryOccasion = answers.occasions[0] || "special"
  const occasion = occasionDescriptions[primaryOccasion] || "various occasions"
  const scent = scentDescriptions[answers.scentFamily] || "distinctive notes"

  // Generate profile name
  let profileName = "The "
  if (answers.vibe === "bold" && profile.oud > 60) {
    profileName += "Powerful Connoisseur"
  } else if (answers.vibe === "elegant" && profile.amber > 60) {
    profileName += "Golden Sophisticate"
  } else if (answers.vibe === "playful" && profile.gourmand > 50) {
    profileName += "Sweet Adventurer"
  } else if (answers.vibe === "calm" && profile.floral > 60) {
    profileName += "Serene Minimalist"
  } else if (profile.oud > 60) {
    profileName += "Oud Enthusiast"
  } else if (profile.amber > 60) {
    profileName += "Amber Lover"
  } else if (profile.floral > 60) {
    profileName += "Floral Devotee"
  } else if (profile.gourmand > 50) {
    profileName += "Gourmand Explorer"
  } else {
    profileName += "Balanced Connoisseur"
  }

  // Generate description
  const description = `Your scent journey is ${vibe}, drawn to ${scent}. You seek fragrances that complement your ${occasion} with elegance and character.`

  // Generate personality
  let personality = `You have a beautifully ${vibe} approach to fragrance. `

  if (dominantNote[1] > 60) {
    personality += `Your strong preference for ${dominantName.toLowerCase()} notes (${dominantNote[1]}%) reveals someone who knows exactly what they love and isn't afraid to embrace it. `
  } else {
    personality += `Your balanced scent profile shows a sophisticated appreciation for complexity and variety. `
  }

  if (answers.occasions.includes("evening") || answers.occasions.includes("special")) {
    personality += `You understand that fragrance is an essential part of creating memorable moments. `
  } else if (answers.occasions.includes("daily") || answers.occasions.includes("work")) {
    personality += `You believe that every day deserves a signature scent that reflects your personality. `
  }

  if (answers.intensity === "strong") {
    personality += `Your preference for bold intensity shows confidence—you're not afraid to make a statement and be remembered.`
  } else if (answers.intensity === "subtle") {
    personality += `Your preference for subtle elegance shows refined taste—you let your natural presence speak for itself.`
  } else {
    personality += `Your preference for moderate intensity shows perfect balance—noticeable yet never overwhelming.`
  }

  return { profileName, description, personality }
}

function getScentNotes(profile: ScentProfile): string[] {
  const notes: string[] = []

  if (profile.oud > 40) {
    notes.push("Oud", "Sandalwood", "Cedar")
  }
  if (profile.amber > 40) {
    notes.push("Amber", "Vanilla", "Honey")
  }
  if (profile.floral > 40) {
    notes.push("Rose", "Jasmine", "White Flowers")
  }
  if (profile.gourmand > 40) {
    notes.push("Vanilla", "Coffee", "Caramel")
  }

  // Add complementary notes
  notes.push("Musk", "Spices", "Warm Woods")

  // Remove duplicates and return first 7
  return [...new Set(notes)].slice(0, 7)
}

function getBestFor(answers: SurveyAnswers): string[] {
  const bestFor: string[] = []

  answers.occasions.forEach((occasion) => {
    const mapping: Record<string, string> = {
      daily: "Daily wear and signature scent",
      work: "Professional settings and meetings",
      special: "Special occasions and celebrations",
      evening: "Evening events and dates",
      casual: "Casual outings and social gatherings",
    }
    if (mapping[occasion]) {
      bestFor.push(mapping[occasion])
    }
  })

  // Add personality-based suggestions
  if (answers.vibe === "bold") {
    bestFor.push("Making a powerful impression")
  } else if (answers.vibe === "elegant") {
    bestFor.push("Sophisticated gatherings")
  } else if (answers.vibe === "playful") {
    bestFor.push("Creative and social events")
  } else if (answers.vibe === "calm") {
    bestFor.push("Peaceful moments and relaxation")
  }

  return bestFor.slice(0, 5)
}

function getIntensityDescription(answers: SurveyAnswers): string {
  const descriptions: Record<string, string> = {
    subtle: "You prefer fragrances that stay close to the skin—intimate, personal, and refined. A gentle whisper rather than a shout.",
    moderate: "You appreciate fragrances with balanced presence—noticeable enough to make an impression, yet never overwhelming. The perfect middle ground.",
    strong: "You love fragrances that command attention and make a lasting impression. Bold projection that announces your presence with confidence.",
  }

  return descriptions[answers.intensity] || "You appreciate well-crafted fragrances that suit the moment."
}

export function generateFragranceProfile(answers: SurveyAnswers) {
  // Calculate scent profile
  const profile = calculateScentProfile(answers)
  
  console.log("📊 Survey Answers:", answers)
  console.log("🎨 Calculated Scent Profile:", profile)

  // Filter products by budget FIRST
  let availableProducts = PRODUCTS
  
  if (answers.budget !== "any") {
    availableProducts = PRODUCTS.filter((product) => {
      if (answers.budget === "budget") {
        // Under ₦55,000
        return product.price < 55000
      } else if (answers.budget === "mid") {
        // ₦55,000 - ₦65,000
        return product.price >= 55000 && product.price <= 65000
      } else if (answers.budget === "luxury") {
        // ₦65,000+
        return product.price > 65000
      }
      return true
    })
    
    console.log(`💰 Budget Filter (${answers.budget}): ${availableProducts.length} products available out of ${PRODUCTS.length}`)
  }

  // Get all products and calculate match scores
  const allMatches: ProductMatch[] = availableProducts.map((product) => calculateProductMatch(product, answers, profile))

  // Sort by match score
  allMatches.sort((a, b) => b.matchScore - a.matchScore)

  console.log("🏆 Top 10 Matches:")
  allMatches.slice(0, 10).forEach((match, i) => {
    console.log(`${i + 1}. ${match.product.name} - ${match.matchScore}% match (₦${match.product.price.toLocaleString()})`)
    console.log(`   Collection: ${match.product.collection}`)
    console.log(`   Reasons: ${match.reasons.join(", ")}`)
    
    // Show scoring breakdown for top 3
    if (i < 3) {
      const vibe = match.product.suitability[answers.vibe as keyof typeof match.product.suitability]
      const scent = match.product.suitability[answers.scentFamily as keyof typeof match.product.suitability]
      const intensity = match.product.suitability[answers.intensity as keyof typeof match.product.suitability]
      console.log(`   Scores: Vibe=${vibe}/10, Scent=${scent}/10, Intensity=${intensity}/10`)
    }
  })

  // Get top 3 recommendations
  let top3 = allMatches.slice(0, 3)
  
  // If we don't have enough products in budget range, show a helpful message
  if (top3.length < 3) {
    console.log(`⚠️ Only ${top3.length} products found in budget range. Consider selecting "Any price" for more options.`)
  }

  // Generate personality description
  const personalityInfo = getPersonalityDescription(answers, profile)

  // Get scent notes
  const scentNotes = getScentNotes(profile)

  // Get best for occasions
  const bestFor = getBestFor(answers)

  // Get intensity description
  const intensity = getIntensityDescription(answers)

  // Format recommendations
  const recommendations = top3.map((match, index) => {
    const allNotes = [
      ...match.product.scentNotes.top,
      ...match.product.scentNotes.heart,
      ...match.product.scentNotes.base,
    ]

    return {
      productId: match.product.id,
      name: match.product.name,
      brand: "Sanaya's Scents",
      collection: match.product.collection,
      description: match.product.description,
      notes: allNotes.slice(0, 6),
      matchScore: match.matchScore,
      priceRange: formatPrice(match.product.price, match.product.currency),
      image: match.product.image,
      longevity: match.product.longevity,
      projection: match.product.projection,
      season: match.product.season,
      occasion: match.product.occasion,
      whyItMatches: match.reasons.join(". ") + ".",
      bestFor: match.product.bestFor.slice(0, 3),
      availability: match.product.availability,
      rank: index + 1,
    }
  })

  return {
    profileName: personalityInfo.profileName,
    description: personalityInfo.description,
    personality: personalityInfo.personality,
    scentProfile: profile,
    scentNotes,
    bestFor,
    intensity,
    recommendations,
  }
}

