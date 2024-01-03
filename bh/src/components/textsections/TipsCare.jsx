import React from 'react';
import './TipsCare.css'; 

export const TipsCare = () => {
  return (
    <main className='tipsandcare'>
      <div className='title-section'>
        <div class="section-divisor">
          <span className='store-title'>Tips & Care</span>
        </div>
      </div>
      <section className="hero-section"> 
      <article className='not-to-do'>
        <h2 className='title-tips'>¿Cómo cuidar tu cabello lacio?</h2>
        <div className="card-grid"> 
          <div className="card">
            <div className="card__background" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsbekpj9h/image/upload/v1703880973/Brazilian%20Hair/alisado_1_riamgq.webp)' }}></div>
            <div className="card__content">
              <p className="card__category">LAVADO:</p>
              <h3 className="card__heading">
                <ul>
                  <li>-Cronograma capilar (Hidratación, Nutrición y Reconstrucción)</li>
                  <li>-Antes de lavar realizar pre-shampoo (aplicar acondicionador en el largo para proteger el cabello del shampoo).</li>
                  <li>-Utilizar protector térmico después de lavar.</li>
                </ul>
                </h3>
            </div>
          </div>
          <div className="card">
            <div className="card__background" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsbekpj9h/image/upload/v1703881076/Brazilian%20Hair/alisado_10_gpolna.jpg)' }}></div>
            <div className="card__content">
              <p className="card__category">CUIDADOS:</p>
              <h3 className="card__heading">
                <ul>
                  <li>-Utilizar aceite reparador de puntas 3 veces por día.</li>
                  <li>-Corte de puntas a cada 3 meses.</li>
                  <li>-Dormir con el cabello recogido haciendo la toca.</li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="card">
            <div className="card__background" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsbekpj9h/image/upload/v1703880971/Brazilian%20Hair/alisado_5_nwm3e8.webp)' }}></div>
            <div className="card__content">
              <p className="card__category">MÁS TIPS:</p>
              <h3 className="card__heading">
                <ul>
                  <li>-Hacer 3 humectaciones por mes (aceite de coco Extra virgen en todo el cabello antes de dormir, al día siguiente lavar el cabello normalmente).</li>
                  <li>-Usá y lucí tu cabello suelto el mayor tiempo que puedas.</li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
        </article>
        <article className='not-to-do'>
        <h2 className='title-tips'>¿Qué NO hacer?</h2>
        <div className="card-grid">  
          <div className="card" href="#">
            <div className="card__background" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsbekpj9h/image/upload/v1703881232/Brazilian%20Hair/alisado_9_myj9at.webp)' }}></div>
            <div className="card__content">
              <p className="card__category">EVITAR...</p>
              <h3 className="card__heading">
                <ul>
                  <li>X  Evitar el agua muy caliente, secar y planchar el cabello.</li>
                  <li>X  Evitar tintura con agua oxigenada 20 Vol.</li>
                  <li>X  Evitar decoloración con agua oxigenada 30 Vol.</li>
                  <li>X  Evitar utilizar productos de supermercado.</li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="card" href="#">
            <div className="card__background" style={{ backgroundImage: 'url(https://res.cloudinary.com/dsbekpj9h/image/upload/v1703880971/Brazilian%20Hair/alisado_2_xet7sm.webp)' }}></div>
            <div className="card__content">
              <p className="card__category">LOS NO...</p>
              <h3 className="card__heading">
                <ul>
                  <li>X  No atar el cabello haciendo la “colita”</li>
                  <li>X  No dormir con el cabello suelto produciendo estática con la sábana.</li>
                  <li>X  No hacer corte en capas (los cabellos lacios quedan con aspecto feo y sin brillo).</li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
        </article>
      </section>
    </main>
  );
}

