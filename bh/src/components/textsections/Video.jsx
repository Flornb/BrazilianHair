import React from 'react';
import './Video.css';

export const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="position-relative">
        <video controls playsInline poster="https://res.cloudinary.com/dsbekpj9h/image/upload/v1703880973/Brazilian%20Hair/alisado_1_riamgq.webp" height="500" width="300">
          <source src="https://res.cloudinary.com/dsbekpj9h/video/upload/v1704253220/Brazilian%20Hair/video-redes-sociales_qvh7ak.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <span className="play-btn">
          <i className="fas fa-play"></i>
        </span>
      </div>
    </div>
  );
};
