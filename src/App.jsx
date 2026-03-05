import React from 'react'
import './App.css'
import JournalEntry from './components/JournalEntry'


function App() {

  const entries = [
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

  return (
    <div style={{maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#1F3864', marginBottom: '8px' }}>My Learning Journal</h1>
      <p  style={{ color: '#888', marginBottom: '24px' }}>Track what you learn every day.</p>

      {
         entries.map(entry => (
          <JournalEntry
            key={entry.id}
            title={entry.title}
            date={entry.date}
            description={entries.description}
          />
         ))
      }
    </div>
  )
}

export default App
