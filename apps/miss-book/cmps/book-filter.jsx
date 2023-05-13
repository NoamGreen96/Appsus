import { bookService } from '../services/book.service.js'

const { useEffect, useState } = React

export function BookFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  //FILTERS ON TYPE
  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
  }

  function handleCheckBox({ target }) {
    onSetFilter({ ...filterBy, sale: target.checked })
  }

  //FILTERS ON SUBMIT
  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  const { title, price } = filterByToEdit
  return (
    <section className="book-filter">
      <h2>Filter Our Books</h2>

      <form onSubmit={onSubmitFilter}>
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          onChange={handleChange}
          name="title"
          id="title"
          type="text"
          placeholder="By Title"
        />

        <label htmlFor="price"> Price:</label>
        <input
          value={price}
          onChange={handleChange}
          type="number"
          name="price"
          id="price"
          placeholder="By Price"
        />

        <label htmlFor="sale"> onSale:</label>
        <input
          className="btn-sale flex"
          onChange={handleCheckBox}
          type="checkbox"
          name="sale"
          id="sale"
        />
        <button>Filter Books</button>
      </form>
    </section>
  )
}
