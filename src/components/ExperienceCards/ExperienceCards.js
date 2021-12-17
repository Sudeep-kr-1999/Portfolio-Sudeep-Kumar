import React from "react";
import IndividualLearningOutcome from "../IndividualLearningOutcomeComponent/IndividualLearningOutcome";
import IndividualRole from "../IndividualRoleComponent/IndividualRole";
import Bounce from 'react-reveal/Bounce';
import "./cardsex.css";
function ExperienceCards(props) {
  const rolesList = props.role;
  const learningOutcomeList = props.learningOutcome;
  return (
    <Bounce bottom duration={2000} delay={500}>
      <div className="experience-cards">
        <div className="basic-details">
          <div className="working-title">{props.title}</div>
          <div className="working-organisation">{props.organisation}</div>
          <div className="duration">{props.duration}</div>
        </div>

        <div className="experience-description">{props.description}</div>
        <div className="roles-learning-container">
          <div className="role-in-experience">
            <div className="role-heading">ROLES</div>
            <div className="role-description">
              {rolesList.map((ele) => (
                <IndividualRole role={ele} />
              ))}
            </div>
          </div>
          <div className="learning-outcomes">
            <div className="learning-outcome-heading">LEARNING OUTCOMES</div>
            <div className="learning-outcome-descripton">
              {learningOutcomeList.map((ele) => (
                <IndividualLearningOutcome learningOutcome={ele} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Bounce>
  );
}

export default ExperienceCards;
