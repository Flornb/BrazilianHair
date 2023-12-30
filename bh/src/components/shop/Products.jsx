import './Products.css'
import { Filters } from './Filters.jsx'
import { AddToCartIcon, RemoveFromCartIcon } from '../../assets/Icons.jsx'
import { useCart } from '../../hooks/useCart.js'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <article className='title-section'>
      <div class="dale"></div>
      <div class="section-divisor">
      <span className='store-title'>Nuestra Tienda</span>
      </div>
      </article>
      <Filters />
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <span className='product-name'>{product.name}</span> 
                <p>{product.description}</p>
                <h3>${product.price}</h3>                 
              </div>
              <div>
                {/* agregar url para ir a pagar */}
                <button className='buybutton'><a href="URL_DE_PAGO" >
                  Comprar
                </a>
                </button>
                <button
                  style={{ backgroundColor: isProductInCart ? '#3B5683' : '#130D29' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}