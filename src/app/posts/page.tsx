import BlogLayout from "@/components/blog-layout";
import PostCard from "@/components/post-card";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import CategoryFilter from "@/components/category-filter";
import { Suspense } from "react";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return (
    <BlogLayout>
      <div className="space-y-8">
        {/* Page Header */}

        {/* Category Filter Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-6">
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-slate-600"></div>
                  <span className="ml-2 text-slate-600 dark:text-slate-400">
                    Loading categories...
                  </span>
                </div>
              }
            >
              <CategoryFilter categories={categories} currentCategory="All" />
            </Suspense>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="space-y-6">
          {posts.length > 0 ? (
            <div className="space-y-6">
              {/* Posts List */}
              <div className="grid gap-6">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-16 h-16 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                No Posts Published
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                I&apos;m working on creating valuable content for you. Check
                back soon for insights on backend development and data
                engineering.
              </p>
            </div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
}
