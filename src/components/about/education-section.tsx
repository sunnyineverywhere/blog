import SectionHeader from "./section-header";
import ExperienceItem from "../experience-item";

export default function EducationSection() {
  return (
    <section>
      <SectionHeader title="Education" />
      <div className="space-y-6">
        <ExperienceItem
          title="이화여자대학교 컴퓨터공학과 학사"
          period="2024년 8월 졸업"
          keywords="Computer Science, Cloud Computing, Leadership Experience"
          activities={[
            "컴퓨터공학과 학사 학위 취득",
            "교내 웹 개발 동아리 @EFUB 3기 운영진(대표)",
            "다양한 웹/자바 기반 백엔드 프로젝트 리딩",
          ]}
        />
      </div>
    </section>
  );
}
