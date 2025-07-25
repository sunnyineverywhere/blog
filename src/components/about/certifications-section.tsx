import SectionHeader from "./section-header";
import ExperienceItem from "../experience-item";

interface Certification {
  title: string;
  period: string;
  keywords: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Certificated AI Practitioner",
    period: "2025년 7월",
    keywords: "AWS, AI, Machine Learning, LLM",
  },
  {
    title: "AWS Certificated Developer Associate",
    period: "2024년 6월",
    keywords: "AWS, Cloud Architecture, Development",
  },
  {
    title: "AWS Certificated Solutions Architect Associate",
    period: "2024년 4월",
    keywords: "AWS, Solutions Architecture, Cloud Design",
  },
];

export default function CertificationsSection() {
  return (
    <section>
      <SectionHeader title="Certifications" />
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <ExperienceItem
            key={index}
            title={cert.title}
            period={cert.period}
            keywords={cert.keywords}
            activities={[]}
          />
        ))}
      </div>
    </section>
  );
}
