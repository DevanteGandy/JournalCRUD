
//DEPENDENCIES
const express = require('express');
// const mongoose = require('mongoose');

//CONFIGGURATION
const app = express();
require('dotenv').config()
const PORT = process.env.PORT

const journalController = require('./controllers/journal_controller.js')
app.use('/journal', journalController)



//LISTENER
app.listen(PORT, () => {
    console.log('listening on Port', PORT)
})
