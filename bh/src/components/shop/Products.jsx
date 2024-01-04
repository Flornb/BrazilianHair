import './Products.css'
import { Filters } from './Filters.jsx'
import { AddToCartIcon, RemoveFromCartIcon } from '../../assets/imgs/Icons.jsx'
import { useCart } from '../../hooks/useCart.js'

export const Products = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products' id='shop'>
      <div className='title-section'>
        <div className="section-divisor">
          <span className='store-title'>Tienda</span>
        </div>
      </div>
      <Filters />
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id} className='product-card'>
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
                <button className="submit-btn"><a href="https://wa.me/5493537304017" >
                  Comprar
                </a>
                </button>
                <button className="submit-btn"
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