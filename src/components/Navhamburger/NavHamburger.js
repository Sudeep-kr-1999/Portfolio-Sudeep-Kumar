import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navhamburger.css";
import { useState } from "react";
import Flip from "react-reveal/Flip";
import MediaQuery from "react-responsive";
function NavHamburger({ handleName }) {
  const [hamburgerDisplayState, sethamburgerDisplayState] = useState("flex");
  const [closeIconDisplayState, setcloseIconDisplayState] = useState("none");
  const [hamburgerOptionsDisplayState, sethamburgerOptionsDisplayState] =
    useState("none");
  const hamburgerClick = (e) => {
    if (hamburgerDisplayState === "flex") {
      sethamburgerDisplayState("none");
      setcloseIconDisplayState("flex");
      sethamburgerOptionsDisplayState("flex");
    }
  };
  const closeIconClick = (e) => {
    if (closeIconDisplayState === "flex") {
      setcloseIconDisplayState("none");
      sethamburgerDisplayState("flex");
      sethamburgerOptionsDisplayState("none");
    }
  };

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
    <>
      <MediaQuery maxWidth={1600}>
        <Flip right>
          <div
            className="nav-hamburger-content"
            style={{ display: `${hamburgerOptionsDisplayState}` }}
          >
            <span
              className="nav-close-icon"
              style={{
                display: `${closeIconDisplayState}`,
                marginTop: "10px",
              }}
            >
              <CloseIcon fontSize="large" onClick={closeIconClick} />
            </span>
            <div
              className="navoptions-home-hamburger hamburger-option"
              onClick={clickHome}
            >
              <h3 id="Home">Home</h3>
            </div>
            <div
              className="navoptions-about-hamburger hamburger-option"
              onClick={clickAbout}
            >
              <h3 id="About">About</h3>
            </div>
            <div
              className="navoptions-education-details-hamburger hamburger-option"
              onClick={clickEducation}
            >
              <h3 id="Education">Educational Details</h3>
            </div>
            <div
              className="navoptions-skills-hamburger hamburger-option"
              onClick={clickSkills}
            >
              <h3 id="Skills">Skills</h3>
            </div>
            <div
              className="navoptions-experience-hamburger hamburger-option"
              onClick={clickExperience}
            >
              <h3 id="Experience">Experience</h3>
            </div>
            <div
              className="navoptions-projects-hamburger hamburger-option"
              onClick={clickProjects}
            >
              <h3 id="Projects">Projects</h3>
            </div>
            <div
              className="navoptions-interests-hamburger hamburger-option"
              onClick={clickInterest}
            >
              <h3 id="Interests">Interests</h3>
            </div>
            <div
              className="navoptions-certification-hamburger hamburger-option"
              onClick={clickCertification}
            >
              <h3 id="Certification">Certification</h3>
            </div>
            <div
              className="navoptions-contact-hamburger hamburger-option"
              onClick={clickContacts}
            >
              <h3 id="Contacts">Contacts</h3>
            </div>
          </div>
        </Flip>
        <Flip left duration={2000}>
          <span
            className="nav-hamburger-icon"
            style={{ display: `${hamburgerDisplayState}` }}
          >
            <MenuIcon fontSize="large" onClick={hamburgerClick} />
          </span>
        </Flip>
      </MediaQuery>
    </>
  );
}

export default NavHamburger;
