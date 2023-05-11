import { mailService } from "../services/mail.service.js"
import { EmailPreview } from "./mail-preview.jsx"

const { useState } = React

export function EmailList({ mails, onRemoveEmail }) {
    return (

        <table className="fl-table">
            <tbody>
                {mails.map(mail =>
                    <tr key={mail.id}>
                        <EmailPreview mail={mail}
                            onRemoveEmail={onRemoveEmail} key=
                            {mail.id} />
                    </tr>
                )}
            </tbody>
        </table >
    )
}

