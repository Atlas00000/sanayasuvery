import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProductNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-foreground">Product Not Found</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

