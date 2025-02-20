"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export function TicketForm() {
  const [subject, setSubject] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const { user } = useAuth()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Submitting ticket:", { subject, category, description })
    toast({
      title: "Ticket Submitted",
      description: "Your support ticket has been successfully submitted.",
    })
    setSubject("")
    setCategory("")
    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory} required>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technical">Technical Issue</SelectItem>
            <SelectItem value="billing">Billing</SelectItem>
            <SelectItem value="account">Account</SelectItem>
            <SelectItem value="feature">Feature Request</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={5}
        />
      </div>
      <Button type="submit">Submit Ticket</Button>
    </form>
  )
}

