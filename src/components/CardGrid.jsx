import React from 'react';
import './CardGrid.css';
// import SectionTitle from './SectionTitle';
// import Card from './Card';
import ProgressCard from './ProgressCard';

function CardGrid() {
  const progressCards = [1, 2, 3, 4, 5,6,7];

  return (
    <div className="card-grid">
    {/* <div className="title4"><SectionTitle title="Title4" /></div> */}
    <div className='cards'></div>
      {progressCards.map((item, index) => (
        <ProgressCard key={index} />
      ))}
    </div>
  );
}

export default CardGrid;
