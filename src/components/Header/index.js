import {  NavLink } from 'react-router-dom';
import './navbar.css';

export default function Header() {

return(
  <body>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <NavLink to={'/home'} className="navbar-brand">HRMS</NavLink>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to={'/employees'} className="navbar-brand">Employees</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={'/about'} className="navbar-brand">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={'/contact'} className="navbar-brand">Contact</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
</body>
);
}