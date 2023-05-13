import { LongTxt } from "../../../cmps/long-txt.jsx";
import { mailService } from "../services/mail.service.js"
import { EmailPreview } from "./mail-preview.jsx"

const { useState } = React

export function EmailList({ mails, onRemoveEmail }) {
    const [openMailId, setOpenMailId] = useState(null);

    const handleCloseMail = () => {
        setOpenMailId(null);
    }

    return (
        <div>
            <table className="mail-list-container">
                <tbody>
                    {mails.map(mail =>
                        <tr className={mail.isRead ? '' : 'unread'} onClick={() => setOpenMailId(mail.id)} key={mail.id}>
                            <td>{mail.from}</td>
                            <td>{mail.subject}</td>
                            <td>
                                <LongTxt txt={mail.body} length={50} />
                            </td>
                            <td>{mail.sentAt}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {openMailId && <div className="email-preview">
                <EmailPreview mail={mails.find(mail => mail.id === openMailId)}
                    onRemoveEmail={onRemoveEmail}
                    onClose={handleCloseMail} />
            </div>}
        </div>
    )
}