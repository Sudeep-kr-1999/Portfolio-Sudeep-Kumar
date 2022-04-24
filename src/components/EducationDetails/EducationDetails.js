import React from "react";
import Bounce from "react-reveal/Bounce";
import EducationDetailsCards from "../EducationDetailsCards/EducationDetailsCards";
import "./educationDetails.css";
function EducationDetails() {
  let secondaryEducationDetails = {
    educationType: "Secondary Education",
    educationSubDetail: "Basic Education",
    organisationName: "Vimla Pandey Memorial Gyan Niketan School",
    organisationAddress: "Bairiya, Daltonganj, Palamau , Jharkhand - 822101",
    educationDuration: "2008-2016",
    results: "10 CGPA",
  };
  let seniorSecondaryEducationDetails = {
    educationType: "Senior Secondary Education",
    educationSubDetail: "Intermediate Of Science",
    organisationName: "Chandrasekhar Dubey Inter College",
    organisationAddress: " Chaneya, Rajhara , Palamau , Jharkhand - 822123",
    educationDuration: "2016-2018",
    results: "74 % ",
  };
  let universityEducationDetails = {
    educationType: "Gradaution",
    educationSubDetail: "B.Tech Computer Science and Engineering",
    organisationName: "Lovely Professional University",
    organisationAddress:
      "Delhi G.T Road , Phagwara, Jalandhar, Punjab - 144411",
    educationDuration: "2019-Going On",
    results: "8.69 CGPA",
  };
  return (
    <Bounce bottom duration={1500}>
      <div className="education-details-box">
        <Bounce>
          <div className="education-heading">EDUCATION</div>
        </Bounce>
        <div className="education-details-cards">
          <EducationDetailsCards
            educationType={secondaryEducationDetails.educationType}
            educationSubDetail={secondaryEducationDetails.educationSubDetail}
            organisationName={secondaryEducationDetails.organisationName}
            organisationAddress={secondaryEducationDetails.organisationAddress}
            educationDuration={secondaryEducationDetails.educationDuration}
            results={secondaryEducationDetails.results}
          />
          <EducationDetailsCards
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
