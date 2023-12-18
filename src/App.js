import About from './components/about/index.js';
import Employees from './components/employees/index.js';
import NavBar from './components/Header/index.js'
import Home from './components/home/index.js';
import { Route, Routes } from 'react-router-dom';
// import LoginForm from './components/signin/signin.js';
import EmployeeDetails from './components/employeeDetails/employeeDetails.js';
import LeaveForm from './components/Leave/leave.js';

function App() {
  return (
    <div className="App">

           <NavBar />
           <Routes>

        {/* <Route path="/" element={<LoginForm />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employees/" element={<Employees />} /> 
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/employees/:id" element={<LeaveForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

