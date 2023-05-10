const { useState, useEffect } = React

import { CreateNote } from '../cmps/note-create.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { NotePreview } from '../cmps/note-preview.jsx'
import { noteService } from '../services/note.service.js'

export function NoteIndex() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    loadNotes()
  }, [setNotes])

  function loadNotes() {
    noteService.query().then((note) => {
      setNotes(note)
    })
  }

  // function addNote(newNote) {
  //   setNotes((prevValue) => {
  //     return [...prevValue, newNote]
  //   })
  // }
  console.log('notes', notes)
  return (
    <section className="note-index">
      <h1>Note App</h1>
      <CreateNote notes={notes} setNotes={setNotes} />
      <NotePreview notes={notes} setNotes={setNotes} />
    </section>
  )
}
