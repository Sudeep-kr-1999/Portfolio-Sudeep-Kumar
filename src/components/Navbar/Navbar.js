import React from "react";
import Namebutton from "../Namebutton/Namebutton";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "../Navbar/nav.css";
import NavHamburger from "../Navhamburger/NavHamburger";
function Navbar() {
  return (
    <div className="navbar-top">
      <Namebutton />
      <NavigationMenu />
      <NavHamburger />
    </div>
  );
}

export default Navbar;
