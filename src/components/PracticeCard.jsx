import React from 'react';
import './PracticeCard.css';
const PracticeCard = () => {
  return (
    <div className='practiceCard'>
        <div className='practiceCard-child' id="videoimage"></div>
        <div className='practiceCard-child' id="videolink">
            <div className="problemstatement pCard"></div>
            <div className="buttons pCard">
                <div className="button1 button"></div>
                <div className="button2 button"></div>
            </div>
        </div>
    </div>
  )
}

export default PracticeCard