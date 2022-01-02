import React from "react";
import "../NavigationMenu/navigationmenu.css";
function NavigationMenu({ handleName }) {
  const clickHome = (e) => {
    handleName(e.target.id);
  };
  const clickAbout = (e) => {
    handleName(e.target.id);
  };
  const clickEducation = (e) => {
    handleName(e.target.id);
  };
  const clickSkills = (e) => {
    handleName(e.target.id);
  };
  const clickExperience = (e) => {
    handleName(e.target.id);
  };
  const clickProjects = (e) => {
    handleName(e.target.id);
  };
  const clickInterest = (e) => {
    handleName(e.target.id);
  };
  const clickCertification = (e) => {
    handleName(e.target.id);
  };
  const clickContacts = (e) => {
    handleName(e.target.id);
  };
  return (
    <div className="top-nav-navoptions">
      <div className="navoptions-home navoptions">
        <h3 id="Home" onClick={clickHome}>
          Home
        </h3>
      </div>
      <div className="navoptions-about navoptions">
        <h3 id="About" onClick={clickAbout}>
          About
        </h3>
      </div>
      <div className="navoptions-education-details navoptions">
        <h3 id="Education" onClick={clickEducation}>
          Educational Details
        </h3>
      </div>
      <div className="navoptions-skills navoptions">
        <h3 id="Skills" onClick={clickSkills}>
          Skills
        </h3>
      </div>
      <div className="navoptions-experience navoptions">
        <h3 id="Experience" onClick={clickExperience}>
          Experience
        </h3>
      </div>
      <div className="navoptions-projects navoptions">
        <h3 id="Projects" onClick={clickProjects}>
          Projects
        </h3>
      </div>
      <div className="navoptions-interests navoptions">
        <h3 id="Interests" onClick={clickInterest}>
          Interests
        </h3>
      </div>
      <div className="navoptions-certification navoptions">
        <h3 id="Certification" onClick={clickCertification}>
          Certification
        </h3>
      </div>
      <div className="navoptions-contact navoptions">
        <h3 id="Contacts" onClick={clickContacts}>
          Contacts
        </h3>
      </div>
    </div>
  );
}

export default NavigationMenu;
