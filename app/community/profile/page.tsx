import MainLayout from "../../main-layout"
import { ProfileContent } from "@/components/profile-content"

export default function ProfilePage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <ProfileContent />
    </MainLayout>
  )
}

