import React from "react";
import Moment from "moment";

function EmployeeList(props) {
  return (
    <table>
      <caption>Employees </caption>
      <thead>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone No</th>
          <th>Email</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(employee => (
          <tr key={employee.id}>
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
