import React from "react";
import "./projectComponent.css";
import Fade from "react-reveal/Fade";
import ProjectCards from "../ProjectCards/ProjectCards";
function ProjectComponent() {
  const projectList = [
    {
      projectName: "Task Manager",
      technologyUsed: "NodeJS,Express,MongoDB,Html,CSS,JavaScript",
      description:
        "This is a Task Manager Using Nodejs , Express and MongoDB . User can able to save the task which he/she are willing to do and can keep track of the schedule. Once completed the user can also mark the task as completed . User can also able to rename the task and also delete it once done.",
      link: "https://github.com/Sudeep-kr-1999/Task-Manager-",
    },
    {
      projectName: "URL Shortner",
      technologyUsed: "NodeJS,Express,MongoDB,Html,CSS,JavaScript",
      description:
        "This project is of URL Shortner. URL Shortner is a way through which we can make a  short URL corresponding to a long long URL . Since it is not a good practice to having long URL So It wil help us to convert the long URL to a single string URL of length 10 . This short URL will redirect to the Actual long URL when actually used. This help many users to share big big links refernce to anyone when needed.",
      link: "https://github.com/Sudeep-kr-1999/URL-Shortner-",
    },
    {
      projectName: "Application Form Manangement System",
      technologyUsed: "NodeJS,Express,MongoDB,Html,CSS,JavaScript",
      description:
        "This project is a Application form management system which uses HTML, CSS and JavaScript for frontend . And for Backend we are using NodeJS , Express and Mongo DB with Moongoose for the back side development",
      link: "https://github.com/Sudeep-kr-1999/Application-Form-Management-System",
    },
    {
      projectName: "Billing Manangement System",
      technologyUsed: "Python Tkinter Library,Python File Handling",
      description:
        "This project deals with the demo of billing management system used in different market places. Python GUI is used to create the interfaces of billing management system, here there is a seprate window of Login, As purchaser window where one can buy stocks for shops from the wholesellers and a As Seller Window which take the record for the sale in the shop. There is also a feature of bill formation in both the seller as well as purchaser window where one can create the bill and save it for future refrence",
      link: "https://github.com/Sudeep-kr-1999/Python-Project-on-Billing-Management-System-Using-GUI",
    },
    {
      projectName: "My Personal Portfolio",
      technologyUsed: "React ",
      description:
        "This is my personal Portfolio which is completely build on React and NPM modules . React Reveal is also used for animation of the several components in this project.",
      link: "https://github.com/Sudeep-kr-1999/Portfolio-Sudeep-Kumar",
    },
  ];
  return (
    <Fade bottom duration={2000}>
      <div className="project-component-container">
        <div className="project-container-heading">PROJECTS</div>
        <div className="project-list">
          {projectList.map((project, index) => (
            <ProjectCards
              key={index}
              projectName={project.projectName}
              technologyUsed={project.technologyUsed}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default ProjectComponent;
