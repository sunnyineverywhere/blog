interface YearSectionProps {
  year: string;
  children: React.ReactNode;
}

export default function YearSection({ year, children }: YearSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {year}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}