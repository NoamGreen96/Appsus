const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/app-header.jsx'
import { About } from './views/about.jsx'
import { Home } from './views/home.jsx'
import { MailIndex } from './apps/mail/views/mail-index.jsx'
import { NoteIndex } from './apps/note/views/note-index.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { EmailPreview } from './apps/mail/cmps/mail-preview.jsx'
import { BookIndex } from './apps/miss-book/views/book-index.jsx'
import { BookDetails } from './apps/miss-book/views/book-details.jsx'
import { AddReview } from './apps/miss-book/cmps/book-add-review.jsx'
import { BookEdit } from './apps/miss-book/views/book-edit.jsx'
export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />} />
          <Route path="/mail/preview/:mailId" element={<EmailPreview />} />
          <Route path="/note" element={<NoteIndex />} />
          <Route path="/note/Search/" element={<NoteIndex />} />
          <Route path="/book" element={<BookIndex />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/book/edit/:bookId" element={<BookEdit />} />
          <Route path="/book/edit" element={<BookEdit />} />
          <Route path="/books/review/:bookId" element={<AddReview />} />
        </Routes>
        <UserMsg />
      </section>
    </Router>
  )
}
