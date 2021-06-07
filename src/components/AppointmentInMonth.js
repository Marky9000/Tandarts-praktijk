import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const format_time = time => (time < 10 ? `0${time}:00 u` : `${time}:00 u`);

const AppointmentInMonth = ({ time,
  patient,
  dentist,
  id,
  deleteAppointment,
  assistent,
  changeAppointment }) => {
  return (<div>
    <span>Naam: {patient.name} {patient.surname}</span><br />
    <span className="time">Tijd: {format_time(time)}</span><br />
    <span id={id} onClick={changeAppointment}>verplaats afspraak: <FontAwesomeIcon icon={faEdit} /></span><br />
    <span className={dentist.sick ? 'sick' : ''}>Tandarts: {dentist.name} {dentist.surname}</span><br />
    <span className={assistent.sick ? 'sick' : ''}>Assistent: {assistent.name} {assistent.surname}</span><br />
    <span id={id} onClick={deleteAppointment}>verwijder afspraak:  <FontAwesomeIcon icon={faTrash} /></span>
    <hr></hr>
  </div>
  );
};


export default AppointmentInMonth