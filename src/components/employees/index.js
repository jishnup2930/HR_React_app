import { useEffect, useState } from "react";
import "./employees.css";
import { NavLink } from "react-router-dom";

export default function Employee() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Employee Details</h1>
        <div className="col-6">
          <div className="list">
            {employee.map((data) => (
              <p key={'data.id'}>
                <NavLink id="key" to={`/employees/${data.id}`} onClick={scrollToTop} >{data.id}. {data.fname} {data.lname} </NavLink>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
