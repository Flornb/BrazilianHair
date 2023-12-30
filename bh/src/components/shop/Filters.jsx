import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters.js'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const maxPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: event.target.value
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
        <label htmlFor={maxPriceFilterId}>Precio máx:</label>
        <input 
          className='rangeOfPrice'
          type='range'
          id={maxPriceFilterId}
          min='100'
          max='500000'
          onChange={handleChangeMinPrice}
          value={filters.maxPrice}
        />
        <span>${filters.maxPrice}</span>
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