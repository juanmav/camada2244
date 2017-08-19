const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/backend');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res){

    res.json({
        appName: 'Twitter Clon!'
    });

});

// Routes
const usersRouter = require('./routes/users');
const tweetRouter = require('./routes/tweets');

app.use('/users', usersRouter);
app.use('/tweets', tweetRouter);

console.log('Levanto el Backend en el puerto: ' + port);
app.listen(port);