"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { Product } from "./products-database"

export type CartItem = {
  product: Product
  quantity: number
  size: string // e.g., "50ml", "100ml"
}

type CartContextType = {
  items: CartItem[]
  addToCart: (product: Product, quantity: number, size: string) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  updateSize: (productId: string, size: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("sanaya_cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error loading cart:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sanaya_cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product, quantity: number, size: string) => {
    setItems((current) => {
      // Check if product with same size already exists
      const existingIndex = current.findIndex(
        (item) => item.product.id === product.id && item.size === size
      )

      if (existingIndex >= 0) {
        // Update quantity
        const updated = [...current]
        updated[existingIndex].quantity += quantity
        return updated
      } else {
        // Add new item
        return [...current, { product, quantity, size }]
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((current) => current.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    )
  }

  const updateSize = (productId: string, size: string) => {
    setItems((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, size } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSize,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

