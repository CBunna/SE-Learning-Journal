import {useState} from 'react'

const EntryForm = ({onAdd}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e){
    e.preventDefault()

    if(!title || !description) return 

    const newEntry = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        title,
        description
    }

    onAdd(newEntry)
    setTitle('')
    setDescription('')
  }

  return (
   <form 
      onSubmit={handleSubmit}
      style={{
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '24px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#1F3864', marginBottom: '16px' }}>Add New Entry</h2>

      <input
        value={title}
        onChange={e => {setTitle(e.target.value)}}
        type="text"
        placeholder="What did you learn today?"
        style={{
          width: '100%', padding: '10px', marginBottom: '12px',
          border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px'
        }}
      />

      <textarea
        value={description}
        onChange={e => {setDescription(e.target.value)}}
        placeholder="Describe it in more detail..."
        rows={3}
        style={{
          width: '100%', padding: '10px', marginBottom: '12px',
          border: '1px solid #ddd', borderRadius: '6px',
          fontSize: '14px', resize: 'vertical'
        }}
      />

      <button type="submit" style={{
        background: '#2E75B6', color: 'white', border: 'none',
        padding: '10px 24px', borderRadius: '6px',
        fontSize: '14px', cursor: 'pointer'
      }}>
        Save Entry
      </button>
    </form>
  )
  
}

export default EntryForm