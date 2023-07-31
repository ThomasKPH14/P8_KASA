// Importation des dépendances et composants nécessaires.
import React from 'react';
import { useParams } from 'react-router-dom';
import Logements from '../app/logements.json';
import Error404 from './Error404';
import Ratings from '../components/Rating';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Slide from '../components/SlideShow';
import Collapse from '../components/Collapse';

// Déclaration du composant Housing
function Housing() {
  const { id } = useParams();
  const logement = Logements.find(logement => logement.id === id);

  if (!logement) {
    return <Error404 />;
  }

  const { title, location, rating, host, equipments, description, tags } = logement;
 // Affichage du logement.
  return (
    <div className='housing-container'>
      <Slide data={logement} />
      <div className='housing-info'>
        <h2 className='housing-title'>{title}</h2>
        <h3 className='housing-location'>{location}</h3>
      </div>
        <Tags tags={tags} />
      <div className='housing-host'>
        <Host host={host} />
        <Ratings rating={rating} />
      </div>
      <div className='housing-accordion'>
        <Collapse className='housing-accordion__info' title={'Description'} content={description} />
        <Collapse className='housing-accordion__info' title={'Equipements'} content={equipments.map((equipment, index) => (
          <li key={equipment}>{equipment}</li>))} />
      </div>

    </div>
  );
}
// Exportation du composant Housing pour qu'il puisse être utilisé dans d'autres fichiers.
export default Housing;
