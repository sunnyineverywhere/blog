import BlogLayout from "@/components/blog-layout";
import PostCard from "@/components/post-card";
import { getAllPosts, getAllCategories, getPostsByCategory } from "@/lib/posts";
import CategoryFilter from "@/components/category-filter";
import { Suspense } from "react";
import Link from "next/link";

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
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {selectedCategory ? `${selectedCategory} Posts` : 'All Posts'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {selectedCategory 
              ? `Explore ${selectedCategory.toLowerCase()} articles and tutorials`
              : 'Discover articles on backend systems, data engineering, and software architecture'
            }
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full">
            <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-gray-700 dark:to-gray-600 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Browse by Category
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Filter articles by topic to find exactly what you&apos;re looking for
            </p>
          </div>
          <div className="p-6">
            <Suspense fallback={
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-slate-600"></div>
                <span className="ml-2 text-slate-600 dark:text-slate-400">Loading categories...</span>
              </div>
            }>
              <CategoryFilter categories={categories} />
            </Suspense>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="space-y-6">

          {posts.length > 0 ? (
            <div className="space-y-6">
              {/* Results Summary */}
              {selectedCategory && (
                <div className="bg-slate-50 dark:bg-gray-800 rounded-xl p-4 border border-slate-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{posts.length}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {selectedCategory} Articles
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Showing all {selectedCategory.toLowerCase()} posts
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {posts.length} {posts.length === 1 ? 'result' : 'results'}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
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
                {selectedCategory
                  ? `No ${selectedCategory} Posts Yet`
                  : "No Posts Published"}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                {selectedCategory
                  ? `I haven't published any ${selectedCategory.toLowerCase()} articles yet. Try exploring other categories or check back soon for new content!`
                  : "I'm working on creating valuable content for you. Check back soon for insights on backend development and data engineering."}
              </p>
              
              {selectedCategory && (
                <div className="mt-6">
                  <Link 
                    href="/posts" 
                    className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    View All Posts
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
}
