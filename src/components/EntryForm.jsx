import { useState } from 'react'

function EntryForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title || !description) return

    onAdd({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2>Add New Entry</h2>
      <input
        type="text"
        placeholder="What did you learn today?"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Describe it in more detail..."
        value={description}
        onChange={e => setDescription(e.target.value)}
        rows={3}
      />
      <button type="submit" className="btn-save">
        Save Entry
      </button>
    </form>
  )
}

export default EntryForm