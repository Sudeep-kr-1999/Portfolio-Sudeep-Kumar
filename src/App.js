import "./App.css";
import DisplayPage from "./components/DisplayPage/DisplayPage";
import Navbar from "./components/Navbar/Navbar";
import About from "../src/components/About/About";
import ProjectComponent from "./components/ProjectComponent/ProjectComponent";
import Certifications from "./components/CertificationComponent/Certifications";
import Interest from "./components/InterestSection/Interest";
import Experience from "./components/ExperienceSection/Experience";
import Footer from "./components/FooterComponnent/Footer";
import { useEffect, useState } from "react";
import EducationDetails from "./components/EducationDetails/EducationDetails";
import Skills from "./components/Skills/Skills";
function App() {
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
  return (
    <>
      <div className="App">
        <div className={`navigationSection ${show && "navigation-scroll"}`}>
          <Navbar />
        </div>
        <DisplayPage />
        <About />
        <EducationDetails/>
        <Skills/>
        <ProjectComponent />
        <Certifications />
        <Experience />
        <Interest />
        <Footer />
      </div>
    </>
  );
}
export default App;
