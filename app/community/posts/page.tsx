'use client'
import { useState, useEffect } from "react"
import MainLayout from "@/app/main-layout"
import { CommunityContent } from "@/components/community-content"
import { PageSkeleton } from "@/components/page-skeleton"

export default function CommunityPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <MainLayout>
      {isLoading ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PageSkeleton />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Posts</h1>
          <CommunityContent />
        </>
      )}
    </MainLayout>
  )
}