import BlogLayout from "@/components/blog-layout";
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
          <div className="bg-white print:bg-white border-b-2 border-blue-950 print:border-b-2 print:border-black pb-6 print:pb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 print:gap-3">
              {/* Profile Image - Hidden in print */}
              <div className="relative print:hidden">
                <div className="w-24 h-24 bg-blue-950 rounded-lg flex items-center justify-center">
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
                <p className="text-lg print:text-base text-blue-950 print:text-black font-semibold mb-2 print:mb-2">
                  Aspiring Software Engineer
                </p>
                <p className="text-gray-600 print:text-gray-700 leading-relaxed text-sm print:text-sm max-w-2xl">
                  A recent computer science graduate with a passion for building
                  web applications and a strong foundation in software
                  engineering principles. Eager to apply my skills in a
                  professional setting and contribute to a talented team.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-4 print:mt-3 pt-4 print:pt-3 border-t border-gray-200 print:border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-3 print:gap-2 text-sm print:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-blue-950 print:text-black font-medium">
                    Email:
                  </span>
                  <span className="text-gray-900 print:text-black">
                    your.email@example.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-950 print:text-black font-medium">
                    Location:
                  </span>
                  <span className="text-gray-900 print:text-black">
                    Seoul, South Korea
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-950 print:text-black font-medium">
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
            {/* Projects Section */}
            <div className="p-6 print:p-4 border-b border-gray-200 print:border-gray-300">
              <h2 className="text-xl print:text-lg font-bold text-gray-900 print:text-black mb-4 print:mb-3 border-b-2 border-blue-950 print:border-black pb-2 print:pb-1">
                KEY PROJECTS
              </h2>
              <div className="space-y-4 print:space-y-3">
                {/* Project 1 */}
                <div className="border-l-2 border-blue-950 print:border-black pl-4 print:pl-3">
                  <h3 className="text-lg print:text-base font-bold text-gray-900 print:text-black">
                    E-commerce Platform API
                  </h3>
                  <p className="text-sm print:text-xs text-gray-600 print:text-gray-700 mb-1">
                    Developed a RESTful API for a mock e-commerce platform,
                    handling user authentication, product catalog, and order
                    processing.
                  </p>
                  <ul className="list-disc list-inside text-sm print:text-xs text-gray-600 print:text-gray-700 mb-1">
                    <li>
                      Implemented JWT-based authentication and authorization.
                    </li>
                    <li>
                      Designed and built a database schema for products, users,
                      and orders.
                    </li>
                    <li>
                      Wrote unit and integration tests to ensure API
                      reliability.
                    </li>
                  </ul>
                  <p className="text-xs print:text-xs text-blue-950 print:text-black">
                    Python, FastAPI, PostgreSQL, Docker
                  </p>
                </div>

                {/* Project 2 */}
                <div className="border-l-2 border-blue-950 print:border-black pl-4 print:pl-3">
                  <h3 className="text-lg print:text-base font-bold text-gray-900 print:text-black">
                    Real-time Analytics Dashboard
                  </h3>
                  <p className="text-sm print:text-xs text-gray-600 print:text-gray-700 mb-1">
                    Built a real-time data pipeline and dashboard to visualize
                    user activity on a web application.
                  </p>
                  <ul className="list-disc list-inside text-sm print:text-xs text-gray-600 print:text-gray-700 mb-1">
                    <li>
                      Set up a data stream with Kafka and processed events with
                      Spark Streaming.
                    </li>
                    <li>
                      Developed a web-based dashboard using React and WebSockets
                      to display live data.
                    </li>
                    <li>
                      Deployed the application to AWS using Docker and EC2.
                    </li>
                  </ul>
                  <p className="text-xs print:text-xs text-blue-950 print:text-black">
                    Apache Kafka, Spark, React, AWS, Docker
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="p-6 print:p-4 border-b border-gray-200 print:border-gray-300">
              <h2 className="text-xl print:text-lg font-bold text-gray-900 print:text-black mb-4 print:mb-3 border-b-2 border-blue-950 print:border-black pb-2 print:pb-1">
                TECHNICAL SKILLS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-4 print:gap-3 text-sm print:text-xs">
                {/* Programming Languages */}
                <div>
                  <h3 className="font-bold text-blue-950 print:text-black mb-2 print:mb-1">
                    Languages
                  </h3>
                  <ul className="space-y-1 print:space-y-0 text-gray-700 print:text-black">
                    <li>• Python (Proficient)</li>
                    <li>• JavaScript (Proficient)</li>
                    <li>• Java</li>
                    <li>• TypeScript</li>
                    <li>• SQL</li>
                  </ul>
                </div>

                {/* Frameworks */}
                <div>
                  <h3 className="font-bold text-blue-950 print:text-black mb-2 print:mb-1">
                    Frameworks
                  </h3>
                  <ul className="space-y-1 print:space-y-0 text-gray-700 print:text-black">
                    <li>• FastAPI</li>
                    <li>• Django</li>
                    <li>• React</li>
                    <li>• Node.js</li>
                  </ul>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h3 className="font-bold text-blue-950 print:text-black mb-2 print:mb-1">
                    Technologies
                  </h3>
                  <ul className="space-y-1 print:space-y-0 text-gray-700 print:text-black">
                    <li>• Docker</li>
                    <li>• AWS / GCP</li>
                    <li>• PostgreSQL / MongoDB</li>
                    <li>• Git & GitHub</li>
                    <li>• Apache Kafka</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="p-6 print:p-4 border-b border-gray-200 print:border-gray-300">
              <h2 className="text-xl print:text-lg font-bold text-gray-900 print:text-black mb-4 print:mb-3 border-b-2 border-blue-950 print:border-black pb-2 print:pb-1">
                EDUCATION
              </h2>
              <div className="border-l-2 border-blue-950 print:border-black pl-4 print:pl-3">
                <div className="flex flex-col mb-2 print:mb-1">
                  <h3 className="text-lg print:text-base font-bold text-gray-900 print:text-black">
                    Bachelor of Science in Computer Science
                  </h3>
                  <span className="text-blue-950 print:text-black font-semibold text-sm print:text-sm">
                    2020 - 2024
                  </span>
                </div>
                <p className="text-base print:text-sm text-gray-700 print:text-black font-medium mb-2 print:mb-1">
                  University Name
                </p>
                <p className="text-sm print:text-xs text-gray-600 print:text-gray-700">
                  Relevant Coursework: Data Structures, Algorithms, Web
                  Development, Database Systems, Software Engineering
                </p>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="p-6 print:p-4">
              <h2 className="text-xl print:text-lg font-bold text-gray-900 print:text-black mb-4 print:mb-3 border-b-2 border-blue-950 print:border-black pb-2 print:pb-1">
                CERTIFICATIONS
              </h2>
              <div className="space-y-3 print:space-y-2">
                <div className="border-l-2 border-blue-950 print:border-black pl-4 print:pl-3">
                  <h3 className="text-base print:text-sm font-bold text-gray-900 print:text-black">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <p className="text-sm print:text-xs text-gray-600 print:text-gray-700">
                    Issued by Amazon Web Services, 2023
                  </p>
                </div>
                <div className="border-l-2 border-blue-950 print:border-black pl-4 print:pl-3">
                  <h3 className="text-base print:text-sm font-bold text-gray-900 print:text-black">
                    Oracle Certified Associate, Java SE 8 Programmer
                  </h3>
                  <p className="text-sm print:text-xs text-gray-600 print:text-gray-700">
                    Issued by Oracle, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
