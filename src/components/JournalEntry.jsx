function JournalEntry({ id, title, date, description, onDelete }) {
  return (
    <div className="entry-card">
      <div>
        <p className="entry-date">{date}</p>
        <h3 className="entry-title">{title}</h3>
        <p className="entry-description">{description}</p>
      </div>
      <button className="btn-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  )
}

export default JournalEntry