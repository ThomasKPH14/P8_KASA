// Importation des dépendances nécessaires.
import React from 'react';
import Banner from '../components/banner';
import Collapse from '../components/Collapse';
// Importation des données à partir d'un fichier JSON.
import AboutData from '../app/about.json';

// Définition de la classe About, qui hérite de React.Component.
class About extends React.Component {
  render() {
    return (
      <div className='about-page'>
        <div className='about-page__banner'>
          <Banner className="banner-about" />
        </div>
        <div className='about-page__container'>
          {AboutData.map((data, index) => {
            return (
              <Collapse key={index} title={data.title} content={data.content} />
            )
          })}
        </div>
      </div>
    );
  }
}
// Exportation de la classe About pour qu'elle puisse être utilisée dans d'autres fichiers.
export default About;
