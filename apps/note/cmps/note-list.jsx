import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes }) {
  return (
    <section className="note-list">
      <div>note list</div>

      {notes.map((note) => (
        <ul>
          <li key={note.id}>
            <NotePreview note={note} />
          </li>
        </ul>
      ))}
    </section>
  )
}
