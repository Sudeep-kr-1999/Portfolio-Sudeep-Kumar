import "./App.css";
import DisplayPage from "./components/DisplayPage/DisplayPage";
import Navbar from "./components/Navbar/Navbar";
import About from "../src/components/About/About";
import ProjectComponent from "./components/ProjectComponent/ProjectComponent";
import Certifications from "./components/CertificationComponent/Certifications";
import Interest from "./components/InterestSection/Interest";
import Experience from "./components/ExperienceSection/Experience";
import Footer from "./components/FooterComponnent/Footer";
import { useEffect, useRef, useState } from "react";
import EducationDetails from "./components/EducationDetails/EducationDetails";
import Skills from "./components/Skills/Skills";
function App() {
  const displaypageRef = useRef();
  const aboutPageRef = useRef();
  const educationPageRef = useRef();
  const skillsPageRef = useRef();
  const projectPageRef = useRef();
  const certificationPageRef = useRef();
  const experiencePageRef = useRef();
  const interestPageRef = useRef();
  const footerPageRef = useRef();
  const [show, setshow] = useState(false);
  const transistionNavBar = () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transistionNavBar);
    return () => {
      window.removeEventListener("scroll", transistionNavBar);
    };
  }, []);

  const navFuction = (handle) => {
    if (handle === "Home") {
      window.scrollTo({
        top: displaypageRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (handle === "About") {
      window.scrollTo({
        top: aboutPageRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (handle === "Education") {
      window.scrollTo({
        top: educationPageRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (handle === "Skills") {
      window.scrollTo({
        top: skillsPageRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (handle === "Experience") {
      window.scrollTo({
        top: experiencePageRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (handle === "Projects") {
      window.scrollTo({
        top: projectPageRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (handle === "Interests") {
      window.scrollTo({
        top: interestPageRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (handle === "Certification") {
      window.scrollTo({
        top: certificationPageRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (handle === "Contacts") {
      window.scrollTo({
        top: footerPageRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="App">
        <div className={`navigationSection ${show && "navigation-scroll"}`}>
          <Navbar handleClickfun={navFuction} />
        </div>
        <div className="displaypageComponent" ref={displaypageRef}>
          <DisplayPage />
        </div>
        <div className="aboutpagecomponent" ref={aboutPageRef}>
          <About contactfun={navFuction} />
        </div>
        <div className="educationpagecomponent" ref={educationPageRef}>
          <EducationDetails />
        </div>

        <div className="skillspagecomponent" ref={skillsPageRef}>
          <Skills />
        </div>

        <div className="projectpagecomponent" ref={projectPageRef}>
          <ProjectComponent />
        </div>
        <div className="certificationpagecomponent" ref={certificationPageRef}>
          <Certifications />
        </div>
        <div className="experiencepagecomponent" ref={experiencePageRef}>
          <Experience />
        </div>
        <div className="interestpagecomponent" ref={interestPageRef}>
          <Interest />
        </div>
        <div className="footerpagecomponent" ref={footerPageRef}>
          <Footer handleclick={navFuction} />
        </div>
      </div>
    </>
  );
}
export default App;
