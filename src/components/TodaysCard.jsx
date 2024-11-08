import React from 'react';
import './TodaysCard.css';
import PracticeCard from './PracticeCard';
import SectionTitle from './SectionTitle';
const TodaysCard = () => {
  return (
    <div className='todaysCard'>
        <SectionTitle title={"Today's Problem"} className="todayProblem"/>
        <PracticeCard />
        <PracticeCard />
    </div>
  )
}

export default TodaysCard