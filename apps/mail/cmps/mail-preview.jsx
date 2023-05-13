const { useEffect, useState } = React

export function EmailPreview({ mail, onRemoveEmail, onClose, isOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  function isRead() {
    mail.isRead = true
  }

  function handleDeleteClick() {
    onRemoveEmail(mail.id)
    setIsModalOpen(false)
  }

  useEffect(() => {
    setIsModalOpen(isOpen)
    isRead()
  }, [isOpen])

  if (!mail) {
    return <button className="back-to-btn" onClick={onClose}>Back to Index</button>
  }
  return (
    <div className={`email-preview-container ${isModalOpen ? 'open' : ''}`}>
      <div className="email-preview-header">
        <span>{mail.subject}</span>
        <button className="back-to-btn" onClick={onClose}>Back to Index</button>
      </div>
      <div className="email-preview-body">
        <div>From: {mail.from}</div>
        <br />
        <div>{mail.body}</div>
      </div>
      <div className="email-preview-footer">
        <button className="delete-btn-modal" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}
