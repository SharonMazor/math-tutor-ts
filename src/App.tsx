import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import NavBar from "./components/NavBar";
import "./App.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/hoame" element={<Home />} />
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
