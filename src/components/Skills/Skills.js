import React from "react";
import "./skills.css";
import SkillsPoints from "../SkillsPoints/SkillsPoints";
import Fade from "react-reveal/Fade";
function Skills() {
  const skillsList = [
    { id: 1, skillname: "C", value: 8 },
    { id: 2, skillname: "C++", value: 8 },
    { id: 3, skillname: "Python", value: 7 },
    { id: 4, skillname: "Java", value: 6 },
    {
      id: 5,
      skillname: "FrontEnd Development (HTML,CSS,Javascript)",
      value: 8.5,
    },
    {
      id: 6,
      skillname: "Bankend Development (NodeJS,Express)",
      value: 7,
    },
    { id: 7, skillname: "MongoDB", value: 6 },
    { id: 8, skillname: "MySQL", value: 6 },
    { id: 9, skillname: "React JS", value: 7 },
    { id: 10, skillname: "React Native", value: 6 },
    { id: 11, skillname: "Android Studio (Kotlin)", value: 6 },
  ];
  return (
    <Fade bottom duration={2000}>
      <div className="skills-container">
        <div className="skills-details-container">
          <div className="skills-heading">SKILLS</div>
          <div className="skill-points-container">
            {skillsList.map((skill) => (
              <SkillsPoints
                key={skill.id}
                skillname={skill.skillname}
                value={skill.value}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Skills;
