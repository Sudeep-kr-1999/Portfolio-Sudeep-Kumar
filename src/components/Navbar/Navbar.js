import React from "react";
import Namebutton from "../Namebutton/Namebutton";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "../Navbar/nav.css";
import NavHamburger from "../Navhamburger/NavHamburger";
function Navbar({ handleClickfun }) {
  const gethandleName=(handleName)=>{
    handleClickfun(handleName);
  }
  return (
    <div className="navbar-top">
      <Namebutton handleName={gethandleName} />
      <NavigationMenu handleName={gethandleName} />
      <NavHamburger handleName={gethandleName}/>
    </div>
  );
}

export default Navbar;
