import BlogLayout from "@/components/blog-layout";
import PostCard from "@/components/post-card";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import CategoryFilter from "@/components/category-filter";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getAllCategorySlugs, CategoryConfig } from "@/lib/categories";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs();
  return categorySlugs.map((slug) => ({
    category: slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  
  // Get category config from centralized config
  const categoryConfig = getCategoryBySlug(categorySlug);
  
  if (!categoryConfig) {
    notFound();
  }

  const posts = await getPostsByCategory(categoryConfig.name);
  const allCategories = await getAllCategories();

  return (
    <BlogLayout>
      <div className="space-y-8">
        {/* Category Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10"></div>
          <div className="relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm mb-4">
              <Link href="/posts" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">
                All Posts
              </Link>
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-slate-800 dark:text-slate-200 font-medium">{categoryConfig.name}</span>
            </nav>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {categoryConfig.name} Posts
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  {categoryConfig.description}
                </p>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                  <CategoryIconWrapper icon={categoryConfig.icon} />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {posts.length} {posts.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
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
              <CategoryFilter categories={allCategories} currentCategory={categoryConfig.name} />
            </Suspense>
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.length > 0 ? (
            <>
              {/* Results Summary */}
              <div className="bg-slate-50 dark:bg-gray-800 rounded-xl p-4 border border-slate-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                      <CategoryIconWrapper icon={categoryConfig.icon} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {categoryConfig.name} Collection
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Latest Update
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {new Date(posts[0].date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="grid gap-6">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <EmptyCategory categoryConfig={categoryConfig} />
          )}
        </div>
      </div>
    </BlogLayout>
  );
}

function CategoryIconWrapper({ icon }: { icon: string }) {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
    </svg>
  );
}

function EmptyCategory({ categoryConfig }: { categoryConfig: CategoryConfig }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center border border-gray-100 dark:border-gray-700">
      <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <CategoryIconWrapper icon={categoryConfig.icon} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        No {categoryConfig.name} Posts Yet
      </h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed mb-6">
        I haven&apos;t published any {categoryConfig.name.toLowerCase()} articles yet. Check back soon for new content, or explore other categories!
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/posts"
          className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          View All Posts
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-gray-600 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors font-medium"
        >
          About Me
        </Link>
      </div>
    </div>
  );
}