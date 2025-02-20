'use client'
import {
  Home,
  Settings,
  User,
  FileText,
  MessageSquare,
  HelpCircle,
  LayoutDashboard,
  Book,
  Users,
  Trophy,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = {
  public: [
    { icon: Home, label: "Home", href: "/" },
    { icon: Lightbulb, label: "Solutions", href: "/solutions" },
    { icon: HelpCircle, label: "Help", href: "/help" },
    { icon: Users, label: "Community", href: "/community" },
  ],
  dashboard: [{ icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" }],
  content: [
    { icon: FileText, label: "Blog", href: "/posts" },
    { icon: MessageSquare, label: "Forum", href: "/forum" },
    { icon: Book, label: "Documentation", href: "/docs" },
  ],
  community: [
    { icon: MessageSquare, label: "Posts", href: "/community/posts" },
    { icon: User, label: "Profile", href: "/community/profile" },
    { icon: MessageSquare, label: "Inbox", href: "/community/inbox" },
    { icon: Trophy, label: "Leaderboard", href: "/community/leaderboard" },
  ],
  account: [{ icon: User, label: "Account", href: "/account" }],
  support: [
    { icon: HelpCircle, label: "Support", href: "/support" },
    { icon: MessageSquare, label: "Feedback", href: "/feedback" },
  ],
}

export function AppSidebar() {
  const { isSignedIn } = useAuth()

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="flex flex-col flex-grow">
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.public.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="w-4 h-4 mr-2" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.dashboard.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href}>
                          <item.icon className="w-4 h-4 mr-2" />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Content</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.content.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href}>
                          <item.icon className="w-4 h-4 mr-2" />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Community</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.community.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href}>
                          <item.icon className="w-4 h-4 mr-2" />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>User</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.account.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href}>
                          <item.icon className="w-4 h-4 mr-2" />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
        

        <div className="flex-grow" />

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.support.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="w-4 h-4 mr-2" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/settings">
                  <Settings className="w-4 h-4 mr-2" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}

