import classes from "./DataTable.module.css";

import React, { useState } from "react";

import "react-bootstrap";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const DataTable = (props) => {
  const [schools, setSchoolsArray] = useState([
    { name: "", last_name: "", email: "" },
  ]);

  function sortTableFromHeader(n, s) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById(s);
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function search(s, n) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(s);
    filter = input.value.toUpperCase();
    table = document.getElementById(n);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function show(nr) {
    // const getData = () => {
    setSchoolsArray([{ name: "", last_name: "", email: "" }]);
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      response.data.data.map((dummy, index) => {
        if (nr == 1) {
          if (index < 2) {
            setSchoolsArray((schools) => [
              ...schools,
              {
                name: dummy.first_name,
                last_name: dummy.last_name,
                email: dummy.email,
              },
            ]);
          }
        } else if (nr == 2) {
          if (index >= 2) {
            setSchoolsArray((schools) => [
              ...schools,
              {
                name: dummy.first_name,
                last_name: dummy.last_name,
                email: dummy.email,
              },
            ]);
          }
        }
        return 0;
      });
    });
  }

  return (
    <div className="d-flex">
      <div className="col-md-6">
        <div className={classes.pad_20}>
          <div>
            <div className="card mb-3 w-auto ">
              <div className="d-flex">
                <div className=" col-sm-6  d-flex  ">
                  <div className={classes.icon_style}>
                    <FontAwesomeIcon icon={faHome} />
                  </div>

                  <div className="px-3">
                    <h1> Store </h1>
                    <p>
                      <span className={`${props.color}`}>680 </span>
                      total stores registered
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 px-3 ">
                  <div className="form-group pull-right my-lg-5">
                    <input
                      type="text"
                      id="myInput"
                      className=" form-control form-control-lg "
                      placeholder="Search"
                      onKeyUp={(e) => {
                        search("myInput", "myTable");
                      }}
                    />
                  </div>
                  <span className="counter pull-right  my-lg-5"></span>
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="myTable"
                    className="table table-hover table-striped table-bordered results"
                    cellspacing="0"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th
                          onClick={(e) => {
                            sortTableFromHeader(0, "myTable");
                          }}
                        >
                          Store Name
                        </th>
                        <th
                          onClick={(e) => {
                            sortTableFromHeader(1, "myTable");
                          }}
                        >
                          Total Task
                        </th>
                        <th
                          onClick={(e) => {
                            sortTableFromHeader(2, "myTable");
                          }}
                        >
                          Total Users
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          onClick={(e) => {
                            show(1);
                          }}
                        >
                          JMetro
                        </td>
                        <td> 15 </td>
                        <td> 10 </td>
                      </tr>
                      <tr>
                        <td
                          onClick={(e) => {
                            show(2);
                          }}
                        >
                          Readings
                        </td>
                        <td> 50 </td>
                        <td> 30 </td>
                      </tr>
                      <tr>
                        <td
                          onClick={(e) => {
                            show(3);
                          }}
                        >
                          Liberty
                        </td>
                        <td> 20 </td>
                        <td> 30 </td>
                      </tr>
                      <tr>
                        <td
                          onClick={(e) => {
                            show(4);
                          }}
                        >
                          Xgrid
                        </td>
                        <td> 60 </td>
                        <td> 11 </td>
                      </tr>
                      <tr>
                        <td
                          onClick={(e) => {
                            show(5);
                          }}
                        >
                          Punjab
                        </td>
                        <td> 25 </td>
                        <td> 10 </td>
                      </tr>
                      <tr>
                        <td
                          onClick={(e) => {
                            show(6);
                          }}
                        >
                          Alfateh
                        </td>
                        <td> 30 </td>
                        <td> 20 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className={classes.pad_20}>
          <div>
            <div className="card mb-3 w-100">
              <div className="d-flex">
                <div className=" col-sm-6  d-flex  ">
                  <div className={classes.icon_style}>
                    <FontAwesomeIcon icon={faHome} />
                  </div>

                  <div className="px-3">
                    <h1> User </h1>
                    <p>
                      <span className={`span_style ${props.color}`}>680 </span>
                      total Users registered
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 px-3 ">
                  <div className="form-group pull-right my-lg-5">
                    <input
                      type="text"
                      id="myInput2"
                      className=" form-control form-control-lg "
                      placeholder="Search"
                      onKeyUp={(e) => {
                        search("myInput2", "dummy_data");
                      }}
                    />
                  </div>
                  <span className="counter pull-right  my-lg-5"></span>
                </div>
              </div>

              <div className="card-body">
                <div id="dummy_data" className=" table-responsive">
                  <table
                    id="dummy_data1"
                    className=" table table-hover table-striped table-bordered results"
                    cellspacing="1"
                    width="100%"
                  >
                    <thead>
                      <tr>
                        <th
                          onClick={(e) => {
                            sortTableFromHeader(0, "dummy_data1");
                          }}
                        >
                          Store Name
                        </th>
                        <th
                          onClick={(e) => {
                            sortTableFromHeader(1, "dummy_data1");
                          }}
                        >
                          Total Task
                        </th>
                        <th
                          onClick={(e) => {
                            sortTableFromHeader(2, "dummy_data1");
                          }}
                        >
                          Total Users
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((_u, index) => {
                        return (
                          <tr>
                            <td>{_u.name}</td>
                            <td>{_u.last_name}</td>
                            <td>{_u.email}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
