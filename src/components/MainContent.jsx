import React from 'react';
import './MainContent.css';
import SectionTitle from './SectionTitle';
import Card from './Card';
import CardGrid from './CardGrid';
import TodaysCard from './TodaysCard';

function MainContent() {
  return (
    <div className="main-content-container">
      <div className="main-content-section">
      <div className='parent-main-content-column'>
        <div className="main-content-column-2">
          <TodaysCard />
        </div>
        <div className="main-content-column-3">
          <Card />
        </div>
        </div>
      </div>
      <div className='Title4-section'>
      <SectionTitle title="Learning Progess" />
      <CardGrid />
      </div> 
    </div>
  );
}

export default MainContent;
