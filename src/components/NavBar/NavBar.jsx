import classes from "./NavBar.module.css";

import React from "react";
import "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div>
      <nav className="d-flex px-2">
        <h4 className={classes.logo}> Dashboard </h4>

        <div className={classes.icon} id="bell">
          <FontAwesomeIcon icon={faBell} />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
