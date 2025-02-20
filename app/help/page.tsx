"use client"

import { useState, useEffect } from "react"
import MainLayout from "../main-layout"
import { PageSkeleton } from "@/components/page-skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  const [isLoading, setIsLoading] = useState(true)

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
        <h1 className="text-3xl font-bold mb-6">Help Center</h1>
        <Tabs defaultValue="general">
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="sidebar">Sidebar</TabsTrigger>
            <TabsTrigger value="auth">Authentication</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Help</CardTitle>
                <CardDescription>Get started with our application</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I navigate the application?</AccordionTrigger>
                    <AccordionContent>
                      You can use the sidebar on the left to navigate between different sections of the application. The
                      top header also contains breadcrumbs for easy navigation within sections.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What features are available?</AccordionTrigger>
                    <AccordionContent>
                      Our application offers a range of features including a dashboard, community forums, documentation,
                      and personalized settings. Explore the sidebar to discover all available features.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sidebar">
            <Card>
              <CardHeader>
                <CardTitle>Sidebar Integration</CardTitle>
                <CardDescription>Learn how the sidebar integrates with different pages</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How does the sidebar work?</AccordionTrigger>
                    <AccordionContent>
                      The sidebar is a collapsible navigation menu that provides quick access to different sections of
                      the application. It can be toggled using the menu icon in the top-left corner.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What changes in the sidebar when I'm logged in?</AccordionTrigger>
                    <AccordionContent>
                      When you're logged in, additional options appear in the sidebar, such as access to your dashboard,
                      account settings, and community features.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="auth">
            <Card>
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>Learn about signing up, signing in, and managing your account</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I sign up?</AccordionTrigger>
                    <AccordionContent>
                      To sign up, click the "Sign Up" button in the top-right corner of the page. Fill out the
                      registration form with your details and submit. You'll receive a confirmation email to verify your
                      account.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I sign in?</AccordionTrigger>
                    <AccordionContent>
                      To sign in, click the "Sign In" button in the top-right corner of the page. Enter your email and
                      password, then click "Sign In". If you've forgotten your password, use the "Forgot Password" link
                      on the sign-in page.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Learn how to customize your experience</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Where can I find my account settings?</AccordionTrigger>
                    <AccordionContent>
                      Once logged in, you can access your account settings by clicking on the "Settings" option in the
                      sidebar. Here you can update your profile, change your password, and manage notification
                      preferences.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I customize the application's appearance?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can customize the application's appearance in the settings. We offer light and dark
                      modes, as well as options to adjust the sidebar behavior and other UI elements.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}

