import React from 'react';
import './Footer.css'; // Asegúrate de tener tus estilos aquí

export const Footer = () => {
  return (
    <footer>
      <div className="top_header">
        <section>
          <div className='text-header'>Córdoba, Córdoba, Argentina</div>
        </section>
        <section>
          <div className='text-header'>3537304017</div>
        </section>
        <section>
          <div className='text-header'>contacto@hairbrazilian.com</div>
        </section>
      </div>
      <span className="border-shape"></span>
      <div className="bottom_content">
        <section>
          <a className='footer-text' href="#">Nosotros</a>
          <a className='footer-text' href="#https://reservas-brazilianhair.glide.page">Turnos</a>
          <a className='footer-text' href="#cronograma">Cronograma Capilar</a>
          <a className='footer-text' href="#tips">Tips & Cuidados</a>
          <a className='footer-text' href="#shop">Tienda</a>
          <a className='footer-text' href="#contact">Contactanos</a>
        </section>
      </div>
    </footer>
  );
}

