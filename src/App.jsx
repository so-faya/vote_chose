import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";

function App() {
  return (
    <HashRouter>
        <div className="App">
          <Routes>
            
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            
          </Routes>
        </div>

    </HashRouter>
  );
}

export default App;

