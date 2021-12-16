import React from "react";
import Bounce from "react-reveal/Bounce";
import EducationDetailsCards from "../EducationDetailsCards/EducationDetailsCards";
import secondary from "./assets/secondary.png";
import seniorsecondary from "./assets/highersecondary.png";
import university from "./assets/university.png";
import "./educationDetails.css";
function EducationDetails() {
  let secondaryEducationDetails = {
    logo: secondary,
    educationType: "Secondary Education",
    educationSubDetail: "Basic Education",
    organisationName: "Vimla Pandey Memorial Gyan Niketan School",
    organisationAddress: "Bairiya, Daltonganj, Palamau , Jharkhand - 822101",
    educationDuration: "2008-2016",
    results: "10 CGPA",
  };
  let seniorSecondaryEducationDetails = {
    logo: seniorsecondary,
    educationType: "Senior Secondary Education",
    educationSubDetail: "Intermediate Of Science",
    organisationName: "Chandrasekhar Dubey Inter College",
    organisationAddress: " Chaneya, Rajhara , Palamau , Jharkhand - 822123",
    educationDuration: "2016-2018",
    results: "74 % ",
  };
  let universityEducationDetails = {
    logo: university,
    educationType: "Gradaution",
    educationSubDetail: "B.Tech Computer Science and Engineering",
    organisationName: "Lovely Professional University",
    organisationAddress:
      "Delhi G.T Road , Phagwara, Jalandhar, Punjab - 144411",
    educationDuration: "2019-Going On",
    results: "8.61 CGPA",
  };
  return (
    <Bounce bottom duration={1500}>
      <div className="education-details-container">
        <Bounce>
          <div className="education-heading">EDUCATION</div>
        </Bounce>
        <div className="education-details-cards">
          <EducationDetailsCards
            logo={secondaryEducationDetails.logo}
            educationType={secondaryEducationDetails.educationType}
            educationSubDetail={secondaryEducationDetails.educationSubDetail}
            organisationName={secondaryEducationDetails.organisationName}
            organisationAddress={secondaryEducationDetails.organisationAddress}
            educationDuration={secondaryEducationDetails.educationDuration}
            results={secondaryEducationDetails.results}
          />
          <EducationDetailsCards
            logo={seniorSecondaryEducationDetails.logo}
            educationType={seniorSecondaryEducationDetails.educationType}
            educationSubDetail={
              seniorSecondaryEducationDetails.educationSubDetail
            }
            organisationName={seniorSecondaryEducationDetails.organisationName}
            organisationAddress={
              seniorSecondaryEducationDetails.organisationAddress
            }
            educationDuration={
              seniorSecondaryEducationDetails.educationDuration
            }
            results={seniorSecondaryEducationDetails.results}
          />
          <EducationDetailsCards
            logo={universityEducationDetails.logo}
            educationType={universityEducationDetails.educationType}
            educationSubDetail={universityEducationDetails.educationSubDetail}
            organisationName={universityEducationDetails.organisationName}
            organisationAddress={universityEducationDetails.organisationAddress}
            educationDuration={universityEducationDetails.educationDuration}
            results={universityEducationDetails.results}
          />
        </div>
      </div>
    </Bounce>
  );
}

export default EducationDetails;
