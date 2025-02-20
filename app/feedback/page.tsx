import MainLayout from "../main-layout"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FeedbackPage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Feedback</h1>
      <p className="mb-4">
        We value your feedback. Please let us know about your experience with our product or if you have any suggestions
        for improvement.
      </p>
      <form className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Your email" />
        </div>
        <div>
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea id="feedback" placeholder="Your feedback" rows={5} />
        </div>
        <Button type="submit">Submit Feedback</Button>
      </form>
    </MainLayout>
  )
}

