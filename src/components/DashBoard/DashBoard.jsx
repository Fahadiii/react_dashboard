import NavBar from "../NavBar/NavBar";

import FistCard from "../FirstCard/FirstCard";
import DataTable from "../DataTable/DataTable";
import Charts from "../Chart/chart";

import { faHourglass, faBars, faHome } from "@fortawesome/free-solid-svg-icons";

function DashboardPage() {
  return (
    <div>
      {/* CARDS DIV  */}

      <NavBar />

      <div className="d-flex">
        <FistCard
          heading="Total Tasks"
          icon={faHourglass}
          color="text-success"
        />
        <FistCard heading="Online Users" icon={faBars} color="text-danger" />
        <FistCard heading="Total Stories" icon={faHome} color="text-warning" />
      </div>

      <div className="d-flex ">
        <DataTable color="text-success" />
      </div>

      <div>
        <Charts />
      </div>
    </div>
  );
}

export default DashboardPage;
