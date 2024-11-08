// CardPlaceholder.js
import React from 'react';
import './CardPlaceholder.css';

function CardPlaceholder() {
  const boxes = Array.from({length: 7})

  return <div className="card-placeholder">
    <div className="card-pla-topic goals-topic"></div>
    <div className="card-pla-topic goals-box">
    {boxes.map((_, index) => (
                <div key={index} className="goal-box"> </div>
            ))}
    </div>
  </div>;
}

export default CardPlaceholder;
