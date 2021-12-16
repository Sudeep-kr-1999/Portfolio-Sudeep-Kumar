import React from "react";
import Namebutton from "../Namebutton/Namebutton";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "../Navbar/nav.css";
function Navbar() {
  return (
    <div className="navbar-top">
      <Namebutton />
      <NavigationMenu />
    </div>
  );
}

export default Navbar;
