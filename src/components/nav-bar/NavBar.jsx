import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">Brown CS IPP</Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/events">Events</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/apply">Application</Link>
      </div>
    </div>
  );
}
