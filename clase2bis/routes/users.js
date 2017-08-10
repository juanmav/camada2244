const express = require('express');
const router = express.Router();
const itemsRouter = require('./items');

let userdata = require('../data/userdata.js');
// Ahora estamos parados en users/
// users/

router.use('/:userId/items', itemsRouter);

router.get('/', function (req, res) {
    res.json(userdata);
});

router.get('/:id', function (req, res) {
    let id = req.params.id;
    let user = userdata.find(u => u.id == id);
    res.json(user);
});

router.post('/', function(req, res){
    let newUser = req.body;
    // Valido que el usuario no exista antes de crear.
    let existe = userdata.find( u => u.id == newUser.id);

    if (existe){
        res.status(409).json({ message: 'Ya existe el usuario'})
    } else {
        userdata.push(newUser);
        res.status(201).json(newUser);
    }

});

// Valido que el usuario YA exista antes de crear.
router.put('/:id', function (req, res) {
    let id = req.params.id;

    let existe = userdata.find(u => u.id == id);

    let updatedUser = req.body;

    if (existe){
        userdata = userdata.filter(u => u.id != id);
        userdata.push(updatedUser);
    } else {
        res.status(404).json({
            message: 'No existe el usuario'
        })
    }

});

router.delete('/:id', function (req, res) {
    // No valida que el usuario exista previamente.
    let id = req.params.id;

    let toDelete = userdata.find(u => u.id == id);

    if (toDelete){
        userdata = userdata.filter(u => u.id != id);
        res.json({
            message: 'User deleted: ' + id
        });
    } else {
        res.status(404).json({ message: 'No existe el usuario'})
    }
});

module.exports = router;