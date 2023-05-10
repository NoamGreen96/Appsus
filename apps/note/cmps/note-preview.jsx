export function NotePreview({ title, content }) {
  return (
    <section className="note">
      <h1 className="note-title">{title}</h1>
      <p className="note-content">{content}</p>
    </section>
  )
}
