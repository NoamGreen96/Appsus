// export const NotePreview = ({ note, notId }) => {
//   console.log('note', note)
//   // return <li>{note.title}</li>
// }

export const NotePreview = ({ note }) => {
  console.log('note', note.note)
  return (
    <li>
      {note.title}
      {/* <button onClick={onHandleClick}>X</button> */}
    </li>
  )
}
