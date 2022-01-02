import React, { useState } from "react";
import "./socialfooter.css";
import fb from "./assets/fb.png";
import github from "./assets/github.png";
import gmail from "./assets/gmail.png";
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
function FooterSocial({ socialname, identifier }) {
  const [buttonType, setbuttonType] = useState("");
  const Facebook = "https://www.facebook.com/your.sudeepkumar";
  const Twitter = "https://twitter.com/_kumar_sudeep_";
  const Instagram = "https://www.instagram.com/sudeep.kumar.official/";
  const Github = "https://github.com/Sudeep-kr-1999";
  const Linkedin = "https://www.linkedin.com/in/sudeep-kumar-78416b191/";
  let socialimgJSX = "";
  if (identifier === "Gmail") {
    socialimgJSX = <img src={gmail} alt="gmailicon" />;
  } else if (identifier === "Facebook") {
    socialimgJSX = <img src={fb} alt="fbicon" />;
  } else if (identifier === "Github") {
    socialimgJSX = <img src={github} alt="giticon" />;
  } else if (identifier === "Instagram") {
    socialimgJSX = <img src={insta} alt="instaicon" />;
  } else if (identifier === "Twitter") {
    socialimgJSX = <img src={twitter} alt="twittericon" />;
  } else if (identifier === "Linkedin") {
    socialimgJSX = <img src={linkedin} alt="linkedinicon" />;
  }
  const gotoLink = (e) => {
    e.preventDefault();
    setbuttonType(e.target.id);
  };
  if (buttonType === "Facebook") {
    window.location.href = Facebook;
  } else if (buttonType === "Twitter") {
    window.location.href = Twitter;
  } else if (buttonType === "Instagram") {
    window.location.href = Instagram;
  } else if (buttonType === "Github") {
    window.location.href = Github;
  } else if (buttonType === "Linkedin") {
    window.location.href = Linkedin;
  }
  return (
    <div className="social-footer">
      <div className="footer-icon">{socialimgJSX}</div>
      <div className="social-name" onClick={gotoLink} id={socialname}>
        {socialname}
      </div>
    </div>
  );
}

export default FooterSocial;
