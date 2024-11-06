import React from 'react';
import './MainContent.css';
import SectionTitle from './SectionTitle';
import Card from './Card';
import CardGrid from './CardGrid';

function MainContent() {
  return (
    <div className="main-content-container">
      <div className="main-content-section">
      <div className='parent-main-content-column'>
        <div className="main-content-column-2">
          <SectionTitle title="Title2" />
          <Card />
        </div>
        <div className="main-content-column-3">
          <SectionTitle title="Title3" />
          <Card />
        </div>
        </div>
      </div>
      <div className='Title4-section'>
      <SectionTitle title="Title4" />
      <CardGrid />
      </div> 
    </div>
  );
}

export default MainContent;
