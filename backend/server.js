const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/backend');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.get('/', function(req, res){

    res.json({
        appName: 'Twitter Clon!'
    });

});

// Routes
const usersRouter = require('./routes/users');
const tweetRouter = require('./routes/tweets');
const loginRouter = require('./routes/login');
const authMiddleWare = require('./routes/authValidator');

app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/tweets', authMiddleWare, tweetRouter);

console.log('Levanto el Backend en el puerto: ' + port);
app.listen(port);