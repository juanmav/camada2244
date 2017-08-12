const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let db;

MongoClient.connect('mongodb://localhost:27017/camada2244', function(err, database){
    if (err){
        throw err;
    }
    console.log('ME conecte con exito');

    db = database;
});


app.get('/', function(req, res){

    db.collection('users').find({}).toArray(function (err, users) {
        if (err){
            res.status(503).json({ message: 'Un error al consultar usuarios'})
        } else {
            res.status(200).json(users);
        }
    })

});

app.post('/', function (req, res) {
    let userData = req.body;

    db.collection('users').insertOne(userData, function (err, user) {
        if (err){
            res.status(503).json({ message: 'Error al crear usuario'})
        } else {
            res.status(201).json(user);
        }
    });


});

app.get('/:id', function (req, res) {
    let id = req.params.id;
    let o_id = new ObjectID(id);

    db.collection('users').findOne({ _id: o_id}, function (err, user) {
        if (err){
            res.status(503).json({ message: 'error'});
        } else {
            res.status(200).json(user);
        }
    })
});

app.put('/:id', function (req, res) {
    let id = req.params.id;
    let o_id = new ObjectID(id);
    let userData = req.body;

    delete userData._id;

    db.collection('users').updateOne({ _id: o_id }, { $set: userData}, function(err, result){
        if (err){
            res.status(503).json({ message : 'Un error en el updare'});
        } else {
            res.status(200).json(result);
        }

    });

});

app.delete('/:id', function (req, res) {
    let id = req.params.id;
    let o_id = new ObjectID(id);

    db.collection('users').deleteOne({ _id: o_id}, function (err, user) {
        if (err){
            res.status(503).json({ message: 'error'});
        } else {
            res.status(200).json({ message: 'Usuario borrado id: ' + id});
        }
    })
});

app.listen(8000);

console.log('App express corriendo en 8000');
