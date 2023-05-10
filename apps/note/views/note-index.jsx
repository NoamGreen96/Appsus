import { CreateNote } from '../cmps/note-create.jsx'
import { NoteList } from '../cmps/note-list.jsx'

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
