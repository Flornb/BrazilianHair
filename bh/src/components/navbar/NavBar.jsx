import React, { useState } from 'react';
import '../navbar/NavBar.css'
// import { HamburIcon } from '../../assets/imgs/Icons';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`main-menu ${menuOpen ? 'main-menu-open' : ''}`} onClick={handleMenuClick}>
      <i className="bouton-menu"></i>
      <ul className="menu-wrapper">
        <li className="menu-li"><a href="#">Nosotros</a></li>
        <li className="menu-li"><a href="#Products">Tienda</a></li>
        <li className="menu-li"><a href="#Turnos">Turnos</a></li>
        <li className="menu-li"><a href="#Cronograma">Cronograma Capilar</a></li>
        <li className="menu-li"><a href="#TipsCare">Tips & Cuidados</a></li>
        <li className="menu-li"><a href="#contacto">Contactanos</a></li>
        <li className="menu-li-session"><a href="#">Iniciar Sesión</a></li>
      </ul>
    </nav>
  );
}

