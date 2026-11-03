import { ArrowUpRight, BriefcaseBusiness, Check } from "lucide-react";

const roles = [
  {
    company: "Birlasoft",
    title: "Technical Specialist - Application Development",
    period: "Sep 2026 — Present",
    location: "Hyderabad, Telangana, India · On-site",
    current: true,
    employment: "Full-time",
    context: "Synchrony Financial project",
    points: [
      "Ramped up on core enterprise financial systems for the Synchrony Financial project, actively learning the existing Java and Spring Boot backend architecture and codebase.",
      "Acquired familiarity with project features and development workflows, assisting with initial React UI component enhancements and bug fixes under team guidance.",
    ],
    tags: ["Java", "Spring Boot", "React", "Enterprise finance"],
  },
  {
    company: "HighRadius",
    title: "Agent Developer",
    period: "Jan 2026 — Aug 2026",
    location: "Hyderabad, Telangana, India · On-site",
    employment: "Full-time",
    context: "Fintech product engineering",
    points: [
      "Spearheaded a full-stack email inbox platform using React, Redux and Spring Boot, handling 10,000+ daily emails with AI-assisted drafting and reducing customer collections response time by 60%.",
      "Engineered resilient REST microservices with AWS SQS asynchronous messaging, circuit-breaker patterns and distributed tracing, lowering cascading failure incidents by 40%.",
      "Optimized high-volume batch processing by re-engineering cron jobs with multithreading and chunked MySQL operations, cutting large-dataset execution time by over 40%.",
      "Developed a Payment Commitment module with MySQL transaction management and optimistic locking, accelerating invoice reconciliation by 30% for accounts-receivable teams.",
      "Improved API responsiveness by 45% through MySQL indexing, HQL query restructuring and Redis caching, lowering average p95 latency from 420 ms to 230 ms.",
    ],
    tags: ["Java", "React", "Redux", "Spring Boot", "AWS SQS", "MySQL", "Redis"],
  },
  {
    company: "HighRadius",
    title: "Software Development Engineer",
    period: "Jan 2025 — Dec 2025",
    location: "Hyderabad, Telangana, India · On-site",
    employment: "Full-time",
    context: "Email inbox and customer communication workflows",
    points: [
      "Built a React-based in-house email inbox dashboard backed by Spring Boot and Java, integrating email scraping, customer mapping and workflow intelligence.",
      "Implemented AI-assisted draft generation, manual drafting and automated email sending to improve processing visibility and user efficiency.",
      "Added AI-driven email intent prediction and automated reply generation, cutting manual response time by 60%.",
      "Designed AWS-backed services using SQS, Auto Scaling, EC2 and S3; optimized concurrency and thread-lock handling to improve stability under load.",
      "Refactored microservices and cron-based services, adding monitoring, multithreading and chunked data processing for smoother workflows and faster handling of large client datasets.",
    ],
    tags: ["Java", "React", "Spring Boot", "AWS", "Microservices", "AI workflows"],
  },
  {
    company: "HighRadius",
    title: "Associate Software Engineer",
    period: "Jul 2023 — Dec 2024",
    location: "Hyderabad, Telangana, India · On-site",
    employment: "Full-time",
    context: "Email services · Payments · Data synchronization",
    points: [
      "Developed a Spring Boot email inbox service for ingesting, tracking and classifying customer emails, improving collections workflow accuracy.",
      "Designed and shipped a Payment Commitment module, improving invoice tracking reliability and reducing reconciliation delays.",
      "Built an AWS SQS-based cron service for cross-platform data synchronization, reducing manual intervention by 60% and improving sync accuracy by 70%.",
      "Improved API performance through query tuning, caching strategies and efficient Java data structures.",
    ],
    tags: ["Java", "Spring Boot", "AWS SQS", "MySQL", "Redis"],
  },
  {
    company: "HighRadius",
    title: "Intern",
    period: "Jun 2022 — Jun 2023",
    location: "Bhubaneswar, Odisha, India",
    employment: "Full-time",
    context: "Dot-One Analytics platform",
    points: [
      "Built analytics dashboards and Java-based parsing agents for Dot-One Analytics, enabling real-time data insights.",
      "Automated regression testing with Selenium scripts, reducing manual QA effort by 85%.",
      "Integrated the Google Sheets API for automated report generation and data synchronization.",
    ],
    tags: ["JavaScript", "React.js", "Java", "Selenium", "Google Sheets API"],
  },
  {
    company: "HighRadius",
    title: "Summer Internship",
    period: "Jan 2022 — May 2022",
    location: "Bhubaneswar, Odisha, India · Remote",
    employment: "Internship",
    context: "B2B Invoice Management System",
    points: [
      "Built a B2B invoice management system with React and Java Servlets, enabling CRUD operations and workflow automation.",
      "Integrated a Flask-based machine-learning model to predict invoice payment timelines and improve business predictability.",
    ],
    tags: ["React", "Java Servlets", "Flask", "Machine learning"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="page-wrap">
        <div className="remote-section-topline">
          <span>
            <BriefcaseBusiness size={15} /> CAREER TIMELINE
          </span>
          <span>CAREER TIMELINE · 01</span>
        </div>
        <div className="experience-heading-row">
          <div>
            <p className="eyebrow">EXPERIENCE THAT SHIPS</p>
            <h2>
              From ideas to
              <br />
              <span className="text-gradient">production systems.</span>
            </h2>
          </div>
          <p className="experience-intro">
            From internship to technical specialist, building fintech products,
            enterprise systems and cloud-native workflows.
          </p>
        </div>
        <div className="timeline">
          {roles.map((role, index) => (
            <article
              className={`timeline-item${role.current ? " timeline-item--current" : ""}`}
              key={`${role.company}-${role.title}`}
            >
              <div className="timeline-marker">
                <span>
                  {role.current ? (
                    <span className="timeline-marker__pulse" />
                  ) : (
                    String(index + 1).padStart(2, "0")
                  )}
                </span>
              </div>
              <div className="timeline-card">
                <div className="timeline-card__top">
                  <div>
                    <span className="timeline-date">{role.period}</span>
                    {role.current && (
                      <span className="current-pill">
                        <i /> CURRENT
                      </span>
                    )}
                  </div>
                  <span className="timeline-location">{role.location}</span>
                </div>
                <h3>{role.title}</h3>
                <div className="timeline-company">
                  {role.company} <ArrowUpRight size={14} />
                </div>
                <p className="timeline-context">
                  {role.employment}
                  {role.context && <span> · {role.context}</span>}
                </p>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>
                      <Check size={15} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {role.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="experience-footnote">
          <span className="footnote-rule" />{" "}
          <span>
            Experience across fintech engineering, enterprise systems,
            analytics and cloud-native workflows.
          </span>
        </div>
      </div>
    </section>
  );
}
