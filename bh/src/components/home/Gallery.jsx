import React, { useEffect } from 'react';
import './Gallery.css';

export const Gallery = () => {
  useEffect(() => {
    const sideImages = document.querySelectorAll('.sideImages img');
    const wrapperImageZoom = document.querySelector('.imageZoom');

    wrapperImageZoom.style.backgroundImage = `url(${sideImages[0].src})`;

    sideImages.forEach((img) => {
      img.addEventListener('click', () => {
        wrapperImageZoom.style.backgroundImage = `url(${img.src})`;
      });
    });

    wrapperImageZoom.addEventListener('mousemove', (e) => {
      const clientRect = wrapperImageZoom.getBoundingClientRect();
      const posXZero = e.clientX - clientRect.left;
      const posYZero = e.clientY - clientRect.top;
      const posXMouse = Math.round(100 / (clientRect.width / posXZero));
      const posYMouse = Math.round(100 / (clientRect.height / posYZero));

      wrapperImageZoom.style.backgroundSize = '250% 250%';
      wrapperImageZoom.style.backgroundPosition = `${posXMouse}% ${posYMouse}%`;
    });

    wrapperImageZoom.addEventListener('mouseleave', () => {
      wrapperImageZoom.style.backgroundSize = '100% 100%';
      wrapperImageZoom.style.backgroundPosition = '100% 100%';
    });
  }, []);

  return (
    <div className="gallery">
      <div className="sideImages">
        <img src=""  alt="alisado1" />
        <img src="https://wallpaperaccess.com/full/2741662.jpg" alt="alisado2" />
        <img src="https://wallpaperaccess.com/full/366926.jpg" alt="alisado3" />
      </div>
      <div className="imageZoom"></div>
    </div>
  );
};

