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
            <NavLink exact to="/" className="navbar-link" activeClassName="active">
              <h5>Accueil</h5>
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/A-propos" className="navbar-link" activeClassName="active">
              <h5>A Propos</h5>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
