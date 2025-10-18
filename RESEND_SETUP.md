# ⚡ Resend Setup Guide (5 Minutes)

## What is Resend?
The **industry-standard email service** for Next.js apps. Used by thousands of companies.

**Benefits:**
- ✅ 100 emails/day FREE (3,000/month)
- ✅ Professional email delivery
- ✅ Won't go to spam
- ✅ Beautiful dashboard
- ✅ Perfect for Vercel
- ✅ No credit card required

---

## Setup Steps

### Step 1: Sign Up (1 minute)
1. Go to: **https://resend.com/signup**
2. Sign up with your email
3. Verify your email

### Step 2: Get API Key (30 seconds)
1. Go to: **https://resend.com/api-keys**
2. Click **"Create API Key"**
3. Name it: `Sanaya Scents Production`
4. Click **"Add"**
5. **Copy the API key** (starts with `re_`)
   - ⚠️ Save it somewhere! You'll only see it once

### Step 3: Add to Your Project (1 minute)

**Create `.env.local` file** in your project root:

```bash
cd /Users/celestineemili/Desktop/Code\ Root/sanaya_survey
touch .env.local
```

**Add this line to `.env.local`:**
```
RESEND_API_KEY=re_your_actual_key_here
```

Replace `re_your_actual_key_here` with the key you copied!

### Step 4: Restart Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Step 5: Test It!

1. Go to your website
2. Add a product to cart
3. Go to order page
4. Fill out the form
5. Click "Place Order"
6. **Check both email inboxes!** ✉️
   - sanayascents@gmail.com
   - emilicelestine@gmail.com

---

## Expected Result

Both emails will receive a **beautiful HTML email** like this:

**Subject:** `New Order - SAN-1760717234567 - Customer Name`

**Email includes:**
- 🌸 Branded header with your colors
- 📦 Formatted product list with images
- 💰 Total price calculation
- 👤 Customer contact info (clickable phone/email)
- 📍 Delivery address
- ⏰ Timestamp
- ⚡ Action prompt to contact customer

---

## Verification

After setup, you should see in your **terminal logs**:
```
✅ Order email sent successfully via Resend: { id: 'abc123...' }
```

If you see:
```
⚠️ RESEND_API_KEY not set
```
→ You forgot to add the API key or restart the server!

---

## For Production Deployment (Vercel)

When you deploy to Vercel:

1. Go to your Vercel project settings
2. Navigate to: **Environment Variables**
3. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_your_api_key_here`
   - **Environment:** All (Production, Preview, Development)
4. Redeploy

Done! Emails will work in production.

---

## Using a Custom Domain (Optional)

**Free Tier:** Use `onboarding@resend.dev` (already configured)

**With Domain:** 
1. Go to Resend dashboard
2. Add your domain (e.g., sanayascents.com)
3. Add DNS records (Resend provides them)
4. Update code: Change `from:` to `"Sanaya's Scents <orders@sanayascents.com>"`

---

## Troubleshooting

**Emails not arriving?**
1. Check Resend dashboard logs
2. Verify API key is correct
3. Check spam folders
4. Make sure you restarted dev server after adding `.env.local`

**Getting errors?**
1. Make sure Resend package is installed: `pnpm add resend`
2. Verify `.env.local` exists in project root
3. API key should start with `re_`
4. No quotes around the key in `.env.local`

---

## Current Status

✅ Resend package installed  
⏳ Waiting for API key  
⏳ Waiting for `.env.local` file

**Once you complete Step 3 above, emails will work instantly!**

---

**Quick Links:**
- Sign up: https://resend.com/signup
- API Keys: https://resend.com/api-keys
- Docs: https://resend.com/docs
- Dashboard: https://resend.com/emails

