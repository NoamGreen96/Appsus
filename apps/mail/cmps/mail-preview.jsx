const { useState } = React
// Unfunction

export function MailPreview({ mail }) {
  return (
    // <tr>
    //   <td>{mail.from}</td>
    //   <td>{mail.subject}</td>
    //   <td>{mail.body}</td>
    //   <td>{mail.sentAt}</td>
    // </tr>
    <tr>
      <td>{mail.from}</td>
      <td>{mail.subject}</td>
      <td>{mail.body}</td>
      <td>{mail.sentAt}</td>

    </tr>
  )
}