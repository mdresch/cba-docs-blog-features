import MainLayout from "../../main-layout"
import { InboxContent } from "@/components/inbox-content"

export default function InboxPage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Inbox</h1>
      <InboxContent />
    </MainLayout>
  )
}

