import React from "react";
import "./skillsPoints.css";
import { CircularProgressbarWithChildren} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Zoom from "react-reveal/Zoom";
import c from "./assets/c.png";
import cpp from "./assets/c++.png";
import android from "./assets/Android.png";
import html from "./assets/html.png";
import java from "./assets/java.png";
import mongo from "./assets/mongo.png";
import node from "./assets/node.png";
import python from "./assets/python.png";
import react from "./assets/react.png";
import sql from "./assets/sql.png";
function SkillsPoints(props) {
  const skillname = props.skillname;
  const percentage = props.value * 10;
  let imgJSX;
  if (skillname === "C") {
    imgJSX = <img src={c} alt="c language" />;
  } else if (skillname === "C++") {
    imgJSX = <img src={cpp} alt="cpp langauge" />;
  } else if (skillname === "Python") {
    imgJSX = <img src={python} alt="python" />;
  } else if (skillname === "Java") {
    imgJSX = <img src={java} alt="java" />;
  } else if (skillname === "FrontEnd Development (HTML,CSS,Javascript)") {
    imgJSX = <img src={html} alt="frontend" />;
  } else if (skillname === "Bankend Development (NodeJS,Express)") {
    imgJSX = <img src={node} alt="backend" />;
  } else if (skillname === "MongoDB") {
    imgJSX = <img src={mongo} alt="mongodb" />;
  } else if (skillname === "MySQL") {
    imgJSX = <img src={sql} alt="mysql" />;
  } else if (skillname === "React JS") {
    imgJSX = <img src={react} alt="react js" />;
  } else if (skillname === "React Native") {
    imgJSX = <img src={react} alt="react native" />;
  } else if (skillname === "Android Studio (Kotlin)") {
    imgJSX = <img src={android} alt="android" />;
  }
  return (
    <div className="skills-points-container">
      <Zoom duration={2000}>
        <CircularProgressbarWithChildren
          value={percentage}
          className="progress-bar"
          strokeWidth={5}
        >
          <div className="skills-image-container">{imgJSX}</div>
        </CircularProgressbarWithChildren>
        <div className="skills-point-name">{skillname}</div>
      </Zoom>
    </div>
  );
}

export default SkillsPoints;
