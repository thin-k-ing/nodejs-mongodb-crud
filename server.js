const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/users');
const db = mongoose.connection

db.on('error', function(err) {
    console.error(err);
});

db.once('open', function() {
    console.log('Connected to Database...');
});

app.use(express.json());
app.use(cors());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});