import React from "react";
import {
  Award,
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
  School,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

const educationIcons = [School, BookOpen, GraduationCap];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="page-wrap education-layout">
        <div className="education-intro">
          <SectionHeading
            eyebrow="THE LEARNING JOURNEY"
            title={
              <>
                From first lessons
                <br />
                <span className="text-gradient">to software craft.</span>
              </>
            }
            description="A steady path through school, science and computer science."
          />
          <div className="education-note">
            <GraduationCap size={18} />
            <span>Three milestones that shaped how I learn and build.</span>
          </div>
        </div>
        <ol className="education-timeline">
          {education.map((entry, index) => {
            const Icon = educationIcons[index] ?? GraduationCap;
            return (
              <li className="education-item" key={entry.institution}>
                <span className="education-item__marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <article className="education-card">
                  <div className="education-card__top">
                    <div className="education-card__icon">
                      <Icon size={20} />
                    </div>
                    <div className="education-card__meta">
                      <span className="education-level">{entry.level}</span>
                      <span className="education-period">
                        <CalendarDays size={13} /> {entry.period}
                      </span>
                    </div>
                    <span className="education-result">
                      <Award size={14} /> {entry.result}
                    </span>
                  </div>
                  <h3>{entry.degree}</h3>
                  <p>{entry.institution}</p>
                  <span className="education-location">
                    <MapPin size={13} /> {entry.location}
                  </span>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
