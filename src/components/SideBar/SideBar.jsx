import classes from "./SideBar.module.css";
import "react-bootstrap";

import SimpleAccordion from "../Accordian/Accordian";

import React from "react";

function SideBar() {
  return (
    <div>
      <div className={classes.main_div}>
        <img
          className={classes.logoimg}
          src="/images/xgridLogo.png"
          alt="Loading..."
        />
      </div>

      <div className={classes.top_div}></div>

      <div className={classes.top_margin_60}>
        <SimpleAccordion />
      </div>
    </div>
  );
}

export default SideBar;
