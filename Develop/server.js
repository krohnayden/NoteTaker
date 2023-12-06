//Brings in required packages
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const db = require('./db/db.json')
const PORT = process.env.PORT || 3001
//Allows access to public folder
app.use(express.json())
app.use(express.static('public'))

//Gives unique id's to notes
const { v4: uuidv4 } = require('uuid')

//API Routes
app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err
    let dbData = JSON.parse(data)
    res.json(dbData)
  })
})

app.post('/api/notes', (req, res) => {
  const newNote = req.body

  //Gives each note a random ID
  newNote.id = uuidv4()

  db.push(newNote)
  fs.writeFileSync('./db/db.json', JSON.stringify(db))
  res.json(db)
})

app.delete('/api/notes:id', (req, res) => {
  const newDb = db.filter((note) =>
  note.id !== req.params.id)

  fs.writeFileSync('./db/db.json', JSON.stringify(newDb))
  readFile.json(newDb)
})

// HTML Routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public' , 'index.html'))
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);