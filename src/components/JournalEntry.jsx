import React from 'react'

const JournalEntry = ({title, date, description, onDelete}) => {
  return (
    <div style={{
      background: 'white',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '12px',
      borderLeft: '4px solid #2E75B6',
      boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
    }}>
     <div>
      <p style={{ color: '#888', fontSize: '13px' }}>{date}</p>
      <h3 style={{ margin: '6px 0', color: '#1F3864' }}>{title}</h3>
      <p style={{ color: '#444', fontSize: '15px' }}>{description}</p>
     </div>

        <button
            onClick={() => onDelete(id)}
            style={{
            background: 'none', border: '1px solid #ffcccc',
            color: '#e74c3c', borderRadius: '6px',
            padding: '4px 10px', cursor: 'pointer',
            fontSize: '12px', marginLeft: '12px',
            margin:'10px',
            whiteSpace: 'nowrap'
            }}
        >
        Delete
      </button>
    
    </div>

    
  )
}

export default JournalEntry