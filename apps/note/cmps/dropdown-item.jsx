export function DropDownItem({ onRemoveNote, noteId }) {
  console.log('noteId', noteId)
  return (
    <React.Fragment>
      <li className="dropdown-item clean-list">
        <article onClick={() => onRemoveNote(noteId)} className="delete-note">
          Delete
        </article>
      </li>
      <li>
        <article>Duplicate</article>
      </li>
    </React.Fragment>
  )
}
