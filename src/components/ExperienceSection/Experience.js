import React from "react";
import ExperienceCards from "../ExperienceCards/ExperienceCards";
import "./experience.css";
import Bounce from "react-reveal/Bounce";
function Experience() {
  const workandExperience = [
    {
      workingtitle: "Summer Training in Backend Development",
      workingOraganisation: "Board Infinity",
      workingDuration: "1 June 2021 - 15 July 2021",
      workingExperienceDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima deserunt, provident nisi ipsum assumenda quod eos ex dolores ab vitae.",
      role: [
        "role1",
        "role2",
        "role3",
      ],
      learningOutcomes: ["role1", "role2", "role3"],
    },
    {
      workingtitle: "Summer Training in Backend Development",
      workingOraganisation: "Board Infinity",
      workingDuration: "1 June 2021 - 15 July 2021",
      workingExperienceDescription:
        "role1",
      role: [
        "role1",
        "role2",
        "role3",
      ],
      learningOutcomes: ["role1", "role2", "role3"],
    },
   
  ];

  return (
    <Bounce bottom duration={2000}>
      <div className="experience-container">
        <div className="experience-heading">WORKS AND EXPERIENCE</div>
        <div className="experience-cards-container">
          {workandExperience.map((ele) => (
            <ExperienceCards
              title={ele.workingtitle}
              organisation={ele.workingOraganisation}
              duration={ele.workingDuration}
              description={ele.workingExperienceDescription}
              role={ele.role}
              learningOutcome={ele.learningOutcomes}
            />
          ))}
        </div>
      </div>
    </Bounce>
  );
}

export default Experience;
