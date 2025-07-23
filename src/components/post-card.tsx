import Link from "next/link";
import { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 hover:shadow-2xl hover:shadow-slate-100/25 dark:hover:shadow-slate-900/25 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 via-slate-50/0 to-slate-50/0 group-hover:from-slate-50/50 group-hover:via-slate-50/30 group-hover:to-slate-100/50 dark:group-hover:from-slate-900/20 dark:group-hover:via-slate-900/10 dark:group-hover:to-slate-800/20 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Link href={`/post/${post.slug}`} className="block">
          {/* Meta info */}
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/30 px-3 py-1 rounded-full">
              {formatDate(post.date)}
            </time>
            {post.category && (
              <span className="text-xs font-semibold text-white bg-gradient-to-r from-slate-600 to-slate-700 px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-900/40 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"
                >
                  #{tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Read more indicator */}
          <div className="flex items-center text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
            <span className="text-sm">Read full article</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-slate-500/10 to-transparent dark:from-slate-400/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </article>
  );
}