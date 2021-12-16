import "./App.css";
import DisplayPage from "./components/DisplayPage/DisplayPage";
import Navbar from "./components/Navbar/Navbar";
import NavHamburger from "../src/components/Navhamburger/NavHamburger";
import About from "../src/components/About/About";
import EducationDetials from "../src/components/EducationDetails/EducationDetails";
import Zoom from "react-reveal/Zoom";
import Skills from "./components/Skills/Skills";
import ProjectComponent from "./components/ProjectComponent/ProjectComponent";
import Certifications from "./components/CertificationComponent/Certifications";
import Interest from "./components/InterestSection/Interest";
import Experience from "./components/ExperienceSection/Experience";
import Footer from "./components/FooterComponnent/Footer";
function App() {
  return (
    <>
      <div className="App">
        <Zoom>
          <div className="navigationSection">
            <Navbar />
            <NavHamburger />
          </div>
        </Zoom>
        <DisplayPage />

        <About />
        <EducationDetials />
        <Skills />
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
