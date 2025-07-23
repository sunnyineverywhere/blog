import BlogLayout from "@/components/blog-layout";
import PostCard from "@/components/post-card";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import CategoryFilter from "@/components/category-filter";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getAllCategorySlugs,
  CategoryConfig,
} from "@/lib/categories";

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
        {/* Category Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
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
              <CategoryFilter
                categories={allCategories}
                currentCategory={categoryConfig.name}
              />
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
                        {posts.length}{" "}
                        {posts.length === 1 ? "article" : "articles"} in this
                        category
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
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={icon}
      />
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
        I haven&apos;t published any {categoryConfig.name.toLowerCase()}{" "}
        articles yet. Check back soon for new content, or explore other
        categories!
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/posts"
          className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
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
