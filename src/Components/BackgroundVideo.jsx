import React from 'react';


const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
