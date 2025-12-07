import SectionHeader from "./section-header";
import ExperienceItem from "../experience-item";

interface Activity {
  title: string;
  period: string;
  keywords: string;
  activities: string[];
}

const activities: Activity[] = [
  {
    title: "빅데이터 연합동아리 BOAZ 21기",
    period: "2023년 7월 - 2024년 7월",
    keywords: "Data Engineering, Research, Team Leadership",
    activities: [
      "Data Engineering / 자료연구팀 팀장으로 활동",
      "빅데이터 파이프라인 구축 및 데이터 엔지니어링 프로젝트 수행",
      "팀원들의 기술적 성장을 위한 멘토링 및 프로젝트 관리",
    ],
  },
  {
    title: "수상 및 장학금",
    period: "2022년 - 2024년",
    keywords: "Competition, Scholarship, Recognition",
    activities: [
      "2024년 교내 도전학기 16기 웹개발부문 멘토 선발 및 장학금 수상",
      "2023년 제 20회 E-PPER(교내 알고리즘 경진대회) 장려상(7위) 수상",
      "2022년 교내 캡스톤 디자인 경진대회 은상(2위) 수상",
    ],
  },
];

export default function ActivitiesSection() {
  return (
    <section>
      <SectionHeader title="Activities & Awards" />
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <ExperienceItem
            key={index}
            title={activity.title}
            period={activity.period}
            keywords={activity.keywords}
            activities={activity.activities}
          />
        ))}
      </div>
    </section>
  );
}
