const { useState, useEffect, useRef } = React

import { DropDownItem } from './dropdown-item.jsx'

export const NotePreview = ({ note, onRemoveNote }) => {
  const [open, setOpen] = useState(false)
  let menuRef = useRef()

  useEffect(() => {
    let handler = (ev) => {
      if (!menuRef.current.contains(ev.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [menuRef.current, setOpen])
  // useEffect(() => {}, [open])

  return (
    <article className="note-preview " ref={menuRef}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>

      <div className="menu-container">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <img
            className={`img-3dots ${open ? 'active' : 'inactive'}`}
            src="assets/img/keep-3dots.png"
          ></img>
        </div>
      </div>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <ul className=" clean-list">
          <DropDownItem onRemoveNote={onRemoveNote} noteId={note.id} />
        </ul>
      </div>
    </article>
  )
}
