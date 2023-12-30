// import { Card } from "./Card";
import { IgIcon, WsIcon, LocationIcon } from "../../assets/imgs/Icons"
import { Gallery } from "./Gallery";
import './Home.css'

import React from 'react';

export const Home = () => {

  return (
    <section className="home-section">
      <Gallery />
      <div className="home-container">
        <h1 className="pres-title">Quienes Somos</h1>
        <p className="presentation">¡Hola! Somos Charlie y Danyelle, dos apasionados brasileños que ahora llamamos hogar a la vibrante ciudad de Córdoba. Con más de 7 años de experiencia, nos dedicamos al arte del alisado capilar. A lo largo de nuestra trayectoria, hemos llevado a cabo más de 3 mil transformaciones en cabello tanto aquí en Córdoba como en Brasil.
        Nuestro secreto radica en una tecnología innovadora que garantiza un lacio perfecto. No solo amamos lo que hacemos, sino que nos esforzamos por ofrecer resultados excepcionales. </p>
        <img src="https://res.cloudinary.com/dsbekpj9h/image/upload/v1703880242/Brazilian%20Hair/photo-output_pm5j4m.jpg" alt="nosotros" className="clip-polygon"></img>
        <strong className="call">¿Estás listo para transformar tu cabello?</strong>
        <div className="networks-container">
          <div className="social-networks">
            <IgIcon />
            <WsIcon />
            <LocationIcon /> 
          </div>
        </div>
      </div>     
    </section>
  );
}

