import { AddMail } from "./cmps/add-mail.jsx";
export function MailMainNav() {

  function onAddMail() {
    const delivery = prompt
  }

  return <nav className="mail-main-nav">
    <button onClick={onAddMail}>Compose</button>
    <input
      type="search"
      className="search-input"
      placeholder="Search" />
  </nav>
}