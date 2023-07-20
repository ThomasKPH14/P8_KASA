import React from 'react';
import Banner from '../components/banner';
import Collapse from '../components/Collapse';
import AboutData from '../app/about.json';

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

export default About;
