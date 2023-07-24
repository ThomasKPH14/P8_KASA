import React from 'react';
import { useParams } from 'react-router-dom';
import Logements from '../app/logements.json';
import Error404 from './Error404';
import Ratings from '../components/Rating';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Slide from '../components/SlideShow';

function Housing() {
  const { id } = useParams();
  const logement = Logements.find(logement => logement.id === id);

  if (!logement) {
    return <Error404 />;
  }

  const { title, location, rating, host, equipments, description, tags } = logement; 

  return (
    <div className='housing-container'>
      <h2 className='housing-title'>{title}</h2>
      <h3 className='housing-location'>{location}</h3>
      
      <Slide data={logement} /> 

      <div className='housing-description'>{description}</div>
      
      <Host host={host} />

      <Ratings rating={rating} />
      
      <ul className='housing-equipments'>
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>

      <Tags tags={tags} />

    </div>
  );
}

export default Housing;
