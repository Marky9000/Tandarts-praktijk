import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

const DayInMonth = ({ appointments, deleteAppointment, changeAppointment}) => {
  const appointmentsJSX = appointments.map(({ time, patient, dentist, id, assistent }, index) => {

    return (<AppointmentInMonth
      time={time}
      patient={patient}
      key={index}
      id={id}
      dentist={dentist}
      assistent={assistent}
      deleteAppointment={deleteAppointment}
      changeAppointment={changeAppointment}
    />
    )
  })
  const appointmentsJSXsorted = appointmentsJSX.sort((a, b,) => a.props.time - b.props.time)
  return <div className="day">{appointmentsJSXsorted}</div>;
};

export default DayInMonth