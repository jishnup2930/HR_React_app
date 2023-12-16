import { useEffect, useState } from "react";
import "./employees.css";

export default function Employee() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Employee Details</h1>
        <div className="col-3">
          <div className="list">
            {employee.map((data) => (
              <p>
                {data.fname} {data.lname}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
