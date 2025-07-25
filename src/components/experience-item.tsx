interface ExperienceItemProps {
  title: string;
  period: string;
  keywords: string;
  activities: string[];
}

export default function ExperienceItem({
  title,
  period,
  keywords,
  activities,
}: ExperienceItemProps) {
  return (
    <div className="pl-4">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
        {period}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3">
        <em>{keywords}</em>
      </p>
      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 leading-relaxed">
        {activities.map((activity, index) => (
          <li key={index}>• {activity}</li>
        ))}
      </ul>
    </div>
  );
}
