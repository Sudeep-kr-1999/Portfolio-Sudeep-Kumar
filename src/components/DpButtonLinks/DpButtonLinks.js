import React, { useState } from "react";
import "./dpbuttonlinks.css";

function DpButtonLinks(props) {
  const Facebook = "https://www.facebook.com/your.sudeepkumar";
  const Twitter = "https://twitter.com/_kumar_sudeep_";
  const Instagram = "https://www.instagram.com/sudeep.kumar.official/";
  const Github = "https://github.com/Sudeep-kr-1999";
  const Linkedin = "https://www.linkedin.com/in/sudeep-kumar-78416b191/";

  const [buttonType, setbuttonType] = useState("");
  const openLink = (e) => {
    const button = e.target.id;
    setbuttonType(button);
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
    <div className="button-icon" id={`${props.buttonName}`} onClick={openLink}>
      {props.component}
      {props.buttonName}
    </div>
  );
}
export default DpButtonLinks;
