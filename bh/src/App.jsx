import { products as initialProducts } from './assets/mocks/products.json'
import { Products } from './components/shop/Products.jsx'
import { NavBar } from "./components/navbar/NavBar.jsx"
import { Header } from './components/header/Header.jsx'
import { Footer } from './components/shop/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/shop/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import { Agenda } from './components/agenda/Agenda.jsx'
import { Home } from './components/home/Home.jsx'
import { Cronograma } from "./components/textsections/Cronograma.jsx";
import { TipsCare } from "./components/textsections/TipsCare";

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <NavBar />
      <Header />
      <Cart />
      <Home /> 
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
      <Agenda />
      <Cronograma />
      <TipsCare />
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