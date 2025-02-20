import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Zap, BarChart, Shield } from "lucide-react"

const features = [
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology to solve complex business challenges.",
    icon: Lightbulb,
  },
  {
    title: "Fast Performance",
    description: "Lightning-fast systems that keep your business running smoothly.",
    icon: Zap,
  },
  {
    title: "Data Analytics",
    description: "Powerful insights to drive informed decision-making.",
    icon: BarChart,
  },
  {
    title: "Robust Security",
    description: "State-of-the-art security measures to protect your valuable data.",
    icon: Shield,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Features</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover the powerful features that set us apart and drive your success.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

