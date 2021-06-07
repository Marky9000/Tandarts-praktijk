import React from "react";
import "../css/Day.css";
import AppointmentInDay from "./AppointmentInDay";
// import Patients from "./Patients";

const Day = ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistent }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistent={assistent}
        key={index}
      /> )
  );
  const sortedJSX = appointmentsJSX.sort((a, b,) => a.props.time - b.props.time)
  return <ul className="dayview">{sortedJSX}</ul>;
};


export default Day