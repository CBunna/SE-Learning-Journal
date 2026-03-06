import { useState } from 'react'
import Header from './components/Header'
import EntryForm from './components/EntryForm'
import EntryList from './components/EntryList'
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
    <div className="app">
      <Header count={entries.length} />

      {error && <div className="error-banner">⚠️ {error}</div>}

      <EntryForm onAdd={handleAdd} />
      <SearchBar query={query} onChange={setQuery} />

      {loading
        ? <p className="loading">Loading entries...</p>
        : <EntryList entries={filteredEntries} onDelete={handleDelete} />
      }
    </div>
  )
}

export default App