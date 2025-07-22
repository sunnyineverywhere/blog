import BlogLayout from "@/components/blog-layout";
import SimpleHero from "@/components/simple-hero";
import RecentPostsSection from "@/components/recent-posts-section";
import CallToActionSection from "@/components/call-to-action-section";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const allPosts = await getAllPosts();
  const recentPosts = allPosts.slice(0, 5);
  return (
    <BlogLayout>
      <div className="space-y-12">
        <RecentPostsSection posts={recentPosts} />
        {/* Call to Action Section */}
      </div>
    </BlogLayout>
  );
}
