import React, { useRef, useState } from 'react';
import './VideoSection.css';

export const VideoSection = () => {
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setShowButton(false);
    } else {
      video.pause();
    }
  };

  const handleVideoPlay = () => {
    setShowButton(false);
  };

  return (
    
    <div className="video-section">
      <div className='title-video-container'>
      <h1 className='title-video'>Resultados Increibles</h1>
      <button className='submit-btn'><a href="https://wa.me/5493537304017" >
        Contactanos!
      </a></button>
      </div>
      <div className="position-relative">
        <video
          ref={videoRef}
          controls
          playsInline
          poster="https://res.cloudinary.com/dsbekpj9h/image/upload/v1703880973/Brazilian%20Hair/alisado_1_riamgq.webp"
          height="450"
          width="300"
          onPlay={handleVideoPlay}
        >
          <source
            src="https://res.cloudinary.com/dsbekpj9h/video/upload/v1704253220/Brazilian%20Hair/video-redes-sociales_qvh7ak.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {showButton && (
          <button className="play-btn" onClick={togglePlay}>
          </button>
        )}
      </div>
    </div>
  );
};
