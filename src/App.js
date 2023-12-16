
import { useState } from 'react';
import About from './components/about/index.js';
import Employees from './components/employees/index.js';
import NavBar from './components/Header/index.js'
import Home from './components/home/index.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/employees/" element={<Employees />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

