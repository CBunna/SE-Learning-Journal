function SearchBar({ query, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search entries..."
        value={query}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar