const { useState, useEffect } = React

import { DropDownItem } from './dropdown-item.jsx'

export const NotePreview = ({ note, onRemoveNote }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {}, [open])

  return (
    <article className="note-preview">
      <h1>{note.title}</h1>
      <p>{note.content}</p>

      <div className="menu-container">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <img className="img-3dots" src="assets/img/keep-3dots.png"></img>
        </div>
      </div>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <ul className=" clean-list">
          <DropDownItem
            onRemoveNote={onRemoveNote}
            noteId={note.id}
            setOpen={setOpen}
          />
        </ul>
      </div>
    </article>
  )
}
