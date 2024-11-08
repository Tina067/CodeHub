// Card.js
import React from 'react';
import './Card.css';
import CardPlaceholder from './CardPlaceholder';
import SectionTitle from './SectionTitle';

function Card() {
  return (
    <div className="card">
      <SectionTitle title="Title3" />
      <CardPlaceholder />
      <CardPlaceholder />
    </div>
  );
}

export default Card;
