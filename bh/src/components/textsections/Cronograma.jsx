import React from "react";
import "./Cronograma.css";

export const Cronograma = () => {

    return(
        <div className="container-cronogr">
            <div className="text-box">
                <div className="hover-text">
                    <h3 className="title-cron">CRONOGRAMA CAPILAR </h3>
                    <p className="text-cron">
                    El cronograma capilar está compuesto de 3  etapas: Nutrición, hidratación y  reconstrucción. Y lo van hacer de la siguiente manera..</p>
                    <ul>
                    <li className="list-cron">1° Lavado Hidratación 
                    <span>Shampoo de Hidratación, baño de crema de Hidratación y acondicionador de Hidratación.</span></li>
                    <li className="list-cron">2° Lavado Nutrición
                    <span>Shampoo de Nutrición, baño de crema de Nutrición y acondicionador de Nutrición.</span></li> 
                    <li className="list-cron">3° Lavado Reconstrucción</li>
                    <span>Shampoo de Reconstrucción, baño de crema de Reconstrucción y acondicionador de reconstrucción.</span>
                    <li className="list-cron">Lo importante es ir alternando las etapas.</li>
                    </ul>
                    <span className="text-cron">• Como lavar el cabello
                    Con el pelo húmedo recién lavado con shampoo y secado a toalla, separar por mechas, desenredando con cuidado y aplicar una pequeña cantidad en cada una masajeando suavemente de la mitad del largo hacia las puntas. (no poner la mano, ni metal en la crema. Sacar con una cucharita de plástico). Dejarlo actuando aproximadamente 15 minutos tapado con un gorro o bolsa. Enjuagar y aplicar el acondicionador. Finalizando con protector térmico y una vez que el pelo esté seco, aplicar aceite reparador de puntas.</span>
                </div>
            </div>
        </div>
    )
}