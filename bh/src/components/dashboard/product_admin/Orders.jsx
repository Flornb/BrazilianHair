import React from 'react';
import { useCart } from '../../hooks/useCart.js';

function OrderItem({ thumbnail, price, title, name, quantity }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{name}</strong> ${price}
      </div>
      <footer>
        <small>Cantidad: {quantity}</small>
      </footer>
    </li>
  );
}

export const Orders = () => {
  const { cart } = useCart();

  return (
    <div className="orders">
      <h2>Órdenes</h2>
      <ul>
        {cart.map(product => (
          <OrderItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

