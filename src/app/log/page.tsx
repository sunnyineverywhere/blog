import BlogLayout from "@/components/blog-layout";
import LogViewer from "@/components/log-viewer";
import { parseLogFile } from "@/lib/log-parser";
import { getCategoryBySlug } from "@/lib/categories";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log - higher ideal",
  description: "개발 로그 및 일상 기록 - 개발 과정과 학습 내용 공유",
};

export default async function LogPage() {
  const logData = await parseLogFile();
  const logCategory = getCategoryBySlug("log");

  if (!logData || !logCategory) {
    notFound();
  }

  return (
    <BlogLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10"></div>

          {/* Timeline Content */}
          <div className="relative z-10 pb-16">
            <LogViewer entries={logData.entries} />
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
