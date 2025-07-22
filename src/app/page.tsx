import BlogLayout from "@/components/blog-layout";
import Link from "next/link";

export default async function Home() {

  return (
    <BlogLayout>
      <div className="space-y-12">
        {/* Hero Welcome Section */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10"></div>
          </div>
          
          {/* Floating Decorative Squares */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl rotate-12 opacity-20 animate-pulse"></div>
          <div className="absolute top-16 right-16 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl -rotate-12 opacity-30 animate-pulse delay-300"></div>
          <div className="absolute bottom-12 left-16 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl rotate-45 opacity-25 animate-pulse delay-700"></div>
          <div className="absolute bottom-8 right-8 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg -rotate-45 opacity-35 animate-pulse delay-500"></div>
          
          {/* Main Content */}
          <div className="relative z-10 text-center px-8 py-16 md:py-20">
            {/* Title with animated underline */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                Welcome to My
                <span className="relative inline-block ml-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 dark:from-slate-300 dark:via-slate-200 dark:to-slate-400">
                    Tech Blog
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full transform scale-x-0 animate-[scaleIn_1.5s_ease-out_0.5s_forwards]"></div>
                </span>
              </h1>
            </div>
            
            {/* Description with feature cards */}
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Exploring the latest in web development, programming, and technology through in-depth tutorials and insights
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-slate-200/25 dark:hover:shadow-slate-900/25 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Web Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Modern frameworks, best practices, and cutting-edge techniques</p>
              </div>
              
              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-200/25 dark:hover:shadow-blue-900/25 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Programming Tips</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Practical solutions, code optimization, and developer insights</p>
              </div>
              
              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-purple-200/25 dark:hover:shadow-purple-900/25 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Latest Tech</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Emerging technologies, tools, and industry trends</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
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
                  Ready to Dive In?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Explore our collection of in-depth articles, tutorials, and insights on modern web development.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/posts"
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span>Browse All Posts</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/about"
                    className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold border-2 border-slate-200 dark:border-gray-600 hover:border-slate-300 dark:hover:border-gray-500 hover:bg-slate-50 dark:hover:bg-gray-600 transition-all duration-200"
                  >
                    Learn More About Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Latest Articles</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">In-depth tutorials and technical insights</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Multiple Categories</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Organized content across different topics</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Regular Updates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Fresh content on the latest technologies</p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
