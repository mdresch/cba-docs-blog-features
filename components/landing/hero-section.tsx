import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/placeholder.svg?height=600&width=1200"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Welcome to CBA</h1>
        <p className="mt-6 max-w-3xl text-xl">
          Empowering your business with cutting-edge solutions. Discover how we can transform your operations and drive
          growth.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Button asChild ariaLabel="Sign up for an account">
            <Link href="/auth/signup">Get Started</Link>
          </Button>
          <Button variant="secondary" asChild ariaLabel="See our features">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

