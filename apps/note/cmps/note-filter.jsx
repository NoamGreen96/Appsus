const { useEffect, useState } = React

import { noteService } from '../services/note.service.js'

export function NoteFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  //FILTERS ON TYPE
  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
    onSetFilter({ ...filterByToEdit, [field]: value })
  }

  const { filter } = filterByToEdit

  return (
    <div className="filter-container">
      <label htmlFor="filter"></label>
      <input
        className="filter"
        value={filter}
        onChange={handleChange}
        name="filter"
        id="filter"
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}
