// Complete Product Database for Sanaya's Scents
export type Product = {
  id: string
  name: string
  collection: string
  price: number
  currency: string
  availability: string
  featured: boolean
  image: string
  scentNotes: {
    top: string[]
    heart: string[]
    base: string[]
  }
  description: string
  extendedStory: string
  bestFor: string[]
  longevity: string
  projection: string
  season: string
  occasion: string
  // Matching weights for recommendation algorithm
  weights: {
    oud: number
    amber: number
    floral: number
    gourmand: number
  }
  suitability: {
    bold: number
    elegant: number
    playful: number
    calm: number
    daily: number
    work: number
    special: number
    evening: number
    casual: number
    floral: number
    woody: number
    fresh: number
    oriental: number
    fruity: number
    subtle: number
    moderate: number
    strong: number
  }
}

export const PRODUCTS: Product[] = [
  // OUD & RICH COLLECTION
  {
    id: "eternal_oud",
    name: "ETERNAL_OUD",
    collection: "Oud & Rich",
    price: 65000,
    currency: "₦",
    availability: "In Stock",
    featured: true,
    image: "/images/products/ETERNAL_OUD.jpeg",
    scentNotes: {
      top: ["Oud", "Sandalwood"],
      heart: ["Amber", "Rose"],
      base: ["Deep Oud", "Musk"],
    },
    description: "A journey through ancient souks and royal courts. This complex oud blend tells a story of tradition, luxury, and timeless elegance. For those who understand that true luxury is never loud, but always memorable.",
    extendedStory: "ETERNAL_OUD is inspired by the mystique of ancient Arabian traditions merged with modern sophistication. Each spray transports you to the opulent halls of royal courts where the finest ouds were reserved for kings and queens. This is not just a fragrance—it's a statement of refined taste and an appreciation for the finer things in life. The complex layers unfold throughout the day, revealing new dimensions of depth and character.",
    bestFor: ["Evening events and special occasions", "Those who appreciate bold, complex fragrances", "Making a lasting impression", "Cold weather and formal settings"],
    longevity: "8-12 hours",
    projection: "Strong",
    season: "Fall/Winter",
    occasion: "Evening, Special Events",
    weights: { oud: 0.95, amber: 0.6, floral: 0.3, gourmand: 0.2 },
    suitability: { bold: 9, elegant: 9, playful: 2, calm: 3, daily: 4, work: 5, special: 10, evening: 10, casual: 3, floral: 3, woody: 10, fresh: 2, oriental: 9, fruity: 1, subtle: 2, moderate: 6, strong: 10 }
  },
  {
    id: "out_of_crabia_iii",
    name: "Out of Crabia III",
    collection: "Oud & Rich",
    price: 72000,
    currency: "₦",
    availability: "Limited Edition",
    featured: true,
    image: "/images/products/Out_of_Crabia_III.jpeg",
    scentNotes: {
      top: ["Oud", "Frankincense"],
      heart: ["Musk", "Saffron"],
      base: ["Amber", "Woods"],
    },
    description: "The third in our legendary Out of Crabia series. A sophisticated oud that captures the essence of Arabian luxury. Inspired by the royal courts of the Middle East, this fragrance embodies the opulence and refinement of Arabian nobility.",
    extendedStory: "Out of Crabia III represents the pinnacle of our oud collection—a masterpiece years in the making. This limited edition fragrance was crafted to honor the ancient perfumery traditions of Arabia while incorporating modern refinement techniques. The rare saffron threads and precious frankincense create an aura of royalty that is both commanding and elegant.",
    bestFor: ["Collectors and connoisseurs", "Luxury gift giving", "Special ceremonies and celebrations", "Those seeking exclusivity"],
    longevity: "10-14 hours",
    projection: "Very Strong",
    season: "Year-round",
    occasion: "Special Occasions, Luxury Events",
    weights: { oud: 0.98, amber: 0.7, floral: 0.2, gourmand: 0.15 },
    suitability: { bold: 10, elegant: 10, playful: 1, calm: 2, daily: 3, work: 4, special: 10, evening: 10, casual: 2, floral: 2, woody: 10, fresh: 1, oriental: 10, fruity: 1, subtle: 1, moderate: 5, strong: 10 }
  },
  {
    id: "eit_of_crabia",
    name: "Eit of Crabia",
    collection: "Oud & Rich",
    price: 58000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/Eit_of_Crabia1.jpeg",
    scentNotes: {
      top: ["Oud", "Cedar"],
      heart: ["Amber", "Spices"],
      base: ["Woody notes", "Musk"],
    },
    description: "A refined oud composition that speaks to the connoisseur. Rich, complex, and unforgettable. For the sophisticated soul who appreciates depth and complexity.",
    extendedStory: "Eit of Crabia tells a story of ancient wisdom and modern luxury. The carefully balanced blend of oud and cedar creates a foundation of strength, while the spice notes add intrigue and warmth. This fragrance is for those who prefer their luxury understated yet undeniable—a scent that whispers rather than shouts, yet leaves an indelible mark on everyone you meet.",
    bestFor: ["Business meetings and professional settings", "Confident daily wear", "Those who appreciate complexity", "Mature, sophisticated individuals"],
    longevity: "8-10 hours",
    projection: "Moderate to Strong",
    season: "Fall/Winter/Spring",
    occasion: "Daily, Business, Evening",
    weights: { oud: 0.85, amber: 0.65, floral: 0.2, gourmand: 0.25 },
    suitability: { bold: 8, elegant: 9, playful: 2, calm: 4, daily: 7, work: 8, special: 8, evening: 9, casual: 4, floral: 2, woody: 9, fresh: 2, oriental: 9, fruity: 1, subtle: 3, moderate: 8, strong: 8 }
  },

  // AMBER & GOLD COLLECTION
  {
    id: "royal_amber",
    name: "ROYAL_AmBER",
    collection: "Amber & Gold",
    price: 62000,
    currency: "₦",
    availability: "In Stock",
    featured: true,
    image: "/images/products/AMBER_ROUGE.jpeg",
    scentNotes: {
      top: ["Amber", "Vanilla"],
      heart: ["Sandalwood", "Honey"],
      base: ["Warm Musk", "Golden Notes"],
    },
    description: "Liquid gold in a bottle. This warm, enveloping amber evokes the confidence of royalty and the warmth of golden hour. For the individual who knows their worth and isn't afraid to show it.",
    extendedStory: "ROYAL_AmBER captures the essence of that magical golden hour when the world is bathed in warm, amber light. This fragrance is liquid confidence—it wraps you in a cocoon of warmth and elegance that radiates from within. The honey and vanilla notes add a touch of sweetness that makes this fragrance both powerful and approachable.",
    bestFor: ["Romantic dates and intimate dinners", "Confidence building", "Cold weather comfort", "Classic elegance lovers"],
    longevity: "8-10 hours",
    projection: "Moderate",
    season: "Fall/Winter",
    occasion: "Evening, Romantic, Daily",
    weights: { oud: 0.3, amber: 0.95, floral: 0.4, gourmand: 0.5 },
    suitability: { bold: 7, elegant: 10, playful: 4, calm: 6, daily: 7, work: 6, special: 9, evening: 10, casual: 6, floral: 4, woody: 6, fresh: 2, oriental: 9, fruity: 3, subtle: 4, moderate: 9, strong: 7 }
  },
  {
    id: "gold",
    name: "GOLD",
    collection: "Amber & Gold",
    price: 68000,
    currency: "₦",
    availability: "In Stock",
    featured: true,
    image: "/images/products/GOLD.jpeg",
    scentNotes: {
      top: ["Gold Accord", "Amber"],
      heart: ["Vanilla", "Musk"],
      base: ["Precious Woods", "Resin"],
    },
    description: "Pure luxury in its most refined form. A golden fragrance that radiates sophistication and elegance. The ultimate expression of luxury for those who demand nothing but the finest.",
    extendedStory: "GOLD is not just a fragrance—it's an experience of pure opulence. Created with the finest ingredients from around the world, this golden composition represents the pinnacle of perfumery artistry. Each note has been carefully selected to create a harmonious symphony of luxury. When you wear GOLD, you're not just wearing a fragrance; you're wearing success, achievement, and the fulfillment of dreams.",
    bestFor: ["Luxury lifestyle enthusiasts", "Special celebrations and milestones", "Making a grand entrance", "Gift for someone special"],
    longevity: "10-12 hours",
    projection: "Strong",
    season: "Year-round",
    occasion: "Special Events, Celebrations, Luxury Settings",
    weights: { oud: 0.4, amber: 0.98, floral: 0.3, gourmand: 0.45 },
    suitability: { bold: 9, elegant: 10, playful: 3, calm: 5, daily: 5, work: 6, special: 10, evening: 10, casual: 4, floral: 3, woody: 7, fresh: 2, oriental: 10, fruity: 2, subtle: 3, moderate: 7, strong: 10 }
  },
  {
    id: "amber_rouge",
    name: "AMBER_ROUGE",
    collection: "Amber & Gold",
    price: 55000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/AMBER_ROUGE.jpeg",
    scentNotes: {
      top: ["Amber", "Rose"],
      heart: ["Spices", "Musk"],
      base: ["Deep Amber", "Woods"],
    },
    description: "A passionate amber with a hint of mystery. Warm, seductive, and utterly captivating. For the passionate soul who loves with intensity.",
    extendedStory: "AMBER_ROUGE tells a story of desire and sophistication. The deep, rich amber base is elevated by the sensual rose heart and warmed by exotic spices. This fragrance is for those who live life with passion and intensity—who believe that love, like fragrance, should be felt deeply and remembered forever. It's mysterious yet inviting, bold yet refined.",
    bestFor: ["Romantic evenings", "Date nights", "Passionate personalities", "Those who love rich, warm scents"],
    longevity: "8-10 hours",
    projection: "Moderate",
    season: "Fall/Winter",
    occasion: "Romantic, Evening, Special Dates",
    weights: { oud: 0.25, amber: 0.9, floral: 0.55, gourmand: 0.35 },
    suitability: { bold: 8, elegant: 9, playful: 4, calm: 5, daily: 6, work: 5, special: 9, evening: 10, casual: 5, floral: 6, woody: 7, fresh: 2, oriental: 9, fruity: 2, subtle: 4, moderate: 8, strong: 7 }
  },

  // FLORAL & FRESH COLLECTION
  {
    id: "grecia",
    name: "GRECIA",
    collection: "Floral & Fresh",
    price: 52000,
    currency: "₦",
    availability: "In Stock",
    featured: true,
    image: "/images/products/GRECIA.jpeg",
    scentNotes: {
      top: ["White Flowers", "Citrus"],
      heart: ["Green Leaves", "Musk"],
      base: ["Soft Woods", "Clean Musk"],
    },
    description: "Inspired by the gardens of ancient Greece. Fresh, elegant, and eternally beautiful. Like a walk through the gardens of ancient Greece, this fragrance captures the essence of timeless beauty and grace.",
    extendedStory: "GRECIA transports you to the legendary gardens of ancient Greece, where philosophers walked among white marble columns and blooming flowers. This fragrance embodies the Greek ideals of beauty, balance, and harmony. The fresh citrus opening gives way to a heart of pristine white flowers, creating a scent that is both sophisticated and effortlessly beautiful.",
    bestFor: ["Daily office wear", "Fresh, clean scent lovers", "Spring and summer occasions", "Daytime activities"],
    longevity: "6-8 hours",
    projection: "Light to Moderate",
    season: "Spring/Summer",
    occasion: "Daily, Office, Daytime",
    weights: { oud: 0.1, amber: 0.2, floral: 0.9, gourmand: 0.15 },
    suitability: { bold: 3, elegant: 8, playful: 6, calm: 9, daily: 10, work: 10, special: 5, evening: 4, casual: 9, floral: 10, woody: 2, fresh: 10, oriental: 2, fruity: 4, subtle: 9, moderate: 7, strong: 3 }
  },
  {
    id: "olena",
    name: "OLENA",
    collection: "Floral & Fresh",
    price: 51000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/OLENA.jpeg",
    scentNotes: {
      top: ["Rose", "Jasmine"],
      heart: ["Lily", "Musk"],
      base: ["Soft Powder", "Clean Musk"],
    },
    description: "A modern interpretation of classic floral elegance. Fresh, sophisticated, and effortlessly chic. For the modern woman who appreciates classic beauty with a contemporary twist.",
    extendedStory: "OLENA bridges the gap between timeless elegance and modern sophistication. This fragrance takes the classic floral bouquet and reimagines it for today's confident woman. The rose and jasmine create a familiar comfort, while the modern musk base adds contemporary edge. It's perfect for the woman who is equally comfortable in a boardroom as she is at a garden party.",
    bestFor: ["Modern, sophisticated women", "Office and professional settings", "Versatile daily wear", "Those who love florals but want modern appeal"],
    longevity: "6-8 hours",
    projection: "Moderate",
    season: "Spring/Summer/Fall",
    occasion: "Daily, Office, Social Events",
    weights: { oud: 0.1, amber: 0.25, floral: 0.88, gourmand: 0.2 },
    suitability: { bold: 4, elegant: 9, playful: 6, calm: 7, daily: 10, work: 9, special: 6, evening: 6, casual: 8, floral: 10, woody: 2, fresh: 8, oriental: 3, fruity: 5, subtle: 7, moderate: 8, strong: 4 }
  },
  {
    id: "cherry_intense",
    name: "Cherry Intense",
    collection: "Floral & Fresh",
    price: 50000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/cherry_intense.jpeg",
    scentNotes: {
      top: ["Cherry Blossom", "Fruity"],
      heart: ["Floral", "Musk"],
      base: ["Soft Woods", "Vanilla"],
    },
    description: "A burst of cherry blossoms in full bloom. Intense, beautiful, and impossible to ignore. Like cherry blossoms dancing in the spring breeze, this fragrance captures the joy and beauty of new beginnings.",
    extendedStory: "Cherry Intense celebrates the fleeting beauty of cherry blossoms—that magical moment when entire trees explode into pink and white blooms. This fragrance captures that joy, that celebration of life and renewal. It's playful yet sophisticated, youthful yet timeless. Perfect for those who see beauty in every moment and want to share that joy with the world.",
    bestFor: ["Young, playful spirits", "Spring celebrations", "Cheerful, positive personalities", "Daytime and casual occasions"],
    longevity: "6-8 hours",
    projection: "Moderate",
    season: "Spring/Summer",
    occasion: "Casual, Daytime, Social Gatherings",
    weights: { oud: 0.1, amber: 0.2, floral: 0.75, gourmand: 0.4 },
    suitability: { bold: 5, elegant: 6, playful: 10, calm: 6, daily: 8, work: 7, special: 7, evening: 5, casual: 10, floral: 9, woody: 2, fresh: 7, oriental: 3, fruity: 10, subtle: 6, moderate: 8, strong: 5 }
  },
  {
    id: "natural_intense",
    name: "NATURAL_INTENSE",
    collection: "Floral & Fresh",
    price: 53000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/NATURAL_INTENSE.jpeg",
    scentNotes: {
      top: ["Natural Essences", "Green"],
      heart: ["Floral", "Wood"],
      base: ["Earth", "Natural Musk"],
    },
    description: "Pure, natural beauty intensified. A celebration of nature's most precious gifts. For those who believe in the power of natural beauty.",
    extendedStory: "NATURAL_INTENSE is our tribute to the raw, untamed beauty of nature. This fragrance uses the purest natural essences to create a scent that is both powerful and pure. It's for those who appreciate authenticity, who seek genuine experiences, and who believe that true beauty comes from within. The green, earthy notes connect you to nature while the floral heart celebrates its delicate beauty.",
    bestFor: ["Nature lovers and eco-conscious individuals", "Those who prefer natural fragrances", "Outdoor activities and adventures", "Fresh, green scent enthusiasts"],
    longevity: "7-9 hours",
    projection: "Moderate",
    season: "Spring/Summer",
    occasion: "Daily, Outdoor, Casual",
    weights: { oud: 0.15, amber: 0.25, floral: 0.8, gourmand: 0.2 },
    suitability: { bold: 4, elegant: 7, playful: 6, calm: 9, daily: 9, work: 8, special: 5, evening: 4, casual: 9, floral: 8, woody: 4, fresh: 10, oriental: 2, fruity: 3, subtle: 7, moderate: 8, strong: 5 }
  },

  // GOURMAND & UNIQUE COLLECTION
  {
    id: "coffee",
    name: "COFFEE",
    collection: "Gourmand & Unique",
    price: 57000,
    currency: "₦",
    availability: "In Stock",
    featured: true,
    image: "/images/products/COFFEE.jpeg",
    scentNotes: {
      top: ["Coffee", "Vanilla"],
      heart: ["Chocolate", "Spices"],
      base: ["Warm Musk", "Amber"],
    },
    description: "Bold, unconventional, unforgettable. This rich coffee blend is for the confident individual who makes their own rules. Perfect for those who want to stand out in a world of conformity.",
    extendedStory: "COFFEE is for rule breakers and trendsetters. Inspired by the ritual of a perfect espresso shot, this fragrance captures the rich, intoxicating aroma of freshly roasted coffee beans blended with warm vanilla and dark chocolate. It's bold, it's unique, and it's unapologetically different. This is the scent of late-night creativity, of passionate conversations in dimly lit cafés, of someone who lives life on their own terms.",
    bestFor: ["Creative personalities", "Coffee enthusiasts", "Those who embrace uniqueness", "Cool weather wear"],
    longevity: "8-10 hours",
    projection: "Strong",
    season: "Fall/Winter",
    occasion: "Casual, Evening, Creative Spaces",
    weights: { oud: 0.2, amber: 0.5, floral: 0.2, gourmand: 0.95 },
    suitability: { bold: 9, elegant: 6, playful: 8, calm: 4, daily: 7, work: 6, special: 7, evening: 9, casual: 9, floral: 2, woody: 4, fresh: 2, oriental: 7, fruity: 2, subtle: 3, moderate: 6, strong: 9 }
  },
  {
    id: "liquid_brun",
    name: "Liquid Brun",
    collection: "Gourmand & Unique",
    price: 54000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/liquid_brun.jpeg",
    scentNotes: {
      top: ["Brown Sugar", "Vanilla"],
      heart: ["Wood", "Musk"],
      base: ["Caramel", "Amber"],
    },
    description: "A sophisticated brown fragrance that captures the essence of luxury and refinement. For the sophisticated individual who appreciates the finer things in life.",
    extendedStory: "Liquid Brun is elegance personified. The rich brown sugar and caramel notes create a warmth that is both comforting and luxurious. This fragrance speaks of refinement, of quiet confidence, of someone who doesn't need to shout to be heard. It's the scent of a perfectly aged cognac, of rich leather chairs in a private library, of success that has been earned through patience and dedication.",
    bestFor: ["Sophisticated, mature individuals", "Cozy, intimate settings", "Those who love gourmand scents", "Evening wear"],
    longevity: "8-10 hours",
    projection: "Moderate",
    season: "Fall/Winter",
    occasion: "Evening, Intimate, Professional",
    weights: { oud: 0.15, amber: 0.6, floral: 0.2, gourmand: 0.9 },
    suitability: { bold: 6, elegant: 9, playful: 5, calm: 6, daily: 7, work: 7, special: 8, evening: 9, casual: 6, floral: 2, woody: 5, fresh: 1, oriental: 8, fruity: 4, subtle: 5, moderate: 8, strong: 6 }
  },
  {
    id: "dimmah",
    name: "Dimmah",
    collection: "Gourmand & Unique",
    price: 61000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/dimmah.jpeg",
    scentNotes: {
      top: ["Dark Woods", "Spices"],
      heart: ["Musk", "Amber"],
      base: ["Deep Resins", "Smoke"],
    },
    description: "A mysterious fragrance that whispers secrets of the night. Dark, seductive, and unforgettable. For the mysterious soul who loves the night.",
    extendedStory: "Dimmah is the fragrance of mystery and intrigue. Named after the Arabic word for darkness, this scent captures the allure of the unknown. The dark woods and smoky resins create an atmosphere of seduction and mystery. It's for those who are comfortable in the shadows, who understand that not everything needs to be revealed. This is the scent of secrets kept, of stories untold, of a presence that lingers long after you've left the room.",
    bestFor: ["Mysterious, intriguing personalities", "Night owls and evening events", "Those who love dark, smoky scents", "Cold weather"],
    longevity: "10-12 hours",
    projection: "Strong",
    season: "Fall/Winter",
    occasion: "Evening, Night Events, Special Occasions",
    weights: { oud: 0.7, amber: 0.75, floral: 0.1, gourmand: 0.4 },
    suitability: { bold: 10, elegant: 8, playful: 2, calm: 3, daily: 4, work: 5, special: 9, evening: 10, casual: 4, floral: 1, woody: 9, fresh: 1, oriental: 10, fruity: 1, subtle: 2, moderate: 5, strong: 10 }
  },
  {
    id: "della",
    name: "Della",
    collection: "Gourmand & Unique",
    price: 51000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/della.jpeg",
    scentNotes: {
      top: ["Floral", "Fruity"],
      heart: ["Vanilla", "Musk"],
      base: ["Soft Woods", "Powder"],
    },
    description: "A delicate fragrance that captures the essence of feminine grace and beauty. For the woman who embodies grace and beauty.",
    extendedStory: "Della celebrates the gentle strength of femininity. This fragrance is soft yet resilient, delicate yet enduring—just like the women who wear it. The fruity top notes add playfulness to the floral heart, while the vanilla base provides comfort and warmth. It's the scent of quiet confidence, of grace under pressure, of beauty that comes from inner strength.",
    bestFor: ["Gentle, graceful personalities", "Daily feminine wear", "Those who love soft, comforting scents", "Spring and summer"],
    longevity: "6-8 hours",
    projection: "Light to Moderate",
    season: "Spring/Summer",
    occasion: "Daily, Casual, Feminine Settings",
    weights: { oud: 0.1, amber: 0.3, floral: 0.7, gourmand: 0.6 },
    suitability: { bold: 3, elegant: 7, playful: 9, calm: 8, daily: 9, work: 7, special: 6, evening: 5, casual: 10, floral: 8, woody: 2, fresh: 6, oriental: 4, fruity: 9, subtle: 8, moderate: 7, strong: 3 }
  },

  // SIGNATURE EDITIONS
  {
    id: "afnan",
    name: "AFNAN",
    collection: "Signature Editions",
    price: 75000,
    currency: "₦",
    availability: "Limited Edition",
    featured: true,
    image: "/images/products/AFNAN.jpeg",
    scentNotes: {
      top: ["Rare Oud", "Rose"],
      heart: ["Saffron", "Amber"],
      base: ["Precious Resins", "Musk"],
    },
    description: "An exclusive creation for the discerning few. Rare, precious, and utterly unique. For the connoisseur who demands the extraordinary.",
    extendedStory: "AFNAN represents the absolute pinnacle of perfumery art. This exclusive fragrance is crafted with some of the world's rarest and most precious ingredients. The oud comes from centuries-old trees, the saffron is hand-picked from the finest harvests, and the rose absolute is extracted using traditional methods. This is not just a fragrance—it's a masterpiece, a work of art, a testament to the heights that perfumery can reach.",
    bestFor: ["Collectors and connoisseurs", "Ultra-luxury occasions", "Those who demand the absolute best", "Investment-worthy fragrances"],
    longevity: "12-16 hours",
    projection: "Very Strong",
    season: "Year-round",
    occasion: "Exclusive Events, Luxury Settings, Special Celebrations",
    weights: { oud: 0.95, amber: 0.85, floral: 0.5, gourmand: 0.2 },
    suitability: { bold: 10, elegant: 10, playful: 1, calm: 2, daily: 3, work: 4, special: 10, evening: 10, casual: 2, floral: 5, woody: 10, fresh: 1, oriental: 10, fruity: 1, subtle: 1, moderate: 4, strong: 10 }
  },
  {
    id: "ajwad",
    name: "Ajwad",
    collection: "Signature Editions",
    price: 73000,
    currency: "₦",
    availability: "Limited Edition",
    featured: true,
    image: "/images/products/ajwad.jpeg",
    scentNotes: {
      top: ["Royal Oud", "Frankincense"],
      heart: ["Gold", "Spices"],
      base: ["Amber", "Precious Woods"],
    },
    description: "A royal fragrance fit for kings and queens. Majestic, powerful, and utterly regal. Inspired by the royal courts of ancient kingdoms, this fragrance embodies power, majesty, and regal elegance.",
    extendedStory: "Ajwad means 'the most generous' in Arabic, and this fragrance lives up to its name. Created to honor the legendary generosity and nobility of ancient kings, this scent is bold, powerful, and commanding. The royal oud and frankincense create an aura of majesty, while the gold accord adds opulence and luxury. This is the fragrance of leaders, of those who inspire and command respect, of individuals whose presence changes the atmosphere of any room they enter.",
    bestFor: ["Leaders and ambitious individuals", "Power occasions and important meetings", "Those who appreciate royal luxury", "Making a commanding impression"],
    longevity: "12-14 hours",
    projection: "Very Strong",
    season: "Year-round",
    occasion: "Power Events, Leadership Settings, Premium Occasions",
    weights: { oud: 0.96, amber: 0.88, floral: 0.2, gourmand: 0.25 },
    suitability: { bold: 10, elegant: 10, playful: 1, calm: 2, daily: 3, work: 6, special: 10, evening: 10, casual: 2, floral: 2, woody: 10, fresh: 1, oriental: 10, fruity: 1, subtle: 1, moderate: 4, strong: 10 }
  },
  {
    id: "haya",
    name: "Haya",
    collection: "Signature Editions",
    price: 52000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/haya.jpeg",
    scentNotes: {
      top: ["Floral", "Fruity"],
      heart: ["Green", "Musk"],
      base: ["Soft Woods", "Vanilla"],
    },
    description: "A celebration of life and beauty. Fresh, vibrant, and full of joy. For the joyful soul who celebrates life's beautiful moments.",
    extendedStory: "Haya, meaning 'life' in Arabic, is a celebration of everything beautiful about existence. This fragrance captures the joy of living, the beauty of small moments, the happiness found in simple pleasures. It's fresh and vibrant like a spring morning, playful like laughter with friends, comforting like a warm embrace. For those who choose joy every day, who see beauty everywhere, and who want their fragrance to reflect their positive spirit.",
    bestFor: ["Joyful, positive personalities", "Celebration occasions", "Spring and summer wear", "Those who love life"],
    longevity: "6-8 hours",
    projection: "Moderate",
    season: "Spring/Summer",
    occasion: "Celebrations, Daytime, Joyful Moments",
    weights: { oud: 0.15, amber: 0.35, floral: 0.75, gourmand: 0.5 },
    suitability: { bold: 5, elegant: 7, playful: 10, calm: 7, daily: 9, work: 7, special: 8, evening: 5, casual: 10, floral: 8, woody: 3, fresh: 9, oriental: 4, fruity: 9, subtle: 6, moderate: 8, strong: 4 }
  },
  {
    id: "leen",
    name: "Leen",
    collection: "Signature Editions",
    price: 51000,
    currency: "₦",
    availability: "In Stock",
    featured: false,
    image: "/images/products/leen.jpeg",
    scentNotes: {
      top: ["Soft Florals", "Vanilla"],
      heart: ["Musk", "Powder"],
      base: ["Creamy Woods", "Soft Amber"],
    },
    description: "A gentle fragrance that whispers of softness and grace. Delicate, beautiful, and utterly charming. For the gentle soul who embodies grace and softness.",
    extendedStory: "Leen, meaning 'tenderness' in Arabic, is the fragrance of gentle strength. This scent is like a soft caress, a gentle whisper, a tender moment. The powdery florals create a vintage elegance while the vanilla adds warmth and comfort. It's perfect for those who believe that strength doesn't have to be loud, that grace is more powerful than force, and that gentleness is not weakness but wisdom.",
    bestFor: ["Gentle, kind personalities", "Romantic occasions", "Those who love soft, powdery scents", "Vintage elegance lovers"],
    longevity: "6-8 hours",
    projection: "Light to Moderate",
    season: "Year-round",
    occasion: "Romantic, Daily, Intimate Settings",
    weights: { oud: 0.1, amber: 0.5, floral: 0.8, gourmand: 0.55 },
    suitability: { bold: 3, elegant: 9, playful: 6, calm: 9, daily: 8, work: 7, special: 8, evening: 7, casual: 8, floral: 9, woody: 3, fresh: 5, oriental: 5, fruity: 4, subtle: 9, moderate: 7, strong: 3 }
  },
  {
    id: "khadlaj",
    name: "KHADLAJ",
    collection: "Signature Editions",
    price: 69000,
    currency: "₦",
    availability: "Limited Edition",
    featured: true,
    image: "/images/products/KHADLAJ.jpeg",
    scentNotes: {
      top: ["Ancient Oud", "Spices"],
      heart: ["Amber", "Musk"],
      base: ["Rare Resins", "Woods"],
    },
    description: "An ancient fragrance with modern appeal. Timeless, mysterious, and utterly captivating. Inspired by ancient perfumery traditions, this fragrance tells a story of timeless beauty and mystery.",
    extendedStory: "KHADLAJ honors the ancient traditions of perfumery while embracing modern sensibilities. This fragrance is based on formulas that have been passed down through generations, refined and perfected over centuries. The ancient oud and rare resins connect you to the long history of perfumery art, while the modern composition techniques ensure it speaks to today's discerning wearer. It's a bridge between past and present, tradition and innovation, ancient wisdom and modern luxury.",
    bestFor: ["History and tradition enthusiasts", "Those who appreciate ancient arts", "Collectors of rare fragrances", "Sophisticated evening wear"],
    longevity: "10-14 hours",
    projection: "Strong",
    season: "Fall/Winter",
    occasion: "Evening, Cultural Events, Premium Occasions",
    weights: { oud: 0.92, amber: 0.8, floral: 0.15, gourmand: 0.3 },
    suitability: { bold: 9, elegant: 10, playful: 2, calm: 3, daily: 4, work: 5, special: 10, evening: 10, casual: 3, floral: 2, woody: 10, fresh: 1, oriental: 10, fruity: 1, subtle: 2, moderate: 5, strong: 10 }
  },
]

export function formatPrice(price: number, currency: string): string {
  return `${currency}${price.toLocaleString()}`
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}

export function getProductsByCollection(collection: string): Product[] {
  return PRODUCTS.filter(p => p.collection === collection)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.featured)
}

