import MainLayout from "../main-layout"
import Container from "@/components/posts/container";
import { HeroPost } from "@/components/posts/hero-post";
import { Intro } from "@/components/posts/intro";
import { MoreStories } from "@/components/posts/more-stories";
import { getAllPosts } from "@/lib/api";

export default function BlogPage() {

  const allPosts = getAllPosts()

  const heroPost = allPosts[0]

  const morePosts = allPosts.slice(1)

  return (
    <MainLayout>
      <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>


    </MainLayout>
  )
}
