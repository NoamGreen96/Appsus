const { useState, useEffect } = React

export function EmailFolderList({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function handleFolderClick(folder) {
    setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, folder }))
    onSetFilter(filterByToEdit)
  }

  const { folder } = filterByToEdit

  return (
    <nav className="side-nav">
      <aside className="aside-bar">
        <button className={`fa-solid fa-inbox ${folder === 'inbox' ? 'active' : ''}`} onClick={() => handleFolderClick('inbox')}>
          Inbox
        </button>
        <button className={`${folder === 'sent' ? 'active' : ''}`} onClick={() => handleFolderClick('sent')}>
          <img className="img-starred" src="../../assets/img/send-icon.png" alt="" />
          Starred
        </button>
        <button className={`fa-solid fa-share-from-square ${folder === 'draft' ? 'active' : ''}`} onClick={() => handleFolderClick('draft')}>
          Draft
        </button>
        <button className={`fa-solid fa-trash ${folder === 'trash' ? 'active' : ''}`} onClick={() => handleFolderClick('trash')} title="Trash">
          Trash
        </button>
      </aside>
    </nav>
  )
}


