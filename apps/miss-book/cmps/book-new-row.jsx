import { bookService } from '../services/book.service.js'

export function BookNewRow({ book }) {
  let authors = ''
  if (book.volumeInfo.authors) {
    authors = book.volumeInfo.authors.join(', ')
  }

  function onAddBook() {
    bookService
      .addGoogleBook(book)
      .then(() => showSuccessMsg('Book added to collection'))
      .catch(() => {
        showErrorMsg('Book already exists')
      })
  }
  return (
    <li className="book-add-row">
      <p>{book.volumeInfo.title}</p>
      <p>Author(s): {authors}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      <button onClick={onAddBook} className="add-book-button">
        +
      </button>
    </li>
  )
}
