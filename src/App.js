import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardPage from "./components/DashBoard/DashBoard";
import SideBar from "./components/SideBar/SideBar";
import FirstList from "./Pages/FirstList";
import SecondList from "./Pages/SecondList";
import ThirdList from "./Pages/ThirdList";

function App() {
  return (
    <div>
      <Router>
        <div className="row">
          <div className="col-sm-3 , background_3">
            <SideBar />
          </div>
          <Switch>
            <div className="col-sm-9">
              <Route path="/" exact component={DashboardPage} />
              <Route path="/first-list" component={FirstList} />
              <Route path="/second-list" component={SecondList} />
              <Route path="/third-list" component={ThirdList} />
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
