import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { BRAND_INFO } from "@/lib/constants"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { items, customerInfo, totalPrice } = await request.json()

    // Generate order number
    const orderNumber = `SAN-${Date.now()}`

    // Format order details
    const itemsList = items
      .map(
        (item: any) =>
          `${item.product.name} (${item.size}) x ${item.quantity} = ₦${(
            item.product.price * item.quantity
          ).toLocaleString()}`
      )
      .join("\n")

    // HTML email template
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #9b111e 0%, #c68fa8 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 32px; font-weight: 700; }
            .header p { margin: 10px 0 0; opacity: 0.95; font-size: 18px; }
            .order-number { background: rgba(255,255,255,0.2); display: inline-block; padding: 8px 20px; border-radius: 20px; margin-top: 15px; font-weight: 600; }
            .content { padding: 40px 30px; }
            .section { margin-bottom: 35px; }
            .section-title { font-size: 20px; font-weight: 700; color: #9b111e; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 3px solid #9b111e; }
            .item { background: #f9f9f9; padding: 20px; margin-bottom: 15px; border-radius: 12px; border-left: 4px solid #c68fa8; }
            .item-name { font-size: 18px; font-weight: 700; color: #333; margin-bottom: 8px; }
            .item-details { font-size: 14px; color: #666; margin-bottom: 5px; }
            .item-price { font-size: 16px; font-weight: 600; color: #9b111e; margin-top: 8px; }
            .total-box { background: linear-gradient(135deg, #9b111e 0%, #c68fa8 100%); color: white; padding: 25px; border-radius: 12px; text-align: right; margin-top: 25px; }
            .total-label { font-size: 16px; opacity: 0.9; margin-bottom: 5px; }
            .total-amount { font-size: 36px; font-weight: 700; }
            .info-grid { display: grid; gap: 12px; }
            .info-row { padding: 12px; background: #f9f9f9; border-radius: 8px; }
            .info-label { font-weight: 600; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .info-value { color: #333; font-size: 16px; }
            .action-box { background: #fff3cd; border: 2px solid #ffc107; border-radius: 12px; padding: 20px; margin-top: 30px; }
            .action-box strong { color: #333; font-size: 16px; }
            .action-box p { margin: 10px 0 0; color: #666; }
            .footer { background: #f9f9f9; padding: 25px 30px; text-align: center; color: #666; font-size: 13px; border-top: 1px solid #e0e0e0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌸 Sanaya's Scents</h1>
              <p>New Order Received</p>
              <div class="order-number">Order #${orderNumber}</div>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">📦 Order Details</div>
                ${items
                  .map(
                    (item: any) => `
                  <div class="item">
                    <div class="item-name">${item.product.name}</div>
                    <div class="item-details">Collection: ${item.product.collection}</div>
                    <div class="item-details">Size: ${item.size} • Quantity: ${item.quantity}</div>
                    <div class="item-price">₦${(item.product.price * item.quantity).toLocaleString()}</div>
                  </div>
                `
                  )
                  .join("")}
                <div class="total-box">
                  <div class="total-label">Total Amount</div>
                  <div class="total-amount">₦${totalPrice.toLocaleString()}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">👤 Customer Information</div>
                <div class="info-grid">
                  <div class="info-row">
                    <div class="info-label">Full Name</div>
                    <div class="info-value">${customerInfo.name}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Email</div>
                    <div class="info-value"><a href="mailto:${customerInfo.email}" style="color: #9b111e; text-decoration: none;">${customerInfo.email}</a></div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Phone</div>
                    <div class="info-value"><a href="tel:${customerInfo.phone}" style="color: #9b111e; text-decoration: none;">${customerInfo.phone}</a></div>
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">📍 Delivery Address</div>
                <div class="info-row">
                  <div class="info-value">${customerInfo.address}</div>
                  <div class="info-value" style="margin-top: 8px;">${customerInfo.city}, ${customerInfo.state}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">⏰ Order Timestamp</div>
                <div class="info-row">
                  <div class="info-value">${new Date().toLocaleString("en-NG", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}</div>
                </div>
              </div>

              <div class="action-box">
                <strong>⚡ Action Required</strong>
                <p>Please contact ${customerInfo.name} to confirm this order and arrange delivery.</p>
              </div>
            </div>

            <div class="footer">
              <p><strong>Sanaya's Scents</strong> • Luxury Fragrances, Powered by AI</p>
              <p style="margin-top: 8px;">
                📱 ${BRAND_INFO.contact.phone} • 
                📧 ${BRAND_INFO.contact.email}
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Plain text version
    const textBody = `
NEW ORDER RECEIVED - ${orderNumber}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 ORDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${itemsList}

TOTAL: ₦${totalPrice.toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 DELIVERY ADDRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${customerInfo.address}
${customerInfo.city}, ${customerInfo.state}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ ORDER TIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${new Date().toLocaleString("en-NG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ ACTION REQUIRED: Please contact the customer to confirm their order.
    `.trim()

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        // NOTE: Resend free tier only allows sending to emilicelestine@gmail.com (your verified email)
        // To send to multiple addresses, you need to verify a domain at resend.com/domains
        // For now, we'll send to your email, and you can forward to sanayascents@gmail.com
        
        const { data, error } = await resend.emails.send({
          from: "Sanaya's Scents <onboarding@resend.dev>",
          to: ["emilicelestine@gmail.com"], // Only verified email for free tier
          cc: [], // Would add sanayascents@gmail.com here after domain verification
          subject: `🌸 New Order - ${orderNumber} - ${customerInfo.name}`,
          text: textBody,
          html: htmlBody,
          reply_to: customerInfo.email,
        })

        if (error) {
          console.error("Resend error:", error)
          throw error
        }

        console.log("✅ Order email sent successfully via Resend to emilicelestine@gmail.com:", data)
        console.log("📝 Note: Set up Gmail forwarding to also receive at sanayascents@gmail.com")
      } catch (emailError) {
        console.error("Failed to send via Resend:", emailError)
        // Don't fail the entire request - WhatsApp is backup
      }
    } else {
      console.warn("⚠️ RESEND_API_KEY not set. Email not sent. Set up your API key at https://resend.com")
    }

    // Create WhatsApp message
    const whatsappMessage = `Hi! I just placed an order (${orderNumber}) on your website.\n\n📦 Order Details:\n${itemsList}\n\n💰 Total: ₦${totalPrice.toLocaleString()}\n\n📍 Delivery to:\n${customerInfo.address}\n${customerInfo.city}, ${customerInfo.state}\n\n👤 Contact: ${customerInfo.name}\n📧 ${customerInfo.email}\n📱 ${customerInfo.phone}`

    // Return success with order details
    return NextResponse.json({
      success: true,
      orderNumber,
      message: "Order received successfully",
      emailSent: !!process.env.RESEND_API_KEY,
      whatsappLink: `https://wa.me/${BRAND_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`,
    })
  } catch (error) {
    console.error("Error processing order:", error)
    return NextResponse.json(
      { success: false, error: "Failed to process order" },
      { status: 500 }
    )
  }
}
