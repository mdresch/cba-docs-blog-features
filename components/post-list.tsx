import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Dummy data for posts
const posts = [
  {
    id: 1,
    title: "Welcome to our community!",
    author: "Admin",
    content: "This is our first community post. We're excited to have you here!",
  },
  {
    id: 2,
    title: "Tips for getting started",
    author: "JohnDoe",
    content: "Here are some tips to help you get started in our community...",
  },
  {
    id: 3,
    title: "Introducing new features",
    author: "JaneSmith",
    content: "We've just rolled out some exciting new features. Check them out!",
  },
]

export function PostList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">Posted by {post.author}</p>
            <p>{post.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

