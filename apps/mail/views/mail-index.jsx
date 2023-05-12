import { EmailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"
import { EmailCompose } from "../cmps/mail-compose.jsx";
import { MailMenu } from "../cmps/mail-menu.jsx";
import { SideNav } from "../cmps/side-nav.jsx";

const { useEffect, useState } = React
const { Link } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState([])
    // const [selectedMail, setSelectedMail] = useState(null)

    useEffect(() => {
        showSuccessMsg('Welcome to mail')
        loadMails()
    })


    function loadMails() {
        mailService.query().then(mail => {
            // console.log(mail)
            return setMails(mail)
        }
        )
    }

    const onSendMail = mail => {
        mailService.saveEmail(mail).then(() => {
            loadMails()
        })
    }

    function onRemoveEmail(mailId) {
        mailService.removeEmail(mailId).then(() => {
            const updateMails = mails.filter(mail => mail.id !== mailId)
            setMails(updateMails)
        })
        setMails(mails);
    }

    // console.log('render')
    return <div className="main-layout">
        <input
            type="search"
            className="search-input"
            placeholder="Search" />
        <SideNav />

        <div>
            <button className="menu-btn">Compose</button><button className="menu-btn"></button><button className="menu-btn"></button>
        </div>


        <EmailList
            mails={mails}
            onRemoveEmail={onRemoveEmail}
        />

        <EmailCompose
            onSendMail={onSendMail}
        />

    </div>
}



