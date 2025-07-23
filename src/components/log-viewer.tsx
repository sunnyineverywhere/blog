"use client";

import { LogEntry, formatLogDate } from "@/lib/log-utils";

interface LogViewerProps {
  entries: LogEntry[];
}

export default function LogViewer({ entries }: LogViewerProps) {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-300 via-blue-400 to-sky-950 opacity-60"></div>

      {entries.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No entries yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Development milestones will appear here as they happen.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {entries.map((entry, index) => (
            <LogEntryComponent
              key={entry.id}
              entry={entry}
              index={index}
              isLast={index === entries.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface LogEntryComponentProps {
  entry: LogEntry;
  index: number;
  isLast: boolean;
}

function LogEntryComponent({ entry, index, isLast }: LogEntryComponentProps) {
  const formattedDate = formatLogDate(entry.date);

  const timelineColors = [
    "from-blue-400 to-blue-600",
    "from-emerald-400 to-emerald-600",
    "from-amber-400 to-amber-600",
  ];

  const iconColors = [
    "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20",
    "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20",
    "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/20",
  ];

  const colorIndex = index % timelineColors.length;

  return (
    <div className="relative flex items-start group">
      {/* Timeline Node */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${timelineColors[colorIndex]} shadow-lg ring-4 ring-white dark:ring-gray-900`}
        ></div>

        {/* Connecting Line Extension */}
        {!isLast && (
          <div className="absolute top-4 left-2 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
        )}
      </div>

      {/* Content Card */}
      <div className="ml-8 flex-1 group-hover:scale-[1.02] transition-all duration-300">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Date Badge */}
          <div className="absolute -top-3 left-6">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 ${iconColors[colorIndex]} rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-wider">
                {formattedDate}
              </span>
            </div>
          </div>

          {/* Header */}
          <div className="pt-8 px-8 pb-6">
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl ${iconColors[colorIndex]} flex items-center justify-center shadow-lg`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {entry.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Milestone #{index + 1}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pb-8">
            <div className="bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl p-6 border border-gray-100/50 dark:border-gray-700/50">
              <div
                className="prose prose-gray dark:prose-invert max-w-none
                           prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold
                           prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                           prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                           prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-code:bg-purple-50 dark:prose-code:bg-purple-900/20 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-medium
                           prose-pre:bg-gradient-to-br prose-pre:from-gray-900 prose-pre:to-gray-800 prose-pre:border prose-pre:border-gray-700 prose-pre:shadow-xl prose-pre:rounded-xl
                           prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-1
                           prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                           prose-blockquote:border-l-amber-500 prose-blockquote:bg-amber-50/50 dark:prose-blockquote:bg-amber-900/10 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-blockquote:rounded-r-lg prose-blockquote:py-2
                           prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-700 dark:hover:prose-a:text-blue-300 prose-a:font-medium prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: entry.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
