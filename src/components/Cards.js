import React from 'react';
import CardItem from './CardItem';

import './Cards.css';

import kerala from '../assets/images/kerala.jpg';
import tamilnadu from '../assets/images/tamilnadu.jpg';
import utterpradesh from '../assets/images/taj.jpg';
import kolkata from '../assets/images/kolkata.jpg';
import rajasthan from '../assets/images/rajasthan.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={kerala}
              text="Kerala, God's Own Country – The Land of Beauty and Wonders"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={tamilnadu}
              text="The most beautiful temple in the universe is your soul; that is why God wants to dwell in it"
              label="Mystery"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={utterpradesh}
              text="Love is the architect of the Taj Mahal"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={kolkata}
              text="Kolkata is a city of poetry, culture and history"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={rajasthan}
              text="Breathing in the Thar desert air"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
