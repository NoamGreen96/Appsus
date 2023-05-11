import { MailMainNav } from "../cmps/mail-main-nav.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";
import { NewMail } from "../cmps/add-mail.jsx";
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
        mailService.query().then(mail => {
            // console.log(mail)
            return setMails(mail)
        }
        )
    }
    // function onSelectBook(book) {
    //     setSelectedBook(book)
    // }

    // console.log('render')
    return <div className="main-layout">
        {/* Main Navigation */}
        <MailMainNav />
        {/* newEmail */}

        {/* <button><Link to={NewMail}></Link></button> */}
        {/* <NewMail /> */}
        {/* Mails  */}
        <MailList
            // onSelectMail={onSelectMail} 
            mails={mails} />
    </div>
}

