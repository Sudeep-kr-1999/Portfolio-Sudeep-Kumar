import React from "react";
import "./cards.css";
import Fade from "react-reveal/Fade";
function EducationDetailsCards(props) {
  return (
    <div className="education-cards">
      <Fade bottom duration={2000} delay={1000}>
        <div className="card-image">
          <img src={props.logo} alt="logo" />
        </div>
        <div className="education-standard">{props.educationType}</div>
        <div className="education-subheading">{props.educationSubDetail}</div>
        <div className="organisation-name">{props.organisationName}</div>
        <div className="education-organisation-address">
          {props.organisationAddress}
        </div>
        <div className="education-duration">{props.educationDuration}</div>
        <div className="result">{props.results}</div>
      </Fade>
    </div>
  );
}

export default EducationDetailsCards;
