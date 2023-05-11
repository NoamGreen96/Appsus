
export function NewMail() {


  return <form className="new-email">

    <label htmlFor="to">To:</label>
    <input type="email" id="to" name="to" />

    <label htmlFor="subject">Subject:</label>
    <input type="text" id="subject" name="subject" />

    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message">
    </textarea>

    <button type="submit">Send</button>


  </form>
}