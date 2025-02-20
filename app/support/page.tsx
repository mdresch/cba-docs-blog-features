"use client"

import { useState, useEffect } from "react"
import MainLayout from "../main-layout"
import { PageSkeleton } from "@/components/page-skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TicketForm } from "@/components/support/ticket-form"
import { UserTicketSummary } from "@/components/support/user-ticket-summary"
import { TicketDetail } from "@/components/support/ticket-detail"
import { AdminTicketOverview } from "@/components/support/admin-ticket-overview"
import { useAuth } from "@/lib/auth-context"

export default function SupportPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <PageSkeleton />
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Support</h1>
        <Tabs defaultValue="faq">
          <TabsList className="mb-4">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
            {user?.role === "admin" && <TabsTrigger value="admin">Admin Overview</TabsTrigger>}
          </TabsList>
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                    <AccordionContent>
                      To reset your password, go to the login page and click on the "Forgot Password" link. Follow the
                      instructions sent to your email to create a new password.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept major credit cards (Visa, MasterCard, American Express) and PayPal for all transactions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How can I upgrade my account?</AccordionTrigger>
                    <AccordionContent>
                      To upgrade your account, go to your Account Settings and select the "Upgrade" option. Choose your
                      desired plan and follow the prompts to complete the upgrade process.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we have mobile apps available for both iOS and Android devices. You can download them from
                      the App Store or Google Play Store.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>Submit a new support request or view your existing tickets</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedTicketId ? (
                  <TicketDetail ticketId={selectedTicketId} onBack={() => setSelectedTicketId(null)} />
                ) : (
                  <Tabs defaultValue="new-ticket">
                    <TabsList>
                      <TabsTrigger value="new-ticket">New Ticket</TabsTrigger>
                      <TabsTrigger value="my-tickets">My Tickets</TabsTrigger>
                    </TabsList>
                    <TabsContent value="new-ticket">
                      <TicketForm />
                    </TabsContent>
                    <TabsContent value="my-tickets">
                      <UserTicketSummary onSelectTicket={setSelectedTicketId} />
                    </TabsContent>
                  </Tabs>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          {user?.role === "admin" && (
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Ticket Overview</CardTitle>
                  <CardDescription>Manage and respond to all support tickets</CardDescription>
                </CardHeader>
                <CardContent>
                  <AdminTicketOverview />
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </MainLayout>
  )
}

