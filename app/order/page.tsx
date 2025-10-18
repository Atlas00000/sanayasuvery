"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Trash2, ShoppingBag, Package, CreditCard, User, MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingParticles } from "@/components/floating-particles"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/products-database"
import { BRAND_INFO } from "@/lib/constants"

export default function OrderPage() {
  const { items, removeFromCart, updateQuantity, updateSize, totalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  })

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send order notification
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          customerInfo,
          totalPrice,
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Show success message based on email configuration
        let message = `✅ Order ${result.orderNumber} placed successfully!\n\n`
        
        if (result.emailSent) {
          message += `📧 Order confirmation has been emailed to:\n- ${BRAND_INFO.contact.orderEmails.join("\n- ")}\n\nOur team will contact you shortly.\n\n`
        } else {
          message += `⚠️ Email system not configured yet.\n\n`
        }
        
        message += `Would you like to send your order details via WhatsApp for immediate confirmation?`
        
        const openWhatsApp = confirm(message)
        
        if (openWhatsApp && result.whatsappLink) {
          window.open(result.whatsappLink, "_blank")
        }
        
        clearCart()
        
        // Show thank you message
        setTimeout(() => {
          alert(`Thank you for your order!\n\nOrder Number: ${result.orderNumber}\n\nWe'll contact you at:\n📧 ${customerInfo.email}\n📱 ${customerInfo.phone}`)
        }, 500)
      } else {
        throw new Error(result.error || "Failed to submit order")
      }
    } catch (error) {
      console.error("Error submitting order:", error)
      alert(
        `⚠️ There was an issue submitting your order.\n\nPlease contact us directly:\n📱 WhatsApp: ${BRAND_INFO.contact.whatsapp}\n📧 Email: ${BRAND_INFO.contact.email}\n\nYour cart items have been saved.`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <main className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
        <FloatingParticles />
        
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <ShoppingBag className="mx-auto mb-6 h-24 w-24 text-muted-foreground" />
            <h1 className="mb-4 font-serif text-4xl font-bold text-foreground">Your Cart is Empty</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Discover your perfect scent by taking our survey
            </p>
            <Link href="/survey">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-soft rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-primary/50"
              >
                Take the Survey
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="relative z-10 px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 max-w-6xl"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 font-serif text-4xl font-bold text-foreground lg:text-5xl"
          >
            Your Order
          </motion.h1>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glow-soft rounded-3xl border-2 border-secondary bg-card p-6 shadow-lg"
              >
                <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
                  <Package className="h-6 w-6 text-accent" />
                  Cart Items ({items.length})
                </h2>

                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 rounded-2xl border-2 border-secondary bg-background p-4"
                    >
                      {/* Product Image */}
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-bold text-foreground">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.product.collection}</p>
                        <div className="mt-2 flex items-center gap-4">
                          <div className="text-sm font-semibold text-foreground">
                            Size: <span className="text-accent">{item.size}</span>
                          </div>
                          <div className="text-sm font-semibold text-foreground">
                            Qty: <span className="text-accent">{item.quantity}</span>
                          </div>
                        </div>
                      </div>

                      {/* Price & Actions */}
                      <div className="flex flex-col items-end justify-between">
                        <span className="font-serif text-xl font-bold text-primary">
                          {formatPrice(item.product.price * item.quantity, item.product.currency)}
                        </span>
                        <motion.button
                          onClick={() => removeFromCart(item.product.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Customer Information Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glow-soft rounded-3xl border-2 border-secondary bg-card p-6 shadow-lg"
              >
                <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
                  <User className="h-6 w-6 text-accent" />
                  Customer Information
                </h2>

                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full rounded-xl border-2 border-secondary bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground">Email *</label>
                      <input
                        type="email"
                        required
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        className="w-full rounded-xl border-2 border-secondary bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        className="w-full rounded-xl border-2 border-secondary bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Delivery Address *</label>
                    <textarea
                      required
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="w-full rounded-xl border-2 border-secondary bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                      rows={3}
                      placeholder="Street address, building number, etc."
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground">City *</label>
                      <input
                        type="text"
                        required
                        value={customerInfo.city}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                        className="w-full rounded-xl border-2 border-secondary bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                        placeholder="City"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground">State *</label>
                      <input
                        type="text"
                        required
                        value={customerInfo.state}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, state: e.target.value })}
                        className="w-full rounded-xl border-2 border-secondary bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glow-soft sticky top-8 rounded-3xl border-2 border-secondary bg-card p-6 shadow-lg"
              >
                <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
                  <CreditCard className="h-6 w-6 text-accent" />
                  Order Summary
                </h2>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.product.name} ({item.size}) × {item.quantity}
                      </span>
                      <span className="font-semibold text-foreground">
                        {formatPrice(item.product.price * item.quantity, item.product.currency)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="my-6 h-px bg-secondary" />

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold text-foreground">
                      {formatPrice(totalPrice, "₦")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-semibold text-foreground">Included</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-secondary" />

                <div className="flex justify-between">
                  <span className="font-serif text-xl font-bold text-foreground">Total</span>
                  <span className="font-serif text-3xl font-bold text-primary">
                    {formatPrice(totalPrice, "₦")}
                  </span>
                </div>

                <motion.button
                  type="submit"
                  onClick={handleSubmitOrder}
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="glow-soft mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <ShoppingBag className="h-5 w-5" />
                      </motion.div>
                      Processing Order...
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      Place Order
                    </>
                  )}
                </motion.button>

                <div className="mt-4 space-y-2 text-center">
                  <p className="text-xs text-muted-foreground">
                    By placing this order, you agree to our terms and conditions
                  </p>
                  <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
                    <p className="font-semibold text-foreground">Need help? Contact us:</p>
                    <div className="flex items-center gap-4">
                      <a 
                        href={`tel:${BRAND_INFO.contact.phone}`}
                        className="flex items-center gap-1 text-accent hover:underline"
                      >
                        <Phone className="h-3 w-3" />
                        {BRAND_INFO.contact.phone}
                      </a>
                      <a 
                        href={`https://wa.me/${BRAND_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-accent hover:underline"
                      >
                        <MessageCircle className="h-3 w-3" />
                        WhatsApp
                      </a>
                    </div>
                    <a 
                      href={`mailto:${BRAND_INFO.contact.email}`}
                      className="flex items-center gap-1 text-accent hover:underline"
                    >
                      <Mail className="h-3 w-3" />
                      {BRAND_INFO.contact.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

