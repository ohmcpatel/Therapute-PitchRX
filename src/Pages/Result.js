import React from 'react';
import './Result.css'; // Import your CSS file
import wrongVideoUrl from '../images/annotatedVideo.mov';
import correctVideoUrl from '../images/result2.gif';

const Result = () => {
  return (
    <div className="result-container">
      <div className="card">
        <div className="video-container wrong">
          <video controls>
            <source src={wrongVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
      <div className="card">
        <div className="video-container correct">
          <img src={correctVideoUrl} alt="GIF" />

        </div>
      </div>
    </div>
  );
};

export default Result;
