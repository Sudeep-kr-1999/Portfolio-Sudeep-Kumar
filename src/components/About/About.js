import React from "react";
import "./about.css";
import aboutPic from "./assets/profile.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
function About() {
  return (
    <Zoom>
      <div className="about-landing-page">
        <Fade left duration={1000} delay={500}>
          <div className="about-pic-division">
            <img src={aboutPic} alt="about-png" />
          </div>
        </Fade>
        <Fade right duration={1000} delay={500}>
          <div className="about-details-section">
            <div className="about-heading">ABOUT ME</div>
            <div className="about-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              ipsa quam consectetur corporis omnis laboriosam officia rem
              voluptatem quis quibusdam accusantium, error fuga voluptate
              recusandae itaque accusamus nihil explicabo voluptatibus porro
              ullam. Quis, libero. Provident amet dolores aliquid dolor nemo
              enim tempore laboriosam consequatur, dolorum corporis beatae qui
              doloremque possimus voluptas assumenda repellendus pariatur
              laudantium sequi alias iste sunt vel porro nihil fugiat? Ea.
              jiowioewioeioewoueerrrLorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              ipsa quam consectetur corporis omnis laboriosam officia rem
              voluptatem quis quibusdam accusantium, error fuga voluptate
              recusandae itaque accusamus nihil explicabo voluptatibus porro
              ullam. Quis, libero. Provident amet dolores aliquid dolor nemo
              enim tempore laboriosam consequatur, dolorum corporis beatae qui
              doloremque possimus voluptas assumenda repellendus pariatur
              laudantium sequi alias iste sunt vel porro nihil fugiat? Ea.
              jiowioewioeioewoueerrr
            </div>
            <div className="about-button">
              <div className="contact-me">Contact Me</div>
              <div className="download-cv">Download CV</div>
            </div>
          </div>
        </Fade>
      </div>
    </Zoom>
  );
}

export default About;
