const express = require('express')
const journal = express.Router()
const Entry = require('../models/journal.js')

journal.get('/', (req, res) => {
    Entry.find({}, (err, foundEntry) => {
        res.json(foundEntry)
    })
})

journal.post('/', (req, res) => {
    Entry.create(req.body, (err, createEntry) => {
        Entry.find({}, (err, foundEntry) => {
            res.json(foundEntry)
        })
    })
})

journal.put('/id', (req, res) => {
    Entry.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err, updatedEntry) => {
        if(err) {
            res.send(err)
        } else {
            Entry.find({}, (err, foundEntry) => {
                res.json(foundEntry)
            })
        }
    })
})

journal.delete('/:id', (req, res) => {
    Entry.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
        Entry.find({}, (err, foundEntry) => {
            res.json(foundEntry)
        })
    })
})




module.exports = journal;
