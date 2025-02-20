import MainLayout from "../../main-layout"
import { LeaderboardContent } from "@/components/leaderboard-content"

export default function LeaderboardPage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <LeaderboardContent />
    </MainLayout>
  )
}

