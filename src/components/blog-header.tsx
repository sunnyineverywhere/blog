import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="blog-header text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            My Tech Blog
          </Link>
          <nav className="blog-nav flex space-x-6">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Home
            </Link>
            <Link href="/posts" className="text-gray-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Posts
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}