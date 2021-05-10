const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    title: String,
    entry: String,
    date: String
})


const Journal = mongoose.model('Journal', entrySchema)
module.exports = Journal;