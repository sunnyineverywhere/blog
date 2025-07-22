import BlogLayout from "@/components/blog-layout";
import PostCard from "@/components/post-card";
import { getAllPosts, getAllCategories, getPostsByCategory } from "@/lib/posts";
import CategoryFilter from "@/components/category-filter";
import { Suspense } from "react";

interface PostsPageProps {
  searchParams?: Promise<{
    category?: string;
  }>;
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const params = await searchParams;
  const selectedCategory = params?.category;
  const posts = selectedCategory 
    ? await getPostsByCategory(selectedCategory)
    : await getAllPosts();
  const categories = await getAllCategories();

  return (
    <BlogLayout>
      <div className="space-y-12">
        {/* Posts Header */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10"></div>
          </div>
          
          {/* Floating Decorative Squares */}
          <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl rotate-12 opacity-20 animate-pulse"></div>
          <div className="absolute top-8 right-8 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg -rotate-12 opacity-30 animate-pulse delay-300"></div>
          <div className="absolute bottom-6 left-12 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg rotate-45 opacity-25 animate-pulse delay-700"></div>
          
          {/* Main Content */}
          <div className="relative z-10 text-center px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              All Posts
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore articles on web development, programming, and technology
            </p>
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Browse by Category
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Filter posts by topic to find exactly what you&apos;re looking for
              </p>
            </div>
            <Suspense fallback={<div>Loading categories...</div>}>
              <CategoryFilter categories={categories} />
            </Suspense>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="space-y-8">
          {selectedCategory && (
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedCategory} Posts
              </h2>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'}
              </span>
            </div>
          )}
          
          {!selectedCategory && (
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Recent Posts
              </h2>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'}
              </span>
            </div>
          )}

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {selectedCategory ? `No posts in ${selectedCategory}` : 'No posts yet'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                {selectedCategory 
                  ? `Try browsing other categories or check back later for new ${selectedCategory.toLowerCase()} content.`
                  : 'Create your first post in the posts directory to get started.'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
}