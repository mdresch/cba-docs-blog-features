"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Dummy data for messages
const messages = [
  {
    id: 1,
    from: "JohnDoe",
    subject: "Welcome!",
    content: "Welcome to our community! Let me know if you have any questions.",
  },
  {
    id: 2,
    from: "JaneSmith",
    subject: "Collaboration opportunity",
    content: "Hi there! I have an idea for a project. Would you like to collaborate?",
  },
]

export function InboxContent() {
  const [recipient, setRecipient] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement message sending
    console.log("Sending message:", { recipient, subject, message })
    setRecipient("")
    setSubject("")
    setMessage("")
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
              Recipient
            </label>
            <Input id="recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Your Messages</h2>
        {messages.map((msg) => (
          <Card key={msg.id}>
            <CardHeader>
              <CardTitle>{msg.subject}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">From: {msg.from}</p>
              <p>{msg.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

