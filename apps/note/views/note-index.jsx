const { useState, useEffect } = React
import { CreateNote } from '../cmps/note-create.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'
import {
  showErrorMsg,
  showSuccessMsg,
} from '../../../services/event-bus.service.js'
import { NoteFilter } from '../cmps/note-filter.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState([])
  const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
  useEffect(() => {
    loadNotes()
  }, [filterBy])

  function onSetFilter(filterBy) {
    setFilterBy((prevFilterBy) => ({ ...prevFilterBy, ...filterBy }))
  }

  function loadNotes() {
    noteService.query(filterBy).then(setNotes)
  }

  function onRemoveNote(noteId) {
    console.log('remove from index', noteId)
    noteService.remove(noteId).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId)
      setNotes(updatedNotes)
      console.log(updatedNotes)
      // showSuccessMsg(`Note (${noteId}) removed!`)
    })
  }

  return (
    <section className="note-index">
      <NoteFilter onSetFilter={onSetFilter} filterBy={filterBy} />
      <CreateNote notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} onRemoveNote={onRemoveNote} />
    </section>
  )
}
