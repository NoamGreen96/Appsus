const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from './cmps/app-header.jsx'
import { AboutUs } from './views/about.jsx'
import { BookDetails } from './views/book-details.jsx'
import { BookIndex } from './views/book-index.jsx'
import { Home } from './views/home.jsx'
import { BookEdit } from './views/book-edit.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { AddReview } from './cmps/book-add-review.jsx'

export function App() {
  const [page, setPage] = useState('book')

  function onSetPage(page) {
    setPage(page)
  }

  return (
    <Router>
      <section className="app main-layout">
        <AppHeader onSetPage={onSetPage} />
        <main className="main-layout full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/book" element={<BookIndex />}></Route>
            <Route path="/book/:bookId" element={<BookDetails />}></Route>
            <Route path="/book/edit/:bookId" element={<BookEdit />}></Route>
            <Route path="/book/edit" element={<BookEdit />}></Route>
            <Route path="/books/review/:bookId" element={<AddReview />}></Route>
          </Routes>
        </main>
        <UserMsg />
      </section>
    </Router>
    //
    //   <header className="app-header full main-layout">
    //     <h1>Miss Book</h1>
    //     <nav className="app-nav">
    //       <a onClick={() => handlePageChange('home')} href="#">
    //         Home
    //       </a>{' '}
    //       |
    //       <a onClick={() => handlePageChange('book')} href="#">
    //         Books
    //       </a>{' '}
    //       |
    //       <a onClick={() => handlePageChange('about')} href="#">
    //         About
    //       </a>
    //     </nav>
    //   </header>
    //   <main>
    //     {page === 'home' && <Home />}
    //     {page === 'book' && <BookIndex />}
    //     {page === 'about' && <AboutUs />}
    //   </main>
    // </section>
  )
}
