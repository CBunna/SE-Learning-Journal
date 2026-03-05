import {useState} from 'react'
import './App.css'
import EntryList from './components/EntryList'
import EntryForm from './components/EntryForm'
import SearchBar from './components/SearchBar'


const initialEntries = [
    {
    id: 1,
    date: '2026-03-05',
    title: 'Learned React components',
    description: 'Understood how components work and how to pass props between them.'
  },
  {
    id: 2,
    date: '2026-03-05',
    title: 'Practiced JSX syntax',
    description: 'JSX looks like HTML but it is actually JavaScript. Every tag must be closed.'
  },
  {
    id: 3,
    date: '2026-03-05',
    title: 'Tried the .map() method',
    description: 'Used .map() to loop through an array and render a list of components.'
  }

  ]


function App() {

const [entries, setEntries] = useState(initialEntries)
const [query, setQuery] = useState('')
 

function handleAdd(newEntry) {
  setEntries([newEntry, ...entries])
}

function handleDelete(id){
 setEntries(entries.filter(entry => entry.id !== id))
}

const filteredEntries =
  entries.filter(entry =>  
    entry.title.toLowerCase().includes(query.toLowerCase()) ||  entry.description.toLowerCase().includes(query.toLowerCase()))

  return (
    <div style={{maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#1F3864', marginBottom: '8px' }}>My Learning Journal</h1>
      <p  style={{ color: '#888', marginBottom: '24px' }}>
         {entries.length} {entries.length === 1 ? 'entry' : 'entries'} logged
      </p>
      <EntryForm onAdd={handleAdd}/>
      <SearchBar query={query} onChange={setQuery} />
      <EntryList entries={filteredEntries} onDelete={handleDelete} />
    </div>
  )
}

export default App
