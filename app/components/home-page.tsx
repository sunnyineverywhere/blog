export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            higher ideal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
            개발 블로그
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mt-6">
            이곳에서 개발, 알고리즘, 그리고 다양한 기술 주제에 대한 글들을 공유합니다.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <a 
            href="/wiki" 
            className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="text-3xl mb-2">📚</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                Wiki
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                기술 문서
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              →
            </div>
          </a>

          <a 
            href="/blog" 
            className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="text-3xl mb-2">✍️</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                Blog
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                개인 블로그
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              →
            </div>
          </a>

          <a 
            href="/about" 
            className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="text-3xl mb-2">👋</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                About
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                소개
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              →
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

