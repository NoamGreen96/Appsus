import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onRemoveNote }) {
  console.log('notes', notes)
  return (
    <ul className="clean-list flex">
      {notes.map((note) => (
        <li
          style={{ backgroundColor: `${note.backgroundColor}` }}
          className="note"
          key={note.id}
        >
          <NotePreview note={note} onRemoveNote={onRemoveNote} />
        </li>
      ))}
    </ul>
  )
}
