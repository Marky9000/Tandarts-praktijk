import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Patients from "./components/Patients"
import Employees from "./components/Employees"
import Appointments from "./components/Appointments"



const Home = ({ appointments,
  patients,
  employees,
  callEmployeeSick,
  addEmployee,
  addPatient,
  makeAppointment,
  callPatientSick,
  removePatient,
}) => {
  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/Appointments">Nieuwe afspraak</Link>
            </li>
            <li>
              <Link to="/Patients">Patienten</Link>
            </li>
            <li>
              <Link to="/Employees">Tandartsen & Assistenten</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/Appointments">
              <Appointments
                appointments={appointments}
                employees={employees}
                patients={patients}
                makeAppointment={makeAppointment} />
            </Route>
            <Route path="/Patients">
              <Patients
                removePatient={removePatient}
                patients={patients}
                addPatient={addPatient}
                callPatientSick={callPatientSick} />
            </Route>
            <Route path="/Employees">
              <Employees
                employees={employees}
                callEmployeeSick={callEmployeeSick}
                addEmployee={addEmployee} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Home