import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About CBA</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 lg:mx-auto">
            Empowering businesses with innovative solutions since 2010.
          </p>
        </div>
        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Our Mission</h3>
              <p className="mt-3 text-lg text-gray-500">
                At CBA, we're on a mission to revolutionize the way businesses operate. We believe in harnessing the
                power of technology to create efficient, scalable, and user-friendly solutions that drive growth and
                success for our clients.
              </p>
              <div className="mt-10">
                <Button asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="mx-auto rounded-lg shadow-lg"
                src="/placeholder.svg?height=400&width=600"
                alt="CBA office"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

