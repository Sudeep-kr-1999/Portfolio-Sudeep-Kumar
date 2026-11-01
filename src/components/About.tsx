import React from "react";
import { ArrowUpRight, Braces, Layers3, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, highlights } from "../data/portfolio";

const principles = [
  {
    icon: <Workflow size={21} />,
    title: "Systems thinking",
    text: "I look beyond individual endpoints to understand how services, data and people work together.",
  },
  {
    icon: <Layers3 size={21} />,
    title: "End-to-end ownership",
    text: "Comfortable moving between API design, persistence, frontend state and deployment workflows.",
  },
  {
    icon: <Braces size={21} />,
    title: "Purposeful execution",
    text: "I value maintainable code, measured performance and improvements that matter to users.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title={
            <>
              Engineering that works
              <br />
              <span className="text-gradient">in the real world.</span>
            </>
          }
          description={profile.headline}
        />
        <div className="about-grid">
          <div className="about-main-copy">
            <p className="about-lead">{profile.summary}</p>
            <p className="body-copy">
              My work spans high-volume email platforms, enterprise financial
              systems, payment commitments, data synchronization, analytics
              dashboards and invoice workflows. I enjoy making complex systems
              easier to operate and shaping interfaces that make powerful tools
              feel simple.
            </p>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="principles-list">
            {principles.map((item, index) => (
              <div className="principle-row" key={item.title}>
                <div className="principle-icon">{item.icon}</div>
                <div>
                  <span className="principle-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="metrics-grid">
          {highlights.map((metric, index) => (
            <div className="metric-card" key={metric.label}>
              <span className="metric-index">0{index + 1} / IMPACT</span>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
