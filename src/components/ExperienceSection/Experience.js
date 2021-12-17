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
        "This is a Summer Training about the Backend Development in NodeJS, Express and MongoDB hosted by Board Infinity.This training taught us to integrate the backend database with the frontend user Interfaces. It also taught us to create server using Nodejs and about different databases we can use to store information, it also help us to know about different API Calls needed to intereact with the backend server.",
      role: ["We are required to understand the working of Nodejs and Express",
              "We are required to create the nodejs server and the endpoints to call with the help of Rest API ",
              "We are required to integrate the backend to the frontend and get the responses."
       ],
      learningOutcomes: ["We learnt about the NodeJs and Express",
       "We learnt to create the server and endpoints with the help of NodeJs And Express",
        "We learnt to work with databases like MongoDB and using Mongoose Client to do specific operation in datbase",
        "We learnt to integrate our own database with the frontend and also about the hosting of website"
      ],
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
