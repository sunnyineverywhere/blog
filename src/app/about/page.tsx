import BlogLayout from "@/components/blog-layout";
import HeroSection from "@/components/hero-section";
import Link from "next/link";

export default function AboutPage() {
  return (
    <BlogLayout>
      <div className="space-y-12">
        {/* Professional Introduction */}
        <HeroSection />
        
        {/* Additional About Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience & Background</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With years of experience in backend development and data engineering, I specialize in building robust, 
                scalable systems that handle complex data workflows and high-traffic applications. My expertise spans 
                across modern cloud architectures, distributed systems, and data pipeline optimization.
              </p>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• RESTful & GraphQL API design</li>
                <li>• Microservices architecture</li>
                <li>• Database design & optimization</li>
                <li>• Performance tuning & scaling</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Data Engineering</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• ETL/ELT pipeline development</li>
                <li>• Data warehousing solutions</li>
                <li>• Stream processing systems</li>
                <li>• Analytics infrastructure</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let&apos;s Connect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Always open to discussing new opportunities, interesting projects, or just connecting with fellow engineers.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:hello@example.com" 
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
              >
                Get In Touch
              </a>
              <Link 
                href="/posts" 
                className="px-6 py-3 bg-white dark:bg-gray-700 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-gray-600 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                Read My Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}