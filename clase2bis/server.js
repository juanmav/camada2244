const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;

const auth = require('./helpers/auth');

// Body parser a Json
app.use(bodyParser.json());
// Url query a req.query.
app.use(bodyParser.urlencoded({ extended: false}));

app.use();

const usersRouter = require('./routes/users');

app.get('/', function (req, res) {

    res.json({
       appName: 'API Camada 2244',
        routes: {
            users : '/users/'
        }
    });

});

app.use('/users', auth, usersRouter);

// app.use('/login', loginRouter); JWT

console.log('Express en el puerto: ' + port);
app.listen(port);
