import React from 'react';
import DragLoginForm from '../Components/DragLoginForm';
import './Login.css';

const Login = () => {
 
  return (
    <div className="app">
      <div className="background">
        <h1 className="background-title">Welcome to 3D Login</h1>
        <DragLoginForm />
      </div>
    </div>
  );
};

export default Login;
