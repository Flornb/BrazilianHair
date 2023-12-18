import { products as initialProducts } from './assets/mocks/products.json'
import { Products } from './components/shop/Products.jsx'
import { Header } from './components/shop/Header.jsx'
import { Footer } from './components/shop/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/shop/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import { Home } from './components/home/Home.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Home /> 
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App








// import { Card } from "./Card";
// import './App.css';


// export function App () {
//     return (
//         <div className="App">
//             <div>
//                 <a></a>
//             </div>
//             <Card></Card>
//         </div>
//     )
// }