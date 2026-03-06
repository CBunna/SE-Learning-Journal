import { useState, useEffect } from 'react'

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

function useEntries() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('journal-entries')
    return saved ? JSON.parse(saved) : initialEntries
  })

  // Save to localStorage whenever entries changes
  useEffect(() => {
    localStorage.setItem('journal-entries', JSON.stringify(entries))
  }, [entries])

  function handleAdd(newEntry) {
    setEntries([newEntry, ...entries])
  }

  function handleDelete(id) {
    setEntries(entries.filter(entry => entry.id !== id))
  }

  // Return only what components need
  return { entries, handleAdd, handleDelete }
}

export default useEntries