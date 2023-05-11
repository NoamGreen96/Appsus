// export const NotePreview = ({ note, notId }) => {
//   console.log('note', note)
//   // return <li>{note.title}</li>
// }

export const NotePreview = ({ note, onRemoveNote }) => {
  return (
    <article className="note-preview">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={() => onRemoveNote(note.id)} className="btn-delete-note">
        X
      </button>
    </article>
  )
}
