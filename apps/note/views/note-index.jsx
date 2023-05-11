const { useState, useEffect } = React

import { CreateNote } from '../cmps/note-create.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'
import {
  showErrorMsg,
  showSuccessMsg,
} from '../../../services/event-bus.service.js'

export function NoteIndex() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    loadNotes()
  }, [])

  function loadNotes() {
    noteService.query().then(setNotes)
  }

  function onRemoveNote(noteId) {
    noteService.remove(noteId).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId)
      setNotes(updatedNotes)
      showSuccessMsg(`Note (${noteId}) removed!`)
    })
  }

  console.log('notes at index', notes)
  return (
    <section className="note-index">
      <h1>Note App</h1>
      <CreateNote notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} onRemoveNote={onRemoveNote} />
    </section>
  )
}
