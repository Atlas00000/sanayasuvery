import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display, Dancing_Script } from "next/font/google"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "Sanaya's Scents - Discover Your Perfect Fragrance",
  description: "Luxury Fragrances, Powered by AI. Take our scent discovery survey to find your perfect match.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
