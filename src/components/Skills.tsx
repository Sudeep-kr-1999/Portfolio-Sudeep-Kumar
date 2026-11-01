import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="THE TOOLKIT"
          title={
            <>
              Built across the
              <br />
              <span className="text-gradient">whole stack.</span>
            </>
          }
          description="A practical toolkit for designing, delivering and operating production software."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card__head">
                <span>0{index + 1}</span>
                <ArrowUpRight size={17} />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
