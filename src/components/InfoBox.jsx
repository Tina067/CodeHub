// InfoBox.js
import React from 'react';
import './InfoBox.css';

function InfoBox({ content }) {
  return (
    <div className="info-box">
      <p>{content}</p>
    </div>
  );
}

export default InfoBox;
