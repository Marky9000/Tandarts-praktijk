import React from "react"





const Employees = ({ employees, addEmployee, callEmployeeSick }) => {
    const allEmployees = employees.map(employee => {
        return <tr key={employee.id} id={employee.id}  >
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.occupation}</td>
            <td><input type="checkbox" onChange={callEmployeeSick} checked={employee.sick} /></td>
        </tr>
    })
    return (
        <div>
            <span><h2>Nieuwe medewerker</h2></span>
            <form onSubmit={addEmployee}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="surname" placeholder="Surname" />
                <input type="phone" name="phone" placeholder="Phone" />
                <input type="email" name="email" placeholder="E-mail" />
                <select name="occupation" placeholder="beroep">
                    <option name="dentist">dentist</option>
                    <option name="assistent">assistent</option>
                </select>
                <button>Voeg toe</button>
            </form>
            <table>
                <tbody >
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Beroep</th>
                        <th>Ziek</th>
                    </tr>
                  {allEmployees}
                </tbody>
            </table>
        </div>
    );    
};

export default Employees