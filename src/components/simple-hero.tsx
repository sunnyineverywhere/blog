import Link from "next/link";

export default function SimpleHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10"></div>
      </div>

      {/* Floating Decorative Squares */}
      <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl rotate-12 opacity-20 animate-pulse"></div>
      <div className="absolute top-12 right-12 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg -rotate-12 opacity-30 animate-pulse delay-300"></div>
      <div className="absolute bottom-8 left-12 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg rotate-45 opacity-25 animate-pulse delay-700"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 py-16 md:py-20">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Welcome to My
            <span className="relative inline-block ml-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 dark:from-slate-300 dark:via-slate-200 dark:to-slate-400">
                Tech Blog
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full transform scale-x-0 animate-[scaleIn_1.5s_ease-out_0.5s_forwards]"></div>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Exploring backend systems, data engineering, and modern software architecture through practical insights and real-world experiences.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/posts"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Read Articles</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold border-2 border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-600 transition-all duration-200"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}