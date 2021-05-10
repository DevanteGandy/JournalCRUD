const express = require('express')
const journal = express.Router()

journal.get('/', (req, res) => {
    res.send('index')
})





module.exports = journal;
