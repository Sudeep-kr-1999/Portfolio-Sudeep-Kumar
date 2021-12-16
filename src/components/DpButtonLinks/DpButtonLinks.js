import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./dpbuttonlinks.css";
function DpButtonLinks({ classname }) {
  return (
    <div>
      {classname === "facebook-button" && (
        <div className={classname}>
          <FacebookRoundedIcon fontSize="large" />
        </div>
      )}
      {classname === "twitter-button" && (
        <div className={classname}>
          <TwitterIcon fontSize="large" />
        </div>
      )}
      {classname === "instagram-button" && (
        <div className={classname}>
          <LinkedInIcon fontSize="large" />
        </div>
      )}
      {classname === "linkedin-button" && (
        <div className={classname}>
          <InstagramIcon fontSize="large" />
        </div>
      )}
      {classname === "github-button" && (
        <div className={classname}>
          <GitHubIcon fontSize="large" />
        </div>
      )}
    </div>
  );
}

export default DpButtonLinks;
