export function DropDownItem({ onRemoveNote, noteId }) {
  console.log('noteId', noteId)
  return (
    <div className="item-row">
      <li className="dropdown-item clean-list">
        <article onClick={() => onRemoveNote(noteId)} className="delete-note">
          Delete
        </article>
      </li>
    </div>
  )
}
