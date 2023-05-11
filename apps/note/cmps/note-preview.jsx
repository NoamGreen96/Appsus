// export const NotePreview = ({ note, notId }) => {
//   console.log('note', note)
//   // return <li>{note.title}</li>
// }

export const NotePreview = ({ note }) => {
  console.log('note from preview', note)
  return (
    <article className="note-preview">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </article>
  )
}
