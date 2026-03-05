import React from 'react'

const JournalEntry = ({title, date, description}) => {
  return (
    <div style={{
      background: 'white',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '12px',
      borderLeft: '4px solid #2E75B6',
      boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
    }}>
      <p style={{ color: '#888', fontSize: '13px' }}>{date}</p>
      <h3 style={{ margin: '6px 0', color: '#1F3864' }}>{title}</h3>
      <p style={{ color: '#444', fontSize: '15px' }}>{description}</p>
    </div>
  )
}

export default JournalEntry