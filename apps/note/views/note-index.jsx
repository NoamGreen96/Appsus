const { useState, useEffect } = React

import { CreateNote } from '../cmps/note-create.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { NotePreview } from '../cmps/note-preview.jsx'
import { noteService } from '../services/note.service.js'

export function NoteIndex() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    loadNotes()
  }, [])

  function loadNotes() {
    noteService.query().then((notes) => {
      return setNotes(notes)
    })
  }

  // function addNote(newNote) {
  //   setNotes((prevValue) => {
  //     return [...prevValue, newNote]
  //   })
  // }
  // onAdd={addNote}
  console.log('notes at index', notes)
  return (
    <section className="note-index">
      <h1>Note App</h1>
      <CreateNote notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} />
    </section>
  )
}
