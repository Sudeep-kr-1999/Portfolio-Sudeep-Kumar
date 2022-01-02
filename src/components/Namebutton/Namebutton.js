import React from "react";
import "../Namebutton/namebutton.css";
function Namebutton({handleName}) {

  const clickName=(e)=>{
    handleName(e.target.id);
  }
  return (
    <div className="top-nav-left-name-container">
      <h3 id="Home" onClick={clickName}>Sudeep Kumar</h3>
    </div>
  );
}

export default Namebutton;
