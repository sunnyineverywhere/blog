"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategoryByName } from "@/lib/categories";

interface CategoryFilterProps {
  categories: string[];
  currentCategory?: string;
}

export default function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
  const pathname = usePathname();
  const isPostsPage = pathname === '/posts';
  const activeCat = currentCategory || (isPostsPage ? 'All' : '');

  return (
    <div className="flex flex-wrap gap-2">
      {/* All Posts Button */}
      <Link
        href="/posts"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          activeCat === 'All' || isPostsPage
            ? "bg-slate-700 text-white shadow-lg"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700"
        }`}
      >
        All Posts
      </Link>
      
      {/* Category Buttons */}
      {categories.map((category) => {
        const categoryConfig = getCategoryByName(category);
        const categorySlug = categoryConfig?.slug || category.toLowerCase().replace(/\s+/g, '-');
        const isActive = activeCat === category;
        
        return (
          <Link
            key={category}
            href={`/posts/${categorySlug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-slate-700 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}