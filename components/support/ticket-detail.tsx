"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"

type Message = {
  id: string
  sender: "user" | "support"
  content: string
  timestamp: string
}

type TicketDetail = {
  id: string
  subject: string
  category: string
  status: "open" | "in-progress" | "closed"
  createdAt: string
  messages: Message[]
}

const mockTickets: Record<string, TicketDetail> = {
  "1": {
    id: "1",
    subject: "Login Issue",
    category: "Technical",
    status: "open",
    createdAt: "2023-06-01",
    messages: [
      {
        id: "1",
        sender: "user",
        content: "I'm having trouble logging into my account. Can you help?",
        timestamp: "2023-06-01 10:00:00",
      },
      {
        id: "2",
        sender: "support",
        content: "Can you please provide more details about the issue you're experiencing?",
        timestamp: "2023-06-01 10:15:00",
      },
      {
        id: "3",
        sender: "user",
        content: "When I enter my username and password, I get an 'Invalid credentials' error.",
        timestamp: "2023-06-01 10:30:00",
      },
    ],
  },
  "2": {
    id: "2",
    subject: "Billing Question",
    category: "Billing",
    status: "closed",
    createdAt: "2023-05-28",
    messages: [
      {
        id: "1",
        sender: "user",
        content: "I was charged twice for my last subscription payment. Can you help me resolve this?",
        timestamp: "2023-05-28 14:00:00",
      },
      {
        id: "2",
        sender: "support",
        content:
          "I apologize for the inconvenience. Let me look into this for you. Can you provide the transaction dates and amounts?",
        timestamp: "2023-05-28 14:30:00",
      },
      {
        id: "3",
        sender: "user",
        content: "The transactions were on May 25th and 26th, both for $29.99.",
        timestamp: "2023-05-28 14:45:00",
      },
      {
        id: "4",
        sender: "support",
        content:
          "Thank you for providing that information. I've identified the duplicate charge and have initiated a refund for the extra payment. You should see the refund in your account within 3-5 business days. Is there anything else I can help you with?",
        timestamp: "2023-05-28 15:15:00",
      },
      {
        id: "5",
        sender: "user",
        content: "No, that's all. Thank you for your help!",
        timestamp: "2023-05-28 15:30:00",
      },
      {
        id: "6",
        sender: "support",
        content:
          "You're welcome! I'm glad I could assist you. I'll go ahead and close this ticket. If you need any further assistance, please don't hesitate to open a new ticket.",
        timestamp: "2023-05-28 15:45:00",
      },
    ],
  },
  "3": {
    id: "3",
    subject: "Feature Suggestion",
    category: "Feature",
    status: "in-progress",
    createdAt: "2023-05-25",
    messages: [
      {
        id: "1",
        sender: "user",
        content: "I have a suggestion for a new feature. Would it be possible to add a dark mode to the application?",
        timestamp: "2023-05-25 09:00:00",
      },
      {
        id: "2",
        sender: "support",
        content:
          "Thank you for your suggestion! We always appreciate user feedback. I'll forward this to our product team for consideration. Is there any specific reason you're requesting this feature?",
        timestamp: "2023-05-25 09:30:00",
      },
      {
        id: "3",
        sender: "user",
        content: "Yes, I often work late at night and a dark mode would be easier on my eyes.",
        timestamp: "2023-05-25 10:00:00",
      },
      {
        id: "4",
        sender: "support",
        content:
          "That's great feedback, thank you. I've passed this along to our product team and they're actually considering implementing this in our next update. We'll keep you posted on the progress!",
        timestamp: "2023-05-26 11:00:00",
      },
    ],
  },
}

export function TicketDetail({ ticketId, onBack }: { ticketId: string; onBack: () => void }) {
  const [ticket, setTicket] = useState<TicketDetail | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const { user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    // In a real application, you would fetch the ticket details from your backend
    setTicket(mockTickets[ticketId] || null)
  }, [ticketId])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // In a real application, you would send this message to your backend
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: newMessage,
      timestamp: new Date().toISOString(),
    }

    setTicket((prevTicket) => {
      if (!prevTicket) return null
      return {
        ...prevTicket,
        messages: [...prevTicket.messages, newMsg],
      }
    })

    setNewMessage("")
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the support team.",
    })
  }

  if (!ticket) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-4">
      <Button onClick={onBack} variant="outline">
        Back to Tickets
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>{ticket.subject}</CardTitle>
          <CardDescription>
            Category: {ticket.category} | Status:{" "}
            <Badge
              variant={ticket.status === "open" ? "default" : ticket.status === "in-progress" ? "secondary" : "outline"}
            >
              {ticket.status}
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ticket.messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-start space-x-2 max-w-[70%]`}>
                  <Avatar>
                    <AvatarFallback>{message.sender === "user" ? "U" : "S"}</AvatarFallback>
                  </Avatar>
                  <div className="bg-secondary p-3 rounded-lg">
                    <div className="text-sm">{message.content}</div>
                    <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <Textarea
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button onClick={handleSendMessage}>Send Message</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

