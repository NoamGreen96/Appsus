const { useParams, useNavigate } = ReactRouterDOM
const { useEffect, useState } = React

import { bookService } from '../services/book.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function BookEdit() {
  const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (params.bookId) loadBook()
  }, [])

  function loadBook() {
    bookService
      .get(params.bookId)
      .then(setBookToEdit)
      .catch((err) => {
        console.log('Had issues in book details:', err)
        navigate('/book')
        showErrorMsg('Book not found!')
      })
  }

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    if (field === 'price') {
      setBookToEdit((prevBook) => ({
        ...prevBook,
        listPrice: { ...prevBook.listPrice, amount: value },
        [field]: value,
      }))
    } else {
      setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
    }
  }

  function onSaveBook(ev) {
    ev.preventDefault()
    bookService.save(bookToEdit).then(() => {
      navigate('/book')
    })
    showSuccessMsg(`Book edited successfully!`)
  }
  const { title, price = bookToEdit.listPrice.amount, description } = bookToEdit
  return (
    <section className="book-edit">
      <h2>{bookToEdit.id ? 'Edit' : 'Add'} Book</h2>

      <form onSubmit={onSaveBook}>
        <label htmlFor="title">Title:</label>
        <input
          onChange={handleChange}
          value={title}
          type="text"
          name="title"
          id="title"
        />

        <label htmlFor="price">Price:</label>
        <input
          onChange={handleChange}
          value={price}
          type="number"
          name="price"
          id="price"
        />

        <label htmlFor="description">Description:</label>
        <input
          onChange={handleChange}
          value={description}
          type="text"
          name="description"
          id="description"
        />

        <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
      </form>
    </section>
  )
}
