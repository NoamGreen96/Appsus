import { EmailList } from '../cmps/mail-list.jsx'
import { mailService } from '../services/mail.service.js'
import {
  showSuccessMsg,
  showErrorMsg,
} from '../../../services/event-bus.service.js'
import { EmailCompose } from '../cmps/mail-compose.jsx'
import { MailMenu } from '../cmps/mail-menu.jsx'
import { EmailFolderList } from '../cmps/side-nav.jsx'
import { EmailPreview } from '../cmps/mail-preview.jsx'
import { EmailFilter } from '../cmps/email-filter.jsx'

const { useEffect, useState } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [mails, setMails] = useState([])

  useEffect(() => {
    loadMails()
    setSearchParams(filterBy)
  }, [filterBy])

  function loadMails() {
    mailService.query(filterBy).then(setMails)
  }

  const onToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const onSendMail = (mail) => {
    mailService.saveEmail(mail).then(() => {
      onToggleModal()
      showSuccessMsg('Massage Sent')
      loadMails()
    })
  }

  function onRemoveEmail(mailId) {
    mailService.removeEmail(mailId).then(() => {
      const updateMails = mails.filter((mail) => mail.id !== mailId)
      setMails(updateMails)
      showSuccessMsg('Massage Delete')
    })
    setMails(mails)
  }

  function onSetFilter(filterBy) {
    setFilterBy((prevFilterBy) => ({ ...prevFilterBy, ...filterBy }))
  }

  //   return (
  //     <div className="main-layout">
  //       <EmailCompose
  //         onToggleModal={onToggleModal}
  //         isModalOpen={isModalOpen}
  //         onSendMail={onSendMail}
  //       />
  //       <div className="left-side flex column main-filter">
  //         <MailMenu onToggleModal={onToggleModal} />
  //       </div>
  //       <input type="search" className="search-input" placeholder="🔍 Search" />

  return (
    <div className="main-layout">
      <EmailCompose
        onToggleModal={onToggleModal}
        isModalOpen={isModalOpen}
        onSendMail={onSendMail}
      />
      <div className="left-side flex column main-filter">
        <MailMenu onToggleModal={onToggleModal} />
      </div>

      <EmailFilter onSetFilter={onSetFilter} filterBy={filterBy} />

      <EmailFolderList onSetFilter={onSetFilter} filterBy={filterBy} />

      <EmailList mails={mails} onRemoveEmail={onRemoveEmail} />

      <footer>© All rights reserved.</footer>

      {/* <EmailDetails /> */}
    </div>
  )
}
