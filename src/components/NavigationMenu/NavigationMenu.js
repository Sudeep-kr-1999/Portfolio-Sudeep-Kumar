import React from "react";
import "../NavigationMenu/navigationmenu.css";
function NavigationMenu() {
  return (
    <div className="top-nav-navoptions">
      <div className="navoptions-home navoptions">
        <h3 id="home-text">Home</h3>
      </div>
      <div className="navoptions-about navoptions">
        <h3 id="about-text">About</h3>
      </div>
      <div className="navoptions-education-details navoptions">
        <h3 id="education-details-text">Educational Details</h3>
      </div>
      <div className="navoptions-skills navoptions">
        <h3 id="skills-text">Skills</h3>
      </div>
      <div className="navoptions-experience navoptions">
        <h3 id="experience-text">Experience</h3>
      </div>
      <div className="navoptions-projects navoptions">
        <h3 id="project-text">Projects</h3>
      </div>
      <div className="navoptions-interests navoptions">
        <h3 id="interest-text">Interests</h3>
      </div>
      <div className="navoptions-certification navoptions">
        <h3 id="certification-text">Certification</h3>
      </div>
      <div className="navoptions-contact navoptions">
        <h3 id="contact-text">Contacts</h3>
      </div>
    </div>
  );
}

export default NavigationMenu;
