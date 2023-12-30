import React, { useState } from 'react';
import '../navbar/NavBar.css'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`main-menu ${menuOpen ? 'main-menu-open' : ''}`} onClick={handleMenuClick}>
      <i className="bouton-menu"></i>
      <ul className="menu-wrapper">
        <li className="menu-li"><a href="#home">Nosotros</a></li>
        <li className="menu-li"><a href="#Tienda">Tienda</a></li>
        <li className="menu-li"><a href="#turnos">Turnos</a></li>
        <li className="menu-li"><a href="#Cronograma">Cronograma Capilar</a></li>
        <li className="menu-li"><a href="#TipsCare">Tips & Cuidados</a></li>
        <li className="menu-li"><a href="#contacto">Contactanos</a></li>
      </ul>
    </nav>
  );
}

