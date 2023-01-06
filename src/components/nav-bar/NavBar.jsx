import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from './images/ipp-logo.png'

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/"> <img src={logo} alt="ipp logo"/> </Link>
        <Link to="/"> Industry Partners Program</Link>
      </div>
      <div className="navbar-links-container">
          <Link to="/events">EVENTS</Link>
          <Link to="/partners">PARTNERS</Link>
          <Link to="/apply">APPLY</Link>
      </div>
    </div>
  );
}
