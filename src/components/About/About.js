import React from "react";
import "./about.css";
import aboutPic from "./assets/profile.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
function About() {
  const CVlink="https://drive.google.com/file/d/1r-ckqtm9KvZ9zIZf5-EuLfwZ4a87iVVj/view?usp=sharing";
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

  const gotoContacts=(e)=>{
    console.log("GO TO CONTACTS");
  }
  const saveCV=(e)=>{
    e.preventDefault();
    window.location.href=CVlink;
  }
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
              <button className="contact-me" onClick={gotoContacts}>Contact Me</button>
              <button className="download-cv" onClick={saveCV}>Download CV</button>
            </div>
          </div>
        </Fade>
      </div>
    </Zoom>
  );
}

export default About;
