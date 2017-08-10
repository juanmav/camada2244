const express = require('express');

const router = express.Router({ mergeParams: true});
const itemsData = require('../data/items');

router.get('/', function(req, res){

    let userId = req.params.userId;
    let userItems = itemsData.filter(item => item.userId == userId);
    res.status(200).json(userItems);

});

router.get('/:itemId', function (req, res) {
    // Filtrar todos los items de este usuario
    // Despues buscar si el id existe en esos items filtrados.

    let userId = req.params.userId;
    let itemId = req.params.itemId;

    let item = itemsData.find(item => item.id == itemId && item.userId == userId);

    if (item){
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Not Found'})
    }
});


// Homework.
router.post('/', function (req, res) {

    // Verficar que el usuario existe.
    // colocar de manera correcta el userId en el item.

    let ejemplo = {
        "userId": 5,
        "id": 30,
        "title": "a quo magni similique perferendis",
        "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
    }

});

module.exports = router;
