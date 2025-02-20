"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Ticket = {
  id: string
  subject: string
  category: string
  status: "open" | "in-progress" | "closed"
  createdAt: string
}

export function UserTicketSummary({ onSelectTicket }: { onSelectTicket: (ticketId: string) => void }) {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const { user } = useAuth()

  useEffect(() => {
    // In a real application, you would fetch the user's tickets from your backend
    const mockTickets: Ticket[] = [
      { id: "1", subject: "Login Issue", category: "Technical", status: "open", createdAt: "2023-06-01" },
      { id: "2", subject: "Billing Question", category: "Billing", status: "closed", createdAt: "2023-05-28" },
      { id: "3", subject: "Feature Suggestion", category: "Feature", status: "in-progress", createdAt: "2023-05-25" },
      { id: "4", subject: "Account Deletion Request", category: "Account", status: "open", createdAt: "2023-06-05" },
      { id: "5", subject: "Mobile App Bug", category: "Technical", status: "in-progress", createdAt: "2023-06-03" },
    ]
    setTickets(mockTickets)
  }, [])

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Your Support Tickets</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>{ticket.category}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    ticket.status === "open" ? "default" : ticket.status === "in-progress" ? "secondary" : "outline"
                  }
                >
                  {ticket.status}
                </Badge>
              </TableCell>
              <TableCell>{ticket.createdAt}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => onSelectTicket(ticket.id)}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

