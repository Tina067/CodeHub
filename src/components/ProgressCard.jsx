import React from 'react';
import './ProgressCard.css';

const ProgressCard = () => {
    const boxes = Array.from({length: 24})
  return (
    <div className='OneCard'>
      <div className='topic'></div>
      <div className='ProCard'>
        <div className="box-container">
            {boxes.map((_, index) => (
                <div key={index} className="small-box"> </div>
            ))}
        </div>
      </div>
    </div>
   
  )
}

export default ProgressCard

