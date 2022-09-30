import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/home"
            >
              בית
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/about"
            >
              על עצמי
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/schedule"
            >
              קביעת שיעור
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
