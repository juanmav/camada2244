const express = require('express');
const router = express.Router();
const User = require('../models/user');

/*router.get('/', function (req, res) {
    User
        .find({})
        .then(users => {
           res.status(200).json(users);
        });

});//*/

router.post('/', function(req, res){
    let data = req.body;

    /* TODO validar que en data
        esten todos los datos obligatorios.
     */
    let newUser = new User(data);

    newUser
        .save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch( err => {
            res.status(503).json(err);
        })
});

module.exports = router;