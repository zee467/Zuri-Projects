const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/todoRoute');
const url = 'mongodb://localhost/Todo';

const app = express()


mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', function () {
    console.log('connected...');
})

// parse the data and the values to req.body
app.use(express.urlencoded({ extended: false }))

// handle incoming json data 
app.use(express.json());

// base path
app.use("/todo", routes)

app.listen(3000, () => {
    console.log('Server 3000 is listening...');
})