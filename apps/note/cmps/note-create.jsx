const { useEffect, useState } = React

import { noteService } from '../services/note.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function CreateNote({ notes, setNotes, onAdd }) {
  const [newNote, setNewNote] = useState(noteService.getEmptyNote())
  const [showTitle, setShowTitle] = useState(false)

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
    })
  }

  const { title, content } = notes

  return (
    <div className="create-note-container">
      <form>
        {showTitle && (
          <input
            value={title}
            className="note-title"
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
      </form>
    </div>
  )
}
