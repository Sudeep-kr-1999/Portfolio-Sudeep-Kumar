import React from "react";
import "./navfooter.css";
function FooterNavigation({
  navhome,
  about,
  education,
  skills,
  experience,
  projects,
  certification,
  contacts,
  interests,
  handle,
}) {
  const gotoHome = (e) => {
    handle(e.target.id);
  };
  const gotoAbout = (e) => {
    handle(e.target.id);
  };
  const gotoEducation = (e) => {
    handle(e.target.id);
  };
  const gotoSkills = (e) => {
    handle(e.target.id);
  };
  const gotoExperience = (e) => {
    handle(e.target.id);
  };
  const gotoProjects = (e) => {
    handle(e.target.id);
  };
  const gotoCertifications = (e) => {
    handle(e.target.id);
  };
  const gotoContacts = (e) => {
    handle(e.target.id);
  };
  const gotoInterests = (e) => {
    handle(e.target.id);
  };
  return (
    <div className="footer-nav">
      <div className="footer-nav-home" id="Home" onClick={gotoHome}>
        {navhome}
      </div>
      <div className="footer-nav-about" id="About" onClick={gotoAbout}>
        {about}
      </div>
      <div
        className="footer-nav-education"
        id="Education"
        onClick={gotoEducation}
      >
        {education}
      </div>
      <div className="footer-nav-skills" id="Skills" onClick={gotoSkills}>
        {skills}
      </div>
      <div
        className="footer-nav-experience"
        id="Experience"
        onClick={gotoExperience}
      >
        {experience}
      </div>
      <div className="footer-nav-projects" id="Projects" onClick={gotoProjects}>
        {projects}
      </div>
      <div
        className="footer-nav-certfications"
        id="Certification"
        onClick={gotoCertifications}
      >
        {certification}
      </div>
      <div className="footer-nav-contacts" id="Contacts" onClick={gotoContacts}>
        {contacts}
      </div>
      <div
        className="footer-nav-interests"
        id="Interests"
        onClick={gotoInterests}
      >
        {interests}
      </div>
    </div>
  );
}

export default FooterNavigation;
