import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-6 shadow-md">
        <h2 className="text-center text-3xl font-bold">Sign Up</h2>
        <form className="mt-8 space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" type="text" required />
          </div>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/signin" className="font-medium text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

