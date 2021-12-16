import React from "react";
import BoardInfinity from "./assets/BoardInfinity.png";
import Amcat from "./assets/Amcat.png";
import BasicPython from "./assets/BasicPython.png";
import Courseera from "./assets/Courseera.png";
import DsAlgorithms from "./assets/DsAlgorithms.png";
import HackerrankPythonBasic from "./assets/HackerrankPythonBasic.png";
import IITkgp from "./assets/IITkgp.png";
import Snapture from "./assets/Snapture.png";
import "./carousel.css";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
function CarouselElements(props) {
  let imageElement;
  if (props.image === "Amcat") {
    imageElement = (
      <img src={Amcat} alt={props.alternateText} style={props.style} />
    );
  } else if (props.image === "BoardInfinity") {
    imageElement = (
      <img src={BoardInfinity} alt={props.alternateText} style={props.style} />
    );
  } else if (props.image === "BasicPython") {
    imageElement = (
      <img src={BasicPython} alt={props.alternateText} style={props.style} />
    );
  } else if (props.image === "Courseera") {
    imageElement = (
      <img src={Courseera} alt={props.alternateText} style={props.style} />
    );
  } else if (props.image === "DsAlgorithms") {
    imageElement = (
      <img src={DsAlgorithms} alt={props.alternateText} style={props.style} />
    );
  } else if (props.image === "HackerrankPythonBasic") {
    imageElement = (
      <img
        src={HackerrankPythonBasic}
        alt={props.alternateText}
        style={props.style}
      />
    );
  } else if (props.image === "IITkgp") {
    imageElement = (
      <img src={IITkgp} alt={props.alternateText} style={props.style} />
    );
  } else if (props.image === "Snapture") {
    imageElement = (
      <img src={Snapture} alt={props.alternateText} style={props.style} />
    );
  }
  return (
    <div className="carousel-item">
      <Slide bottom duration={2000}>
        <div className="certification-heading">{props.heading}</div>
        <div className="certification-organisation">{props.organisation}</div>
        <div className="certificate-duration">{props.duration}</div>
        <Zoom duration={2000}>
          <div className="certificate-img">{imageElement}</div>
        </Zoom>
      </Slide>
    </div>
  );
}
export default CarouselElements;
