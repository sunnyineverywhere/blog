export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10"></div>
      </div>

      {/* Floating Decorative Squares */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl rotate-12 opacity-20 animate-pulse"></div>
      <div className="absolute top-16 right-16 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl -rotate-12 opacity-30 animate-pulse delay-300"></div>
      <div className="absolute bottom-12 left-16 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl rotate-45 opacity-25 animate-pulse delay-700"></div>
      <div className="absolute bottom-8 right-8 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg -rotate-45 opacity-35 animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 py-16 md:py-20">
        {/* Modern Introduction */}
        <div className="mb-12">
          {/* Greeting Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for collaboration
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Hi, I&apos;m
            <span className="relative inline-block ml-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 dark:from-slate-300 dark:via-slate-200 dark:to-slate-400">
                Sunny
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full transform scale-x-0 animate-[scaleIn_1.5s_ease-out_0.5s_forwards]"></div>
            </span>
          </h1>
          
          {/* Professional Title */}
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
            Backend & Data Engineer
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            I build scalable systems, design robust data pipelines, and architect solutions that power modern applications. 
            Passionate about clean code, performance optimization, and turning complex data into actionable insights.
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <TechPill>Python</TechPill>
            <TechPill>Go</TechPill>
            <TechPill>PostgreSQL</TechPill>
            <TechPill>Apache Kafka</TechPill>
            <TechPill>Docker</TechPill>
            <TechPill>Kubernetes</TechPill>
            <TechPill>AWS</TechPill>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            }
            title="Backend Systems"
            description="Scalable APIs, microservices architecture, and performance optimization"
            gradient="from-slate-600 to-slate-700"
            hoverShadow="hover:shadow-slate-200/25 dark:hover:shadow-slate-900/25"
          />

          <FeatureCard
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            }
            title="Data Engineering"
            description="ETL pipelines, data warehousing, and analytics infrastructure"
            gradient="from-blue-500 to-blue-600"
            hoverShadow="hover:shadow-blue-200/25 dark:hover:shadow-blue-900/25"
          />

          <FeatureCard
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            }
            title="System Design"
            description="Architecture patterns, distributed systems, and cloud solutions"
            gradient="from-purple-500 to-purple-600"
            hoverShadow="hover:shadow-purple-200/25 dark:hover:shadow-purple-900/25"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  hoverShadow: string;
}

function FeatureCard({ icon, title, description, gradient, hoverShadow }: FeatureCardProps) {
  return (
    <div className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl ${hoverShadow} transition-all duration-300 hover:-translate-y-1 text-center`}>
      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-default">
      {children}
    </span>
  );
}