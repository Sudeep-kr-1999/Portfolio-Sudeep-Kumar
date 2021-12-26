import React from "react";
import "../DisplayPage/displaypage.css";
import background from "./assets/background10.jpg";
function DisplayPage() {
  const name = "Sudeep Kumar Agrawal";
  const specification = "Student and Developer";
  return (
    <div className="display-page-body">
      <img src={background} alt="background" className="display-bg" />
      <div className="display-page-content">
        <div className="display-name">{name}</div>
        <div className="display-specification">{specification}</div>
        <div className="display-buttons">buttons</div>
      </div>
    </div>
  );
}
export default DisplayPage;
