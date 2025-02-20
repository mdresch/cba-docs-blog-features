"use client"

import { useState, useEffect } from "react"
import MainLayout from "../main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, BarChart, Shield, Zap, Users } from "lucide-react"
import { PageSkeleton } from "@/components/page-skeleton"

export default function SolutionsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PageSkeleton />
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative solutions can transform your business and drive growth.
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="w-6 h-6 mr-2 text-blue-500" />
                  Data Analytics Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Harness the power of your data with our advanced analytics platform. Gain actionable insights and make
                  data-driven decisions.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Real-time data processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Customizable dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Predictive analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-blue-500" />
                  Cybersecurity Suite
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Protect your business with our comprehensive cybersecurity solutions. Stay ahead of threats and ensure
                  data integrity.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Advanced threat detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    24/7 monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Compliance management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-yellow-500" />
                  Innovative Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay ahead of the curve with our cutting-edge solutions that leverage the latest technologies.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-purple-500" />
                  Expert Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team of experts is always ready to provide personalized support and guidance.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="w-6 h-6 mr-2 text-green-500" />
                  Scalable Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our solutions grow with your business, ensuring long-term success and adaptability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>TechCorp Innovations</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic text-gray-600">
                  "Implementing CBA's data analytics solution has revolutionized our decision-making process. We've seen
                  a 30% increase in operational efficiency."
                </blockquote>
                <p className="mt-4 font-semibold">John Doe, CTO</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Global Secure Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic text-gray-600">
                  "CBA's cybersecurity suite has given us peace of mind. We've successfully prevented numerous potential
                  breaches and improved our overall security posture."
                </blockquote>
                <p className="mt-4 font-semibold">Jane Smith, Head of IT Security</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our solutions can address your specific needs and drive your success.
          </p>
          <Button size="lg">Schedule a Consultation</Button>
        </section>
      </div>
    </MainLayout>
  )
}

