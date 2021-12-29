import React from "react";
import "../DisplayPage/displaypage.css";
import DpButtonLinks from "../DpButtonLinks/DpButtonLinks";
import background from "./assets/background15.jpg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
function DisplayPage() {
  const name = "Sudeep Kumar Agrawal";
  const specification = "Student and Developer";
  const buttonType = [
    { name: "Github", id: 1, component: <GitHubIcon /> },
    { name: "Linkedin", id: 2, component: <LinkedInIcon /> },
    { name: "Facebook", id: 3, component: <FacebookRoundedIcon /> },
    { name: "Instagram", id: 4, component: <InstagramIcon /> },
    { name: "Twitter", id: 5, component: <TwitterIcon /> },
  ];
  return (
    <div className="display-page-body">
      <img src={background} alt="background" className="display-bg" />
      <div className="display-page-content">
        <div className="display-name">{name}</div>
        <div className="display-specification">{specification}</div>
        <div className="display-buttons">
          {buttonType.map((buttonObj) => (
            <DpButtonLinks
              key={buttonObj.id}
              buttonName={buttonObj.name}
              component={buttonObj.component}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default DisplayPage;
