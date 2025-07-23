// Centralized category configuration
export interface CategoryConfig {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: {
    from: string;
    to: string;
  };
  meta: {
    keywords: string[];
    shortDescription: string;
  };
}

// Category icons as path strings
const categoryIcons = {
  frontend: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  backend: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  programming: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  architecture: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  dataEngineering: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  log: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  general: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
};

// Main categories configuration
export const CATEGORIES: CategoryConfig[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    slug: 'frontend',
    description: 'User interfaces, modern frameworks, and frontend best practices',
    icon: categoryIcons.frontend,
    color: {
      from: 'from-blue-500',
      to: 'to-blue-600',
    },
    meta: {
      keywords: ['react', 'vue', 'angular', 'javascript', 'typescript', 'css', 'html'],
      shortDescription: 'Frontend development and UI/UX',
    },
  },
  {
    id: 'backend',
    name: 'Backend',
    slug: 'backend',
    description: 'Server-side development, APIs, and system architecture',
    icon: categoryIcons.backend,
    color: {
      from: 'from-slate-600',
      to: 'to-slate-700',
    },
    meta: {
      keywords: ['api', 'server', 'database', 'microservices', 'rest', 'graphql'],
      shortDescription: 'Backend systems and APIs',
    },
  },
  {
    id: 'programming',
    name: 'Programming',
    slug: 'programming',
    description: 'Code quality, algorithms, and development techniques',
    icon: categoryIcons.programming,
    color: {
      from: 'from-emerald-500',
      to: 'to-emerald-600',
    },
    meta: {
      keywords: ['algorithms', 'data-structures', 'best-practices', 'clean-code'],
      shortDescription: 'Programming fundamentals and techniques',
    },
  },
  {
    id: 'architecture',
    name: 'Architecture',
    slug: 'architecture',
    description: 'System design, patterns, and scalable solutions',
    icon: categoryIcons.architecture,
    color: {
      from: 'from-purple-500',
      to: 'to-purple-600',
    },
    meta: {
      keywords: ['system-design', 'patterns', 'scalability', 'distributed-systems'],
      shortDescription: 'Software architecture and design patterns',
    },
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    slug: 'data-engineering',
    description: 'ETL pipelines, data warehousing, and analytics infrastructure',
    icon: categoryIcons.dataEngineering,
    color: {
      from: 'from-indigo-500',
      to: 'to-indigo-600',
    },
    meta: {
      keywords: ['etl', 'data-pipeline', 'analytics', 'big-data', 'warehouse'],
      shortDescription: 'Data processing and analytics',
    },
  },
  {
    id: 'log',
    name: 'Log',
    slug: 'log',
    description: 'Development logs and progress notes for building this tech blog',
    icon: categoryIcons.log,
    color: {
      from: 'from-amber-500',
      to: 'to-amber-600',
    },
    meta: {
      keywords: ['development-log', 'progress', 'coding', 'blog-development', 'notes'],
      shortDescription: 'Blog development progress and notes',
    },
  },
  {
    id: 'general',
    name: 'General',
    slug: 'general',
    description: 'Miscellaneous articles and general programming topics',
    icon: categoryIcons.general,
    color: {
      from: 'from-gray-500',
      to: 'to-gray-600',
    },
    meta: {
      keywords: ['general', 'miscellaneous', 'tutorials', 'guides'],
      shortDescription: 'General programming and tech topics',
    },
  },
];

// Utility functions
export const getCategoryBySlug = (slug: string): CategoryConfig | undefined => {
  return CATEGORIES.find(category => category.slug === slug);
};

export const getCategoryByName = (name: string): CategoryConfig | undefined => {
  return CATEGORIES.find(category => category.name === name);
};

export const getCategoryById = (id: string): CategoryConfig | undefined => {
  return CATEGORIES.find(category => category.id === id);
};

export const getAllCategoryNames = (): string[] => {
  return CATEGORIES.map(category => category.name);
};

export const getAllCategorySlugs = (): string[] => {
  return CATEGORIES.map(category => category.slug);
};

export const getCategoryIcon = (categoryName: string): string => {
  const category = getCategoryByName(categoryName);
  return category?.icon || categoryIcons.general;
};

export const getCategoryDescription = (categoryName: string): string => {
  const category = getCategoryByName(categoryName);
  return category?.description || 'Articles and insights on various technical topics';
};

export const getCategoryColor = (categoryName: string): { from: string; to: string } => {
  const category = getCategoryByName(categoryName);
  return category?.color || { from: 'from-gray-500', to: 'to-gray-600' };
};

// Validation function
export const isValidCategory = (categoryName: string): boolean => {
  return getAllCategoryNames().includes(categoryName);
};

// SEO and metadata helpers
export const getCategoryMetadata = (categoryName: string) => {
  const category = getCategoryByName(categoryName);
  if (!category) return null;
  
  return {
    title: `${category.name} Articles | My Tech Blog`,
    description: `${category.description}. Read articles about ${category.meta.keywords.join(', ')}.`,
    keywords: category.meta.keywords,
  };
};

// Default fallback category
export const DEFAULT_CATEGORY = 'General';