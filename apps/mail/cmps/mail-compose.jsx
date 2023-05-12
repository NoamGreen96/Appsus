const { useState } = React

import { mailService } from "../services/mail.service.js";

export const EmailCompose = ({ onSendMail }) => {

  const [mail, setMail] = useState(mailService.createMail())

  const sendEmail = (ev) => {
    ev.preventDefault()
    onSendMail(mail)
  }

  return (
    <form onSubmit={sendEmail} className="new- 
     email">

      <label htmlFor="to">To:</label>
      <input
        type="email"
        id="to"
        name="to"
        value={mail.to}
        onChange={ev => setMail({ ...mail, to: ev.target.value })}
      />

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={mail.subject}
        onChange={ev => setMail({ ...mail, subject: ev.target.value })}
      />

      <label htmlFor="body">Body:</label>
      <textarea
        id="body"
        name="body"
        value={mail.body}
        onChange={ev => setMail({
          ...mail, body: ev.target.value
        })}
      >
      </textarea>
      <button type="submit">Send</button>


    </form>
  )
}