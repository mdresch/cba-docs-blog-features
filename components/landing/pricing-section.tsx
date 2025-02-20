import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Perfect for small businesses and startups",
    features: ["5 users", "10GB storage", "Basic support", "Limited analytics"],
  },
  {
    name: "Pro",
    price: "$29.99",
    description: "Ideal for growing businesses",
    features: ["20 users", "50GB storage", "Priority support", "Full analytics suite"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: ["Unlimited users", "Unlimited storage", "24/7 dedicated support", "Custom solutions"],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pricing Plans</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan for your business needs.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-sm text-gray-500">per month</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

