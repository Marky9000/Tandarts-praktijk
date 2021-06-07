import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./components/Calendar";
import Day from "./components/Day";


const App = ({ addPatient,
  changeAppointment,
  patients,
  employees,
  addEmployee,
  callEmployeeSick,
  appointments,
  makeAppointment,
  callPatientSick,
  deleteAppointment,
  removePatient}) => (
  <Router>
    <div className="headDiv">
      <nav>
        <ul>
          <li><i icon='fab' />
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Maand</Link>
          </li>
          <li>
            <Link to="/day">Vandaag</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/calendar">
            <Calendar appointments={appointments}
              deleteAppointment={deleteAppointment}
              changeAppointment={changeAppointment }/>
          </Route>
          <Route path="/day">
            <Day appointments={appointments.filter(app => app.day === 1)} />
          </Route>
          <Route path="/">
            <Home
              removePatient={removePatient}
              makeAppointment={makeAppointment}
              addEmployee={addEmployee}
              appointments={appointments}
              patients={patients}
              addPatient={addPatient}
              employees={employees}
              callPatientSick={callPatientSick}
              callEmployeeSick={callEmployeeSick}
             />
          </Route>
        </Switch>
      </main>
      <span className="foot"> Winc-academy opdracht door Mark van Booren 2021</span>
    </div>
  </Router>
);


export default App;
