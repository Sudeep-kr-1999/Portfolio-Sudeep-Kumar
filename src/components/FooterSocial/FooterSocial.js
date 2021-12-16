import React from "react";
import "./socialfooter.css";
import fb from "./assets/fb.png";
import github from "./assets/github.png";
import gmail from "./assets/gmail.png";
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
function FooterSocial({ socialname, identifier }) {
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
  return (
    <div className="social-footer">
      <div className="footer-icon">{socialimgJSX}</div>
      <div className="social-name">{socialname}</div>
    </div>
  );
}

export default FooterSocial;
