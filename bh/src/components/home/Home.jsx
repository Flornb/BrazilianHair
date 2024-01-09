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
          <div className="section-divisor">
            <span className='store-title'>Sobre Nosotros</span>
          </div>
        </div>
        <span className="presentation">¡Hola! Somos Charlie y Danyelle de Brazilian Hair especialistas, dos apasionados brasileños que ahora llamamos hogar a la vibrante ciudad de Córdoba. Con más de 7 años de experiencia, nos dedicamos al arte del alisado capilar. A lo largo de nuestra trayectoria, hemos llevado a cabo más de 3 mil transformaciones en cabello tanto aquí en Córdoba como en Brasil.
        <p>Nuestro secreto radica en una tecnología innovadora que garantiza un lacio perfecto. No solo amamos lo que hacemos, sino que nos esforzamos por ofrecer resultados excepcionales. </p>
          
        <p>Cada transformación es un testimonio de nuestro amor por el cabello y nuestro compromiso con resultados excepcionales. En cada visita, no solo recibirás un alisado impecable, sino también la confianza de estar en manos expertas.
        Además del alisado láser, ofrecemos una gama de productos de calidad profesional para que puedas mantener y cuidar tu cabello en casa. Queremos que experimentes el espectáculo del lacio de tus sueños desde la comodidad de tu hogar.</p></span>
        <img src="https://res.cloudinary.com/dsbekpj9h/image/upload/v1703880242/Brazilian%20Hair/photo-output_pm5j4m.jpg" alt="nosotros" className="clip-polygon"></img>
        <strong className="call">¿Estás listo para transformar tu cabello?</strong>
        <div className="networks-container">
            <a href="https://wa.me/5493537304017" target='_blank' className='social-networks'><img src='https://res.cloudinary.com/dsbekpj9h/image/upload/v1704769794/Brazilian%20Hair/ws_icon_yk5dwj.png' alt="Whatsapp" /></a>      
            <a href="https://www.instagram.com/braziliannhair?igsh=amh3NDBxZ2FiM3Zj" target='_blank' className='social-networks'><img src="https://res.cloudinary.com/dsbekpj9h/image/upload/v1704769786/Brazilian%20Hair/ig_icon_elcqcj.png" alt="Instagram" /></a> 
        </div>
      </div>     
    </section>
  );
}

