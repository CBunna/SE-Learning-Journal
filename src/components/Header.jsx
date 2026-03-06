function Header({ count }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">📓 Learning Journal</h1>
        <p className="header-sub">Tracking my dev journey step by step</p>
      </div>
      <div className="header-badge">
        <span className="badge-number">{count}</span>
        <span className="badge-label">{count === 1 ? 'entry' : 'entries'}</span>
      </div>
    </header>
  )
}

export default Header