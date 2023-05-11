const { Link } = ReactRouterDOM

import { MailPreview } from "./mail-preview.jsx"

export function MailList({ mails }) {
    return (

        <table className="fl-table">

            <tbody>
                {mails.map(mail =>
                    <tr key={mail.id}>
                        <td>{mail.from}</td>
                        <td>{mail.subject}</td>
                        <td>{mail.body}</td>
                        <td>{mail.sentAt}</td>
                    </tr>
                )}
            </tbody>
        </table >

    )

}