'use client'
import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AuthProvider } from "@/lib/auth-context"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

//export const metadata = {
//  title: "Collapsible Sidebar Layout",
//  description: "A Next.js app with a collapsible sidebar",
//    generator: 'v0.dev'
//}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'