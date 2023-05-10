import { NotePreview } from './note-preview.jsx'
export function NoteList({ notes }) {
  // console.log('notes', notes)
  return (
    <section className="note-list">
      <div>note list</div>
      <ul>
        {notes.map((note) => (
          <NotePreview note={note} key={notes.id} />
        ))}
      </ul>
    </section>
  )
}
