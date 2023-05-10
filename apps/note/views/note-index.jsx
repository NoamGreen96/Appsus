import { CreateNote } from '../cmps/note-create.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { NotePreview } from '../cmps/note-preview.jsx'

export function NoteIndex() {
  return (
    <section className="note-index">
      <h1>Note App</h1>
      <CreateNote />
      <NotePreview />
      {/* <NoteList /> */}
    </section>
  )
}
