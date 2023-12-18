import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../../assets/Icons.jsx'
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

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

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
        
        {/* el carrito debe sumar el total de los productos agregados */}
        <div className='total'></div>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}