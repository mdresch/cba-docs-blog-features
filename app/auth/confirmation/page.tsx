import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Confirmation() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-6 shadow-md">
        <h2 className="text-center text-3xl font-bold">Confirm Your Account</h2>
        <p className="text-center text-gray-600">Please enter the confirmation code sent to your email.</p>
        <form className="mt-8 space-y-6">
          <div>
            <Label htmlFor="code">Confirmation Code</Label>
            <Input id="code" name="code" type="text" required />
          </div>
          <Button type="submit" className="w-full">
            Confirm Account
          </Button>
        </form>
      </div>
    </div>
  )
}

