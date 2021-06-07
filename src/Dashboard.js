import React from "react"
import App from "./App"
import generateRandomAppointments from "./utils"
import { nanoid } from "nanoid"


class Dashboard extends React.Component {
    constructor() {
                super();
                const randomAppointments = generateRandomAppointments(150);
                const assistents = [...new Set(randomAppointments.map(item => item.assistent))];
                const dentists = [...new Set(randomAppointments.map(item => item.dentist))];
                const patients = [...new Set(randomAppointments.map(item => item.patient))];
                const employees = [...dentists, ...assistents];
        this.state = {
            patients: patients,
            employees: employees,
            appointments: randomAppointments
        };
    };

    deleteAppointment = event => {
        const name = event.target.parentElement.parentElement.id
        const appointmentToRemove = [...this.state.appointments]
            .find(appointment => appointment.id === name);
        const newAppointmentList = [...this.state.appointments]
            .filter(appointment => appointment !== appointmentToRemove)
        this.setState({ appointments: newAppointmentList })
    };

    callEmployeeSick = event => {
        const sickEmployee = event.target.parentElement.parentElement.id;
        const newSickEmployee = [...this.state.employees].find(employee => employee.id === sickEmployee)
        const employeeListUpdatedWithSick = [...this.state.employees].map(employee => {
            if (employee === newSickEmployee) {
                employee.sick = !employee.sick
            };
            return employee
        });
        this.setState({ employees: employeeListUpdatedWithSick });
    };

    callPatientSick = event => {
        const id = event.target.parentElement.parentElement.id;
        console.log({ id })
            
        const newSickPatient = [this.state.patients].find(patient => patient.id === id)
        const updatePatientListwithSickPatient = [...this.state.patients].map(patient => {
            if (patient === newSickPatient) {
                patient.sick = !patient.sick;
            };
            return patient;
        });
        this.setState({ patients: updatePatientListwithSickPatient });
    };

    removePatient = event => {
        const id = event.target.parentElement.parentElement.id;
        console.log("hello", { id })
        const sickPatient = [...this.state.patients].find(patient => patient.id === id)
        const updatePatientList = [...this.state.patients].filter(patient => patient !== sickPatient)
        this.setState({ patients: updatePatientList })
    };

    changeAppointment = event => {
        const id = event.target.parentElement.id
        console.log(id)
        let checkDay = false;
        let checkTime = false;
        let day = 0;
        let time = 0;
        while (!checkDay) {
            day = parseInt(prompt("kies een dag tussen 1 en 28 "))
            if (day => 1 && day <= 28) {
                checkDay = true
            };
        };
        while (!checkTime) {
            time = parseInt(prompt("kies een tijdstip tussen 8 uur en 17 uur"))
            if (time => 8 && time <= 18) {
                checkTime = true
            };
        };
        const appointmentToRemove = [...this.state.appointments].find(item =>
            item.id === event.target.parentElement.id)
        const changedAppointment = {
            id: appointmentToRemove.id,
            day: day,
            time: time,
            patient: appointmentToRemove.patient,
            dentist: appointmentToRemove.dentist,
            assistent: appointmentToRemove.assistent
        };
        const findDentist = [...this.state.appointments].find(item => {
            return item.day === day && item.time === time && item.dentist === appointmentToRemove.dentist
        });
        const findAssistent = [...this.state.appointments].find(item => {
            return item.day === day && item.time === time && item.assitent === appointmentToRemove.assistent
        });
        if (findDentist && findAssistent) {
            alert("Tandarts en Assistent niet beschikbaar")
        }
        else if (findDentist) {
            alert("Tandarts niet beschikbaar")
        }
        else if (findAssistent) {
            alert("Assistent niet beschikbaar")
        }
        else {
            const appointmentChanged = [...this.state.appointments].filter(item => item !== appointmentToRemove)
            const listUpdate = [changedAppointment, ...appointmentChanged];
            this.setState({ appointments: listUpdate })
        };
    };
            
    addPatient = event => {
        event.preventDefault();
        const name = event.target.name.value
        const surname = event.target.surname.value
        const birthyear = event.target.birthyear.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        if (name !== "") {
            if (surname !== "") {
                const newPatient = {
                    id: nanoid(),
                    name: name,
                    surname: surname,
                    phone: phone,
                    email: email,
                    birthyear: birthyear,
                    sick: false
                };
                const newAllPatients = [newPatient, ...this.state.patients]
                this.setState({ patients: newAllPatients })
            };
        };
    };
        
    addEmployee = event => {
        const name = event.target.name.value
        const surname = event.target.surname.value
        const occupation = event.target.occupation.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        if (name !== "") {
            if (surname !== "") {
                const newEmployee = {
                    id: nanoid(),
                    name: name,
                    surname: surname,
                    phone: phone,
                    email: email,
                    occupation: occupation,
                    sick: false
                };
                const newEmployeeIncluded = [newEmployee, ...this.state.employees]
                this.setState({ employees: newEmployeeIncluded })
            };
        };
        event.preventDefault();
    };
            
    makeAppointment = event => {
        const dentist = [...this.state.employees].find(dentist => dentist.id === event.target.dentist.value);
        const patient = [...this.state.patients].find(patient => patient.id === event.target.patient.value);
        const assistent = [...this.state.employees].find(assistent => assistent.id === event.target.assistent.value);
        const day = parseInt(event.target.day.value);
        const time = parseInt(event.target.time.value);
        const newAppointment = {
            id: nanoid(),
            day: day,
            time: time,
            patient: patient,
            dentist: dentist,
            assistent: assistent,
        }
        const findDentist = [...this.state.appointments].find(appointment => {
            return appointment.day === day && appointment.time === time && appointment.dentist === dentist
        }
        )
        const findAssistent = [...this.state.appointments].find(appointment => {
            if (dentist !== undefined) {
                return appointment.day === day && appointment.time === time && appointment.assistent === assistent
            }
            return false
        }
        )
        if (findDentist && findAssistent) {
            alert("Tandarts & assistent helaas niet beschikbaar...")
        }
        else if (findDentist) {
            alert("Tandarts niet beschikbaar...")
        }
        else if (findAssistent) {
            alert("Assistent niet beschikbaar...")
        }
        else {
            const newAppointmentList = [newAppointment, ...this.state.appointments];
            this.setState({ appointments: newAppointmentList })
            console.log(event.target.name.value)
        }
        event.preventDefault();
    };


    render(){
        return (
            <div>
                <App
                    changeAppointment={this.changeAppointment}
                    removePatient={this.removePatient}
                    deleteAppointment={this.deleteAppointment}
                    makeAppointment={this.makeAppointment}
                    appointments={this.state.appointments}
                    patients={this.state.patients}
                    employees={this.state.employees}
                    addPatient={this.addPatient}
                    addEmployee={this.addEmployee}
                    callEmployeeSick={this.callEmployeeSick}
                    callPatientSick={this.callPatientSick}
                />
            </div>
        );
    };
};


export default Dashboard