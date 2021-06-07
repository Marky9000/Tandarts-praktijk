import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const Patients = ({ patients, callPatientSick, addPatient, removePatient, }) => {
    const allPatients = patients.map(patient => {
        return <tr key={patient.id} id={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.surname}</td>
            <td>{patient.birthyear}</td>
            <td>{patient.phone}</td>
            <td>{patient.email}</td>
            <td><input type="checkbox" onChange={callPatientSick} value={patient.id} /></td>
            <td ><span onClick={removePatient} id={patient.id}>remove patient: <FontAwesomeIcon icon={faTrash} /></span></td>
        </tr>
    });

    return (
        <div>
            <span><h2>Nieuwe patient:</h2></span>
            <form onSubmit={addPatient} >
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="surname" placeholder="Surname" />
                <input type="number" name="birthyear" placeholder="Birthyear" />
                <input type="phone" name="phone" placeholder="Phone" />
                <input type="mail" name="email" placeholder="@:E-mail" />
                <br></br><button>Voeg toe</button>
            </form>
            <br></br>
            <table>
                <tbody>
                    <tr>
                        <th>First name</th>
                        <th>Surname</th>
                        <th>Birthyear</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Sick</th>
                    </tr>
                  {allPatients}
                </tbody>
            </table>
        </div>
    );
};


export default Patients