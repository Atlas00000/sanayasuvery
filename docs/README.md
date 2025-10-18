# 📚 Sanaya's Scents - Documentation

Complete documentation for deployment, configuration, and understanding the application.

---

## 🚀 Deployment Guides

### Quick Start
- **[Deployment Summary](./DEPLOYMENT_SUMMARY.md)** ⭐ START HERE
  - Quick overview and checklist
  - Build statistics
  - Environment variables needed
  - Post-deployment testing

### Detailed Guides
- **[Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)** 
  - Complete step-by-step deployment to Vercel
  - GitHub integration
  - Custom domain setup
  - Continuous deployment

- **[Security Checklist](./SECURITY_CHECKLIST.md)** 🔒
  - Pre-deployment security verification
  - Protected files
  - API key management
  - Best practices

---

## 📧 Email Configuration

### Setup Guides
- **[Resend Setup](./RESEND_SETUP.md)** ⚡ RECOMMENDED
  - 5-minute setup guide
  - Free API key registration
  - Environment variable configuration
  - Beautiful HTML email templates

- **[Gmail Forwarding Setup](./GMAIL_FORWARDING_SETUP.md)**
  - 2-minute auto-forwarding setup
  - Receive emails in multiple inboxes
  - Filter configuration
  - Alternative to domain verification

### Legacy Guides
- **[Email Setup](./EMAIL_SETUP.md)** 
  - FormSubmit.co setup (deprecated)
  - Original email implementation
  - Kept for reference only

- **[Quick Email Activation](./QUICK_EMAIL_ACTIVATION.md)**
  - FormSubmit.co activation guide (deprecated)
  - Use Resend instead

---

## 🧠 Technical Documentation

### Algorithm & Logic
- **[Matching Algorithm Explained](./MATCHING_ALGORITHM_EXPLAINED.md)**
  - How the AI matching works
  - Scoring system breakdown
  - Budget filtering logic
  - Penalty system
  - Example calculations

---

## 📦 Product & Content Data

### Reference Materials
- **[Products & Profiles](./products_and_profiles.md)**
  - Complete product catalog
  - All 19 fragrances
  - Detailed scent profiles
  - Collection information
  - Price list

- **[Survey Brief](./survey_brief.md)**
  - Original project requirements
  - Survey question rationale
  - Design specifications
  - Feature requests

---

## 🎯 Quick Reference

### For First-Time Setup
1. Read **[Deployment Summary](./DEPLOYMENT_SUMMARY.md)**
2. Follow **[Resend Setup](./RESEND_SETUP.md)**
3. Deploy using **[Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)**
4. Verify with **[Security Checklist](./SECURITY_CHECKLIST.md)**

### For Email Configuration
1. Setup: **[Resend Setup](./RESEND_SETUP.md)** (5 min)
2. Multi-inbox: **[Gmail Forwarding](./GMAIL_FORWARDING_SETUP.md)** (2 min)
3. Test: Place an order and check emails

### For Understanding the Code
1. **[Matching Algorithm Explained](./MATCHING_ALGORITHM_EXPLAINED.md)** - Core logic
2. **[Products & Profiles](./products_and_profiles.md)** - Product data structure
3. See source code in `/lib` folder

---

## 📋 Documentation Map

```
docs/
├── README.md (this file)
│
├── 🚀 DEPLOYMENT
│   ├── DEPLOYMENT_SUMMARY.md          ⭐ Start here
│   ├── VERCEL_DEPLOYMENT.md           📘 Complete guide
│   └── SECURITY_CHECKLIST.md          🔒 Security verification
│
├── 📧 EMAIL SETUP
│   ├── RESEND_SETUP.md                ⚡ Current method
│   ├── GMAIL_FORWARDING_SETUP.md      📬 Multi-inbox
│   ├── EMAIL_SETUP.md                 📝 Legacy (FormSubmit)
│   └── QUICK_EMAIL_ACTIVATION.md      📝 Legacy (FormSubmit)
│
├── 🧠 TECHNICAL
│   └── MATCHING_ALGORITHM_EXPLAINED.md
│
└── 📦 REFERENCE
    ├── products_and_profiles.md
    └── survey_brief.md
```

---

## 🔍 Find What You Need

### "How do I deploy?"
→ **[Deployment Summary](./DEPLOYMENT_SUMMARY.md)** → **[Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)**

### "How do I set up emails?"
→ **[Resend Setup](./RESEND_SETUP.md)** → **[Gmail Forwarding](./GMAIL_FORWARDING_SETUP.md)**

### "Is my app secure?"
→ **[Security Checklist](./SECURITY_CHECKLIST.md)**

### "How does the matching work?"
→ **[Matching Algorithm Explained](./MATCHING_ALGORITHM_EXPLAINED.md)**

### "What products are available?"
→ **[Products & Profiles](./products_and_profiles.md)**

---

## 💡 Pro Tips

### For Deployment
- Always run `pnpm build` locally before deploying
- Add `RESEND_API_KEY` to Vercel environment variables
- Use **[Security Checklist](./SECURITY_CHECKLIST.md)** to verify no secrets are committed

### For Email Setup
- Use **Resend** (modern, reliable)
- Set up **Gmail forwarding** to receive emails in both inboxes
- Test with a real order after deployment

### For Development
- Read **[Matching Algorithm](./MATCHING_ALGORITHM_EXPLAINED.md)** to understand recommendations
- Check **[Products & Profiles](./products_and_profiles.md)** for product data structure
- Use `.env.local.example` as template for environment variables

---

## 📞 Need Help?

- **Deployment Issues:** Check Vercel build logs, verify environment variables
- **Email Issues:** See [Resend Setup](./RESEND_SETUP.md) and [Gmail Forwarding](./GMAIL_FORWARDING_SETUP.md)
- **Security Concerns:** Review [Security Checklist](./SECURITY_CHECKLIST.md)
- **Technical Questions:** Contact sanayascents@gmail.com

---

**All documentation is kept up-to-date with the latest deployment.**

Last updated: October 2025

