import classes from "./FirstCard.module.css";
import "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function FirstCard(props) {
  return (
    <div>
      <div className={classes.item}>
        <div>
          <div class="col-md-4 ">
            <div className="card card-stats">
              <div className="card-body">
                <div className="row">
                  <div className="col-7 col-md-8">
                    <div className="numbers text-left">
                      <p className="card-category">{props.heading}</p>
                      <h2 className={`card-title  ${props.color}`}>49/50</h2>
                    </div>
                  </div>

                  <div className="col-5 col-md-4 ">
                    <div className={classes.icon_style}>
                      <FontAwesomeIcon icon={props.icon} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer text-right  ">
                <div className="stats text-primary">
                  <FontAwesomeIcon icon={faPlus} />
                  Add task
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
