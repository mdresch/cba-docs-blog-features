"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

export default function SignIn() {
  const { signIn } = useAuth()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signIn()
    router.push("/")
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-6 shadow-md">
        <h2 className="text-center text-3xl font-bold">Sign In</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <div className="flex items-center justify-between">
            <Link href="/auth/reset-password" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="font-medium text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

