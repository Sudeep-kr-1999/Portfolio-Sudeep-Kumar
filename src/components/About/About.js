import React from "react";
import "./about.css";
import aboutPic from "./assets/profile.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
function About() {
  const aboutString=`Hello, My name is Sudeep Kumar and currently I am a third year
  undergraduate persuing Bachelor of Technology in Computer Science
  and Engineering (B.Tech CSE) from Lovely Professional University,
  Phagwara, Punjab. Talking about me , I am tech enthusiast who is
  very much interested in finding reasons for any actions. I am very
  much interested in the field of Development which includes Full
  Stack Web Development , Android Development and IOS as well. I
  always feels that there is no end of learing and therfore i always
  try to learn new technlogies related to development to enhance
  my skills further and I am looking forward to contribute with my
  skills the best way possible for the betterment of the society.`
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
              {aboutString}
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
