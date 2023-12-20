import React, { useState, useEffect } from 'react';
// import { GalleryAlisado1 } from '../../assets/Images'
import './Gallery.css';


  export const Gallery = () => {
    const images = [
      'https://res.cloudinary.com/dsbekpj9h/image/upload/v1702996338/Brazilian%20Hair/1_iiuh4c.jpg',
      'https://res.cloudinary.com/dsbekpj9h/image/upload/v1702996346/Brazilian%20Hair/foto_home_ntbieq.jpg',
    ];
      
    const [currentSlide, setCurrentSlide] = useState(0);
      
    const goToSlide = (index) => {
      setCurrentSlide(index);
        };
      
    useEffect(() => {
      const interval = setInterval(() => {
        goToNextSlide();
      }, 4000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
      
      return () => clearInterval(interval);
    }, [currentSlide]);
      
    const goToNextSlide = () => {
      const nextSlide = (currentSlide + 1) % images.length;
      setCurrentSlide(nextSlide);
    };
      
    return (
      <section id="slider" className="container">
        <ul className="slider-wrapper">
          {images.map((image, index) => (
            <li key={index} className={index === currentSlide ? 'current-slide' : ''}>
              <img src={image} title="" alt="" />
              <div className="caption">
                <p>
                  texto sobre lacios.. sacá tu turno!.
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="clearfix">
          <ul className="control-buttons">
            {images.map((_, index) => (
              <li
                key={index}
                className={index === currentSlide ? 'active' : ''}
                onClick={() => goToSlide(index)}
              >
              </li>
            ))}
          </ul>
        </div>
      </section>
    );     
  };

