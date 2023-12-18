import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters.js'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo:</label>
        <input 
          className='rangeOfPrice'
          type='range'
          id={minPriceFilterId}
          min='0'
          max='500000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select className="categories" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='alisado'>Alisados</option>
          <option value='hairproduct'>Productos Cabello</option>
          <option value='tech'>Tecnología</option>
        </select>
      </div>

    </section>

  )
}