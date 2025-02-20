import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Visionary leader with 20+ years of industry experience.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Tech innovator driving our cutting-edge solutions.",
  },
  {
    name: "Mike Johnson",
    role: "Head of Sales",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Sales expert with a track record of driving growth.",
  },
  {
    name: "Sarah Brown",
    role: "Lead Designer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Creative mind behind our user-centric designs.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">The talented individuals behind our success.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                />
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

