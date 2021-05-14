import React from "react";
import Moment from "moment";

function EmployeeList(props) {
  
  var data = props.EmployeeList;

  return (
    <table>
      <caption>Employees </caption>
      <thead>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th onClick={e => props.onSort}>Last Name</th>
          <th><button onClick={() => props.sortBy('phone')}>Phone</button></th>
          <th><button onClick={() => props.sortBy('email')}>Email</button></th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {data.map(employee => (
          <tr key={employee.id.value == null ? Math.random() : employee.id.value}>
            <td> <img src={employee.picture.thumbnail} alt="Thumb image"/> </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{Moment(employee.dob.date).format('MM/DD/YYYY')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default EmployeeList;
