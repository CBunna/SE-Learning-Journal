import JournalEntry from './JournalEntry'

function EntryList({ entries, onDelete }) {
  if (entries.length === 0) {
    return <p className="empty">No entries yet. Add your first one above! 👆</p>
  }

  return (
    <div>
      {entries.map(entry => (
        <JournalEntry
          key={entry.id}
          id={entry.id}
          title={entry.title}
          date={entry.date}
          description={entry.description}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default EntryList