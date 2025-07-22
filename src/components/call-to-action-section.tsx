import Link from "next/link";

export default function CallToActionSection() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="relative p-8 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent dark:from-slate-900/20">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-5"></div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl rotate-12 opacity-10 animate-pulse delay-300"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl -rotate-12 opacity-15 animate-pulse delay-700"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Want to explore more?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover our full collection of articles, tutorials, and insights on modern web development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAPrimaryButton />
              <CTASecondaryButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTAPrimaryButton() {
  return (
    <Link
      href="/posts"
      className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
    >
      <span>Explore All Posts</span>
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
  );
}

function CTASecondaryButton() {
  return (
    <Link
      href="/about"
      className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold border-2 border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-600 transition-all duration-200"
    >
      Learn More About Me
    </Link>
  );
}