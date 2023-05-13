const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from '../services/book.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function AddReview() {
  const [review, setReview] = useState({
    fullName: '',
    text: '',
    rating: 5,
    readAt: '2023-01-01',
  })

  const navigate = useNavigate()
  const params = useParams()

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setReview((prevReview) => ({ ...prevReview, [field]: value }))
    console.log('field , value', field, value)
  }

  function onSaveReview(ev) {
    ev.preventDefault()

    if (!review.fullName.trim() || !review.text.trim()) {
      showErrorMsg('Please fill all fields')
      return
    }

    bookService.addReview(params.bookId, review).then(() => {
      console.log('params.bookId', params.bookId)
      showSuccessMsg(`Review saved!`)
      setTimeout(() => navigate(`/book/${params.bookId}`))
    })
  }

  if (!params.bookId) {
    navigate('/books')
  }

  return (
    <section className="add-review view" onSubmit={onSaveReview}>
      <h1>Post your review here</h1>
      <form className="">
        <label htmlFor="fullName">Full name:</label>
        <input
          onChange={handleChange}
          value={review.fullName}
          type="text"
          name="fullName"
          id="fullName"
        />

        <label htmlFor="text">Review:</label>
        <textarea
          className="review"
          onChange={handleChange}
          value={review.text}
          type="textarea"
          name="text"
          id="text"
          rows="4"
          cols="50"
        />

        <label htmlFor="rating">Rating:</label>
        <input
          onChange={handleChange}
          value={review.rating}
          type="number"
          name="rating"
          id="rating"
          min="1"
          max="5"
        />

        <label htmlFor="readAt">Read At:</label>
        <input
          onChange={handleChange}
          value={review.readAt}
          type="date"
          name="readAt"
          id="readAt"
        />

        <button>Add review</button>
      </form>
    </section>
  )
}
