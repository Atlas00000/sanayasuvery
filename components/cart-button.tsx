"use client"

import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export function CartButton() {
  const { totalItems } = useCart()

  return (
    <Link href="/order">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2 rounded-full border-2 border-primary bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <ShoppingBag className="h-5 w-5" />
        <span>Cart</span>
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-lg"
          >
            {totalItems}
          </motion.span>
        )}
      </motion.button>
    </Link>
  )
}

