import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../../assets/imgs/Icons.jsx'
import { useCart } from '../../hooks/useCart.js'

function CartItem ({ thumbnail, price, title, name, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{name}</strong> ${price}
      </div>
    {/* multiplicar unidades por precio */}
      <footer>
        <small>
          Cantidad: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export const Cart = () => {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        
        {/* suma el total de los productos agregados */ }
        <div className='total'>Total: ${calculateTotal().toFixed(2)} 
        </div>
        <button className='buycartbutton'>
          <a href="URL_DE_PAGO" >Comprar</a>
        </button>
        <button className="clearcart" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}