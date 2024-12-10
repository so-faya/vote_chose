import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const DragLoginForm = () => {
  

  return (
    <div className="login-form">
      <div className="form-container">
        <h2>Login </h2>
        <form>
          <input type="text" placeholder="First Name"  />
          <input type="text" placeholder="Last Name"  />
          <input type="email" placeholder="Email"  />
          <input type="password" placeholder="Password"  />
          
          <Link to="/home" className='button'>
            <button type="submit">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DragLoginForm;
