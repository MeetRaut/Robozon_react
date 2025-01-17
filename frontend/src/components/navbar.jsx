// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css'

function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </Link>
        <Link to="/" className="logo">
          <span className="website-name">ROBOZON</span>
        </Link>
      </div>
      
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/product" className="nav-link">Products</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <Link to="/aboutus" className="nav-link">About Us</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
