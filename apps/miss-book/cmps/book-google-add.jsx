const { useState, useEffect } = React
import { googleBookService } from '../services/google-book.service.js'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { BookNewRow } from './book-new-row.jsx'

export function BookAdd() {
  const [bookToSearch, setBookToSearch] = useState('')
  const [books, setBooks] = useState([])

  function handleChange({ target }) {
    setBookToSearch(target.value)
  }

  useEffect(() => console.log('books', books), [books])

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (bookToSearch) {
        showSuccessMsg('Searching...')
        searchBooks()
      }
    }, 1000)
    return () => {
      console.log('clear timeout')
      clearTimeout(debounce)
    }
  }, [bookToSearch])

  function searchBooks() {
    googleBookService.query(bookToSearch).then((res) => {
      console.log('res', res)
      setBooks(res.data.items)
      if (res.data.items.length === 0) {
        showErrorMsg("Could'nt find any books by that name")
      }
    })
  }

  return (
    <section className="book-add">
      <input
        value={bookToSearch}
        onChange={handleChange}
        name="title"
        id="title"
        type="text"
        placeholder="Search via google"
      />
      <ul className="book-add-list clean-list">
        {books.length > 0 &&
          books.map((book) => {
            return <BookNewRow key={book.id} book={book} />
          })}
      </ul>
    </section>
  )
}
