import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Dummy data for leaderboard
const leaderboardData = [
  { rank: 1, name: "John Doe", points: 1500, badges: ["Top Contributor", "Helpful"] },
  { rank: 2, name: "Jane Smith", points: 1350, badges: ["Rising Star", "Insightful"] },
  { rank: 3, name: "Bob Johnson", points: 1200, badges: ["Active Participant"] },
  { rank: 4, name: "Alice Brown", points: 1100, badges: ["Newcomer"] },
  { rank: 5, name: "Charlie Wilson", points: 1000, badges: ["Friendly"] },
]

export function LeaderboardContent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Points</TableHead>
          <TableHead>Badges</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderboardData.map((user) => (
          <TableRow key={user.rank}>
            <TableCell className="font-medium">{user.rank}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.points}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                {user.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

