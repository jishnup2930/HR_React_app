import React from 'react';
import { NavLink } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  const emailAddress = 'contact@hamontech.com';
  const phoneNumber = '+1234567890';
  const address = 'Hamon Building, Near Kuthiravattam, Kozhikode';


  return (
    <div className="contact-container">
      <h1>Hamon Technologies</h1>
      <div id='address'>
        <h3>Address</h3>
        <p>{address}</p>
      </div>
      <p>
        For inquiries, please contact us via:
        <div id='contact'>
          <NavLink>
            {emailAddress}
          </NavLink>
          <br />
          <NavLink>
            {phoneNumber}
          </NavLink>
        </div>
      </p>
      <div>
        <NavLink to={"/home"} className="btn btn-secondary btn-lg" id="button">
          Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default Contact;
