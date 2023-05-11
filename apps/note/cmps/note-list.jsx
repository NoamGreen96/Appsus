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

export function NoteList({ notes }) {
  console.log('notes at note-list', notes)
  return (
    // <ul>
    //   {notes.map((note) => (
    //     <NotePreview note={note} key={note.id} />
    //   ))}
    // </ul>
    <ul className="note-list ">
      {notes.map((note) => (
        <NotePreview note={note} key={note.id} />
      ))}
    </ul>
  )
}
