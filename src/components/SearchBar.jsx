import React from 'react'

const SearchBar = ({query, onChange}) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="🔍 Search entries..."
        value={query}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%', padding: '10px 14px',
          border: '1px solid #ddd', borderRadius: '6px',
          fontSize: '14px', outline: 'none'
        }}
      />
    </div>
  )
}

export default SearchBar