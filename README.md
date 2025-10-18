# 🌸 Sanaya's Scents - AI-Powered Fragrance Matcher

> Luxury fragrances meet artificial intelligence. Discover your perfect scent through a personalized survey experience.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ✨ Overview

**Sanaya's Scents** is a sophisticated web application that uses AI-powered matching algorithms to recommend luxury fragrances based on user preferences. Built with Next.js 15 and deployed on Vercel, it provides a seamless e-commerce experience from discovery to purchase.

### Key Features

- 🎯 **AI-Powered Recommendations** - Smart matching algorithm analyzes 5 key factors
- 💎 **19 Luxury Fragrances** - Across 5 curated collections
- 🛒 **Complete E-Commerce** - Cart, checkout, and order management
- 📧 **Email Notifications** - Automated order confirmations via Resend
- 📱 **WhatsApp Integration** - Direct customer communication
- 🎨 **Beautiful Animations** - Smooth Framer Motion interactions
- 📱 **Fully Responsive** - Optimized for all devices

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or pnpm
- Resend API key (free tier available)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sanaya-scents.git
cd sanaya-scents

# Install dependencies
pnpm install

# Create environment file
cp .env.local.example .env.local

# Add your Resend API key to .env.local
# RESEND_API_KEY=re_your_api_key_here

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
pnpm build

# Test production build locally
pnpm start
```

---

## 📊 Tech Stack

### Frontend
- **Framework:** Next.js 15.2.4 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** React Context API
- **Storage:** Local Storage (cart persistence)

### Backend
- **API Routes:** Next.js Serverless Functions
- **Email Service:** Resend
- **Deployment:** Vercel

### Key Libraries
- `framer-motion` - Smooth animations
- `lucide-react` - Icon library
- `next/image` - Optimized images
- `resend` - Email delivery

---

## 📁 Project Structure

```
sanaya_survey/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   └── send-order/     # Order email handler
│   ├── products/[id]/      # Dynamic product pages
│   ├── order/              # Checkout page
│   ├── results/            # Recommendation results
│   ├── survey/             # Survey questions
│   └── page.tsx            # Homepage
├── components/              # React components
│   ├── cart-button.tsx
│   ├── profile-card.tsx
│   ├── question-card.tsx
│   └── recommendation-card.tsx
├── lib/                     # Core logic
│   ├── cart-context.tsx    # Cart state management
│   ├── products-database.ts # Product catalog
│   ├── matching-algorithm.ts # AI matching logic
│   └── constants.ts        # Brand configuration
├── public/
│   └── images/             # Product images
├── docs/                   # 📚 Documentation
└── .env.local              # Environment variables (git-ignored)
```

---

## 📚 Documentation

Comprehensive guides are available in the [`/docs`](./docs) folder:

### 🚀 Deployment
- **[Deployment Summary](./docs/DEPLOYMENT_SUMMARY.md)** - Quick deployment checklist
- **[Vercel Deployment Guide](./docs/VERCEL_DEPLOYMENT.md)** - Complete step-by-step deployment
- **[Security Checklist](./docs/SECURITY_CHECKLIST.md)** - Pre-deployment security verification

### 📧 Email Setup
- **[Resend Setup](./docs/RESEND_SETUP.md)** - Configure automated emails (5 min)
- **[Gmail Forwarding](./docs/GMAIL_FORWARDING_SETUP.md)** - Multi-inbox email delivery (2 min)
- **[Email Setup](./docs/EMAIL_SETUP.md)** - Email system overview

### 🧠 Algorithm
- **[Matching Algorithm Explained](./docs/MATCHING_ALGORITHM_EXPLAINED.md)** - How the AI matching works

### 📦 Product Data
- **[Products & Profiles](./docs/products_and_profiles.md)** - Product catalog reference
- **[Survey Brief](./docs/survey_brief.md)** - Original project requirements

---

## 🎨 Features in Detail

### Survey Experience
- 5 carefully crafted questions
- Personality, occasion, scent preference, intensity, budget
- Beautiful animations and transitions
- Progress tracking

### AI Matching Algorithm
- Multi-factor scoring (40% scent profile, 20% vibe, 20% occasion, 10% family, 10% intensity)
- Strict budget filtering
- Penalty system for poor matches
- Returns top 3 personalized recommendations

### Product Catalog
- **19 Premium Fragrances**
- **5 Collections:** Signature Editions, Oud & Rich, Amber & Gold, Floral & Fresh, Gourmand & Unique
- **Price Range:** ₦50,000 - ₦75,000
- Detailed scent notes, longevity, projection data

### E-Commerce Flow
1. Take survey or browse products
2. View personalized recommendations
3. Explore detailed product pages
4. Add to cart with size/quantity selection
5. Checkout with customer information
6. Automated email confirmation
7. Optional WhatsApp confirmation

---

## 🔐 Environment Variables

Create a `.env.local` file with:

```bash
RESEND_API_KEY=re_your_actual_key_here
```

Get your free API key at [resend.com/api-keys](https://resend.com/api-keys)

---

## 📈 Performance

### Bundle Sizes
```
Route                    Size        First Load JS
/                       9.88 kB      160 kB  ✅
/survey                 5.3 kB       152 kB  ✅  
/results                4.97 kB      153 kB  ✅
/products/[id]          3.41 kB      161 kB  ✅
/order                  3.84 kB      161 kB  ✅
```

**Industry Standard:** < 200 KB ✅  
**Sanaya's Scents:** 150-161 KB ⚡

### Optimization Features
- Automatic code splitting
- Image optimization (Next.js)
- Static page generation
- Tree shaking
- Gzip compression
- CDN delivery (Vercel)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/sanaya-scents)

Or manually:

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add `RESEND_API_KEY` environment variable
4. Deploy!

See [complete deployment guide](./docs/VERCEL_DEPLOYMENT.md) for detailed instructions.

---

## 🔒 Security

- ✅ API keys in environment variables (never committed)
- ✅ `.env.local` properly git-ignored
- ✅ HTTPS enforced (Vercel)
- ✅ Client-side code sanitized
- ✅ Server-side API routes for sensitive operations

See [Security Checklist](./docs/SECURITY_CHECKLIST.md) for details.

---

## 💰 Cost

### Free Tier (Perfect for Small Business)
- **Vercel:** Free (100 GB bandwidth, unlimited deployments)
- **Resend:** Free (3,000 emails/month, 100/day)
- **Total:** $0/month ✅

### Paid Tier (High Traffic)
- **Vercel Pro:** $20/month (1 TB bandwidth)
- **Resend Pro:** $20/month (50,000 emails/month)
- **Total:** ~$40/month

---

## 📞 Brand Information

- **Phone/WhatsApp:** +2349132993582
- **Email:** sanayascents@gmail.com
- **Order Notifications:** emilicelestine@gmail.com, sanayascents@gmail.com

---

## 🤝 Contributing

This is a private project for Sanaya's Scents. For inquiries, please contact the brand directly.

---

## 📄 License

Copyright © 2025 Sanaya's Scents. All rights reserved.

---

## 🎉 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Hosting platform
- [Resend](https://resend.com/) - Email service
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations

---

## 📧 Support

For technical support or inquiries:
- **Email:** sanayascents@gmail.com
- **WhatsApp:** +2349132993582

For deployment issues, see the [documentation](./docs) or contact Vercel support.

---

**Made with ❤️ for luxury fragrance lovers**

