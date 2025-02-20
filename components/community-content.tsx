"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/lib/auth-context"
import { PostList } from "@/components/post-list"

export function CommunityContent() {
  const { isSignedIn } = useAuth()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement post submission
    console.log("Submitting post:", { title, content })
    setTitle("")
    setContent("")
  }

  return (
    <div className="space-y-8">
      {isSignedIn && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <Button type="submit">Submit Post</Button>
          </form>
        </div>
      )}
      <PostList />
    </div>
  )
}

