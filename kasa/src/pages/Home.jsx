import React from 'react';
import { NavLink } from 'react-router-dom';

import Banner from '../components/banner';
import Cards from '../components/Cards';
import logements from '../app/logements.json';

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

export default Home;
