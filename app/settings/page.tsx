"use client"

import { useState, useEffect } from "react"
import MainLayout from "../main-layout"
import { PageSkeleton } from "@/components/page-skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { user, updateUser } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSave = (section: string) => {
    // In a real application, you would send these changes to your backend
    toast({
      title: "Settings saved",
      description: `Your ${section} settings have been updated.`,
    })
  }

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
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <Tabs defaultValue="account">
          <TabsList className="mb-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue={user?.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button onClick={() => handleSave("account")}>Save Account Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Switch id="email-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <Switch id="push-notifications" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notification-frequency">Notification Frequency</Label>
                  <Select>
                    <SelectTrigger id="notification-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Digest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={() => handleSave("notifications")}>Save Notification Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize the look and feel of the application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select>
                    <SelectTrigger id="theme">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="compact-mode">Compact Mode</Label>
                  <Switch id="compact-mode" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="font-size">Font Size</Label>
                  <Select>
                    <SelectTrigger id="font-size">
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={() => handleSave("appearance")}>Save Appearance Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Manage your privacy preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="profile-visibility">Public Profile</Label>
                  <Switch id="profile-visibility" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="activity-visibility">Show Activity Status</Label>
                  <Switch id="activity-visibility" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="search-visibility">Appear in Search Results</Label>
                  <Switch id="search-visibility" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="data-usage">Data Usage and Analytics</Label>
                  <Select>
                    <SelectTrigger id="data-usage">
                      <SelectValue placeholder="Select data usage preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Usage</SelectItem>
                      <SelectItem value="limited">Limited Usage</SelectItem>
                      <SelectItem value="minimal">Minimal Usage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={() => handleSave("privacy")}>Save Privacy Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}

