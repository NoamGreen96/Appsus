import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function EmailFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? (+target.value || '') : target.value
    setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
  }
  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }
  const { title } = filterByToEdit
  console.log(filterByToEdit)

  // return (
  //   <input
  //     value={title}
  //     onChange={handleChange}
  //     type="search"
  //     className="search-input"
  //     placeholder="🔍 Search" />
  // )
}