export function CreateNote() {
  return (
    <div className="create-note-container">
      <form>
        <input
          className="form-title"
          type="text"
          placeholder="Note Title"
          name="title"
        />
        <p>
          <textarea name="content" placeholder="Take a note..."></textarea>
        </p>
      </form>
    </div>
  )
}
