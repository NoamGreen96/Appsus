import { MailMainNav } from "../cmps/mail-main-nav.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

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
        mailService.query().then(mail =>
            // console.log(mail)
            setMails(mail)
        )
    }
    // function onSelectBook(book) {
    //     setSelectedBook(book)
    // }


    // console.log('render')
    return <div>
        {/* Main Navigation */}
        <MailMainNav />
        {/* Mails  */}
        <MailList
            // onSelectMail={onSelectMail} 
            mails={mails} />
    </div>
}

