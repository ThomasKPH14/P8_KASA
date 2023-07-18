import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/Kasalogo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-image" />
        </NavLink>
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link">
              <h5>ACCUEIL</h5>
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/A-propos" className="navbar-link">
              <h5>A PROPOS</h5>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
