
//DEPENDENCIES
const express = require('express');
// const mongoose = require('mongoose');

//CONFIGGURATION
const app = express();
require('dotenv').config()
const PORT = process.env.PORT





//LISTENER
app.listen(PORT, () => {
    console.log('listening on Port', PORT)
})


