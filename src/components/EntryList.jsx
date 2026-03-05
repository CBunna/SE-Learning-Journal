import JournalEntry from './JournalEntry'

const EntryList = ({entries, onDelete}) => {
    if (entries.length === 0 ) {
        return (
            <p style={{
                color: '#888', textAlign: 'center', padding: '40px' 
            }}>
               No entries yet. Add your first one above! 
            </p>
        )
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