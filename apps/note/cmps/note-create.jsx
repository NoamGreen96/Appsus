const { useEffect, useState, useRef } = React

import { noteService } from '../services/note.service.js'
import {
  showSuccessMsg,
  showErrorMsg,
} from '../../../services/event-bus.service.js'

export function CreateNote({ notes, setNotes }) {
  const [newNote, setNewNote] = useState(noteService.getEmptyNote())
  const [showTitle, setShowTitle] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState(notes.backgroundColor)
  let newNoteRef = useRef()

  useEffect(() => {
    let handler = (ev) => {
      if (!newNoteRef.current.contains(ev.target)) {
        setShowTitle(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [newNoteRef.current, setShowTitle])

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (notes) {
      }
    }, 1000)
    return () => {
      clearTimeout(debounce)
    }
  }, [newNote])

  function onSubmitNote(ev) {
    ev.preventDefault() // prevent form submission
    console.log('newNote.title', newNote.title)
    if (newNote.title.length && newNote.content.length) {
      noteService.save(newNote).then((note) => {
        const updatedNotes = [...notes, note]
        setNotes(updatedNotes)
        // showSuccessMsg('Note successfully added!')
        setNewNote({ title: '', content: '' })
        setBackgroundColor('')
      })
    } else {
      // showErrorMsg('Please edit the note properly')
    }
  }

  function handleContentClick() {
    setShowTitle(true)
  }

  function handleTitleBlur() {
    if (!newNote.title.length) setShowTitle(false)
    else return
  }

  function handleTitleClick() {
    setShowTitle(true)
  }

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setNewNote((prevNote) => ({ ...prevNote, [field]: value }))
  }

  // function onSubmitNote() {
  //   ev.preventDefault()
  //   console.log('newNote.title', newNote.title)
  //   if (newNote.title.length && newNote.content.length) {
  //     noteService.save(newNote).then((note) => {
  //       const updatedNotes = [...notes, note]
  //       setNotes(updatedNotes)
  //       showSuccessMsg('Note successfully added!')
  //       setNewNote({ title: '', content: '' })
  //       setBackgroundColor('')
  //     })
  //   } else {
  //     showErrorMsg('Please edit the note properly')
  //   }
  // }

  function handleColorChange({ target }) {
    setBackgroundColor(target.value)
    setNewNote((prevNote) => ({ ...prevNote, backgroundColor }))
  }

  const { title, content } = newNote
  return (
    <div className="create-note-container flex">
      <form
        ref={newNoteRef}
        className={`note-inputs ${showTitle ? 'opened' : 'closed'} `}
        style={{ backgroundColor }}
      >
        {showTitle && (
          <input
            style={{ backgroundColor }}
            value={title}
            className={`note-title ${showTitle ? 'opened' : 'closed'}`}
            type="text"
            placeholder="Note Title"
            name="title"
            onChange={handleChange}
            onBlur={handleTitleBlur}
            onClick={handleTitleClick}
          />
        )}

        <p>
          <textarea
            style={{ backgroundColor }}
            value={content}
            name="content"
            className={`note-content ${showTitle ? 'opened' : 'closed'}`}
            placeholder="Take a note..."
            onChange={handleChange}
            onClick={handleContentClick}
          ></textarea>
        </p>
        <button onClick={onSubmitNote} className="btn-submit">
          Add
        </button>
        {showTitle && (
          <button className="btn-background-color">
            <i className="fa-solid fa-palette color-icon"></i>
            <input
              value={backgroundColor}
              className="note-background-color"
              type="color"
              placeholder="Note backgroundColor"
              name="backgroundColor"
              onChange={handleColorChange}
            />
          </button>
        )}
      </form>
    </div>
  )
}
