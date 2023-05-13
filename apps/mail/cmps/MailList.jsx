
export function MailMenu({ onToggleModal }) {

  return (
    <section className="mail-menu flex column">
      <button className="compose-btn" onClick={() => onToggleModal()}>
        Compose
      </button>
    </section>
  )
}
