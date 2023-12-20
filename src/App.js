import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Header/index.js';
import LoginForm from './components/signin/signin.js';
import Home from './components/home/index.js';
import Employees from './components/employees/index.js';
import EmployeeDetails from './components/employeeDetails/employeeDetails.js';
import LeaveForm from './components/Leave/leave.js';
import About from './components/about/index.js';
import Contact from './components/contact/contact.js';

function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== '/'; 

  return (
    <div className="App">
      {showNavBar && <NavBar />} 
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employees/" element={<Employees />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/employees/:id" element={<LeaveForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
