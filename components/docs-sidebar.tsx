"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { getAllDocs } from "@/lib/docs"

export function DocsSidebar() {
  const [docs, setDocs] = useState([])
  const pathname = usePathname()

  useEffect(() => {
    getAllDocs().then(setDocs)
  }, [])

  return (
    <Sidebar className="w-64 border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docs.map((doc) => (
                <SidebarMenuItem key={doc.slug}>
                  <SidebarMenuButton asChild isActive={pathname === `/docs/${doc.slug}`}>
                    <Link href={`/docs/${doc.slug}`}>{doc.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

