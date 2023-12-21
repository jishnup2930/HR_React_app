import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./employeeDetails.css";
import Employee from "../employees";
import LeaveForm from "../Leave/leave";
import Spinner from "../spinner.tsx";
import Vcard from "../vcard/vcard.js";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const handleLeaveSubmit = () => {
    fetch(`http://localhost:5000/employees/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/employees/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      });
  }, [id]);

  if (!employee) {
    return (
      <div id="error">
        Employee ID not found.!
        <Spinner />
      </div>
    );
  }

  return (
    <div id="detail" className="container-fluid">
      <div className="row">
        <div id="one" className="col-4">
          <Employee key={"employee.id"} />
        </div>
        <div className="col-5">
          <h1 id="name">
            {employee.fname} {employee.lname}
          </h1>
          <h2>{employee.title}</h2>
          <table>
            <tbody>
              <tr>
                <th>First name</th>
                <td>{employee.fname}</td>
              </tr>
              <tr>
                <th>Last name</th>
                <td>{employee.lname}</td>
              </tr>
              <tr>
                <th> ID</th>
                <td>{employee.id}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{employee.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{employee.phone}</td>
              </tr>
            </tbody>
          </table>
          <div id="leave">
            <h1 id="leave">Add leave</h1>
            <LeaveForm onLeaveSubmit={handleLeaveSubmit} />
          </div>
        </div>
        <div id="one" className="col-3">
          <Vcard />
          <h1 id="leave">Leave Details</h1>
          <table>
            <tbody>
              <tr>
                <th>Max leaves</th>
                <td>{employee.max_leaves}</td>
              </tr>
              <tr>
                <th>Leaves taken</th>
                <td>{employee.leave}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
