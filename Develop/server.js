//Brings in express
const express = require('express');
const app = express();
const path = require('path');

//Gives unique id's to notes
const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

app.get('/api/notes', (req, res) => {

})

app.post('/api/notes', (req, res) => {

})

app.delete('/api/notes', (req, res) => {

})

