// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-title">My Pokédex</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {/* You can add more links later */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
