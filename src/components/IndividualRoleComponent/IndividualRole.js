import React from "react";
import "./individualrole.css";
function IndividualRole({ role }) {
  return (
    <div className="individual-role">
      <div className="role-text">{role}</div>
    </div>
  );
}

export default IndividualRole;
