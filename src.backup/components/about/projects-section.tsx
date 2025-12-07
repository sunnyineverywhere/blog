import YearSection from "../year-section";
import ProjectItem from "./project-item";

interface Project {
  title: string;
  period: string;
  keywords: string;
  activities: string[];
  position?: string;
  githubUrl?: string;
}

interface ProjectsByYear {
  year: string;
  projects: Project[];
}

const projectsByYear: ProjectsByYear[] = [
  {
    year: "2024",
    projects: [
      {
        title: "입시학원 단어장 자동 생성 도구 개발 (외주)",
        period: "2024년 5월 - 8월",
        keywords: "Python, FastAPI, Langchain(RAG), React.js, AWS, MongoDB",
        position: "Full-Stack Developer",
        activities: [
          "입력받은 영단어에 대해 예문, 반의어, 동의어, 영영 뜻으로 단어장과 시험지 파일을 자동 생성하는 사내 도구 개발",
          "시험지 저장, 결과 저장 및 시각화, 테스트 결과 카카오톡 송부 등의 추가 기능 개발",
          "기존 하루 4시간 이상 걸리던 작업 시간을 10분 이하로 단축",
          "다른 학원에 회원제로 해당 기능을 제공하여 추가적인 수익 창출에 기여",
        ],
      },
      {
        title: "LP - 리그 오브 레전드 전적 기반 챔피언 추천 서비스",
        period: "2023년 12월 - 2024년 7월",
        keywords: "SpringBoot, Kotlin, Kafka, MongoDB, AWS Lambda",
        position: "Backend Developer",
        githubUrl: "https://github.com/boaz-lol/lp-server",
        activities: [
          "리그오브레전드 유저의 플레이 스타일과 게임 전적 데이터 기반 개인화된 챔피언 추천 서비스",
          "Kafka 기반 이벤트 스트리밍 구조 설계로 API 서버, 배치 서버, 머신러닝 서버 간 비동기 메시지 흐름 구성",
          "MongoDB와 MySQL 연동을 통한 대용량 데이터 병행 처리 시스템 설계",
          "AWS Lambda와 S3를 활용한 ETL 파이프라인 구축으로 외부 크롤링 데이터의 주기적 수집·전처리·적재 자동화",
        ],
      },
    ],
  },
  {
    year: "2023",
    projects: [
      {
        title: "QCARD - 개발자를 위한 기술 면접 도우미",
        period: "2023년 8월 - 2024년 2월",
        keywords: "SpringBoot, Python, FastAPI, Kafka, Langchain",
        position: "Backend Developer",
        githubUrl: "https://github.com/Q-CARD/QCard-server",
        activities: [
          "개발자 기술 면접 대비 및 CS 지식 복습을 위한 무료 AI 서비스 개발",
          "모의 면접을 통한 기술 질문 답변 녹음 및 첨삭, 꼬리 질문 제공 기능",
          "SpringBoot 백엔드 서버의 게시판 커뮤니티 기능과 silent refresh REST API 설계 및 구현",
          "웹소켓과 Kafka를 활용한 음성 답변 첨삭 기능의 안정적 처리 시스템 구축",
        ],
      },
      {
        title: "SnapSpot - 지역 기반 스냅사진 작가 예약 플랫폼",
        period: "2023년 5월 - 11월",
        keywords: "SpringBoot, Redis, MySQL, QueryDSL, AWS",
        position: "Backend Developer & Project Lead",
        githubUrl: "https://github.com/Snap-Spot/snapspot-api",
        activities: [
          "2023년 관광데이터 활용공모전 장려상 수상",
          "인스타그램 스냅사진 작가들의 정보와 후기를 찾기 어려운 문제를 해결하기 위한 플랫폼 서비스 개발",
          "활동 지역, 날짜, 전문 분야, 가격, 리뷰 등의 필터를 사용한 작가 검색 및 포트폴리오 조회 기능",
          "예약 시스템 API 개발 및 사진작가 검색 필터 API 성능 개선",
          "프로젝트 전체 과정 진행 리드 및 팀원별 업무 분배, IR 작성 및 PT",
        ],
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <>
      {projectsByYear.map((yearData) => (
        <YearSection key={yearData.year} year={yearData.year}>
          {yearData.projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              period={project.period}
              keywords={project.keywords}
              activities={project.activities}
              position={project.position}
              githubUrl={project.githubUrl}
            />
          ))}
        </YearSection>
      ))}
    </>
  );
}
