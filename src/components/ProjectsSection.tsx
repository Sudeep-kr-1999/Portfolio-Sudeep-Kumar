import { useState } from "react";
import {
  ArrowDownRight,
  Boxes,
  ChevronDown,
  Cpu,
  Layers3,
  Workflow,
} from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const projects = [
  {
    id: "01",
    title: "In-House Email Inbox",
    subtitle:
      "An intelligent workspace for high-volume collections communication.",
    category: "FULL STACK + GEN AI",
    accent: "project-art--inbox",
    icon: <Workflow size={22} />,
    summary:
      "A React + Redux inbox with a JWT-secured Spring Boot backend. The platform combines Hibernate / JPA customer mapping, AI-assisted intent and drafting workflows, and asynchronous dispatch through AWS SQS.",
    impact:
      "Processes 10,000+ emails per day across enterprise clients; reduced collections response time by 60%.",
    stack: ["React", "Redux", "Spring Boot", "JWT", "MySQL", "AWS SQS"],
    architecture: [
      "React + Redux inbox experience",
      "Spring Boot REST services with JWT authentication",
      "Hibernate / JPA persistence and customer mapping",
      "AI-assisted intent classification and draft generation",
      "AWS SQS asynchronous message dispatch",
    ],
  },
  {
    id: "02",
    title: "B2B Invoice Management",
    subtitle: "A clearer view of invoice lifecycles and payment timelines.",
    category: "FULL STACK + ML",
    accent: "project-art--invoice",
    icon: <Layers3 size={22} />,
    summary:
      "A B2B invoice management system built with React and Java Servlets, supporting CRUD operations and workflow automation. A Flask-based machine-learning model predicts invoice payment timelines.",
    impact:
      "Connects invoice operations with predictive payment-timeline insights.",
    stack: [
      "React",
      "Java Servlets",
      "Flask",
      "Machine learning",
    ],
    architecture: [
      "React interface for invoice management workflows",
      "Java Servlets for CRUD operations",
      "Workflow automation for invoice processes",
      "Flask machine-learning model for payment-timeline prediction",
    ],
  },
];

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState("01");
  const activeSection = useSelector(
    (state: RootState) => state.ui.activeSection,
  );
  return (
    <section
      id="projects"
      className={`section projects-section${activeSection === "projects" ? " is-current-section" : ""}`}
    >
      <div className="page-wrap">
        <div className="remote-section-topline">
          <span>
            <Boxes size={15} /> SELECTED WORK
          </span>
          <span>PROJECT ARCHIVE · 02</span>
        </div>
        <div className="project-heading-row">
          <div>
            <p className="eyebrow">A FEW THINGS I’VE BUILT</p>
            <h2>
              Complex problems.
              <br />
              <span className="text-gradient">Clear experiences.</span>
            </h2>
          </div>
          <p className="project-intro">
            A closer look at two product systems that bring together backend
            engineering, data, automation and frontend craft.
          </p>
        </div>
        <div className="projects-list">
          {projects.map((project) => {
            const isExpanded = expanded === project.id;
            return (
              <article
                className={`project-card ${isExpanded ? "project-card--expanded" : ""}`}
                key={project.id}
              >
                <div className={`project-art ${project.accent}`}>
                  <div className="project-art__chrome">
                    <span />
                    <span />
                    <span />
                    <small>{project.category}</small>
                  </div>
                  {project.id === "01" ? (
                    <div className="project-visual-stage">
                      <div className="inbox-visual">
                        <div className="inbox-sidebar">
                          <b>INBOX</b>
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="inbox-main">
                          <div className="inbox-title">
                            <span>Collections inbox</span>
                            <b>•••</b>
                          </div>
                          <div className="inbox-stat">
                            <strong>10,482</strong>
                            <span>messages handled</span>
                            <em>+18.4%</em>
                          </div>
                          <div className="inbox-rows">
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="inbox-ai">
                            <span>✳</span>
                            <div>
                              <b>AI suggested reply</b>
                              <small>Draft ready for review</small>
                            </div>
                            <strong>↗</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="project-visual-stage">
                      <div className="invoice-visual">
                        <div className="invoice-top">
                          <span>INVOICE OVERVIEW</span>
                          <b>•••</b>
                        </div>
                        <div className="invoice-total">
                          <small>OUTSTANDING AMOUNT</small>
                          <strong>₹ 8,42,500</strong>
                          <span>↗ 12.8% this month</span>
                        </div>
                        <div className="invoice-chart">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="invoice-foot">
                          <span>
                            PAID <b>68%</b>
                          </span>
                          <span>
                            PENDING <b>32%</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="project-art__stamp">{project.icon}</div>
                </div>
                <div className="project-content">
                  <div className="project-content__meta">
                    <span>{project.id} / CASE STUDY</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-impact">
                    <Cpu size={16} />
                    <span>{project.impact}</span>
                  </div>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <button
                    className="project-expand"
                    onClick={() => setExpanded(isExpanded ? "" : project.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Hide architecture" : "Explore architecture"}{" "}
                    <ChevronDown
                      size={16}
                      className={isExpanded ? "chevron-open" : ""}
                    />
                  </button>
                  {isExpanded && (
                    <div className="project-architecture">
                      <span className="architecture-label">
                        SYSTEM BREAKDOWN
                      </span>
                      <ol>
                        {project.architecture.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="projects-note">
          <span>
            <ArrowDownRight size={18} />
          </span>
          <p>
            Good software is a team sport. These projects reflect collaboration
            across product, engineering and operations.
          </p>
        </div>
      </div>
    </section>
  );
}
