const { useState } = React

export function BookPreview({ book }) {
  const onSaleImg = book.listPrice.isOnSale ? `./BooksImages/sale.png` : ''

  return (
    <article className="book-preview">
      <h2>Book Title: {book.title}</h2>
      <h4>
        Price: {book.listPrice.amount}, {book.listPrice.currencyCode}
      </h4>
      <div className="img-container">
        <img className="book-onsale" src={onSaleImg} alt="" />
        <img
          className="book-thumbnail"
          src={book.thumbnail}
          alt="book-thumbnail"
        />
      </div>
    </article>
  )
}
