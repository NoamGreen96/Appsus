const { useEffect, useState } = React

import { noteService } from '../services/note.service.js'

export function CreateNote({ notes, setNotes, onAdd }) {
  const [newNote, setNewNote] = useState(noteService.getEmptyNote())

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
    })
  }

  const { title, content } = notes

  return (
    <div className="create-note-container">
      <form>
        <input
          value={title}
          className="form-title"
          type="text"
          placeholder="Note Title"
          name="title"
          onChange={handleChange}
        />

        <p>
          <textarea
            value={content}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
          ></textarea>
        </p>
        <button onClick={onSubmitNote} className="btn-submit">
          Add
        </button>
      </form>
    </div>
  )
}
