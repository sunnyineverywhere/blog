import BlogLayout from "@/components/blog-layout";
import ProjectsSection from "@/components/about/projects-section";
import EducationSection from "@/components/about/education-section";
import CertificationsSection from "@/components/about/certifications-section";
import ActivitiesSection from "@/components/about/activities-section";

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
