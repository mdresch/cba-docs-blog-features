import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-6 shadow-md">
        <h2 className="text-center text-3xl font-bold">Reset Password</h2>
        <p className="text-center text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </form>
      </div>
    </div>
  )
}

