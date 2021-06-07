import React from "react";


const format_time = (time) => (time < 10 ? `0${time}:00 u` : `${time}:00 u`);

const AppointmentInDay = ({ time, patient, dentist, assistent }) => (
  <li>
    <div className="time">{format_time(time)}</div>
    <div className="patient +">Patiënt: {patient.name} {patient.surname}</div>
    <div className={dentist.sick ? 'sick' : ''}>Tandarts: {dentist.name} {dentist.surname}</div>
    <div className={assistent.sick ? 'sick' : ''}>Assistent: {assistent.name} {assistent.surname}</div>
  </li>
);

export default AppointmentInDay
