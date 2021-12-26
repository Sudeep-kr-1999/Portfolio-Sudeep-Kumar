import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navhamburger.css";
import { useState } from "react";
import Flip from "react-reveal/Flip";
import MediaQuery from "react-responsive";
function NavHamburger() {
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
            <div className="navoptions-home-hamburger hamburger-option">
              <h3 id="home-text">Home</h3>
            </div>
            <div className="navoptions-about-hamburger hamburger-option">
              <h3 id="about-text">About</h3>
            </div>
            <div className="navoptions-education-details-hamburger hamburger-option">
              <h3 id="education-details-text">Educational Details</h3>
            </div>
            <div className="navoptions-skills-hamburger hamburger-option">
              <h3 id="skills-text">Skills</h3>
            </div>
            <div className="navoptions-experience-hamburger hamburger-option">
              <h3 id="experience-text">Experience</h3>
            </div>
            <div className="navoptions-projects-hamburger hamburger-option">
              <h3 id="project-text">Projects</h3>
            </div>
            <div className="navoptions-interests-hamburger hamburger-option">
              <h3 id="interest-text">Interests</h3>
            </div>
            <div className="navoptions-certification-hamburger hamburger-option">
              <h3 id="certification-text">Certification</h3>
            </div>
            <div className="navoptions-contact-hamburger-hamburger hamburger-option">
              <h3 id="contact-text">Contacts</h3>
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
