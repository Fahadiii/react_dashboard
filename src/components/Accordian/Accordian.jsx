import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./Accordian.module.css";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMaximize,
  faFile,
  faFolder,
  faTable,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion className={classes.skyblue_color}>
        <AccordionSummary className="text-white">
          <Typography>
            <FontAwesomeIcon className="mx-5" icon={faWindowMaximize} />
            <NavLink to="/" className={classes.link_style}>
              DashBoard
            </NavLink>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion className={classes.skyblue_color}>
        <AccordionSummary
          className="text-white"
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <FontAwesomeIcon className="mx-5" icon={faFile} />
            Pages
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                <Link to="/first-list" className={classes.link_style}>
                  First link
                </Link>
              </li>
              <li>
                <Link to="/second-list" className={classes.link_style}>
                  Second Link
                </Link>
              </li>
              <li>
                <Link to="/third-list" className={classes.link_style}>
                  Third Link
                </Link>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.skyblue_color}>
        <AccordionSummary
          className="text-white"
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <FontAwesomeIcon className="mx-5" icon={faFolder} />
            Forms
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                <Link to="/first-list" className={classes.link_style}>
                  First link
                </Link>
              </li>
              <li>
                <Link to="/second-list" className={classes.link_style}>
                  Second Link
                </Link>
              </li>
              <li>
                <Link to="/third-list" className={classes.link_style}>
                  Third Link
                </Link>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.skyblue_color}>
        <AccordionSummary
          className="text-white"
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <FontAwesomeIcon className="mx-5" icon={faTable} />
            Tables
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                <Link to="/first-list" className={classes.link_style}>
                  First link
                </Link>
              </li>
              <li>
                <Link to="/second-list" className={classes.link_style}>
                  Second Link
                </Link>
              </li>
              <li>
                <Link to="/third-list" className={classes.link_style}>
                  Third Link
                </Link>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.skyblue_color}>
        <AccordionSummary
          className="text-white"
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <FontAwesomeIcon className="mx-5" icon={faShoppingBasket} />
            Components
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                <Link to="/first-list" className={classes.link_style}>
                  First link
                </Link>
              </li>
              <li>
                <Link to="/second-list" className={classes.link_style}>
                  Second Link
                </Link>
              </li>
              <li>
                <Link to="/third-list" className={classes.link_style}>
                  Third Link
                </Link>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
