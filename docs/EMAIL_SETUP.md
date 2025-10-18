# Email Setup Instructions

## Current Implementation: FormSubmit.co (100% Free, Automated! ✅)

The order system now uses **FormSubmit.co** - a free email service that requires **ZERO setup**!

### How It Works:

1. Customer fills out order form
2. Clicks "Place Order"
3. **Email automatically sends** to both:
   - sanayascents@gmail.com
   - emilicelestine@gmail.com
4. Popup asks if they want to confirm via WhatsApp
5. Cart clears automatically

### First-Time Setup (One-Time Only):

**IMPORTANT:** FormSubmit requires email verification the FIRST time you use it.

1. **Place a test order** on your website
2. **Check both email inboxes** (sanayascents@gmail.com and emilicelestine@gmail.com)
3. **Click the activation link** in the FormSubmit verification email
4. **Done!** All future orders will be sent automatically

**Subject Line:** `New Order - SAN-1760717234567 - Customer Name`

**Email Contains:**
- Order number
- Complete product list with quantities and sizes  
- Total price
- Customer contact information (name, email, phone)
- Delivery address (street, city, state)
- Timestamp
- Beautiful HTML formatting with your brand colors

---

## For Production: Automated Email Sending (Optional)

If you want **fully automated** email sending (no customer action required), integrate an email service. Here's the recommended setup for Vercel:

### Option 1: Resend (Recommended ⭐)

**Why Resend?**
- Built for Next.js/Vercel
- Generous free tier (100 emails/day)
- Simple API
- Excellent deliverability

**Setup Steps:**

1. **Sign up:** https://resend.com/
2. **Get API key:** Resend Dashboard → API Keys
3. **Add to Vercel:**
   ```bash
   vercel env add RESEND_API_KEY
   # Paste your API key
   ```
   
4. **Update `/app/api/send-order/route.ts`:**
   - Uncomment the Resend code (lines 40-50)
   - Install: `npm install resend`

5. **Verify domain (optional but recommended):**
   - Add your domain in Resend
   - Change `from:` to `'orders@yourdomain.com'`

**Code to uncomment:**
```typescript
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'orders@sanayascents.com', // or 'onboarding@resend.dev' for testing
  to: BRAND_INFO.contact.orderEmails, // Sends to both sanayascents@gmail.com and emilicelestine@gmail.com
  subject: `New Order - ${orderNumber} - ${customerInfo.name}`,
  text: emailBody,
  html: emailBody.replace(/\n/g, '<br>').replace(/━/g, '─'),
})
```

**Note:** With Resend, both email addresses will receive the order notification automatically!

---

### Option 2: Gmail SMTP (Free)

Use your existing Gmail account:

1. **Install nodemailer:**
   ```bash
   npm install nodemailer
   ```

2. **Enable App Password:**
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Generate App Password for "Mail"

3. **Add to Vercel:**
   ```bash
   vercel env add GMAIL_USER
   # sanayascents@gmail.com
   
   vercel env add GMAIL_APP_PASSWORD
   # Your 16-character app password
   ```

4. **Update API route with Nodemailer code**

---

### Option 3: SendGrid (Free tier: 100 emails/day)

Similar to Resend but from Twilio:
- https://sendgrid.com/
- Free tier available
- More complex setup than Resend

---

## Current Contact Methods in App

The order page shows:
- 📞 **Phone/Call:** +2349132993582 (clickable `tel:` link)
- 💬 **WhatsApp:** +2349132993582 (clickable link with pre-filled message)
- 📧 **Email:** sanayascents@gmail.com (clickable `mailto:` link)

---

## Testing the Current System

1. Add products to cart
2. Go to order page
3. Fill out customer information
4. Click "Place Order"
5. **Your email client will open** with the order pre-filled
6. Send the email
7. Optionally open WhatsApp to confirm

**This works without any backend or API keys!** ✨

---

## Recommendation

**For MVP/Testing:** Keep current `mailto:` implementation
- ✅ Zero setup required
- ✅ No API keys needed
- ✅ No costs
- ✅ Works immediately

**For Production:** Add Resend integration
- ✅ Professional automated emails
- ✅ Email tracking and analytics
- ✅ Better customer experience
- ✅ Still serverless on Vercel (no backend needed)

---

*Current Contact Information:*
- **Phone/WhatsApp:** +2349132993582
- **Primary Email:** sanayascents@gmail.com
- **Order Notifications:** sanayascents@gmail.com, emilicelestine@gmail.com

**Note:** All order emails are sent to BOTH email addresses automatically.

