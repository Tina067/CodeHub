// import React from 'react';
// import './VideoPlayer.css';  

// const VideoPlayer = ({ videoId }) => {
//   return (
//     <div className="video-player-container">  {/* Apply the CSS container */}
//       {/* <iframe
//         src={`https://www.youtube.com/embed/${videoId}?si=p1ucEDeZIdVTet-Z`}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       ></iframe> */}
//       <iframe title="YouTube video player" className='Iframe'></iframe>
//     </div>
//   );
// };

// export default VideoPlayer;


import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="video-player-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
