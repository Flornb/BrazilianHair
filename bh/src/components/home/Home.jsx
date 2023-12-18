// import { Card } from "./Card";
import { NavBar } from "../navbar/NavBar"
import { Gallery } from "./Gallery";
import './Home.css'

import React from 'react';

export function Home() {

  return (
    <section className="home-section">
        <NavBar />
        <div className="container">
        <Gallery />
            <h1 className="pres-title">Quienes Somos</h1>
            <p className="presentation">¡Hola! Somos Charlie y Danyelle, dos apasionados brasileños que ahora llamamos hogar a la vibrante ciudad de Córdoba. Con más de 7 años de experiencia, nos dedicamos al arte del alisado capilar. A lo largo de nuestra trayectoria, hemos llevado a cabo más de 3 mil transformaciones en cabello tanto aquí en Córdoba como en Brasil.
            Nuestro secreto radica en una tecnología innovadora que garantiza un lacio perfecto. No solo amamos lo que hacemos, sino que nos esforzamos por ofrecer resultados excepcionales. <strong>¿Estás listo para transformar tu cabello?"</strong></p>
        
        {/* Agrega aquí los componentes o secciones adicionales del home */}
      </div>
      
    </section>
  );
}

