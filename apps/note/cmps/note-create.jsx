import { noteService } from '../services/note.service.js'

export function CreateNote({ notes, setNotes }) {
  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setNotes((prevNote) => ({ ...prevNote, [field]: value }))
  }

  function onSubmitNote(ev) {
    ev.preventDefault()

    // if (!notes.title.trim() || !notes.content.trim()) {
    //   // showErrorMsg('Please fill all fields')
    //   return
    // }
    noteService.save(notes).then((notes) => setNotes(notes))
    // AddNote()
    console.log('notes', notes)
    console.log('ev', ev)
  }

  //   function addNote(newNote) {
  //     setNotes((prevValue) => {
  //       return [...prevValue, newNote]
  //     })
  //   }
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
