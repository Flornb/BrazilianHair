// import { Card } from "./Card";
import React from 'react';
import { Gallery } from "./Gallery";
import './Home.css'


export const Home = () => {

  return (
    <section className="home-section">
      <Gallery />
      <div className="home-container">
        <div className='title-section'>
          <div class="section-divisor">
            <span className='store-title'>Sobre Nosotros</span>
          </div>
        </div>
        <p className="presentation">¡Hola! Somos Charlie y Danyelle de Brazilian Hair especialistas, dos apasionados brasileños que ahora llamamos hogar a la vibrante ciudad de Córdoba. Con más de 7 años de experiencia, nos dedicamos al arte del alisado capilar. A lo largo de nuestra trayectoria, hemos llevado a cabo más de 3 mil transformaciones en cabello tanto aquí en Córdoba como en Brasil.
        Nuestro secreto radica en una tecnología innovadora que garantiza un lacio perfecto. No solo amamos lo que hacemos, sino que nos esforzamos por ofrecer resultados excepcionales. </p>
        <img src="https://res.cloudinary.com/dsbekpj9h/image/upload/v1703880242/Brazilian%20Hair/photo-output_pm5j4m.jpg" alt="nosotros" className="clip-polygon"></img>
        <strong className="call">¿Estás listo para transformar tu cabello?</strong>
        <div className="networks-container">
            <a href="#https://wa.me/5493537304017" className='social-networks'><img src='https://res.cloudinary.com/dsbekpj9h/image/upload/v1704238046/Brazilian%20Hair/whatsapp-icon_nj0wbp.svg' alt="Whatsapp" /></a>      
            <a href="#https://www.instagram.com/braziliannhair?igsh=amh3NDBxZ2FiM3Zj" className='social-networks'><img src="https://res.cloudinary.com/dsbekpj9h/image/upload/v1704237139/Brazilian%20Hair/instagram_xbzbqt.svg" alt="Instagram" /></a>       
            <a href="#" className='social-networks'><img className='social-networks' src="https://res.cloudinary.com/dsbekpj9h/image/upload/v1704237211/Brazilian%20Hair/email_uk37zt.svg" alt="Email" /></a>
        </div>
      </div>     
    </section>
  );
}

