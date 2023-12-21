import React, { Fragment } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <body>
        
        <div className="home">
          <div>
            <h1>WELCOME TO HAMON HRMS</h1>
          </div>
          <div>
            <p>
              Hamon Technologies specializes in harnessing cutting-edge software
              solutions to drive your business forward or bring your innovative
              ideas to life.
            </p>
          </div>
          <div>
            <NavLink to={"/contact"} className="btn btn-secondary btn-lg" id="home-button">
              Get in touch
            </NavLink>
          </div>
      
        </div>
      </body>
    </Fragment>
  );
}

export default Home;
