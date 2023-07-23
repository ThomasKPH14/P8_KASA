import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import logements from '../app/logements.json';
import Error404 from './Error404';
import Logements from '../app/logements.json';

function Housing() {
  const { id } = useParams();
  const logement = Logements.find(logement => logement.id === id);

  if (!logement) {
    return <Error404 />;
  }

  const { title, location, rating, host, equipments, description, pictures, tags } = logement;

  return (
    <div>
      <div className='housing-container'>
        <div className='housing-info'>
          <h2 className='housing-title'> {title} </h2>
          <h3 className='housing-location'> {location} </h3>
          <img src={logement.cover} alt={title} />
          <p className='housing-description'> {description} </p>
          <p className='housing-host'> {host.name} </p>
          <img src={host.picture} alt={host.name} />
          <p className='housing-rating'> {rating} </p>
          <ul className='housing-equipments'>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
          <div className='housing-pictures'>
            {pictures.map((picture, index) => (
              <img key={index} src={picture} alt={`${title} image ${index + 1}`} />
            ))}
          </div>
          <ul className='housing-tags'>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Housing;
