import BlogLayout from "@/components/blog-layout";
import ProjectsSection from "@/components/about/projects-section";
import EducationSection from "@/components/about/education-section";
import CertificationsSection from "@/components/about/certifications-section";
import ActivitiesSection from "@/components/about/activities-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - higher ideal",
  description: "백엔드 개발자 이선의 소개 - 프로젝트, 학력, 자격증, 활동 및 수상 경력",
};

export default function AboutPage() {
  return (
    <BlogLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto py-8 px-6">
          <div className="space-y-12">
            <ProjectsSection />
            <EducationSection />
            <CertificationsSection />
            <ActivitiesSection />
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
