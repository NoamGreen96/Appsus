import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onRemoveNote }) {
  return (
    <ul className="list-container clean-list flex">
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
