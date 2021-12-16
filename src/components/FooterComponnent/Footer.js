import React from "react";
import "./footer.css";
import ContactFooter from "../ContactFooter/ContactFooter";
import FooterNavigation from "../FooterNavigation/FooterNavigation";
import FooterSocial from "../FooterSocial/FooterSocial";
import Bounce from "react-reveal/Bounce";
function Footer() {
  const name = "Sudeep Kumar";
  const address =
    "Near Oxford Public School, Agrawal Colony , Hamidganj, Daltonganj";
  const state = "Palamau , Jharkhand , India";
  const pincode = 822101;
  const phone = "7488368218 , 8797344768";
  const navhome = "Home";
  const about = "About";
  const education = "Education";
  const skills = "Skills";
  const experience = "Experience";
  const projects = "Projects";
  const certification = "Certification";
  const contacts = "Contacts";
  const sociallist = [
    {
      id: 1,
      identifier: "Gmail",
      socialname: "sudeepagrawal1999@gmail.com",
    },
    {
      id: 2,
      identifier: "Instagram",
      socialname: "Instagram",
    },
    {
      id: 3,
      identifier: "Facebook",
      socialname: "Facebook",
    },
    {
      id: 4,
      identifier: "Twitter",
      socialname: "Twitter",
    },
    {
      id: 5,
      identifier: "Linkedin",
      socialname: "Linkedin",
    },
    {
      id: 6,
      identifier: "Github",
      socialname: "Github",
    },
  ];

  return (
    <Bounce right duration={2000}>
      <div className="footer-container">
        <div className="upper-footer">
          <div className="address-footer">
            <ContactFooter
              name={name}
              address={address}
              state={state}
              pincode={pincode}
              phone={phone}
            />
          </div>
          <div className="navmenu-footer">
            <FooterNavigation
              navhome={navhome}
              about={about}
              education={education}
              skills={skills}
              experience={experience}
              projects={projects}
              certification={certification}
              contacts={contacts}
            />
          </div>
          <div className="footer-social">
            {sociallist.map((ele) => (
              <FooterSocial
                key={ele.id}
                socialname={ele.socialname}
                identifier={ele.identifier}
              />
            ))}
          </div>
        </div>

        <div className="lower-footer">
          © Sudeep Kumar | All Right Reserved | 2021
        </div>
      </div>
    </Bounce>
  );
}

export default Footer;
