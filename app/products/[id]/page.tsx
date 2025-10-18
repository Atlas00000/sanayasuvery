"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Clock, Zap, Sparkles, Heart, ShoppingBag, Share2, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingParticles } from "@/components/floating-particles"
import { CartButton } from "@/components/cart-button"
import { getProductById, formatPrice } from "@/lib/products-database"
import { useCart } from "@/lib/cart-context"
import { PRODUCT_SIZES } from "@/lib/constants"
import { notFound } from "next/navigation"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false)
  const [selectedSize, setSelectedSize] = useState("50ml")
  const [quantity, setQuantity] = useState(1)
  const [showAddedMessage, setShowAddedMessage] = useState(false)
  const router = useRouter()
  const { addToCart } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize)
    setShowAddedMessage(true)
    setTimeout(() => setShowAddedMessage(false), 3000)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize)
    router.push("/order")
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="relative z-10 px-4 py-8">
        {/* Header with Back Button and Cart */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 max-w-6xl"
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <CartButton />
          </div>
        </motion.div>

        {/* Product Content */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glow-soft relative aspect-square overflow-hidden rounded-3xl border-2 border-secondary bg-gradient-to-br from-[#f4e3d7] to-[#eac7c7] shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Badges */}
                {product.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute left-6 top-6 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-lg"
                  >
                    Featured
                  </motion.div>
                )}
                
                {product.availability === "Limited Edition" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="absolute right-6 top-6 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg"
                  >
                    Limited Edition
                  </motion.div>
                )}
              </div>

              {/* Additional Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 grid grid-cols-2 gap-4"
              >
                <div className="rounded-2xl border-2 border-secondary bg-card p-4 text-center">
                  <Clock className="mx-auto mb-2 h-6 w-6 text-accent" />
                  <p className="text-xs font-medium text-muted-foreground">Longevity</p>
                  <p className="mt-1 text-sm font-bold text-foreground">{product.longevity}</p>
                </div>
                <div className="rounded-2xl border-2 border-secondary bg-card p-4 text-center">
                  <Zap className="mx-auto mb-2 h-6 w-6 text-accent" />
                  <p className="text-xs font-medium text-muted-foreground">Projection</p>
                  <p className="mt-1 text-sm font-bold text-foreground">{product.projection}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Collection Badge */}
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {product.collection}
              </div>

              {/* Product Name */}
              <div>
                <h1 className="font-serif text-5xl font-bold text-foreground lg:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-2 font-script text-xl text-accent">by Sanaya's Scents</p>
              </div>

              {/* Price & Availability */}
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-foreground">
                  {formatPrice(product.price, product.currency)}
                </div>
                <div
                  className={`rounded-full px-4 py-1 text-sm font-semibold ${
                    product.availability === "In Stock"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {product.availability}
                </div>
              </div>

              {/* Description */}
              <div className="rounded-2xl border-2 border-secondary bg-card/50 p-6 backdrop-blur-sm">
                <p className="leading-relaxed text-muted-foreground">{product.description}</p>
              </div>

              {/* Scent Notes */}
              <div className="rounded-2xl border-2 border-secondary bg-card p-6">
                <h3 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-foreground">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Scent Notes
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">Top Notes</p>
                    <div className="flex flex-wrap gap-2">
                      {product.scentNotes.top.map((note, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 px-3 py-1 text-sm font-medium text-amber-900"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">Heart Notes</p>
                    <div className="flex flex-wrap gap-2">
                      {product.scentNotes.heart.map((note, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gradient-to-r from-pink-100 to-rose-100 px-3 py-1 text-sm font-medium text-rose-900"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">Base Notes</p>
                    <div className="flex flex-wrap gap-2">
                      {product.scentNotes.base.map((note, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 text-sm font-medium text-indigo-900"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border-2 border-secondary bg-card p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Season</p>
                  <p className="font-semibold text-foreground">{product.season}</p>
                </div>
                <div className="rounded-2xl border-2 border-secondary bg-card p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Occasion</p>
                  <p className="font-semibold text-foreground">{product.occasion}</p>
                </div>
              </div>

              {/* Best For */}
              <div className="rounded-2xl border-2 border-secondary bg-card p-6">
                <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-bold text-foreground">
                  <Heart className="h-5 w-5 text-accent" />
                  Best For
                </h3>
                <ul className="space-y-2">
                  {product.bestFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 text-accent">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Selection */}
              <div className="rounded-2xl border-2 border-secondary bg-card p-6">
                <h3 className="mb-3 font-serif text-lg font-bold text-foreground">Select Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {PRODUCT_SIZES.map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`rounded-xl border-2 px-4 py-3 font-semibold transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground shadow-lg"
                          : "border-secondary bg-card text-foreground hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="rounded-2xl border-2 border-secondary bg-card p-6">
                <h3 className="mb-3 font-serif text-lg font-bold text-foreground">Quantity</h3>
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-card text-xl font-bold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    −
                  </motion.button>
                  <div className="flex h-12 flex-1 items-center justify-center rounded-xl border-2 border-secondary bg-background px-6 text-xl font-bold text-foreground">
                    {quantity}
                  </div>
                  <motion.button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-card text-xl font-bold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              {/* Total Price */}
              <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-semibold text-foreground">Total</span>
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(product.price * quantity, product.currency)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  onClick={handleBuyNow}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glow-soft flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-primary/50"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Buy Now
                </motion.button>
                
                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-4 text-lg font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  {showAddedMessage ? (
                    <>
                      <Check className="h-5 w-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </motion.button>

                <div className="flex gap-3">
                  <Link href="/order" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      View Cart
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:bg-accent"
                  >
                    <Share2 className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Extended Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 rounded-3xl border-2 border-secondary bg-card/80 p-8 backdrop-blur-sm lg:p-12"
          >
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">The Story</h2>
            <p className="leading-relaxed text-muted-foreground">{product.extendedStory}</p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

