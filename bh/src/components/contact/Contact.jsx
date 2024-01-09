import React from 'react';
import './Contact.css';


export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2 className='contact-title'>CONTACTO</h2>
          <div className="links">
      
            <div className="link">
              <a href="https://wa.me/5493537304017" target='_blank' className='contact-imgs'><img  src='https://res.cloudinary.com/dsbekpj9h/image/upload/v1704238891/Brazilian%20Hair/tel-icon_eq92ya.svg' alt="Whatsapp" /></a>
            </div>
            <div className="link">
              <a href="https://www.instagram.com/braziliannhair?igsh=amh3NDBxZ2FiM3Zj" target='_blank' className='contact-imgs'><img src="https://res.cloudinary.com/dsbekpj9h/image/upload/v1704237139/Brazilian%20Hair/instagram_xbzbqt.svg" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form>
            <div className="form-item">
              <input className='inputs-contact' type="text" name="sender" required />
              <label className='text-boxs'>Nombre:</label>
            </div>
            <div className="form-item">
              <input className='inputs-contact' type="tel" name="sender" required />
              <label className='text-boxs'>Telefono:</label>
            </div>
            <div className="form-item">
              <input className='inputs-contact' type="text" name="email" required />
              <label className='text-boxs'>Email:</label>
            </div>
            <div className="form-item">
              <textarea className="text-area-contact" name="message" required></textarea>
              <label className='text-boxs'>Mensaje:</label>
            </div>
            <button className="submit-btn"><a href=''>Enviar</a></button>  
          </form>
        </div>
      </div>
    </section>
  );
};
