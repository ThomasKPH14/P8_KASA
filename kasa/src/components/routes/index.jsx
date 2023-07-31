// Import des packages nécessaires depuis la bibliothèque react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des différentes pages de l'application
import Home from '../../pages/Home'; // Page d'accueil
import Housing from '../../pages/Housing'; // Page affichant les informations d'un logement
import Error404 from '../../pages/Error404'; // Page d'erreur 404
import About from '../../pages/About'; // Page À propos

// Importation des composants Navbar et Footer
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

// Composant principal de l'application (router)
const AppRouter = () => {
  return (
    <Router>
      <Navbar /> {/* Affiche le composant Navbar au sommet de chaque page */}
      <Routes>
        {/* Définition des différentes routes et des composants à rendre pour chaque URL */}
        <Route path="/" element={<Home />} /> {/* Route de la page d'accueil */}
        <Route path="/A-propos" element={<About />} /> {/* Route de la page À propos */}
        <Route path="/Fiche-Logement/:id" element={<Housing />} /> {/* Route de la page des détails d'un logement spécifique.*/}
        <Route path="*" element={<Error404 />} /> {/* Route pour gérer les URL non trouvées.*/}
      </Routes>
      <Footer /> {/* Affiche le composant Footer au bas de chaque page */}
    </Router>
  );
};

// Exportation du composant AppRouter pour utilisation dans d'autres fichiers
export default AppRouter;
