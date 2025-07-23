import BlogLayout from "@/components/blog-layout";
import Link from "next/link";
import PrintButton from "@/components/print-button";

export default function AboutPage() {
  return (
    <BlogLayout>
      {/* Print Button - Hidden in print */}
      <div className="print:hidden mb-6 flex justify-end">
        <PrintButton />
      </div>

      {/* Resume Layout */}
      <div
        id="resume-content"
        className="min-h-screen bg-white dark:bg-gray-900 print:bg-white print:min-h-0"
      >
        <div className="max-w-4xl mx-auto py-8 px-4 print:py-6 print:px-8 print:max-w-none">
          {/* Header */}
          <div className="bg-white print:bg-white border-b-2 border-indigo-800 print:border-b-2 print:border-black pb-6 print:pb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 print:gap-3">
              {/* Profile Image - Hidden in print */}
              <div className="relative print:hidden">
                <div className="w-24 h-24 bg-indigo-800 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Name & Title */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl print:text-3xl font-bold text-gray-900 print:text-black mb-1 print:mb-1">
                  Your Name
                </h1>
                <p className="text-lg print:text-base text-indigo-800 print:text-black font-semibold mb-2 print:mb-2">
                  Backend Developer & Data Engineer
                </p>
                <p className="text-gray-600 print:text-gray-700 leading-relaxed text-sm print:text-sm max-w-2xl">
                  Passionate developer specializing in scalable backend systems
                  and data infrastructure. Building robust solutions that power
                  modern applications.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-4 print:mt-3 pt-4 print:pt-3 border-t border-gray-200 print:border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-3 print:gap-2 text-sm print:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-800 print:text-black font-medium">
                    Email:
                  </span>
                  <span className="text-gray-900 print:text-black">
                    your.email@example.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-800 print:text-black font-medium">
                    Location:
                  </span>
                  <span className="text-gray-900 print:text-black">
                    Seoul, South Korea
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-800 print:text-black font-medium">
                    Website:
                  </span>
                  <span className="text-gray-900 print:text-black">
                    yourwebsite.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 print:bg-white print:shadow-none">
            {/* Experience Section */}
            <div className="p-6 print:p-4 border-b border-gray-200 print:border-gray-300">
              <h2 className="text-xl print:text-lg font-bold text-gray-900 print:text-black mb-4 print:mb-3 border-b-2 border-indigo-800 print:border-black pb-2 print:pb-1">
                EXPERIENCE
              </h2>

              <div className="space-y-4 print:space-y-3">
                {/* Job 1 */}
                <div className="border-l-2 border-indigo-800 print:border-black pl-4 print:pl-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 print:mb-1">
                    <h3 className="text-lg print:text-base font-bold text-gray-900 print:text-black">
                      Senior Backend Developer
                    </h3>
                    <span className="text-indigo-800 print:text-black font-semibold text-sm print:text-sm">
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-base print:text-sm text-gray-700 print:text-black font-medium mb-2 print:mb-1">
                    Company Name
                  </p>
                  <ul className="space-y-1 print:space-y-0 text-sm print:text-xs text-gray-600 print:text-gray-700">
                    <li>
                      • Led development of microservices architecture serving
                      1M+ users
                    </li>
                    <li>
                      • Designed and implemented RESTful APIs with 99.9% uptime
                    </li>
                    <li>
                      • Optimized database performance, reducing query times by
                      60%
                    </li>
                    <li>
                      • Mentored junior developers and conducted code reviews
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="border-l-2 border-indigo-800 print:border-black pl-4 print:pl-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 print:mb-1">
                    <h3 className="text-lg print:text-base font-bold text-gray-900 print:text-black">
                      Data Engineer
                    </h3>
                    <span className="text-indigo-800 print:text-black font-semibold text-sm print:text-sm">
                      2020 - 2022
                    </span>
                  </div>
                  <p className="text-base print:text-sm text-gray-700 print:text-black font-medium mb-2 print:mb-1">
                    Previous Company
                  </p>
                  <ul className="space-y-1 print:space-y-0 text-sm print:text-xs text-gray-600 print:text-gray-700">
                    <li>• Built ETL pipelines processing 10TB+ data daily</li>
                    <li>
                      • Implemented real-time streaming solutions using Apache
                      Kafka
                    </li>
                    <li>
                      • Developed data warehouse architecture on cloud platforms
                    </li>
                    <li>• Created automated monitoring and alerting systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="p-6 print:p-4 border-b border-gray-200 print:border-gray-300">
              <h2 className="text-xl print:text-lg font-bold text-gray-900 print:text-black mb-4 print:mb-3 border-b-2 border-indigo-800 print:border-black pb-2 print:pb-1">
                TECHNICAL SKILLS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-4 print:gap-3 text-sm print:text-xs">
                {/* Programming Languages */}
                <div>
                  <h3 className="font-bold text-indigo-800 print:text-black mb-2 print:mb-1">
                    Languages
                  </h3>
                  <ul className="space-y-1 print:space-y-0 text-gray-700 print:text-black">
                    <li>• Python (Expert)</li>
                    <li>• JavaScript (Advanced)</li>
                    <li>• Java (Advanced)</li>
                    <li>• TypeScript</li>
                    <li>• SQL</li>
                  </ul>
                </div>

                {/* Frameworks */}
                <div>
                  <h3 className="font-bold text-indigo-800 print:text-black mb-2 print:mb-1">
                    Frameworks
                  </h3>
                  <ul className="space-y-1 print:space-y-0 text-gray-700 print:text-black">
                    <li>• FastAPI</li>
                    <li>• Django</li>
                    <li>• Flask</li>
                    <li>• Node.js</li>
                    <li>• Spring Boot</li>
                  </ul>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h3 className="font-bold text-indigo-800 print:text-black mb-2 print:mb-1">
                    Technologies
                  </h3>
                  <ul className="space-y-1 print:space-y-0 text-gray-700 print:text-black">
                    <li>• Docker & Kubernetes</li>
                    <li>• AWS / GCP</li>
                    <li>• PostgreSQL / MongoDB</li>
                    <li>• Redis / ElasticSearch</li>
                    <li>• Apache Kafka</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Projects Combined Section */}
            <div className="p-6 print:p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 print:gap-4">
                {/* Education */}
                <div>
                  <h2 className="text-xl print:text-lg font-bold text-gray-900 print:text-black mb-4 print:mb-3 border-b-2 border-indigo-800 print:border-black pb-2 print:pb-1">
                    EDUCATION
                  </h2>
                  <div className="border-l-2 border-indigo-800 print:border-black pl-4 print:pl-3">
                    <div className="flex flex-col mb-2 print:mb-1">
                      <h3 className="text-lg print:text-base font-bold text-gray-900 print:text-black">
                        Computer Science, Bachelor's
                      </h3>
                      <span className="text-indigo-800 print:text-black font-semibold text-sm print:text-sm">
                        2016 - 2020
                      </span>
                    </div>
                    <p className="text-base print:text-sm text-gray-700 print:text-black font-medium mb-2 print:mb-1">
                      University Name
                    </p>
                    <p className="text-sm print:text-xs text-gray-600 print:text-gray-700">
                      Focused on software engineering, data structures,
                      algorithms, and database systems. Graduated Magna Cum
                      Laude (GPA 3.8/4.0)
                    </p>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xl print:text-lg font-bold text-gray-900 print:text-black mb-4 print:mb-3 border-b-2 border-indigo-800 print:border-black pb-2 print:pb-1">
                    KEY PROJECTS
                  </h2>
                  <div className="space-y-3 print:space-y-2">
                    {/* Project 1 */}
                    <div className="border-l-2 border-indigo-800 print:border-black pl-4 print:pl-3">
                      <h3 className="text-base print:text-sm font-bold text-gray-900 print:text-black">
                        E-commerce Platform API
                      </h3>
                      <p className="text-sm print:text-xs text-gray-600 print:text-gray-700 mb-1">
                        Microservices architecture handling 100K+ daily
                        transactions with real-time inventory management.
                      </p>
                      <p className="text-xs print:text-xs text-indigo-800 print:text-black">
                        Python, FastAPI, PostgreSQL
                      </p>
                    </div>

                    {/* Project 2 */}
                    <div className="border-l-2 border-indigo-800 print:border-black pl-4 print:pl-3">
                      <h3 className="text-base print:text-sm font-bold text-gray-900 print:text-black">
                        Real-time Analytics Pipeline
                      </h3>
                      <p className="text-sm print:text-xs text-gray-600 print:text-gray-700 mb-1">
                        ETL pipeline processing 1TB+ data daily with Apache
                        Kafka and Spark for business intelligence.
                      </p>
                      <p className="text-xs print:text-xs text-indigo-800 print:text-black">
                        Apache Kafka, Spark, AWS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
