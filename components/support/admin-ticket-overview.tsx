"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Ticket = {
  id: string
  subject: string
  category: string
  status: "open" | "in-progress" | "closed"
  createdAt: string
  user: string
}

export function AdminTicketOverview() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const { user } = useAuth()

  useEffect(() => {
    // In a real application, you would fetch all tickets from your backend
    const mockTickets: Ticket[] = [
      {
        id: "1",
        subject: "Login Issue",
        category: "Technical",
        status: "open",
        createdAt: "2023-06-01",
        user: "john@example.com",
      },
      {
        id: "2",
        subject: "Billing Question",
        category: "Billing",
        status: "closed",
        createdAt: "2023-05-28",
        user: "jane@example.com",
      },
      {
        id: "3",
        subject: "Feature Suggestion",
        category: "Feature",
        status: "in-progress",
        createdAt: "2023-05-25",
        user: "bob@example.com",
      },
      {
        id: "4",
        subject: "Account Deletion",
        category: "Account",
        status: "open",
        createdAt: "2023-06-02",
        user: "alice@example.com",
      },
    ]
    setTickets(mockTickets)
  }, [])

  const handleStatusChange = (ticketId: string, newStatus: string) => {
    // In a real application, you would update the ticket status in your backend
    setTickets(
      tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus as "open" | "in-progress" | "closed" } : ticket,
      ),
    )
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">All Support Tickets</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Actions</TableHead>
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
              <TableCell>{ticket.user}</TableCell>
              <TableCell>
                <Select value={ticket.status} onValueChange={(value) => handleStatusChange(ticket.id, value)}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Change status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

