// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <header className="header">
      <h1 className="app-title">🌆 Cities Application</h1>
      <nav className="navbar">
        <Link to="/cities" className="nav-link">📋 Cities List</Link>
        <Link to="/add-city" className="nav-link">➕ Add City</Link>
      </nav>
    </header>
  );
}

export default Navbar;
