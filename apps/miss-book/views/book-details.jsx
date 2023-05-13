const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM
const { Link } = ReactRouterDOM

import { LongTxt } from '../cmps/book-long-txt.jsx'
import { bookService } from '../services/book.service.js'
import { showErrorMsg } from '../services/event-bus.service.js'
import { AddReview } from '../cmps/book-add-review.jsx'
import { BookReviews } from '../cmps/book-review-list.jsx'

export function BookDetails() {
  const [book, setBook] = useState(null)
  const [nextBookId, setNextBookId] = useState(null)
  const [prevBookId, setPrevBookId] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadBook()
    loadNextBookId()
    loadPrevBookId()
  }, [params.bookId])

  function loadNextBookId() {
    bookService.getNextBookId(params.bookId).then(setNextBookId)
  }

  function loadPrevBookId() {
    bookService.getPrevBookId(params.bookId).then(setPrevBookId)
  }

  function loadBook() {
    bookService
      .get(params.bookId)
      .then(setBook)
      .catch((err) => {
        console.log('Had issued in book details:', err)
        navigate('/book')
        showErrorMsg('book not found!')
      })
  }

  function PageCount() {
    let readingLevel
    if (book.pageCount > 500) {
      readingLevel = 'Serious Reading'
    } else if (book.pageCount > 200) {
      readingLevel = 'Decent Reading'
    } else if (book.pageCount < 100) {
      readingLevel = 'Light Reading'
    }
    return readingLevel
  }

  function publishDate() {
    const currYear = new Date().getFullYear()
    let bookState

    if (currYear - book.publishedDate > 10) {
      bookState = 'Vintage'
    }
    if (currYear - book.publishedDate === 1) {
      bookState = 'New'
    }
    return bookState
  }

  function priceColor() {
    let priceColor
    if (book.listPrice.amount > 150) {
      priceColor = 'red'
    } else if (book.listPrice.amount < 20) {
      priceColor = 'green'
    }
    return priceColor
  }

  function onDeleteReview(reviewId) {
    bookService.deleteReview(book.id, reviewId).then(() => {
      const reviews = book.reviews.filter((review) => review.id !== reviewId)
      setBook({ ...book, reviews })
      showSuccessMsg(`Review Deleted`)
    })
  }

  function onBack() {
    navigate('/book')
    // navigate(-1)
  }
  console.log('book', book)
  if (!book) return <h1>Loading...</h1>

  return (
    <section className="book-details">
      <h1>Book Title: {book.title}</h1>
      <h3>Subtitle: {book.subtitle}</h3>
      <h4>Authors: {book.authors}</h4>
      <h5 style={{ color: priceColor() }}>Price: {book.listPrice.amount}</h5>
      <h5>
        PublishedDate: {book.publishedDate}, {publishDate()}
      </h5>
      <div>
        Description:
        <LongTxt txt={book.description} />
      </div>
      <p>
        PageCount: {book.pageCount}, {PageCount()}
      </p>
      <div className="flex">
        Categories:
        <ul className="clean-list">
          {book.categories.map((categorie) => (
            <li key={categorie}>{categorie} </li>
          ))}
        </ul>
      </div>
      <p>Language: {book.language}</p>
      <img src={book.thumbnail} alt="book-thumbnail" />
      <button onClick={onBack}>Back</button>
      <button>
        <Link to={`/books/review/${book.id}`}>Add Review</Link>
      </button>
      <article>
        {/* ADD !!book.review.length && */}
        {!!book.reviews && (
          <BookReviews onDeleteReview={onDeleteReview} reviews={book.reviews} />
        )}
      </article>
      <button>
        <Link to={`/book/${nextBookId}`}>Next Book</Link>
      </button>
      <button>
        <Link to={`/book/${prevBookId}`}>Prev Book</Link>
      </button>
    </section>
  )
}
