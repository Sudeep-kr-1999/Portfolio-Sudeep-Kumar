import React from "react";
import "./footercontact.css";
function ContactFooter({name,address,state,pincode,phone}) {
  return (
    <div className="contact-footer">
      <div className="name-contact">{name}</div>
      <div className="address-contact">{address}</div>
      <div className="state-contact">{state}</div>
      <div className="pin-contact">{pincode}</div>
      <div className="footer-phone">{phone}</div>
    </div>
  );
}

export default ContactFooter;
