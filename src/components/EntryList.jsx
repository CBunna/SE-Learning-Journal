import JournalEntry from './JournalEntry'

const EntryList = ({entries}) => {
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
        {entries.map(entries => (
            <JournalEntry
                key={entries.id}
                title={entries.title}
                date={entries.date}
                description={entries.description}
            />
        ))}
    </div>
  )
}

export default EntryList