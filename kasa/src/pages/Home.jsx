// Importation des dépendances nécessaires.
import React from 'react';
import { NavLink } from 'react-router-dom';
// Importation des composants personnalisés.
import Banner from '../components/banner';
import Cards from '../components/Cards';
// Importation des données des logements à partir d'un fichier JSON.
import logements from '../app/logements.json';
// Déclaration du composant Home
const Home = () => {
  const bannerText = `Chez vous,\npartout et ailleurs`;

  return (
    <div className="body-page">
      <div className="banner__home">
        <Banner text={bannerText} />
      </div>
      <section className="gallery">
        {logements.map(({ id, cover, title }) => (
          <div className="card_logement" key={id}>
            <NavLink to={`/Fiche-Logement/${id}`} className="card_logement_link">
              <Cards cover={cover} title={title} />
            </NavLink>
          </div>
        ))}
      </section>
    </div>
  );
};
// Le composant Home est exporté pour pouvoir être utilisé dans d'autres fichiers.
export default Home;
