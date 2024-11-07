import React from 'react';
import './CardGrid.css';
// import Card from './Card';
import ProgressCard from './ProgressCard';

function CardGrid() {
  const progressCards = [1, 2, 3, 4, 5,6,7];

  return (
    <div className="card-grid">
      {progressCards.map((item, index) => (
        <ProgressCard key={index} />
      ))}
    </div>
  );
  // return(
  //   <div className="card-grid">
  //     <ProgressCard />
  //     <ProgressCard />
  //   </div>
    
  // )
}

export default CardGrid;
