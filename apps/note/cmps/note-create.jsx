const { useEffect, useState } = React

import { noteService } from '../services/note.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function CreateNote({ notes, setNotes, onAdd }) {
  const [newNote, setNewNote] = useState(noteService.getEmptyNote())
  const [showTitle, setShowTitle] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState(notes.backgroundColor)
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (notes) {
        console.log('notes from debounce', notes)
      }
    }, 1000)
    return () => {
      console.log('clear timeout')
      clearTimeout(debounce)
    }
  }, [newNote])

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

  function onSubmitNote(ev) {
    ev.preventDefault()
    noteService.save(newNote).then((note) => {
      const updatedNotes = [...notes, note]
      setNotes(updatedNotes)
      showSuccessMsg('Note successfully added!')
      setNewNote({ title: '', content: '' })
      setBackgroundColor('')
    })
  }

  function handleColorChange({ target }) {
    setBackgroundColor(target.value)
    setNewNote((prevNote) => ({ ...prevNote, backgroundColor }))
    console.log('newNote.backgroundColor', newNote.backgroundColor)
  }

  const { title, content } = newNote
  return (
    <div className="create-note-container">
      <form className="note-inputs" style={{ backgroundColor }}>
        {showTitle && (
          <input
            style={{ backgroundColor }}
            value={title}
            className="note-title"
            type="text"
            placeholder="Note Title"
            name="title"
            onChange={handleChange}
            onBlur={handleTitleBlur}
            onClick={handleTitleClick}
            // style={{ backgroundColor: `${notes.backgroundColor}` }}
          />
        )}

        <p>
          <textarea
            style={{ backgroundColor }}
            value={content}
            name="content"
            className="note-content"
            placeholder="Take a note..."
            onChange={handleChange}
            onClick={handleContentClick}
          ></textarea>
        </p>
        <button onClick={onSubmitNote} className="btn-submit">
          Add
        </button>
        <button className="btn-background-color">
          <i className="fa-solid fa-palette"></i>
          <input
            value={backgroundColor}
            className="note-background-color"
            type="color"
            placeholder="Note backgroundColor"
            name="backgroundColor"
            // onChange={handleChange}
            onChange={handleColorChange}
          />
        </button>
      </form>
    </div>
  )
}
