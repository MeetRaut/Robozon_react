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
        <span className="website-name">ROBOZON</span>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
