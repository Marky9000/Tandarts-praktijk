import React from "react"

const Appointments = ({ patients, employees, makeAppointment }) => {
    const day = Array.from({ length: 28 }, (_, i) => i + 1).map(day => <option key={day}>{day}</option>)
    const time = Array.from({ length: 11 }, (_, i) => i + 8).map(day => <option key={day}>{day}</option>)
    const allPatients = patients.map(patient => {
        return <option key={patient.id} value={patient.id}>{patient.name} {patient.surname}</option>
    })
    const allDentists = employees.filter(employee => employee.occupation === "dentist").map(dentist => {
        return <option key={dentist.id} value={dentist.id}>{dentist.name} {dentist.surname}</option>
    })
    const allAssistents = employees.filter(employee => employee.occupation === "assistent").map(assistent => {
        return <option key={assistent.id} value={assistent.id}>{assistent.name} {assistent.surname}</option>
    }
    )
    return (<div >
        <span>    <h2>Maak een nieuwe afspraak: </h2></span>
        <form onSubmit={makeAppointment}  >
            <h3>Dag</h3><select name="day">{day}</select>
            <h3>Tijd</h3><select name="time">{time}</select>
            <h3>Patient</h3><select name="patient" >{allPatients}</select>
            <h3>Tandarts</h3><select name="dentist">{allDentists}</select>
            <h3>Assistent</h3><select name="assistent">{allAssistents}</select>
            <button><h4>bevestig afspraak</h4></button>
        </form> </div>
    );
};

export default Appointments