import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import ipplogo from './images/ipp-logo.png'
import brownlogo from './images/brownlogo.png'
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function NavBar() {
  return (
    <div className="navbar-container"> 
      <div className="navbar-logo">
        <Link to="/"> <img className="brown" src={brownlogo} alt="brown university logo"/> </Link>
        <Link to="/"> <img className="ipp" src={ipplogo} alt="ipp logo"/> </Link>
        <Link to="/"> Industry Partners Program</Link>
      </div>
      <div className="navbar-links-container">
          <NavLink className="navbar-links"
            to="/events" 
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#000000',
              background: isActive ? '#193AA5' : '#fff',
              })}
            >
              EVENTS</NavLink>
          <NavLink className="navbar-links"
            to="/partners"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#000000',
              background: isActive ? '#193AA5' : '#fff',
              })}
          >
            PARTNERS</NavLink>
          <NavLink className="navbar-links"
            to="/apply"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#000000',
              background: isActive ? '#193AA5' : '#fff',
              })}
          >
            APPLY</NavLink>
      </div>
    </div>
  );
}