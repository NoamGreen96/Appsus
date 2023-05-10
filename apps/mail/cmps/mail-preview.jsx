const { useState } = React


export function MailPreview({ mail }) {
  // console.log(mail)


  return (
    <article className="mail-preview">
      <h2>{mail.from}</h2>
      <h2>{mail.subject}</h2>
      <h2>{mail.body}</h2>
      <h2>{mail.sentAt}</h2>


    </article>)
}