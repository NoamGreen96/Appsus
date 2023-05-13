const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { bookService } from '../services/book.service.js'
import { BookFilter } from '../cmps/book-filter.jsx'
import { BookList } from '../cmps/book-list.jsx'
import { BookDetails } from './book-details.jsx'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { BookAdd } from '../cmps/book-google-add.jsx'
import '../assets/style/main.css'

export function BookIndex() {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
  useEffect(() => {
    loadBooks()
    // showSuccessMsg('Welcome to book index!')
  }, [filterBy])

  // function onSelectBook(book) {
  //   setSelectedBook(book)
  // }

  function loadBooks() {
    bookService.query(filterBy).then(setBooks)
  }

  function onSetFilter(filterBy) {
    setFilterBy((prevFilterBy) => ({ ...prevFilterBy, ...filterBy }))
  }

  function onRemoveBook(bookId) {
    bookService.remove(bookId).then(() => {
      const updatedBooks = books.filter((book) => book.id !== bookId)
      setBooks(updatedBooks)
      showSuccessMsg(`Book (${bookId}) removed!`)
    })
  }

  return (
    <section className="book-app">
      <main className="main-layout full">
        <section className="book-index ">
          {!selectedBook && (
            <React.Fragment>
              <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
              <Link to="/book/edit">Add Book</Link>
              <BookAdd />
              <BookList books={books} onRemoveBook={onRemoveBook} />
            </React.Fragment>
          )}
        </section>
      </main>
    </section>
  )
}
