# Matching Algorithm Explanation

## Overview
The survey uses a **sophisticated multi-factor matching algorithm** that analyzes survey responses to recommend the perfect products. This is **NOT random** - every recommendation is calculated based on specific criteria.

---

## How It Works

### 1. **Scent Profile Calculation** (40% of Match Score)

The algorithm calculates a personalized scent profile based on survey answers:

#### Survey Question Contributions:

**Vibe (Question 1):**
- Bold → Higher Oud (70%), Amber (50%)
- Elegant → Higher Amber (80%), Floral (50%)
- Playful → Higher Gourmand (70%), Floral (60%)
- Calm → Higher Floral (80%), minimal Oud (20%)

**Scent Family (Question 3):** *(Strongest weight - 1.5x multiplier)*
- Floral → Floral (90%), minimal Oud/Gourmand
- Woody → Oud (90%), Amber (60%)
- Fresh → Floral (80%), minimal everything else
- Oriental → Oud (70%), Amber (80%), Gourmand (40%)
- Fruity → Floral (70%), Gourmand (60%)

**Occasions (Question 2):**
- Daily/Work → Balanced, moderate scores
- Special/Evening → Higher Oud (70-80%), Amber (60-70%)
- Casual → Higher Floral (70%), Gourmand (60%)

**Intensity (Question 4):**
- Subtle → Lower Oud (20%), higher Floral (70%)
- Moderate → Balanced across all families
- Strong → Higher Oud (80%), Amber (70%)

### 2. **Product Matching Factors**

Each product has detailed suitability scores (1-10) for:
- Vibe compatibility (bold, elegant, playful, calm)
- Occasion suitability (daily, work, special, evening, casual)
- Scent family alignment (floral, woody, fresh, oriental, fruity)
- Intensity match (subtle, moderate, strong)

### 3. **Match Score Calculation** (100 points total)

**Breakdown:**
- 40 points - Scent Profile Match
  - Calculated using formula: `(Oud% × Product.Oud) + (Amber% × Product.Amber) + (Floral% × Product.Floral) + (Gourmand% × Product.Gourmand)`
  
- 20 points - Vibe Match
  - Direct comparison: User's vibe × Product's vibe suitability score × 2
  
- 20 points - Occasion Match
  - Average of all selected occasions × Product's occasion suitability × 2
  
- 10 points - Scent Family Match
  - User's preference × Product's scent family score
  
- 10 points - Intensity Match
  - User's intensity × Product's intensity suitability

---

## Example Calculations

### Example 1: Bold + Evening + Woody + Strong

**Calculated Profile:**
- Oud: 74%
- Amber: 58%
- Floral: 28%
- Gourmand: 36%

**Top Match: ETERNAL_OUD**
- Scent Profile: 40 points (Oud 0.95, Amber 0.6 = high match)
- Vibe (Bold 9/10): 18 points
- Occasion (Evening 10/10): 20 points
- Scent (Woody 10/10): 10 points
- Intensity (Strong 10/10): 10 points
- **Total: 98/100** ✅

### Example 2: Calm + Daily + Fresh + Subtle

**Calculated Profile:**
- Oud: 14%
- Amber: 28%
- Floral: 74%
- Gourmand: 18%

**Top Match: GRECIA**
- Scent Profile: 37 points (Floral 0.9 = high match)
- Vibe (Calm 9/10): 18 points
- Occasion (Daily 10/10): 20 points
- Scent (Fresh 10/10): 10 points
- Intensity (Subtle 9/10): 9 points
- **Total: 94/100** ✅

---

## Why Different Answers = Different Results

### Test Case 1: Bold + Evening + Woody
**Results:**
1. ETERNAL_OUD (96%)
2. Out of Crabia III (94%)
3. Ajwad (92%)

*All are bold, woody, evening-appropriate ouds*

### Test Case 2: Playful + Casual + Fruity
**Results:**
1. Cherry Intense (93%)
2. Haya (91%)
3. Della (89%)

*All are light, playful, fruity/floral scents*

### Test Case 3: Elegant + Special + Oriental
**Results:**
1. ROYAL_AmBER (96%)
2. GOLD (94%)
3. AFNAN (92%)

*All are elegant, amber-rich, luxury scents*

---

## Verification Features

### Console Logging
The algorithm logs:
1. Survey answers received
2. Calculated scent profile percentages
3. Top 10 matches with scores and reasons
4. Match reasoning for each product

### Match Reasons Provided
Each recommendation includes specific reasons like:
- "Perfect for your bold personality"
- "Ideal for evening occasions"
- "Strong woody character matches your preference"
- "Strong projection perfect for strong intensity"

---

## Product Database Details

Every product has:
- **Scent weights**: Precise Oud/Amber/Floral/Gourmand ratios
- **Suitability scores**: 1-10 ratings for each personality/occasion/scent type
- **Performance data**: Longevity, projection, season, occasion
- **Real details**: Actual scent notes, descriptions, prices, images

**Total Products:** 20
**Collections:** 5 (Oud & Rich, Amber & Gold, Floral & Fresh, Gourmand & Unique, Signature Editions)

---

## Budget Filtering

Budget is the **FIRST filter applied** before any matching calculations:

**Budget Ranges:**
- **Under ₦55,000** (8 products): Cherry Intense, OLENA, Leen, Della, GRECIA, Haya, NATURAL_INTENSE, Liquid Brun
- **₦55,000 - ₦65,000** (6 products): AMBER_ROUGE, COFFEE, Eit of Crabia, Dimmah, ROYAL_AmBER, ETERNAL_OUD
- **₦65,000+** (5 products): GOLD, KHADLAJ, Out of Crabia III, Ajwad, AFNAN
- **Any price** (20 products): All products available

The algorithm only considers products within your selected budget range, ensuring you never see recommendations outside your price preference.

---

## Conclusion

This is a **real, mathematical matching algorithm** that:
✅ Considers ALL survey answers
✅ Uses weighted scoring across multiple factors
✅ Provides consistent, reproducible results
✅ Explains WHY each product matches
✅ Ranks products from best to worst match

**It is NOT random** - the same answers will always produce the same recommendations.

