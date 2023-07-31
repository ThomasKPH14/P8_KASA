// Importation des bibliothèques et des composants nécessaires
import React from 'react';
import { useMatch, NavLink } from 'react-router-dom'; // useMatch pour vérifier si le chemin actuel correspond à l'URL actuelle
import Logo from '../assets/Kasalogo.png'; // Importation du logo

// Création du composant CustomNavLink qui utilisera le hook useMatch
function CustomNavLink({ to, children, activeClassName, ...props }) {
  const match = useMatch(to); // Utilisation du hook useMatch pour vérifier si le chemin correspond à l'URL actuelle

  // Rendu du composant NavLink. Si le chemin correspond à l'URL actuelle, la classe activeClassName est appliquée, sinon aucune classe n'est appliquée
  return (
    <NavLink 
      to={to} 
      className={match ? activeClassName : ''}
      {...props}
    >
      {children}
    </NavLink>
  );
}

// Le composant Navbar 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <CustomNavLink to="/" className="navbar-logo"> {/* Lien vers la page d'accueil avec le logo */}
          <img src={Logo} alt="Logo" className="logo-image" />
        </CustomNavLink>
        <ul className="navbar-nav">
          <li className="navbar-item">
            <CustomNavLink to="/" className="navbar-link" activeClassName="active"> {/* Lien vers la page d'accueil, qui devient 'active' lorsque cette route est choisie */}
              <h5>Accueil</h5>
            </CustomNavLink>
          </li>
          <li className="navbar-item">
            <CustomNavLink to="/A-propos" className="navbar-link" activeClassName="active"> {/* Lien vers la page À propos, qui devient 'active' lorsque cette route est choisie */}
              <h5>A Propos</h5>
            </CustomNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Exportation du composant Navbar pour utilisation dans d'autres fichiers
export default Navbar;
