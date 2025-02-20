import type React from "react"
import { Header } from "@/components/header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { Footer } from "@/components/footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="min-h-full p-4">{children}</div>
          <Footer />
        </main>
      </SidebarInset>
    </div>
  )
}

