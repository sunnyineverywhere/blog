import { notFound } from "next/navigation";
import BlogLayout from "@/components/blog-layout";
import ReadingProgress from "@/components/reading-progress";
import CodeCopy from "@/components/code-copy";
import InlineTableOfContents from "@/components/inline-table-of-contents";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <ReadingProgress />
      <CodeCopy />
      <BlogLayout>
        <article className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-12 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <time className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-white/70 dark:bg-gray-800/70 px-3 py-1 rounded-full backdrop-blur-sm">
                {formatDate(post.date)}
              </time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
            )}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Table of Contents */}
        <InlineTableOfContents content={post.content} />

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative">
          {/* Content gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/30 dark:to-gray-800/30 pointer-events-none"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            {/* Article header with enhanced meta */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Article by</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Tech Blogger</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Published</p>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{formatDate(post.date)}</p>
              </div>
            </div>

            <div 
              className="enhanced-prose prose prose-xl dark:prose-invert max-w-none leading-8 mixed-content
                prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-20
                prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b-2 prose-h1:border-blue-200 dark:prose-h1:border-blue-800 prose-h1:relative prose-h1:leading-tight
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-blue-900 dark:prose-h2:text-blue-300 prose-h2:relative prose-h2:pl-8 prose-h2:leading-tight prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-0 prose-h2:before:bottom-0 prose-h2:before:w-1.5 prose-h2:before:bg-gradient-to-b prose-h2:before:from-blue-500 prose-h2:before:to-blue-600 prose-h2:before:rounded-full
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-gray-800 dark:prose-h3:text-gray-200 prose-h3:leading-tight prose-h3:flex prose-h3:items-center prose-h3:before:content-['#'] prose-h3:before:text-blue-500 prose-h3:before:mr-4 prose-h3:before:font-bold prose-h3:before:opacity-70
                prose-h4:text-xl prose-h4:mt-10 prose-h4:mb-4 prose-h4:text-gray-700 dark:prose-h4:text-gray-300 prose-h4:leading-tight
                prose-h5:text-lg prose-h5:mt-8 prose-h5:mb-4 prose-h5:text-gray-600 dark:prose-h5:text-gray-400 prose-h5:font-semibold
                prose-h6:text-base prose-h6:mt-6 prose-h6:mb-3 prose-h6:text-gray-600 dark:prose-h6:text-gray-400 prose-h6:font-semibold prose-h6:uppercase prose-h6:tracking-wider
                prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-8 prose-p:mb-8 prose-p:text-lg prose-p:font-normal prose-p:tracking-normal
                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium prose-a:transition-all prose-a:duration-200 hover:prose-a:text-blue-700 dark:hover:prose-a:text-blue-300 hover:prose-a:underline hover:prose-a:decoration-2 hover:prose-a:underline-offset-4
                prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
                prose-em:text-gray-600 dark:prose-em:text-gray-400 prose-em:font-medium
                prose-ul:my-10 prose-ol:my-10 prose-li:my-4 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-8 prose-li:text-lg
                prose-ul>li:pl-2 prose-ul>li:before:bg-blue-500 prose-ul>li:before:w-2.5 prose-ul>li:before:h-2.5 prose-ul>li:before:rounded-full prose-ul>li:before:mt-3
                prose-ol>li:pl-2 prose-ol>li:before:text-blue-600 dark:prose-ol>li:before:text-blue-400 prose-ol>li:before:font-bold prose-ol>li:before:text-lg
                prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-gradient-to-r prose-blockquote:from-blue-50 prose-blockquote:to-blue-100 dark:prose-blockquote:from-blue-900/20 dark:prose-blockquote:to-blue-800/20 prose-blockquote:py-8 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:my-12 prose-blockquote:shadow-lg prose-blockquote:relative prose-blockquote:before:absolute prose-blockquote:before:top-6 prose-blockquote:before:left-6 prose-blockquote:before:text-5xl prose-blockquote:before:text-blue-400 prose-blockquote:before:content-['\\201c'] prose-blockquote:before:font-serif prose-blockquote:before:leading-none
                prose-blockquote>p:text-gray-800 dark:prose-blockquote>p:text-gray-200 prose-blockquote>p:font-medium prose-blockquote>p:italic prose-blockquote>p:text-xl prose-blockquote>p:leading-relaxed prose-blockquote>p:mb-0 prose-blockquote>p:pl-8
                prose-pre:hidden
                prose-code:bg-blue-50 dark:prose-code:bg-blue-900/30 prose-code:text-blue-700 dark:prose-code:text-blue-300 prose-code:px-3 prose-code:py-1.5 prose-code:rounded-lg prose-code:text-base prose-code:font-medium prose-code:before:content-none prose-code:after:content-none prose-code:border prose-code:border-blue-200 dark:prose-code:border-blue-700 prose-code:mx-1
                prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-gray-200 dark:prose-img:border-gray-600 prose-img:my-16 prose-img:mx-auto
                prose-hr:border-2 prose-hr:border-gray-200 dark:prose-hr:border-gray-700 prose-hr:my-16 prose-hr:mx-auto prose-hr:w-32 prose-hr:rounded-full
                prose-table:shadow-lg prose-table:rounded-lg prose-table:overflow-hidden prose-table:border prose-table:border-gray-200 dark:prose-table:border-gray-700 prose-table:my-12
                prose-thead:bg-blue-50 dark:prose-thead:bg-blue-900/20
                prose-th:text-gray-900 dark:prose-th:text-white prose-th:font-bold prose-th:px-8 prose-th:py-6 prose-th:text-left prose-th:text-base
                prose-td:px-8 prose-td:py-6 prose-td:border-gray-200 dark:prose-td:border-gray-700 prose-td:text-base prose-td:text-gray-700 dark:prose-td:text-gray-300
                prose-tbody>tr:hover:bg-blue-50/50 dark:prose-tbody>tr:hover:bg-blue-900/10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article stats */}
            <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-sm font-medium">1.2k views</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="article-stat-button p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="article-stat-button p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <button className="article-stat-button p-2 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-full transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Post Footer */}
          <div className="border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Thanks for reading!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Found this helpful? Share it with others!</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  Share
                </button>
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Bookmark
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Placeholder */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            More Posts Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Stay tuned for more technical insights and tutorials!
          </p>
        </div>
        </article>
      </BlogLayout>
    </>
  );
}