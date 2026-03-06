const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')


const app = express()
const PORT = 3001
const DATA_FILE = path.join(__dirname, 'entries.json')


//------MIDDLEWARE-------------------------------------------------
app.use(cors()) // allow React (port 5173) to call this server
app.use(express.json()) // parse incoming JSON request bodies


// --- HELPER: read and write file
function readEntries() {
    const data = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(data)
}

function writeEntries(entries) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2))

}

// ── ROUTES ──────────────────────────────────────────

// GET /api/entries — return all entries
app.get('/api/entries', (req, res) => {
  const entries = readEntries()
  res.json(entries)
})

// POST /api/entries — add a new entry
app.post('/api/entries', (req, res) => {
  const entries = readEntries()
  const newEntry = {
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
    title: req.body.title,
    description: req.body.description
  }
  entries.unshift(newEntry)       // add to beginning
  writeEntries(entries)
  res.status(201).json(newEntry)  // 201 = Created
})

// DELETE /api/entries/:id — delete one entry
app.delete('/api/entries/:id', (req, res) => {
  const entries = readEntries()
  const id = Number(req.params.id)
  const updated = entries.filter(entry => entry.id !== id)

  if (updated.length === entries.length) {
    return res.status(404).json({ error: 'Entry not found' })
  }

  writeEntries(updated)
  res.status(200).json({ message: 'Deleted successfully' })
})

// ── START SERVER ─────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

// ── HEALTH CHECK ─────────────────────────────────
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})