"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Badge = "New Member" | "First Post" | "10 Posts" | "Top Contributor"

type User = {
  id: string
  name: string
  email: string
  badges: Badge[]
  points: number
  role: "user" | "admin"
}

type AuthContextType = {
  isSignedIn: boolean
  user: User | null
  signIn: () => void
  signOut: () => void
  addBadge: (badge: Badge) => void
  addPoints: (points: number) => void
  updateUser: (updates: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Simulating user data fetch on mount
    if (isSignedIn && !user) {
      setUser({
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        badges: ["New Member"],
        points: 0,
        role: "user",
      })
    }
  }, [isSignedIn, user])

  const signIn = () => {
    setIsSignedIn(true)
  }

  const signOut = () => {
    setIsSignedIn(false)
    setUser(null)
  }

  const addBadge = (badge: Badge) => {
    if (user && !user.badges.includes(badge)) {
      setUser({ ...user, badges: [...user.badges, badge] })
    }
  }

  const addPoints = (points: number) => {
    if (user) {
      setUser({ ...user, points: user.points + points })
    }
  }

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates })
    }
  }

  return (
    <AuthContext.Provider value={{ isSignedIn, user, signIn, signOut, addBadge, addPoints, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

