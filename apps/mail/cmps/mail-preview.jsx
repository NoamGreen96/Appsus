import { LongTxt } from "../../../cmps/long-txt"


export function EmailPreview({ mail, onRemoveEmail }) {
  // console.log(onRemoveEmail)

  return (
    <React.Fragment>
      <td>  <button onClick={() => onRemoveEmail(mail.id)}>Delete this mail Mail</button>
      </td>
      <td>{mail.from}</td>
      <td>{mail.subject}</td>
      <td>{mail.body}</td>
      <td>{mail.sentAt}</td>
    </React.Fragment>
  )
}
