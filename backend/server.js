const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/', function(req, res){

    res.json({
        appName: 'Twitter Clon!'
    });

});

console.log('Levanto el Backend en el puerto: ' + port);
app.listen(port);