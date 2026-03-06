import {useState, useEffect} from 'react'
import EntryList from './components/EntryList'
import EntryForm from './components/EntryForm'
import SearchBar from './components/SearchBar'
import useEntries from './hooks/useEntries'



function App() {

const { entries, loading, error, handleAdd, handleDelete } = useEntries()
const [query, setQuery] = useState('')


  const filteredEntries = entries.filter(entry =>
    entry.title.toLowerCase().includes(query.toLowerCase()) ||
    entry.description.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div style={{maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#1F3864', marginBottom: '8px' }}>My Learning Journal</h1>
      <p  style={{ color: '#888', marginBottom: '24px' }}>
         {entries.length} {entries.length === 1 ? 'entry' : 'entries'} logged
      </p>

      {error && (
        <div style={{
          background: '#fee', color: '#c33', padding: '12px',
          borderRadius: '6px', marginBottom: '16px'
        }}>
          Error: {error}
        </div>
      )}

      {loading ? (
        <p style={{ textAlign: 'center', color: '#888' }}>Loading entries...</p>
      ) : (
        <>
          <EntryForm onAdd={handleAdd}/>
          <SearchBar query={query} onChange={setQuery} />
          <EntryList entries={filteredEntries} onDelete={handleDelete} />
        </>
      )}
    </div>
  )
}

export default App
