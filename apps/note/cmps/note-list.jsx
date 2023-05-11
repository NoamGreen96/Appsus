// import { NotePreview } from './note-preview.jsx'

// export function NoteList({ notes }) {
//   return (
//     <section className="note-list">
//       <div>note list</div>
//       <ul>
//         {notes.map((note) => (
//           <NotePreview note={note} key={note.id} />
//         ))}
//       </ul>
//     </section>
//   )
// }
// const { Link } = ReactRouterDOM

import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onRemoveNote }) {
  console.log('notes from noteLIST', notes)
  return (
    // <ul>
    //   {notes.map((note) => (
    //     <NotePreview note={note} key={note.id} />
    //   ))}
    // </ul>
    <ul className="clean-list flex">
      {notes.map((note) => (
        <li className="note" key={note.id}>
          <NotePreview note={note} onRemoveNote={onRemoveNote} />
        </li>
      ))}
    </ul>
  )
}
