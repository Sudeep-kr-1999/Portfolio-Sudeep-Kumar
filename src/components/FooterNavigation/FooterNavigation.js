import React from "react";
import "./navfooter.css";
function FooterNavigation({navhome,about,education,skills,experience,projects,certification,contacts}) {
  return (
    <div className="footer-nav">
      <div className="footer-nav-home">{navhome}</div>
      <div className="footer-nav-about">{about}</div>
      <div className="footer-nav-education">{education}</div>
      <div className="footer-nav-skills">{skills}</div>
      <div className="footer-nav-experience">{experience}</div>
      <div className="footer-nav-projects">{projects}</div>
      <div className="footer-nav-certfications">{certification}</div>
      <div className="footer-nav-contacts">{contacts}</div>
    </div>
  );
}

export default FooterNavigation;
