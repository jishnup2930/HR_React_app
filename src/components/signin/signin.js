import React, { useState } from "react";
import "./signin.css";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    const { username, password } = credentials;
    if (username === 'hamon' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    handleLogin({ username, password });
    console.log(username, password);
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="container">
      <div className="form-box">
        <h1>Sign in</h1>
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Name" name="username" required />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" name="password" required />
            </div>
          </div>
          <div className="btn-field" id="btnBtn">
            <button type="submit">Sign in</button>
          </div>
          <div>
          <p>Hint - Name:hamon, Password:1234</p>

          </div>
        </form>
      </div>
    </div>
  );
}


export default LoginForm;
