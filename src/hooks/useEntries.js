import { useState, useEffect } from 'react'

const API = 'http://localhost:3001/api/entries'

function useEntries() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // ── LOAD entries from server on first render ──────
  useEffect(() => {
    async function fetchEntries() {
      try {
        setLoading(true)
        const res = await fetch(API)

        if (!res.ok) throw new Error('Failed to load entries')

        const data = await res.json()
        setEntries(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchEntries()
  }, []) // empty [] = run once on mount

  // ── ADD entry ──────────────────────────────────────
  async function handleAdd(newEntry) {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      })

      if (!res.ok) throw new Error('Failed to add entry')

      const saved = await res.json()
      setEntries(prev => [saved, ...prev])
    } catch (err) {
      setError(err.message)
    }
  }


// ── DELETE entry ──────────────────────────────────
  async function handleDelete(id) {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: 'DELETE'
      })

      if (!res.ok) throw new Error('Failed to delete entry')

      setEntries(prev => prev.filter(entry => entry.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  return { entries, loading, error, handleAdd, handleDelete }
}

export default useEntries