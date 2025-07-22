"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface InlineTableOfContentsProps {
  content: string;
}

export default function InlineTableOfContents({
  content,
}: InlineTableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    // Create a temporary div to parse the content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    const headings = tempDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocItems: TocItem[] = [];

    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      const text = heading.textContent?.replace(/^#\s*/, "") || "";
      const level = parseInt(heading.tagName.charAt(1));

      tocItems.push({
        id,
        text,
        level,
      });
    });

    setToc(tocItems);

    // Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 0.1,
      }
    );

    // Observe actual headings in the rendered content
    const actualHeadings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    actualHeadings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [content]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (toc.length === 0) return null;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 mb-12 overflow-hidden">
      {/* Toggle Header */}
      <button
        onClick={toggleExpanded}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      >
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8M4 18h16"
              />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Table of Contents
            </h3>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div
            className={`transform transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-6">
          <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
            <nav className="space-y-1 max-h-80 overflow-y-auto">
              {toc.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToHeading(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeId === item.id
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium border-l-3 border-blue-500"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                  style={{
                    paddingLeft: `${(item.level - 1) * 16 + 16}px`,
                    fontSize:
                      item.level === 1
                        ? "1rem"
                        : item.level === 2
                        ? "0.95rem"
                        : "0.9rem",
                  }}
                >
                  <span className="flex items-center">
                    {item.level === 1 && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    )}
                    {item.level === 2 && (
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                    )}
                    {item.level >= 3 && (
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                    )}
                    <span className="line-clamp-2">{item.text}</span>
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
