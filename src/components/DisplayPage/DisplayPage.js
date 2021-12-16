import React from "react";
import "../DisplayPage/displaypage.css";
import DpButtonLinks from "../DpButtonLinks/DpButtonLinks";
import DpContactDetails from "../DpContactDetails/DpContactDetails";
import profile from "./assets/profile.png";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
function DisplayPage() {
  return (
    <>
      <Slide right duration={2000}>
        <div className="display-page-body">
          <div className="display-page">
            <div className="display-page-image">
              <Bounce left duration={2500} style={{ overflow: "hidden" }}>
                <img id="image-display" src={profile} alt="" />
              </Bounce>
            </div>
            <Bounce right duration={2000} style={{ overflow: "hidden" }}>
              <div className="dp-info">
                <div className="display-page-basic-info">
                  <div className="dp-greeting">Hello,</div>
                  <div className="dp-name"> I'm Sudeep Kumar Agrawal </div>
                  <div className="dp-specification">Student & Developer</div>
                </div>
                <div className="dp-contact">
                  <DpContactDetails classname="place-icon" />
                  <DpContactDetails classname="phone-icon" />
                  <DpContactDetails classname="email-icon" />
                </div>
                <div className="dp-button-links">
                  <DpButtonLinks classname="facebook-button" />
                  <DpButtonLinks classname="twitter-button" />
                  <DpButtonLinks classname="instagram-button" />
                  <DpButtonLinks classname="linkedin-button" />
                  <DpButtonLinks classname="github-button" />
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </Slide>
    </>
  );
}
export default DisplayPage;
