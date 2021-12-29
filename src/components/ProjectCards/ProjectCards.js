import React from "react";
import "./projectCards.css";
import Zoom from "react-reveal/Zoom";

function ProjectCards(props) {
  return (
    <div className="projectCards">
      <Zoom duration={2000}>
        <div className="project-title">{props.projectName}</div>
        <div className="technology-used">{props.technologyUsed}</div>
        <div className="project-description">{props.description}</div>
        <div className="project-link">
          <a href={props.link}>Visit Project</a>
        </div>
      </Zoom>
    </div>
  );
}

export default ProjectCards;
