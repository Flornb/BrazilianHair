import React from 'react';
import './Header.css'

export function Header () {

  return (
    <header>
      <div className="logo">
        <img src='https://res.cloudinary.com/dsbekpj9h/image/upload/v1703005345/Brazilian%20Hair/Brazilian_Hair_blanco_SIN_FONDO_ne6uj9.png' alt="Brazilian Hair"></img>
      </div>
      <div className='title'>
        <h1 className='first-title'>Bienvenidos a Brazilian Hair</h1>
        <h2 className='second-title'>E S P E C I A L I S T A S</h2>
      </div>
      
      <div className='socialicons'>
        <a href="#https://wa.me/5493537304017"  className='icon' ><img src='https://res.cloudinary.com/dsbekpj9h/image/upload/v1704238891/Brazilian%20Hair/tel-icon_eq92ya.svg' alt="Whatsapp" /></a>      
        <a href="#https://www.instagram.com/braziliannhair?igsh=amh3NDBxZ2FiM3Zj" className='icon'><img  src="https://res.cloudinary.com/dsbekpj9h/image/upload/v1704237139/Brazilian%20Hair/instagram_xbzbqt.svg" alt="Instagram" /></a>       
      </div>

    </header>
  )
}