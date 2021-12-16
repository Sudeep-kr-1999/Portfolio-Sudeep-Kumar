import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "./dpcontactdetails.css";
function DpContactDetails({ classname }) {
  const address_string =
  " Jharkhand , India ";
  const phone_string = "7488368218 , 8797344768";
  const email_string = "sudeepagrawal1999@gmail.com";
  return (
    <>
      {classname === "place-icon" && (
        <div className={classname}>
          <PlaceIcon />
          {address_string}
        </div>
      )}
      {classname === "phone-icon" && (
        <div className={classname}>
          <PhoneIcon />
          {phone_string}
        </div>
      )}
      {classname === "email-icon" && (
        <div className={classname}>
          <EmailIcon />
          {email_string}
        </div>
      )}
    </>
  );
}

export default DpContactDetails;
