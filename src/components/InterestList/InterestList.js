import React from "react";
import "./interestlist.css";
function InterestList({ interest,description }) {
  return (
    <div className="individual-interest">
      <div className="interest-name">{interest}</div>
      <div className="interest-description">
            {description}
      </div>
    </div>
  );
}

export default InterestList;
