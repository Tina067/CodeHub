// InfoBoxList.js
import React from 'react';
import './InfoBoxList.css';
import InfoBox from './InfoBox';

function InfoBoxList() {
  const infoBoxContents = ['Box 1 Content', 'Box 2 Content', 'Box 3 Content'];

  return (
    <div className="info-box-list">
      {infoBoxContents.map((content, index) => (
        <InfoBox key={index} content={content} />
      ))}
    </div>
  );
}

export default InfoBoxList;
