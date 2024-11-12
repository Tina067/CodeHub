import React from 'react';
import './PracticeCard.css';
// import VideoPlayer from './VideoPlayer';
import YouTube from 'react-youtube';
const PracticeCard = () => {
  const videoId = "F9c7LpRZWVQ"; // Example video ID

  const videoOptions = {
    // height: '100%',
    // width: '100%',  
    playerVars: {
      autoplay: 0, // Set to 1 to autoplay
    },
  };

  return (
    <div className='practiceCard'>
        <div className='practiceCard-child videoimage'>
         {/* <VideoPlayer videoId = {"F9c7LpRZWVQ"} /> */}
         <YouTube videoId={videoId} opts={videoOptions} className="video-iframe"/>
        </div>
        <div className='practiceCard-child' id="videolink">
            <div className="problemstatement pCard"></div>
            <div className="buttons pCard">
                <div className="button1 button">
                  <button className='btn'>Watch</button>
                </div>
                <div className="button2 button">
                  <button className='btn'>Practice</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PracticeCard